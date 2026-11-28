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

Deno.serve(async request => {
  if (request.headers.get("Origin") !== origin) return reply(403, "Origen no autorizado.");
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
  if (request.method !== "POST") return reply(405, "Método no permitido.");
  try {
    const raw = await request.text();
    if (raw.length > 4096) return reply(400, mismatch);
    const { token, name, email, phone, country, password } = JSON.parse(raw);
    if (typeof token !== "string" || !/^[a-f0-9]{64}$/.test(token)) return reply(401, mismatch);
    const [profile, identity] = await Promise.all([clubRpc("profile_details", token), clubRpc("identity_status", token)]);
    if (!profile || !identity?.complete || !profile.phone || !profile.email) return reply(403, mismatch);
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
