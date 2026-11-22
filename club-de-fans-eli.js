(() => {
const root=document.querySelector('#club-eli');
if(!root)return;
const get=id=>root.querySelector('#'+id);
const key='sb_publishable_d3KzzBG8sXIz_p9YJ1jR4A_2x6xbKJb';
const base='https://zhqgtbbcnycsieqzbpro.supabase.co';
let token='',card,requestId;
const rewards={decoracion:'Decoración en dos uñas',detalle:'Detalle de 3 sellos',descuento:'5 % de descuento',final:'Decoración especial en dos uñas'};
const milestones={1:'Acceso anticipado a turnos',3:'Detalle en uñas, pestañas o cabello',6:'5 % de descuento',9:'Decoración especial en dos uñas'};
const catalog=[
['unas','Uñas',[['Semipermanente uñas cortas',350],['Semipermanente uñas largas',500],['Semipermanente en pies',500],['Pedicura + Gelish',800],['Acrílicas #1 al #3',1500],['Acrílicas #4 al #6',1800],['Acrílicas #7 al #9',2000],['Acrílicas XXL',2500],['Acripie',1000]]],
['pestanas','Pestañas',[['Lifting',2800],['Retiro',600],['Efecto Clásico',2000],['Efecto Rímel',3000],['Efecto 2D',3600],['Efecto 3D',4000],['Efecto 4D',4600],['Efecto 5D',5000],['Wispy',4800]]],
['cejas','Cejas',[['Laminado de Cejas',2000],['Tinte Henna',1800],['Laminado + Tinte',3800],['Perfilación con Cera',600],['Perfilación sin Cera',300]]],
['depilacion','Depilación',[['Axila Femenina',500],['Axila Masculina',700],['Bozo y Barbilla',500],['Bozo y Barbilla Masculina',1000]]],
['decoraciones','Decoraciones',[['Ojo de Gato',500],['Cromado',500],['Gel de Construcción',250],['Relieve',250],['Flores y Piedrería',300]]],
['peluqueria','Cabello',[['Lavado, Secado y Planchado',800],['Solo Planchado',200],['Lavado',200]]],
['podologia','Podología',[['Servicio Completo',700]]]];
const prices=new Map();
for(const [id,label,items] of catalog){
 const group=document.createElement('optgroup');group.label=label;
 for(const [name,price] of items){const value=id+'|'+name;prices.set(value,price);group.append(new Option(name,value));}
 get('fan-service').append(group);
}
async function api(path,body,access){
 const headers={apikey:key,'Content-Type':'application/json'};
 if(access)headers.Authorization='Bearer '+access;
 const response=await fetch(base+path,{method:'POST',headers,body:JSON.stringify(body),signal:AbortSignal.timeout(15000)});
 const data=await response.json();
 if(!response.ok)throw Error(data.message||data.msg||data.error_description||'No se pudo completar la operación.');
 return data;
}
const rpc=(name,body,access)=>api('/rest/v1/rpc/club_'+name,body,access);
const say=(message,id='fan-status')=>{get(id).textContent=message;};
function submit(id,action,status='fan-status'){
 get(id).addEventListener('submit',async event=>{
  event.preventDefault();const form=event.currentTarget;
  if(form.dataset.busy)return;
  form.dataset.busy='true';
  const buttons=[...form.querySelectorAll('button')];
  buttons.forEach(button=>button.disabled=true);say('Un momento…',status);
  try{await action(form.elements);}catch(error){say(error.message,status);}
  finally{delete form.dataset.busy;buttons.forEach(button=>button.disabled=false);}
 });
}
function refreshPrices(){
 const select=get('fan-service'),price=prices.get(select.value),options=get('fan-reward'),prior=options.value;
 const category=select.value.split('|')[0];
 options.replaceChildren(new Option('Ninguno',''));
 const available={decoracion:category==='unas'&&card?.decoration,detalle:['unas','pestanas','peluqueria'].includes(category)&&card?.detail_rewards,descuento:category&&card?.discount,final:category==='unas'&&card?.final_rewards};
 for(const [name,label] of Object.entries(rewards))if(available[name]>0)options.add(new Option(label,name));
 if([...options.options].some(option=>option.value===prior))options.value=prior;
 say(price===undefined?'':'Precio '+price.toFixed(2)+' CUP · Descuento por reserva '+(price*.05).toFixed(2)+' CUP · Total '+(price*.95).toFixed(2)+' CUP','fan-price');
}
function show(data,value){
 if(!data)throw Error('No encontramos una tarjeta con ese código.');
 card=data;token=value;
 try{localStorage.setItem('eddeli.club.card',value);}catch{}
 get('fan-identify').hidden=true;get('fan-member').hidden=false;
 say(data.name+' · Socia n.º '+data.id,'fan-name');
 const total=data.stamps9??data.stamps;
 say(total+' de 9 sellos'+(total===9?' · Tarjeta completa':''),'fan-progress');
 get('fan-stamps').replaceChildren(...Array.from({length:9},(_,index)=>{
  const item=document.createElement('li'),stamp=document.createElement('b'),label=document.createElement('span');
  const visit=data.stamp_visits?.[index];
  stamp.textContent=index<total?'✓':String(index+1);
  item.classList.toggle('fan-earned',index<total);
  const next=Object.keys(milestones).map(Number).find(n=>n>index+1);
  label.textContent=milestones[index+1]||'Hacia '+milestones[next].toLowerCase();
  if(visit){const service=document.createElement('small');service.textContent=visit.detail||catalog.find(row=>row[0]===visit.service)?.[1]||'Visita confirmada';item.append(stamp,service,label);}
  else item.append(stamp,label);
  return item;
 }));
 const counts=[['decoracion',data.decoration],['detalle',data.detail_rewards],['descuento',data.discount],['final',data.final_rewards]];
 const available=counts.filter(pair=>pair[1]>0).map(([code,count])=>rewards[code]+' × '+count);
 say(available.join(' · ')||'Todavía no tienes premios disponibles.','fan-benefits');
 get('fan-private').value=value;refreshPrices();loadPhoto(value);say('Tarjeta actualizada.');
}
async function load(value){show(await rpc('card',{p_token:value}),value);}
const recoveryCode = get('fan-recover').elements.code;
recoveryCode.removeAttribute('pattern');
recoveryCode.removeAttribute('maxlength');
submit('fan-recover', fields => {
 const code = fields.code.value.replace(/\s/g, '').toLowerCase();
 if (!/^[0-9a-f]{64}$/.test(code)) {
  throw Error('Pega el código privado de 64 caracteres que guardaste desde tu tarjeta. Si tienes una invitación, abre «Tengo una invitación».');
 }
 return load(code);
});
const invitationInput=get('fan-join').elements.invite;
invitationInput.removeAttribute('pattern');
invitationInput.removeAttribute('maxlength');
invitationInput.placeholder='Pega el enlace o el código de invitación';
function parseInvitation(value) {
 const raw=value.trim();
 const match=raw.match(/^(?:https:\/\/[^\s#]+#(?:inscripcion-club|invita-club-eli)=)?([0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12})$/i);
 return match?.[1].toLowerCase();
}
submit('fan-join',async fields=>{
 const invitation=parseInvitation(fields.invite.value);
 if(!invitation)throw Error('Pega el enlace de invitación completo que te envió el salón o copia el código que aparece al final del enlace.');
 const pending='eddeli.club.pending.'+invitation;
 let secret=localStorage.getItem(pending);
 if(!secret){secret=Array.from(crypto.getRandomValues(new Uint8Array(32)),b=>b.toString(16).padStart(2,'0')).join('');localStorage.setItem(pending,secret);}
 show(await rpc('join',{p_invitation:invitation,p_name:fields.name.value.trim(),p_token:secret}),secret);
 localStorage.removeItem(pending);fields.invite.value='';
});
get('fan-refresh').onclick=()=>load(token).catch(error=>say(error.message));
get('fan-signout').onclick=()=>{
 token='';card=null;requestId=undefined;profileRevision++;displayPhoto(null);photoForm.reset();localStorage.removeItem('eddeli.club.card');
 get('fan-member').hidden=true;get('fan-identify').hidden=false;
 get('fan-private').value='';clearPostal();say('');
};
get('fan-service').onchange=refreshPrices;
get('fan-request').oninput=()=>{requestId=undefined;clearPostal();};
submit('fan-request',async fields=>{
 const value=fields.service.value,price=prices.get(value);
 if(!profileReady)throw Error('Completa tu perfil con foto antes de solicitar una cita.');
 if(!card||price===undefined)throw Error('Elige un servicio.');
 requestId ||= crypto.randomUUID();
 const preference=fields.preference.value.trim(),reward=fields.reward.value,socia=card;
 const requestCardToken=token;

 const preparedId=requestId;
 clearPostal();
 let file;
 try { file=await makePostal(socia,value.split('|')[1],preference,reward,price,avatar.src); }
 catch { throw Error('No pudimos crear el carné. Vuelve a preparar la solicitud.'); }
 if(token!==requestCardToken||requestId!==preparedId)return;
 await rpc('request_visit',{p_token:requestCardToken,p_id:preparedId,p_service:value,p_preference:preference,p_reward:reward||null});
 if(token!==requestCardToken||requestId!==preparedId)return;
 postalFile=file;postalUrl=URL.createObjectURL(file);
 preview.src=postalUrl;postal.hidden=false;
 say('');
});
let session='';
async function staffLists(){
 const access=session;
 const [members,requests]=await Promise.all([rpc('staff_members',{},access),rpc('staff_requests',{},access)]);
 if(access!==session)return;
 say(members.length+' socias registradas','fan-count');
 get('fan-members').replaceChildren(...members.map(member=>{
  const row=document.createElement('li');const next=Object.keys(milestones).map(Number).find(n=>n>member.stamps);
  row.textContent=member.name+' · Socia '+member.id+' · '+member.stamps+'/9'+(next-member.stamps===1?' · A 1 sello del próximo premio':'');return row;
 }));
 get('fan-requests').replaceChildren(...requests.map(request=>{
  const row=document.createElement('li'),button=document.createElement('button');
  row.textContent=request.name+' · Socia '+request.member+' · '+request.service.split('|')[1]+(request.preference?' · '+request.preference:'')+(request.reward?' · Solicita '+rewards[request.reward]:'');
  button.type='button';button.textContent='Cargar solicitud';button.onclick=()=>{
   const fields=get('fan-visit').elements;fields.member.value=request.member;fields.reference.value='club-'+request.id;fields.service.value=request.service;fields.reward.value='';fields.service.focus();
  };
  row.append(button,profileButton(request.member));return row;
 }));
 say(requests.length?requests.length+' solicitudes pendientes':'No hay solicitudes pendientes.','fan-request-count');
}
submit('fan-login',async fields=>{
 const login=await api('/auth/v1/token?grant_type=password',{email:fields.email.value.trim(),password:fields.password.value});
 fields.password.value='';
 if(await rpc('is_staff',{},login.access_token)!==true)throw Error('Acceso reservado al equipo del club.');
 session=login.access_token;get('fan-login').hidden=true;get('fan-staff').hidden=false;
 await staffLists();say('Sesión iniciada.','fan-admin-status');
},'fan-admin-status');
get('fan-exit').onclick=()=>{
 session='';get('fan-staff').hidden=true;get('fan-login').hidden=false;
 get('fan-members').replaceChildren();get('fan-requests').replaceChildren();get('fan-invite-url').value='';get('fan-visit').reset();say('Sesión cerrada.','fan-admin-status');
};
get('fan-staff-refresh').onclick=()=>staffLists().catch(error=>say(error.message,'fan-admin-status'));
get('fan-invite').onclick=async event=>{
 const button=event.currentTarget;button.disabled=true;const access=session;
 try{
  const invitation=await rpc('invite',{},access);
  if(access!==session)return;
  const link=new URL(location.pathname,location.origin);link.hash='inscripcion-club='+invitation;
  get('fan-invite-url').value=link.href;get('fan-invite-url').select();say('Invitación lista. Copia el enlace para compartirlo.','fan-admin-status');
 }catch(error){say(error.message,'fan-admin-status');}finally{button.disabled=false;}
};
const staffService=get('fan-visit').elements.service;
staffService.replaceChildren(...Array.from(get('fan-service').children).map(option=>option.cloneNode(true)));
for(const [value,label] of Object.entries(rewards))get('fan-visit').elements.reward.add(new Option(label,value));
submit('fan-visit',async fields=>{
 const result=await rpc('record_visit',{p_member:fields.member.value,p_reference:fields.reference.value,p_service:fields.service.value,p_reward:fields.reward.value||null},session);
 fields.reference.value='';fields.reward.value='';
 say('Visita registrada para '+result.name+' · '+result.stamps9+'/9 sellos.','fan-admin-status');
 try{await staffLists();}catch{say('Visita registrada. Actualiza los listados para ver el cambio.','fan-admin-status');}
},'fan-admin-status');

const profile = document.createElement('section');
profile.innerHTML = '<h3>Mi perfil de socia</h3><p>Sube una foto reciente de tu rostro en la que se te vea bien. El salón la usa para reconocer a la titular cuando llega a una cita y evitar que alguien use su tarjeta haciéndose pasar por ella. Tu foto queda en tu tarjeta y la puede consultar el personal autorizado. Tú decides si la adjuntas a tu mensaje de WhatsApp.</p><img alt="Foto de perfil de la socia" width="88" height="88" hidden><form><label>Tu foto de perfil<input type="file" accept="image/*" required></label><button>Guardar mi perfil</button></form><p role="status"></p>';
get('fan-name').after(profile);
const photoForm = profile.querySelector('form');
const photoStatus = profile.querySelector('[role=status]');
const avatar = profile.querySelector('img');
avatar.style.cssText = 'object-fit:cover;border-radius:50%;border:2px solid #b887a2';
const appointment = get('fan-request').closest('details');
const postal = document.createElement('div');
postal.hidden = true;
const preview = document.createElement('img');
preview.alt = 'Vista previa del carné de la cita';
preview.style.cssText = 'display:block;width:min(100%,360px);height:auto;margin:.75rem 0;border-radius:12px';
const share = document.createElement('button');
share.type = 'button';
share.textContent = 'Enviar';
const help = document.createElement('p');
help.textContent = 'Elige WhatsApp y selecciona el chat del salón (+53 5065 5825).';
postal.append(preview,share,help);
get('fan-wa').after(postal);
let postalFile;
let postalUrl;
function clearPostal(){
 if(postalUrl)URL.revokeObjectURL(postalUrl);
 postalUrl=undefined;postalFile=undefined;postal.hidden=true;preview.removeAttribute('src');
}
share.onclick=async()=>{
 if(!postalFile)return;
 const data={files:[postalFile]};
 if(!navigator.canShare?.(data)){
  say('Abre EDDELI desde un teléfono que permita compartir imágenes con WhatsApp.');
  return;
 }
 try{await navigator.share(data);}
 catch(error){if(error.name!=='AbortError')say('No pudimos compartir el carné. Vuelve a pulsar Enviar.');}
};
async function makePostal(socia,service,preference,reward,price,photo){
 const image=new Image();
 image.src=photo;
 await image.decode();
 const canvas=document.createElement('canvas');
 canvas.width=760;canvas.height=900;
 const ctx=canvas.getContext('2d');
 ctx.fillStyle='#fff1f6';ctx.fillRect(0,0,760,900);
 ctx.fillStyle='#74284e';ctx.fillRect(0,0,760,210);
 ctx.fillStyle='#fff4f9';ctx.font='bold 42px Georgia';ctx.fillText('Club de Fans ELI',48,85);
 ctx.font='27px sans-serif';ctx.fillText('Solicitud de cita',48,135);
 ctx.save();ctx.beginPath();ctx.arc(125,225,68,0,Math.PI*2);ctx.clip();ctx.drawImage(image,57,157,136,136);ctx.restore();
 let y=245;
 function line(value,font,color,x=48,width=664){
  ctx.font=font;ctx.fillStyle=color;
  let row='';
  for(const word of String(value).split(/\s+/)){
   let part=word;
   while(ctx.measureText(part).width>width){
    let cut=part.length-1;while(ctx.measureText(part.slice(0,cut)).width>width)cut--;
    if(row){ctx.fillText(row,x,y);y+=34;row='';}
    ctx.fillText(part.slice(0,cut),x,y);y+=34;part=part.slice(cut);
   }
   const candidate=row?row+' '+part:part;
   if(row&&ctx.measureText(candidate).width>width){ctx.fillText(row,x,y);y+=34;row=part;}
   else row=candidate;
  }
  if(row){ctx.fillText(row,x,y);y+=34;}
 }
 line(socia.name,'bold 28px sans-serif','#542744',210,500);
 line('Socia n.º '+socia.id,'24px sans-serif','#694356',210,500);
 y=Math.max(y+38,338);
 line('Servicio: '+service,'bold 30px sans-serif','#542744');
 if(preference)line('Turno preferido: '+preference,'26px sans-serif','#41213c');
 if(reward)line('Premio solicitado: '+rewards[reward],'26px sans-serif','#41213c');
 y+=24;
 line('Precio original: '+price.toFixed(2)+' CUP','27px sans-serif','#41213c');
 line('Descuento por reserva (5 %): '+(price*.05).toFixed(2)+' CUP','27px sans-serif','#41213c');
 line('Total de la reserva: '+(price*.95).toFixed(2)+' CUP','bold 30px sans-serif','#74284e');
 y+=22;line('Turno pendiente de confirmación por el salón.','23px sans-serif','#694356');
 const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/jpeg',.92));
 if(!blob)throw Error('No se pudo crear el carné.');
 return new File([blob],'Club-ELI-cita.jpg',{type:'image/jpeg'});
}
let profileReady = false;
let profileRevision = 0;
function displayPhoto(photo) {
 profileReady = Boolean(photo);
 avatar.hidden = !photo;
 photoForm.hidden = Boolean(photo);
 appointment.hidden = !photo;
 if (photo) avatar.src = photo;
 else avatar.removeAttribute('src');
}
async function loadPhoto(value) {
 const revision = ++profileRevision;
 displayPhoto(null);
 photoForm.hidden = true;
 photoStatus.textContent = 'Cargando tu perfil…';
 try {
  const photo = await rpc('member_profile',{p_token:value});
  if (revision !== profileRevision || token !== value) return;
  displayPhoto(photo);
  photoStatus.textContent = photo ? '' : 'Completa tu perfil para pedir citas desde tu tarjeta.';
 } catch {
  if (revision === profileRevision && token === value) photoStatus.textContent = 'No pudimos cargar tu perfil. Pulsa Actualizar sellos para volver a intentar.';
 }
}
photoForm.addEventListener('submit',async event => {
 event.preventDefault();
 const file = photoForm.querySelector('input').files[0];
 const button = photoForm.querySelector('button');
 const value = token;
 if (!file || !value || button.disabled) return;
 button.disabled = true;
 photoStatus.textContent = 'Guardando tu foto…';
 try {
  if (file.size > 20 * 1024 * 1024) throw Error('Elige una foto de menos de 20 MB.');
  const source = URL.createObjectURL(file);
  const image = new Image();
  try { image.src = source; await image.decode(); }
  finally { URL.revokeObjectURL(source); }
  const canvas = document.createElement('canvas');
  const side = Math.min(image.naturalWidth,image.naturalHeight);
  canvas.width = canvas.height = 320;
  canvas.getContext('2d').drawImage(image,(image.naturalWidth-side)/2,(image.naturalHeight-side)/2,side,side,0,0,320,320);
  if (token !== value) return;
  const photo = await rpc('member_profile',{p_token:value,p_photo:canvas.toDataURL('image/jpeg',.76)});
  if (token !== value) return;
  displayPhoto(photo);
  photoStatus.textContent = 'Perfil guardado.';
  photoForm.reset();
 } catch(error) { if(token === value) photoStatus.textContent = error.message || 'Elige una foto que se pueda abrir.'; }
 finally { button.disabled = false; }
});
function profileButton(id) {
 const button = document.createElement('button');
 button.type = 'button';
 button.textContent = 'Ver foto de socia';
 button.onclick = async () => {
  const access = session;
  button.disabled = true;
  try {
   const photo = await rpc('staff_profile',{p_member:id},access);
   if (access !== session || !button.isConnected) return;
   if (!photo) { say('La socia todavía no ha guardado su foto.','fan-admin-status'); return; }
   const image = document.createElement('img');
   image.alt = 'Foto de perfil de la socia '+id;
   image.width = image.height = 88;
   image.style.cssText = 'display:block;object-fit:cover;border-radius:50%';
   image.src = photo;
   button.replaceWith(image);
  } catch(error) { if(access === session) say(error.message,'fan-admin-status'); }
  finally { button.disabled = false; }
 };
 return button;
}
function invitationEntry(){
 const hash=location.hash.match(/^#inscripcion-club=([0-9a-f-]{36})$/i);
 if(!hash||typeof window.go!=='function')return false;
 window.go('club-eli');get('fan-identify').hidden=false;get('fan-join').parentElement.open=true;
 get('fan-join').elements.invite.value=hash[1];history.replaceState(null,'',location.pathname+location.search);return true;
}
if(!invitationEntry()){
 try{const saved=localStorage.getItem('eddeli.club.card');if(saved)load(saved).catch(error=>say(error.message));}catch{}
}
})();