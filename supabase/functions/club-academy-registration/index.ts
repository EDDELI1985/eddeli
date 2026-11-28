const origin = "https://eddeli1985.github.io";
const cors = {
  "Access-Control-Allow-Origin": origin,
  "Access-Control-Allow-Headers": "content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Cache-Control": "no-store",
  "Vary": "Origin",
};
const mismatch = "Tus datos deben coincidir con los de tu perfil del Club de Fans ELI. Revisa tu perfil antes de continuar.";
const academyKey = "sb_publishable_2ZgoXcKwdlpE7RsAj98zbw_7eVCNVCf";
const academySignup = new URL("https://ywkqfmxtceyktovyzhbt.supabase.co/auth/v1/signup");
academySignup.searchParams.set("redirect_to", origin + "/eddeli/");

function reply(status: number, message?: string) {
  return Response.json(message ? { message } : { ok: true }, { status, headers: cors });
}

async function clubRpc(name: string, token: string) {
  const key = Deno.env.get("SUPABASE_ANON_KEY")!;
  const response = await fetch(Deno.env.get("SUPABASE_URL") + "/rest/v1/rpc/club_" + name, {
    method: "POST",
    headers: { apikey: key, "Content-Type": "application/json" },
    body: JSON.stringify({ p_token: token }),
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error("No se pudo verificar la cuenta del Club.");
  return response.json();
}

async function readAcademyStatus(profile: { member: number; name: string; email: string; phone: string }) {
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!serviceKey) throw new Error("Estado no disponible.");
  const secretResponse = await fetch(Deno.env.get("SUPABASE_URL") + "/rest/v1/rpc/club_academy_bridge_key", {
    method: "POST",
    headers: { apikey: serviceKey, Authorization: "Bearer " + serviceKey, "Content-Type": "application/json" },
    body: "{}",
    signal: AbortSignal.timeout(8000),
  });
  if (!secretResponse.ok) throw new Error("Estado no disponible.");
  const secret = await secretResponse.json();
  if (typeof secret !== "string" || !/^[a-f0-9]{64}$/.test(secret)) throw new Error("Estado no disponible.");
  const bytes = Uint8Array.from(secret.match(/../g)!, part => parseInt(part, 16));
  const key = await crypto.subtle.importKey("raw", bytes, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const payload = JSON.stringify({
    member: profile.member, name: profile.name, email: profile.email, phone: profile.phone, timestamp: Math.floor(Date.now() / 1000),
  });
  const signed = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  const signature = Array.from(new Uint8Array(signed), byte => byte.toString(16).padStart(2, "0")).join("");
  const response = await fetch(new URL("/rest/v1/rpc/club_academy_status", academySignup), {
    method: "POST",
    headers: { apikey: academyKey, "Content-Type": "application/json" },
    body: JSON.stringify({ p_payload: payload, p_signature: signature }),
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error("Estado no disponible.");
  const state = await response.json();
  if (!["confirm_email", "approved", "pending", "not_registered"].includes(state)) throw new Error("Estado no disponible.");
  return Response.json({ state }, { headers: cors });
}

Deno.serve(async request => {
  if (request.headers.get("Origin") !== origin) return reply(403, "Origen no autorizado.");
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
  if (request.method !== "POST") return reply(405, "Método no permitido.");
  try {
    const raw = await request.text();
    if (raw.length > 4096) return reply(400, mismatch);
    const { token, name, email, phone, country, password, action } = JSON.parse(raw);
    if (typeof token !== "string" || !/^[a-f0-9]{64}$/.test(token)) return reply(401, mismatch);
    const [profile, identity] = await Promise.all([clubRpc("profile_details", token), clubRpc("identity_status", token)]);
    if (!profile) return reply(403, mismatch);
    if (action === "status") {
      try {
        return await readAcademyStatus(profile);
      } catch {
        return reply(503, "No pudimos consultar el estado de tu solicitud. Inténtalo de nuevo.");
      }
    }
    if (!identity?.complete || !profile.phone || !profile.email) return reply(403, mismatch);
    if (name !== profile.name || email !== profile.email || phone !== profile.phone) return reply(409, mismatch);
    if (typeof country !== "string" || country.trim().length > 80) return reply(400, "Revisa el país.");
    if (typeof password !== "string" || password.length < 12 || new TextEncoder().encode(password).length > 72 ||
        !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[^A-Za-z0-9]/.test(password)) {
      return reply(400, "Usa al menos 12 caracteres, una mayúscula, una minúscula, un número y un símbolo. La contraseña admite hasta 72 bytes.");
    }
    const signup = await fetch(academySignup, {
      method: "POST",
      headers: { apikey: academyKey, "Content-Type": "application/json" },
      body: JSON.stringify({
        email: profile.email,
        password,
        data: { full_name: profile.name, phone: profile.phone, country: country.trim() },
      }),
      signal: AbortSignal.timeout(15000),
    });
    if (!signup.ok) {
      const error = await signup.json().catch(() => null);
      return reply(signup.status, error?.msg || error?.message || "La Academia no pudo registrar la solicitud.");
    }
    return reply(200);
  } catch {
    return reply(400, "No se pudo verificar la inscripción. Inténtalo de nuevo.");
  }
});
