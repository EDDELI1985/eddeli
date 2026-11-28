(() => {
const root=document.querySelector('#club-eli');
if(!root)return;
const get=id=>root.querySelector('#'+id);
const adminPanel=get('fan-admin-access');
adminPanel.hidden=false;
let staffLoginRevision=0;
window.openClubAdministration=()=>{
 if(typeof currentProfile==='undefined'||currentProfile?.role!=='admin'||currentProfile.approval_status!=='approved'||typeof currentUser==='undefined'||!currentUser?.email_confirmed_at) return;
 if(!window.go('club-eli')||!root.classList.contains('active')) return;
 root.classList.add('fan-admin-mode');
 adminPanel.hidden=false;
 adminPanel.open=true;
 adminPanel.querySelector('summary').focus({preventScroll:true});
};
new MutationObserver(()=>{
 if(root.classList.contains('active')) return;
 if(!adminPanel.open&&!session&&!get('fan-login').dataset.busy)return;
 closeStaffSession();
 adminPanel.open=false;
 root.classList.remove('fan-admin-mode');
}).observe(root,{attributes:true,attributeFilter:['class']});
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
 get(id)?.addEventListener('submit',async event=>{
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
 stampCells.forEach((cell,index)=>{
  const earned = index < total;
  cell.classList.toggle('fan-earned',earned);
  cell.textContent = earned ? '✓' : String(index+1);
  cell.setAttribute('aria-label','Sello '+(index+1)+(earned?' confirmado':' pendiente'));
 });
 say(total+' de 9 sellos'+(total===9?' · Tarjeta completa':''),'fan-progress');
 renderDetailedCard(data,total);
 const counts=[['decoracion',data.decoration],['detalle',data.detail_rewards],['descuento',data.discount],['final',data.final_rewards]];
 const available=counts.filter(pair=>pair[1]>0).map(([code,count])=>rewards[code]+' × '+count);
 const benefits = available.join(' · ')||'Todavía no tienes premios disponibles.';
 say(benefits,'fan-benefits');
 cardBenefits.textContent = total >= 1 ? 'Acceso anticipado a turnos. ' + benefits : benefits;
 vipBenefits.textContent = cardBenefits.textContent;
 get('fan-private').value='';refreshPrices();loadPhoto(value);say('Tarjeta actualizada.');
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
 if(!fields.photo)throw Error('Recarga EDDELI para abrir el formulario actualizado.');
 const photo=await prepareProfilePhoto(fields.photo.files[0]);
 const pending='eddeli.club.pending.'+invitation;
 let secret=localStorage.getItem(pending);
 if(!secret){secret=Array.from(crypto.getRandomValues(new Uint8Array(32)),b=>b.toString(16).padStart(2,'0')).join('');localStorage.setItem(pending,secret);}
 show(await rpc('join_with_profile',{p_invitation:invitation,p_given:fields.given.value,p_family:fields.family.value,p_token:secret,p_photo:photo}),secret);
 localStorage.removeItem(pending);fields.invite.form.reset();
});
submit('fan-password-login',async fields=>{
 const value=await rpc('login_password',{p_member:fields.member.value,p_password:fields.password.value});
 fields.password.value='';
 if(!value)throw Error('Revisa el número de socia y la contraseña. Si has hecho varios intentos, espera 15 minutos.');
 await load(value);
});
let resetCredentials;
submit('fan-password-reset',async fields=>{
 if(!resetCredentials)throw Error('El enlace ya no está disponible.');
 if(fields.password.value!==fields.confirm.value)throw Error('Las contraseñas deben coincidir.');
 await rpc('reset_password',{...resetCredentials,p_password:fields.password.value});
 resetCredentials=null;
 fields.password.form.reset();
 get('fan-password-reset').hidden=true;
 say('Contraseña guardada. Ya puedes entrar con tu número de socia.');
});
get('fan-refresh').onclick=()=>load(token).catch(error=>say(error.message));
get('fan-signout').onclick=()=>{
 openMemberView('menu',false);
 contact.reset();
 contact.elements.photo.onchange();
 createPassword.reset();
 recovery.open=false;
 revealCode.textContent='Mostrar código';
 recoveryCodeField.type='password';
 inspirationStatus.textContent = '';
 quizResult.textContent = '';
 pollStatus.textContent = '';
 selectedCardStamp=null;
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
 const preference=fields.preference.value.trim(),reward=fields.reward.value;
 const requestCardToken=token;

 const preparedId=requestId;
 clearPostal();
 const saved=await rpc('request_verified',{p_token:requestCardToken,p_id:preparedId,p_service:value,p_preference:preference,p_reward:reward||null});
 if(token!==requestCardToken||requestId!==preparedId)return;
 let file;
 try {
  file=await makePostal({name:saved.name,id:saved.member},saved.service.split('|')[1],saved.preference,saved.reward,saved.price,saved.photo);
 } catch { throw Error('La solicitud quedó registrada. Pulsa Preparar solicitud para volver a generar el carnet.'); }
 if(token!==requestCardToken||requestId!==preparedId)return;
 postalFile=new File([file],'Club-ELI-cita-'+saved.reference+'.jpg',{type:file.type});
 postalReference.textContent='Referencia del carnet: '+saved.reference;
 postalUrl=URL.createObjectURL(postalFile);
 preview.src=postalUrl;postal.hidden=false;
 say('');
});
let session='';
let requestsForStaff=[];
let visibleRequestId;
function renderStaffRequest(){
 const list=get('fan-requests');
 const total=requestsForStaff.length;
 if(!total){list.replaceChildren();say('No hay solicitudes pendientes.','fan-request-count');return;}
 const position=Math.max(0,requestsForStaff.findIndex(request=>request.id===visibleRequestId));
 const request=requestsForStaff[position];
 const row=document.createElement('li');
 const heading=document.createElement('strong');
 heading.textContent=request.name+' · Socia '+request.member;
 const service=document.createElement('p');
 service.textContent='Servicio: '+(request.service.split('|')[1]||request.service);
 row.append(heading,service);
 if(request.preference||request.reward){
  const details=document.createElement('p');
  details.textContent=[request.preference&&'Turno preferido: '+request.preference,request.reward&&'Premio solicitado: '+(rewards[request.reward]||request.reward)].filter(Boolean).join(' · ');
  row.append(details);
 }
 const loadButton=document.createElement('button');
 loadButton.type='button';loadButton.textContent='Cargar solicitud';
 loadButton.onclick=()=>{
  const fields=get('fan-visit').elements;
  fields.member.value=request.member;fields.reference.value='club-'+request.id;
  fields.service.value=request.service;fields.reward.value='';
  say('Solicitud cargada: '+request.name+' · Socia '+request.member,'fan-admin-status');
  fields.service.focus();
 };
 row.append(loadButton,document.createTextNode(' '),profileButton(request.member),clubButton('Verificar carnet',()=>{
  if(!get('fan-verify'))return;
  get('fan-verify').elements.reference.value=request.id;
  get('fan-verify').requestSubmit();
 }));
 if(total>1){
  const controls=document.createElement('nav');controls.setAttribute('aria-label','Cambiar solicitud');
  controls.style.cssText='display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.6rem';
  for(const [step,label] of [[-1,'Anterior'],[1,'Siguiente']]){
   const button=document.createElement('button');button.type='button';button.textContent=label;
   button.onclick=()=>{
    visibleRequestId=requestsForStaff[(position+step+total)%total].id;
    renderStaffRequest();
    list.querySelectorAll('nav button')[step===-1?0:1]?.focus();
   };
   controls.append(button);
  }
  row.append(controls);
 }
 list.replaceChildren(row);
 say('Solicitud '+(position+1)+' de '+total+' pendientes','fan-request-count');
}
let staffAccountRevision=0;
async function showStaffAccount(member,reset=false){
 const access=session;
 const panel=get('fan-staff-account');
 if(!access||!panel)return;
 const revision=++staffAccountRevision;
 closeOwnerMember();
 try{
  const account=await rpc('staff_account',{p_member:member,p_reset:reset},access);
  if(access!==session||revision!==staffAccountRevision)return;
  panel.replaceChildren();
  if(!account){say('No encontramos esta cuenta.','fan-admin-status');return;}
  panel.append(
   clubText('h3',account.name+' · Socia n.º '+account.member),
   clubText('p','Alta: '+new Date(account.joined).toLocaleDateString('es')),
   clubText('p','Teléfono: '+(account.phone||'Sin indicar')),
   clubText('p','Correo: '+(account.email||'Sin indicar')),
   clubText('p',account.has_password?'Contraseña configurada':'Contraseña pendiente'),
   profileButton(account.member)
  );
  if(account.has_password)panel.append(clubButton('Generar enlace de restablecimiento',()=>showStaffAccount(account.member,true)));
  if(account.reset){
   const link=new URL(location.pathname,location.origin);
   link.hash='club-restablecer='+account.member+'.'+account.reset;
   const label=clubText('label','Enlace de un solo uso (24 horas)');
   const input=document.createElement('input');
   input.readOnly=true;
   input.value=link.href;
   label.append(input);
   panel.append(label);
   input.select();
  }
  say('','fan-admin-status');
 }catch(error){if(access===session&&revision===staffAccountRevision)say(error.message,'fan-admin-status');}
}
async function staffLists(){
 const access=session;
 const [members,requests,canManage]=await Promise.all([
  rpc('staff_members',{},access),
  rpc('staff_requests',{},access),
  rpc('can_manage_memberships',{},access).catch(()=>false)
 ]);
 if(access!==session)return;
 say(members.length+' socias registradas','fan-count');
 get('fan-members').replaceChildren(...members.map(member=>{
  const row=document.createElement('li');const next=Object.keys(milestones).map(Number).find(n=>n>member.stamps);
  row.textContent=member.name+' · Socia '+member.id+' · '+member.stamps+'/9'+(next-member.stamps===1?' · A 1 sello del próximo premio':'');row.append(document.createTextNode(' '),clubButton('Ver cuenta de socia',()=>showStaffAccount(member.id)));
  if(canManage===true){
   const detailButton=clubButton('Ver como socia',()=>showOwnerMember(member.id,detailButton));
   row.append(document.createTextNode(' '),detailButton);
  }
  return row;
 }));
 requestsForStaff=requests;
 if(!requests.some(request=>request.id===visibleRequestId))visibleRequestId=requests[0]?.id;
 renderStaffRequest();
}
submit('fan-login',async fields=>{
 const revision=++staffLoginRevision;
 const credentials={email:fields.email.value.trim(),password:fields.password.value};
 fields.password.value='';
 try{
  const login=await api('/auth/v1/token?grant_type=password',credentials);
  if(revision!==staffLoginRevision)return;
  if(!login.access_token||await rpc('is_staff',{},login.access_token)!==true)throw Error('Acceso reservado al equipo del club.');
  if(revision!==staffLoginRevision||!root.classList.contains('active'))return;
  session=login.access_token;
  root.classList.add('fan-admin-mode');
  get('fan-login').hidden=true;get('fan-staff').hidden=false;
  await staffLists();
  if(revision===staffLoginRevision)say('Sesión iniciada.','fan-admin-status');
 }catch(error){
  if(revision===staffLoginRevision)throw error;
 }
},'fan-admin-status');
submit('fan-verify',async fields=>{
 const result=get('fan-verification');
 result.replaceChildren();
 const reference=fields.reference.value.trim().replace(/^(?:Referencia del carnet:\s*|club-)/i,'');
 if(!/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i.test(reference))throw Error('Escribe la referencia completa del carnet.');
 const access=session;
 const record=await rpc('staff_verify_request',{p_id:reference},access);
 if(!access||access!==session)return;
 if(!record)throw Error('No encontramos una solicitud con esa referencia.');
 const items=[
  'Referencia: '+record.reference,
  record.name+' · Socia n.º '+record.member,
  'Servicio: '+(record.service.split('|')[1]||record.service),
  'Turno solicitado: '+(record.preference||'Sin preferencia'),
  'Premio solicitado: '+(rewards[record.reward]||'Ninguno'),
  record.paid?'Visita pagada registrada':'Solicitud sin visita pagada registrada'
 ];
 if(record.legacy)items.push('Solicitud anterior a la verificación del carnet.');
 else items.push('Precio original: '+Number(record.price).toFixed(2)+' CUP','Total de la reserva: '+Number(record.total).toFixed(2)+' CUP');
 const list=document.createElement('ul');
 list.append(...items.map(item=>clubText('li',item)));
 result.append(clubText('h3','Datos registrados por EDDELI'),list);
 if(record.photo){
  const photo=document.createElement('img');
  photo.alt='Foto registrada con la solicitud';
  photo.src=record.photo;
  photo.width=photo.height=88;
  result.append(photo);
 }
 say('','fan-admin-status');
},'fan-admin-status');
function closeStaffSession(){
 staffLoginRevision++;
 staffAccountRevision++;
 closeOwnerMember();
 root.classList.remove('fan-admin-mode');
 get('fan-staff-account')?.replaceChildren();
 get('fan-verification')?.replaceChildren();get('fan-verify')?.reset();
 session='';requestsForStaff=[];visibleRequestId=undefined;get('fan-staff').hidden=true;get('fan-login').hidden=false;
 get('fan-members').replaceChildren();get('fan-requests').replaceChildren();get('fan-invite-url').value='';get('fan-visit').reset();say('Sesión cerrada.','fan-admin-status');
}
get('fan-exit').onclick=()=>{
 closeStaffSession();
 adminPanel.querySelector('summary').focus();
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
profile.innerHTML = '<h3>Mi perfil de socia</h3><p>Sube una foto reciente de tu rostro en la que se te vea bien. El salón la usa para reconocer a la titular cuando llega a una cita y evitar que alguien use su tarjeta haciéndose pasar por ella. Tu foto queda en tu tarjeta y la puede consultar el personal autorizado. Tú decides si la adjuntas a tu mensaje de WhatsApp.</p><img alt="Foto de perfil de la socia" width="88" height="88" hidden><form><label>Nombre<input name="given" required maxlength="80" autocomplete="given-name"></label><label>Apellidos<input name="family" required maxlength="80" autocomplete="family-name"></label><label>Foto de perfil<input name="photo" type="file" accept="image/*" required></label><button>Guardar mi perfil</button></form><p role="status"></p>';
get('fan-name').after(profile);
const photoForm = profile.querySelector('form');
const photoStatus = profile.querySelector('[role=status]');
const avatar = profile.querySelector('img');
avatar.style.cssText = 'object-fit:cover;border-radius:50%;border:2px solid #b887a2';
const appointment = get('fan-request').closest('details');
const member = get('fan-member');
const menu = document.createElement('div');
menu.className = 'fan-dashboard';
const title = get('club-eli-title');
const brand = document.createElement('p');
brand.className = 'fan-brand';
brand.textContent = 'ELI BEAUTY STUDIO';
const tagline = document.createElement('p');
tagline.className = 'fan-tagline';
tagline.textContent = 'Tu belleza, tu espacio, tus beneficios.';
title.before(brand);
title.after(tagline);

const welcome = document.createElement('header');
welcome.className = 'fan-welcome';
const greeting = document.createElement('h2');
greeting.textContent = '¡Bienvenida, socia!';
const membership = document.createElement('p');
membership.textContent = 'Miembro del Club ELI';
welcome.append(greeting,get('fan-name'),membership);

const loyalty = document.createElement('section');
loyalty.className = 'fan-loyalty';
const loyaltyTitle = document.createElement('h3');
loyaltyTitle.textContent = 'Tu tarjeta de fidelización';
const overviewStamps = document.createElement('ol');
overviewStamps.className = 'fan-overview-stamps';
overviewStamps.setAttribute('aria-label','Tus nueve sellos');
const stampCells = Array.from({length:9},(_,index)=>{
 const cell = document.createElement('li');
 cell.textContent = String(index+1);
 overviewStamps.append(cell);
 return cell;
});
loyalty.append(loyaltyTitle,overviewStamps,get('fan-progress'));

const design = document.createElement('style');
design.textContent = `
#club-eli .fan-brand,#club-eli .fan-tagline,#club-eli-title{text-align:center}
#club-eli .fan-brand{color:#77511e;font-size:.75rem;font-weight:750;letter-spacing:.2em;margin:1rem 0 .4rem}
#club-eli-title{font-size:clamp(1.9rem,6vw,3.1rem);line-height:1.04;margin:.35rem 0}
#club-eli .fan-tagline{margin:.65rem 0 1.25rem}
#club-eli .fan-dashboard{display:grid;gap:1rem}
#club-eli .fan-welcome{text-align:center}
#club-eli .fan-welcome h2{font:700 clamp(1.35rem,4vw,1.8rem) Georgia,serif;margin:.15rem 0 .35rem}
#club-eli .fan-welcome p{margin:.25rem 0;font-size:.9rem}
#club-eli .fan-loyalty{background:linear-gradient(140deg,#ffe5ef,#fff8eb);border:1px solid #c49a55;border-radius:18px;padding:clamp(.55rem,3vw,1.25rem);text-align:center}
#club-eli .fan-loyalty h3{color:#74284e;font-family:Georgia,serif;margin:.2rem 0 .75rem}
#club-eli .fan-loyalty p{margin:.7rem 0 .1rem;font-weight:700}
#club-eli .fan-overview-stamps{display:grid;grid-template-columns:repeat(9,minmax(0,2.7rem));justify-content:center;gap:clamp(2px,1vw,8px);margin:0;padding:0;list-style:none}
#club-eli .fan-overview-stamps li{display:grid;place-items:center;aspect-ratio:1;border-radius:50%;border:1px solid #b38b49;background:#fffaf2;color:#65451e;font-size:clamp(.68rem,2.4vw,1rem);font-weight:700}
#club-eli .fan-overview-stamps .fan-earned{background:#84375d;color:white;border-color:#84375d}
#club-eli .fan-dashboard nav{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(4px,1.4vw,10px)}
#club-eli .fan-dashboard nav button{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.2rem;min-width:0;min-height:4.25rem;padding:.35rem .15rem;margin:0;background:#fff6fa;border:1px solid #deb7c8;color:#632846;font-size:clamp(.68rem,2.7vw,.9rem);line-height:1.2;overflow-wrap:anywhere}
#club-eli .fan-dashboard nav button:enabled:hover{background:#f8dfec;border-color:#b38b49}
#club-eli .fan-dashboard nav button span{color:#785522;font-size:1.25rem}
#club-eli .fan-exclusive{text-align:center;font-family:Georgia,serif;margin:0}
#club-eli .fan-dashboard #fan-signout{justify-self:center}

#club-eli .fan-detailed-card{position:relative;isolation:isolate;overflow:hidden;display:grid;gap:.85rem;padding:clamp(.7rem,4vw,1.8rem);color:#fff1df;background:radial-gradient(ellipse at top right,#7b2a49,transparent 65%),linear-gradient(145deg,#51192f,#340f20);border:1px solid #d69c6e;border-radius:22px;box-shadow:inset 0 0 0 3px #3e1324,0 8px 20px #4d203025;margin:.75rem 0}
#club-eli .fan-card-flower{width:clamp(7rem,30%,12rem);position:absolute;right:-.8rem;top:-1.2rem;z-index:-1;color:#e1a77e;opacity:.48;fill:none;stroke:currentColor;stroke-width:1.25}
#club-eli .fan-card-brand{text-transform:uppercase;letter-spacing:.17em;color:#f5c598;font:700 .72rem Georgia,serif;margin:0}
#club-eli .fan-card-name{font:italic 700 clamp(1.2rem,5vw,2rem) Georgia,serif;margin:0;overflow-wrap:anywhere}
#club-eli .fan-detailed-card #fan-stamps{gap:clamp(.2rem,1.7vw,1rem);margin:0}
#club-eli .fan-detailed-card #fan-stamps li{background:none;border:0;padding:0;min-width:0}
#club-eli .fan-stamp-button{display:flex;align-items:center;flex-direction:column;gap:.4rem;width:100%;height:100%;margin:0;border:1px solid transparent;background:none;color:#fff1df;padding:.35rem .12rem;border-radius:10px}
#club-eli .fan-stamp-button:hover,#club-eli .fan-stamp-button[aria-pressed="true"]{border-color:#e8b38c;background:#fff4da14}
#club-eli .fan-stamp-button:focus-visible{outline-color:#fff1df}
#club-eli .fan-stamp-medal{display:grid;place-items:center;inline-size:clamp(2.55rem,12vw,4.8rem);aspect-ratio:1;box-sizing:border-box;color:#f7c09a;border:2px solid #dfa57b;border-radius:36% 44% 36% 44%;box-shadow:0 3px 6px #19081377}
#club-eli .fan-milestone .fan-stamp-medal{outline:1px solid #e7ad82;outline-offset:2px}
#club-eli .fan-earned .fan-stamp-medal{color:#4c1628;background:linear-gradient(140deg,#ffe2bf,#db9b72 70%,#efbf95);border-color:#ffdbb5}
#club-eli .fan-stamp-medal svg{width:62%;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}
#club-eli .fan-stamp-label{font-size:clamp(.7rem,2.6vw,.9rem);line-height:1.2;overflow-wrap:anywhere}
#club-eli .fan-card-count{margin:0;font:700 1rem Georgia,serif}
#club-eli .fan-detailed-card progress{width:100%;height:.52rem;color:#e6a378;accent-color:#e6a378;border:0;border-radius:2rem;background:#270c18;overflow:hidden}
#club-eli .fan-detailed-card progress::-webkit-progress-bar{background:#270c18}
#club-eli .fan-detailed-card progress::-webkit-progress-value{background:#e6a378;border-radius:2rem}
#club-eli .fan-detailed-card progress::-moz-progress-bar{background:#e6a378;border-radius:2rem}
#club-eli .fan-next-benefit,#club-eli #fan-stamp-detail{padding:.75rem .9rem;border:1px solid #e1b996;border-radius:12px;background:#fff8eb}
#club-eli #fan-stamp-detail h4,#club-eli #fan-stamp-detail p{margin:.25rem 0}

`;
root.append(design);
const back = document.createElement('button');
back.type = 'button';
back.textContent = 'Volver al Club';
const views = new Map([['menu', menu]]);
let activeView = 'menu';
const menuButtons = new Map();
function openMemberView(name, focus = true) {
 const previous = activeView;
 activeView = name;
 for (const [key, view] of views) view.hidden = key !== name;
 back.hidden = name === 'menu';
 if (!focus) return;
 const target = name === 'menu' ? (previous==='academy-status'?academyButton:menuButtons.get(previous)) : views.get(name).firstElementChild;
 target?.focus({preventScroll:true});
}
back.onclick = () => openMemberView('menu');
const menuGrid = document.createElement('nav');
menuGrid.setAttribute('aria-label','Menú de socia');
const exclusive = document.createElement('p');
exclusive.className = 'fan-exclusive';
exclusive.textContent = '✦ Exclusivo para nuestras socias ✦';
menu.append(welcome,loyalty,menuGrid,exclusive,get('fan-signout'));
member.append(back,menu);
const recoveryCodeField=get('fan-private');
const recovery = recoveryCodeField.closest('details');
recovery.hidden=true;
const revealCode=clubButton('Mostrar código',()=>{
 const hidden=recoveryCodeField.type==='password';
 recoveryCodeField.type=hidden?'text':'password';
 revealCode.textContent=hidden?'Ocultar código':'Mostrar código';
});
const copyCode=clubButton('Copiar código',async()=>{
 try{await navigator.clipboard.writeText(recoveryCodeField.value);say('Código privado copiado.');}
 catch{say('Pulsa Mostrar código y cópialo manualmente.');}
});
recovery.append(revealCode,copyCode);
recovery.addEventListener('toggle',()=>{
 if(!recovery.open){recoveryCodeField.type='password';revealCode.textContent='Mostrar código';}
});
const profileDetails=clubText('p','');
const contact=document.createElement('form');
contact.hidden=true;
contact.innerHTML='<h4>Datos de contacto</h4><label>País o prefijo<select name="country"></select></label><label>Teléfono nacional (opcional)<input name="phone" type="tel" autocomplete="tel-national" maxlength="24"></label><label>Correo electrónico (opcional)<input name="email" type="email" autocomplete="email" maxlength="254"></label><label>Cambiar foto<input name="photo" type="file" accept="image/*"></label><img alt="Vista previa de la foto nueva" width="88" height="88" hidden><button>Guardar cambios</button>';
const countries=new Map([['+53','Cuba'],['+34','España'],['+1','Estados Unidos y Canadá'],['+52','México'],['+57','Colombia'],['+58','Venezuela'],['+54','Argentina'],['+56','Chile'],['+51','Perú'],['+593','Ecuador'],['+507','Panamá'],['+49','Alemania'],['+33','Francia'],['+39','Italia'],['+44','Reino Unido']]);
for(const [code,name] of countries)contact.elements.country.add(new Option(name+' '+code,code));
contact.elements.country.add(new Option('Otro prefijo (escribe el número con +)','other'));
const photoPreview=contact.querySelector('img');
let photoDraft='';
let photoDraftVersion=0;
contact.elements.photo.onchange=async()=>{
 const version=++photoDraftVersion;
 photoDraft='';
 photoPreview.hidden=true;
 photoPreview.removeAttribute('src');
 const file=contact.elements.photo.files[0];
 const save=contact.querySelector('button');
 if(!file){save.disabled=false;return;}
 save.disabled=true;
 try{
  const photo=await prepareProfilePhoto(file);
  if(version!==photoDraftVersion)return;
  photoDraft=photo;
  photoPreview.src=photo;
  photoPreview.hidden=false;
 }catch(error){if(version===photoDraftVersion){contact.elements.photo.value='';photoStatus.textContent=error.message;}}
 finally{if(version===photoDraftVersion)save.disabled=false;}
};
contact.onsubmit=async event=>{
 event.preventDefault();
 const value=token;
 const {country,phone,email,photo}=contact.elements;
 const national=phone.value.replace(/[\s().-]/g,'');
 const number=national&&!national.startsWith('+')&&country.value!=='other'?country.value+national:national;
 const save=contact.querySelector('button');
 save.disabled=true;
 try{
  await rpc('update_profile',{p_token:value,p_phone:number,p_email:email.value,p_photo:photoDraft||null});
  if(value!==token)return;
  if(photoDraft){avatar.src=photoDraft;avatar.hidden=false;}
  photo.value='';
  photo.onchange();
  photoStatus.textContent='Cambios guardados.';
 }catch(error){if(value===token)photoStatus.textContent=error.message;}
 finally{save.disabled=false;}
};
const security = document.createElement('section');
const passwordInfo=clubText('p','');
const createPassword=document.createElement('form');
createPassword.hidden=true;
createPassword.innerHTML='<label>Nueva contraseña<input type="password" name="password" required minlength="12" maxlength="72" autocomplete="new-password"></label><label>Repite la contraseña<input type="password" name="confirm" required minlength="12" maxlength="72" autocomplete="new-password"></label><button>Crear mi contraseña</button>';
createPassword.onsubmit=async event=>{
 event.preventDefault();
 const {password,confirm}=createPassword.elements;
 const button=createPassword.querySelector('button');
 const value=token;
 if(password.value!==confirm.value){passwordInfo.textContent='Las contraseñas deben coincidir.';return;}
 button.disabled=true;
 try{
  await rpc('create_password',{p_token:value,p_password:password.value});
  if(value!==token)return;
  createPassword.reset();
  createPassword.hidden=true;
  passwordInfo.textContent='Contraseña guardada. Para acceder, usa tu número de socia y contraseña.';
 }catch(error){if(value===token)passwordInfo.textContent=error.message;}
 finally{button.disabled=false;}
};
security.append(clubText('h4','Seguridad'),passwordInfo,createPassword,recovery);
profile.append(profileDetails,contact,security);
function showProfileDetails(details,value){
 profileDetails.textContent=details.name+' · Socia n.º '+details.member+' · Alta: '+new Date(details.joined).toLocaleDateString('es');
 const saved=details.phone||'';
 const prefix=[...countries.keys()].sort((a,b)=>b.length-a.length).find(code=>saved.startsWith(code));
 contact.elements.country.value=prefix||(saved?'other':'+53');
 contact.elements.phone.value=prefix?saved.slice(prefix.length):saved;
 contact.elements.email.value=details.email||'';
 contact.hidden=false;
 recovery.hidden=!details.has_recovery_code;
 recoveryCodeField.value=details.has_recovery_code?value:'';
 const available=new Date(details.password_ready);
 createPassword.hidden=details.has_password||available>Date.now();
 passwordInfo.textContent=details.has_password?'Ya tienes una contraseña. Si la olvidas, contacta al equipo del Club.':
 createPassword.hidden?'Podrás crear tu contraseña el '+available.toLocaleString('es',{dateStyle:'medium',timeStyle:'short'})+'.':'Crea una contraseña de al menos 12 caracteres.';
}
const bookingHint = document.createElement('p');
bookingHint.textContent = 'Para reservar, completa tu nombre, apellidos y foto en Mi perfil.';
const cardBenefits = document.createElement('p');
function clubText(tag, value) {
 const element = document.createElement(tag);
 element.textContent = value;
 return element;
}
function clubButton(label, action) {
 const button = clubText('button',label);
 button.type = 'button';
 button.onclick = action;
 return button;
}
function clubStatus() {
 const status = document.createElement('p');
 status.setAttribute('role','status');
 return status;
}

const inspiration = document.createElement('div');
const inspirationStatus = clubStatus();
inspiration.append(clubText('p','Elige un diseño que quieras comentar en tu próxima cita.'),inspirationStatus);
for (const [name,description] of [
 ['Francesa rosa','Base rosa suave con puntas finas y claras.'],
 ['Burdeos brillante','Un tono profundo con acabado brillante.'],
 ['Flores discretas','Una flor pequeña sobre una base neutra.']
]) {
 const design = document.createElement('article');
 design.append(clubText('h4',name),clubText('p',description),clubButton('Elegir '+name,()=>{
  inspirationStatus.textContent = 'Tu elección: '+name+'. Puedes mencionarla al pedir cita.';
 }));
 inspiration.append(design);
}

const entertainment = document.createElement('div');
const quizResult = clubStatus();
entertainment.append(
 clubText('h4','Minijuego de belleza'),
 clubText('p','¿Cuál de estos estilos se reconoce por una línea en la punta de la uña?'),
 clubButton('Manicura francesa',()=>{quizResult.textContent='¡Acertaste! La línea en la punta es característica de la francesa.';}),
 clubButton('Efecto ojo de gato',()=>{quizResult.textContent='Pista: el nombre del estilo también identifica un país.';}),
 quizResult
);

const offers = document.createElement('div');
const vipBenefits = clubStatus();
offers.append(clubText('h4','Beneficios de tu tarjeta'),vipBenefits,clubButton('Consultar mis premios',()=>openMemberView('rewards')));

const advice = document.createElement('div');
advice.append(clubText('h4','Revista ELI'));
for (const [title,body] of [
 ['Cómo elegir un diseño para tu cita','Lleva una referencia que muestre el color, la forma y el acabado que prefieres.'],
 ['Ideas para combinar tus uñas','Elige un tono base y repítelo en el detalle de una o dos uñas para mantener la combinación.'],
 ['Qué contar antes de un servicio de pestañas','Comenta si llevas extensiones, si usas lentillas o si has tenido una reacción a algún producto.']
]) {
 const article = document.createElement('details');
 article.append(clubText('summary',title),clubText('p',body));
 advice.append(article);
}

const community = document.createElement('div');
const pollStatus = clubStatus();
community.append(
 clubText('h4','Pregunta del Club'),
 clubText('p','¿Qué te gustaría encontrar primero en la galería? Tu elección se muestra en esta visita.'),
 ...['Diseños de uñas','Estilos de pestañas','Ideas para el cabello'].map(option=>
  clubButton(option,()=>{pollStatus.textContent='Tu elección: '+option+'.';})
 ),
 pollStatus
);

const detailedCard=document.createElement('div');
detailedCard.className='fan-detailed-card';
const cardName=clubText('p','');
cardName.className='fan-card-name';
const cardProgress=document.createElement('progress');
cardProgress.max=9;
cardProgress.setAttribute('aria-label','Progreso de sellos del carnet');
const cardCount=clubText('p','');
cardCount.className='fan-card-count';
const cardSelection=clubText('section','');
cardSelection.id='fan-stamp-detail';
cardSelection.setAttribute('role','status');
const nextBenefit=clubText('p','');
nextBenefit.className='fan-next-benefit';
const stampList=get('fan-stamps');
const stampLabels=[
 milestones[1],'Hacia tu detalle',milestones[3],
 'Hacia tu descuento','Hacia tu descuento',milestones[6],
 'Hacia tu decoración especial','Hacia tu decoración especial',milestones[9]
];
const stampGoals=[1,3,3,6,6,6,9,9,9];
const benefitFields={3:'detail_rewards',6:'discount',9:'final_rewards'};
const stampArt=[
 '<rect x="5" y="8" width="25" height="23" rx="4"/><path d="M5 15h25M11 5v6m13-6v6m-13 9h2m4 0h2m-8 5h2"/><circle cx="30" cy="29" r="7"/><path d="M30 25v4l3 2"/>',
 '<path d="M15 6h10v10H15zM14 16h12l4 5v12a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3V21zM15 25h10v6H15z"/>',
 '<path d="M6 31l10-12c3-4 8 0 5 4L12 35m7 1 9-11c3-4 8 0 5 4l-5 7M24 10c-5-7 3-9 5-3 5-5 11 1 4 5l-5 3z"/>',
 '<path d="M5 23 22 6h12v12L17 35z"/><circle cx="28" cy="12" r="2.5"/>',
 '<path d="M8 21 19 7h10v10L17 31zM22 30l7 5 9-13V10l-5-1"/><circle cx="24" cy="12" r="2"/>',
 '<path d="M4 12h32v6a3 3 0 0 0 0 6v6H4v-6a3 3 0 0 0 0-6zM15 26l10-10"/><circle cx="15" cy="17" r="2"/><circle cx="25" cy="25" r="2"/>',
 '<path d="M10 35V16c0-13 16-13 16 0v19m-13-18c2 3 8 3 10 0m8-9v8m-4-4h8"/>',
 '<path d="M11 35V16c0-13 18-13 18 0v19m-17-9c10 1 7-10 16-12m-15 18c7 1 8-9 15-10"/>',
 '<path d="M5 34V20c0-9 10-9 10 0v14m7 0V16c0-10 11-10 11 0v18M10 19v7m-3-3h6m14-9v8m-3-4h6"/>'
];
function cardArt(markup,box='0 0 40 40'){
 const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
 svg.setAttribute('viewBox',box);
 svg.setAttribute('aria-hidden','true');
 svg.setAttribute('focusable','false');
 svg.innerHTML=markup;
 return svg;
}
const magnolia=cardArt('<path d="M95 140c-4-35-28-54-44-69m46 59c11-39 31-59 58-67M92 121C55 117 11 93 10 55c33 1 65 22 82 66Zm0 0C67 90 67 48 95 14c20 31 20 65-3 107Zm0 0c13-38 44-57 74-57-6 36-35 56-74 57Zm0 0c-31 2-62 16-65 44 26 1 55-17 65-44Zm0 0c18 2 45 17 51 43-29-1-49-16-51-43ZM91 123c8 26 6 45 1 65M100 152c24-25 52-28 73-19-16 23-43 30-73 19Z"/>','0 0 185 190');
magnolia.classList.add('fan-card-flower');
const cardBrand=clubText('p','ELI Beauty Studio');
cardBrand.className='fan-card-brand';
detailedCard.append(magnolia,cardBrand,cardName,stampList,cardCount,cardProgress);
const stampButtons=stampArt.map((art,index)=>{
 const item=document.createElement('li');
 const button=clubButton('',()=>{
  selectCardStamp(index);
  cardSelection.scrollIntoView({block:'nearest'});
 });
 button.className='fan-stamp-button';
 button.classList.toggle('fan-milestone',Boolean(milestones[index+1]));
 button.setAttribute('aria-controls',cardSelection.id);
 button.setAttribute('aria-pressed','false');
 const medallion=clubText('span','');
 medallion.className='fan-stamp-medal';
 medallion.append(cardArt(art));
 const label=clubText('span',stampLabels[index]);
 label.className='fan-stamp-label';
 button.append(medallion,label);
 item.append(button);
 return {item,button};
});
stampList.replaceChildren(...stampButtons.map(({item})=>item));
let selectedCardStamp=null;

function renderDetailedCard(data,total){
 cardName.textContent=data.name;
 cardCount.textContent=total+' de 9 sellos';
 cardProgress.value=total;
 stampButtons.forEach(({item,button},index)=>{
  const earned=index<total;
  item.classList.toggle('fan-earned',earned);
  button.setAttribute('aria-label','Sello '+(index+1)+(earned?' confirmado. ':' pendiente. ')+stampLabels[index]);
 });
 const next=stampGoals.find(goal=>goal>total);
 const remaining=next-total;
 nextBenefit.textContent=next
  ? 'Próximo beneficio · '+milestones[next]+' · '+(remaining===1?'Falta 1 sello':'Faltan '+remaining+' sellos')
  : 'Tarjeta completa · 9 de 9 sellos';
 selectCardStamp(selectedCardStamp);
}

function selectCardStamp(index){
 selectedCardStamp=index;
 stampButtons.forEach(({button},position)=>button.setAttribute('aria-pressed',String(position===index)));
 if(index===null||!card){
  cardSelection.replaceChildren(clubText('p','Pulsa un sello para ver su beneficio y su estado.'));
  return;
 }
 const goal=stampGoals[index];
 const total=card.stamps9??card.stamps;
 const remaining=goal-total;
 const available=card[benefitFields[goal]]??0;
 const status=remaining>0?(remaining===1?'Te falta 1 sello para desbloquearlo.':'Te faltan '+remaining+' sellos para desbloquearlo.')
  :goal===1?'Desbloqueado. Ya tienes acceso anticipado a turnos.'
  :available>0?'Desbloqueado. Disponible: '+available+'.':'Alcanzado en este carnet. Actualmente no tienes este premio disponible.';
 const visit=card.stamp_visits?.[index];
 const visitName=visit&&(visit.detail||catalog.find(row=>row[0]===visit.service)?.[1]||'Visita confirmada');
 const heading=clubText('h4',milestones[goal]);
 const context=clubText('p','Sello '+(index+1)+(index<total?' confirmado':' pendiente')+
  (index+1===goal?' · Beneficio de este sello':' · Avance hacia este beneficio'));
 cardSelection.replaceChildren(heading,context,clubText('p',status));
 if(visitName)cardSelection.append(clubText('p','Visita: '+visitName));
}

const bookingProfile = clubButton('Ir a Mi perfil',()=>openMemberView('profile'));
bookingHint.append(document.createElement('br'),bookingProfile);
for (const [name, label, icon, content] of [
 ['card','Mi tarjeta','▦',[detailedCard,cardSelection,nextBenefit,cardBenefits,get('fan-refresh')]],
 ['appointment','Reservar cita','◷',[bookingHint,appointment]],
 ['rewards','Mis premios','✦',[get('fan-benefits')]],
 ['inspiration','Inspiración','❀',[inspiration]],
 ['entertainment','Entretenimiento','☆',[entertainment]],
 ['offers','Ofertas VIP','♕',[offers]],
 ['advice','Consejos','☼',[advice]],
 ['community','Comunidad','♡',[community]],
 ['profile','Mi perfil','◉',[profile]]
]) {
 const button = document.createElement('button');
 button.type = 'button';
 const symbol = document.createElement('span');
 symbol.setAttribute('aria-hidden','true');
 symbol.textContent = icon + ' ';
 button.append(symbol,label);
 menuGrid.append(button);
 button.onclick = () => openMemberView(name);
 menuButtons.set(name,button);
 const view = document.createElement('section');
 const heading = document.createElement('h3');
 heading.textContent = label;
 heading.tabIndex = -1;
 view.append(heading,...content);
 views.set(name,view);
 member.append(view);
}
const registration=document.getElementById('registro');
const registrationForm=registration?.querySelector('form');
const registrationBack=registration?.querySelector('#reg-back');
const identityFields={name:document.getElementById('reg-name'),email:document.getElementById('reg-email'),phone:document.getElementById('reg-phone')};
const identityMismatch='Tus datos deben coincidir con los de tu perfil del Club de Fans ELI. Revisa tu perfil antes de continuar.';
let academyRegistration=null;
const academyPassword=document.getElementById('reg-password');
const passwordRow=document.createElement('div');
passwordRow.style.cssText='display:flex;align-items:center;gap:.4rem';
const passwordEye=clubButton('',()=>setAcademyPasswordVisibility(academyPassword.type==='password'));
passwordEye.className='secondary';
passwordEye.style.cssText='flex:none;min-width:44px;min-height:44px;padding:.4rem';
passwordEye.setAttribute('aria-controls','reg-password');

function setAcademyPasswordVisibility(visible){
 if(!academyPassword)return;
 academyPassword.type=visible?'text':'password';
 passwordEye.textContent=visible?'◉̸':'👁';
 const label=visible?'Ocultar contraseña':'Mostrar contraseña';
 passwordEye.setAttribute('aria-label',label);
 passwordEye.title=label;
}
function addAcademyPasswordEye(){
 if(!academyPassword||passwordRow.isConnected)return;
 setAcademyPasswordVisibility(false);
 academyPassword.before(passwordRow);
 passwordRow.append(academyPassword,passwordEye);
}

function clearClubRegistration(){
 if(!academyRegistration)return;
 academyRegistration=null;
 setAcademyPasswordVisibility(false);
 if(passwordRow.isConnected)passwordRow.replaceWith(academyPassword);
 registrationForm.reset();
 for(const field of Object.values(identityFields))field.readOnly=false;
 registrationBack.textContent='VOLVER';
}
window.hasClubAcademyRegistration=()=>Boolean(academyRegistration&&registration.classList.contains('active'));
window.returnToClubAfterRegistration=()=>{
 if(!window.hasClubAcademyRegistration())return false;
 clearClubRegistration();
 window.go('club-eli');
 academyButton.focus({preventScroll:true});
 return true;
};
window.submitClubAcademyRegistration=async fields=>{
 const entry=academyRegistration;
 if(!entry||entry.token!==token||!registration.classList.contains('active')||
    Object.keys(identityFields).some(key=>fields[key]!==entry.profile[key])){
  throw Error(identityMismatch);
 }
 const response=await fetch(base+'/functions/v1/club-academy-registration',{
  method:'POST',headers:{'Content-Type':'application/json'},
  body:JSON.stringify({...fields,token:entry.token}),signal:AbortSignal.timeout(30000)
 });
 const result=await response.json().catch(()=>null);
 if(!response.ok||!result?.ok)throw Error(result?.message||'No se pudo verificar la inscripción. Inténtalo de nuevo.');
};
if(registration) new MutationObserver(()=>{
 if(!registration.classList.contains('active'))clearClubRegistration();
}).observe(registration,{attributes:true,attributeFilter:['class']});

const studentLogin=document.getElementById('login-alumno');
const studentLoginBack=document.getElementById('student-login-back');
const studentRegisterLink=document.getElementById('student-register-link');
let clubStudentLogin=false;
function clearClubStudentLogin(){
 if(!clubStudentLogin)return;
 clubStudentLogin=false;
 studentLoginBack.textContent='VOLVER';
 studentRegisterLink.style.removeProperty('display');
 studentLogin.querySelector('form').reset();
}
window.returnToClubAfterStudentLogin=()=>{
 if(!clubStudentLogin)return false;
 clearClubStudentLogin();
 window.go('club-eli');
 openMemberView('menu',false);
 academyButton.focus({preventScroll:true});
 return true;
};
if(studentLogin)new MutationObserver(()=>{
 if(!studentLogin.classList.contains('active'))clearClubStudentLogin();
}).observe(studentLogin,{attributes:true,attributeFilter:['class']});

const academyStatusView=document.createElement('section');
const academyStatusTitle=clubText('h3','Estado de tu inscripción');
academyStatusTitle.tabIndex=-1;
const academyStatusMessage=clubText('p','');
const enterCourse=clubButton('Entrar al curso',()=>{
 if(!studentLoginBack||!studentRegisterLink||!window.go('login-alumno')||!studentLogin.classList.contains('active'))return;
 clubStudentLogin=true;
 studentLoginBack.textContent='VOLVER AL CLUB DE FANS ELI';
 studentRegisterLink.style.display='none';
});
academyStatusView.append(academyStatusTitle,academyStatusMessage,enterCourse);
views.set('academy-status',academyStatusView);
member.append(academyStatusView);

async function getAcademyRegistrationStatus(value){
 const response=await fetch(base+'/functions/v1/club-academy-registration',{
  method:'POST',headers:{'Content-Type':'application/json'},
  body:JSON.stringify({action:'status',token:value}),signal:AbortSignal.timeout(20000)
 });
 const result=await response.json().catch(()=>null);
 if(!response.ok||!['not_registered','confirm_email','pending','approved'].includes(result?.state)){
  throw Error(result?.message||'No pudimos consultar el estado de tu solicitud. Inténtalo de nuevo.');
 }
 return result.state;
}

const academyButton = clubButton('Curso de extensiones de pestañas',async()=>{
 if(!registrationForm||!registrationBack||Object.values(identityFields).some(field=>!field)||!token)return;
 const value=token;
 academyButton.disabled=true;
 say('Comprobando los datos de tu perfil…');
 try{
  const [profile,identity]=await Promise.all([rpc('profile_details',{p_token:value}),rpc('identity_status',{p_token:value})]);
  if(token!==value||!root.classList.contains('active'))return;
  const state=await getAcademyRegistrationStatus(value);
  if(token!==value||!root.classList.contains('active'))return;
  if(state!=='not_registered'){
   const approved=state==='approved';
   academyStatusTitle.textContent=approved?'¡Tu solicitud fue aprobada!':'Solicitud enviada';
   academyStatusMessage.textContent=approved
    ?'Ya tienes acceso al curso de Extensiones de Pestañas de ELI Beauty Academy. Entra con el correo y la contraseña que creaste al inscribirte. Guarda tu contraseña en un lugar seguro.'
    :state==='confirm_email'?'Confirma tu correo con el enlace que recibiste. Después se revisará tu solicitud.':'Ya confirmaste tu correo. Tu solicitud está pendiente de revisión.';
   enterCourse.hidden=!approved;
   say('');
   openMemberView('academy-status');
   return;
  }
  const missing=[];
  if(!identity?.complete)missing.push('nombre, apellidos y foto');
  if(!profile?.phone)missing.push('teléfono');
  if(!profile?.email)missing.push('correo electrónico');
  if(missing.length){
   openMemberView('profile');
   say('Para inscribirte, completa estos datos en Mi perfil: '+missing.join(', ')+'.');
   return;
  }
  registrationForm.reset();
  for(const [key,field] of Object.entries(identityFields)){
   field.value=profile[key];
   field.readOnly=true;
  }
  academyRegistration={token:value,profile};
  addAcademyPasswordEye();
  registrationBack.textContent='VOLVER AL CLUB DE FANS ELI';
  say('');
  if(!window.go('registro'))clearClubRegistration();
 }catch(error){if(token===value)say(error.message||'No pudimos consultar tu perfil. Inténtalo de nuevo.');}
 finally{academyButton.disabled=false;}
});
const academyIcon = clubText('span','🎓');
academyIcon.setAttribute('aria-hidden','true');
academyButton.prepend(academyIcon);
academyButton.append(clubText('small','ELI Beauty Academy'));
menuButtons.get('card').after(academyButton);
menuGrid.after(clubText('p','Usa tus datos reales y mantenlos actualizados en Mi perfil. EDDELI los utiliza para vincular tu inscripción en ELI Beauty Academy con tu cuenta del Club de Fans ELI.'));
appointment.open = true;
openMemberView('menu',false);

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
const postalReference=document.createElement('p');
const copyReference=clubButton('Copiar referencia',async()=>{
 try{await navigator.clipboard.writeText(postalReference.textContent.slice('Referencia del carnet: '.length));say('Referencia copiada. Pégala junto al carnet en WhatsApp.');}
 catch{say('Selecciona la referencia y cópiala para pegarla en WhatsApp.');}
});
postal.append(preview,postalReference,share,copyReference,help);
get('fan-wa').after(postal);
let postalFile;
let postalUrl;
function clearPostal(){
 if(postalUrl)URL.revokeObjectURL(postalUrl);
 postalUrl=undefined;postalFile=undefined;postal.hidden=true;preview.removeAttribute('src');
}
share.onclick=async()=>{
 if(!postalFile)return;
 const data={files:[postalFile],text:postalReference.textContent};
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
function displayPhoto(photo,complete=false) {
 profileReady = Boolean(photo && complete);
 avatar.hidden = !photo;
 photoForm.hidden = profileReady;
 photoForm.elements.photo.required = !photo;
 photoForm.elements.photo.closest('label').hidden = Boolean(photo);
 appointment.hidden = !profileReady;
 bookingHint.hidden = profileReady;
 if (photo) avatar.src = photo;
 else avatar.removeAttribute('src');
}
async function loadPhoto(value) {
 const revision = ++profileRevision;
 displayPhoto(null);
 photoForm.hidden = true;
 contact.hidden=true;
 profileDetails.textContent='';
 createPassword.hidden=true;
 passwordInfo.textContent='';
 recovery.hidden=true;
 recovery.open=false;
 recoveryCodeField.value='';
 photoStatus.textContent = 'Cargando tu perfil…';
 try {
  const [identity,details] = await Promise.all([rpc('identity_status',{p_token:value}),rpc('profile_details',{p_token:value})]);
  if (revision !== profileRevision || token !== value) return;
  displayPhoto(identity?.photo,identity?.complete);
  if(details)showProfileDetails(details,value);
  photoStatus.textContent = identity?.complete ? '' : 'Completa tu perfil para pedir citas desde tu tarjeta.';
 } catch {
  if (revision === profileRevision && token === value) photoStatus.textContent = 'No pudimos cargar tu perfil. Pulsa Actualizar sellos para volver a intentar.';
 }
}
async function prepareProfilePhoto(file){
 if(!file||file.size>20*1024*1024)throw Error('Elige una foto de hasta 20 MB.');
 const source=URL.createObjectURL(file);
 const image=new Image();
 try{image.src=source;await image.decode();}
 catch{throw Error('Elige una foto que se pueda abrir.');}
 finally{URL.revokeObjectURL(source);}
 const canvas=document.createElement('canvas');
 const side=Math.min(image.naturalWidth,image.naturalHeight);
 canvas.width=canvas.height=320;
 canvas.getContext('2d').drawImage(image,(image.naturalWidth-side)/2,(image.naturalHeight-side)/2,side,side,0,0,320,320);
 return canvas.toDataURL('image/jpeg',.76);
}
photoForm.addEventListener('submit',async event=>{
 event.preventDefault();
 const {given,family,photo}=photoForm.elements;
 const button=photoForm.querySelector('button');
 const value=token;
 if(!value||button.disabled)return;
 button.disabled=true;
 photoStatus.textContent='Guardando tu perfil…';
 try{
  const image=photo.files[0]?await prepareProfilePhoto(photo.files[0]):null;
  if(token!==value)return;
  const updated=await rpc('complete_identity',{p_token:value,p_given:given.value,p_family:family.value,p_photo:image});
  if(token!==value)return;
  photoForm.reset();
  show(updated,value);
 }catch(error){if(token===value)photoStatus.textContent=error.message;}
 finally{button.disabled=false;}
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

function installClubHelp(){

 const entry=document.createElement('aside');
 entry.id='eli-floating-help';
 entry.setAttribute('aria-label','Asistente ELI');
 entry.innerHTML=`<style>
#eli-floating-help{--eli-offset:calc(88px + env(safe-area-inset-bottom,0px));position:fixed;right:max(16px,env(safe-area-inset-right));bottom:var(--eli-offset);z-index:1200;color:#51263e;font:15px/1.45 system-ui,sans-serif}
@media(min-width:901px){#eli-floating-help{--eli-offset:24px}}
#eli-floating-help button{font:inherit;cursor:pointer}
#eli-floating-help .eli-orb{position:relative;isolation:isolate;display:grid;place-items:center;margin-left:auto;width:58px;height:58px;padding:0;border:0;background:transparent;color:#ffe0a0;font:700 34px/1 system-ui,sans-serif;text-transform:none;text-shadow:0 0 8px #ffd69576;filter:drop-shadow(0 5px 8px #5624415c)}
#eli-floating-help .eli-orb::before,#eli-floating-help .eli-orb::after{content:"";position:absolute;inset:0;clip-path:path("M 22 5 Q 29 -2 36 5 Q 43 13 53 22 Q 60 29 53 36 Q 43 45 36 53 Q 29 60 22 53 Q 15 45 5 36 Q -2 29 5 22 Q 15 13 22 5 Z");pointer-events:none}
#eli-floating-help .eli-orb::before{z-index:-2;background:linear-gradient(135deg,#fff1c6,#ffbdab 42%,#b97069 72%,#ffdfaf)}
#eli-floating-help .eli-orb::after{z-index:-1;transform:scale(.94);background:radial-gradient(ellipse at 25% 12%,#db7c9b 0%,#9c305e 34%,#591433 78%,#8b254c)}
@keyframes eli-attention{0%,8%,100%{transform:translateX(0) rotate(0)}2%{transform:translateX(-2px) rotate(-6deg)}4%{transform:translateX(2px) rotate(6deg)}6%{transform:translateX(-1px) rotate(-3deg)}}
@media(prefers-reduced-motion:no-preference){#eli-floating-help .eli-orb[aria-expanded="false"]:not(:hover):not(:focus-visible){animation:eli-attention 9s 2s infinite}}
#eli-floating-help button:focus-visible,#eli-floating-help input:focus-visible{outline:2px solid #8e3e65;outline-offset:3px}
#fan-eli-help{position:absolute;right:0;bottom:70px;width:min(350px,calc(100vw - 32px));max-height:max(130px,calc(100dvh - var(--eli-offset) - 86px));overflow:auto;box-sizing:border-box;padding:16px;border:1px solid #c58ba8;border-radius:18px;background:#fff4f8;box-shadow:0 10px 32px #41213c36}
#fan-eli-help[hidden]{display:none!important}
#fan-eli-help header{display:flex;align-items:center;justify-content:space-between;gap:8px}
#fan-eli-help header strong{font:700 23px Georgia,serif}
#fan-eli-help button{border:1px solid #a65c81;border-radius:9px;background:#84375d;color:#fff;padding:7px 10px}
#fan-eli-help label{display:block;margin:.65rem 0 .4rem}
#fan-eli-help input{display:block;box-sizing:border-box;width:100%;padding:8px;margin-top:4px;border:1px solid #b887a2;border-radius:8px;font:inherit;background:white;color:#51263e}
#fan-eli-answer{display:grid;gap:7px;max-height:210px;overflow:auto}
#fan-eli-answer p{max-width:92%;box-sizing:border-box;margin:0;padding:8px 10px;border-radius:12px;background:white;overflow-wrap:anywhere}
#fan-eli-answer p[data-speaker="Tú"]{justify-self:end;background:#f1d9e6}
#fan-eli-answer strong{display:block;font-size:.78rem}
</style><button class="eli-orb" type="button" aria-label="Pregúntale a ELI" title="Pregúntale a ELI" aria-expanded="false" aria-controls="fan-eli-help">e</button><section id="fan-eli-help" aria-label="Chat con ELI" hidden><header><strong>ELI</strong><button type="button" data-close>Cerrar</button></header><p id="fan-eli-greeting"></p><p id="fan-eli-context"></p><div id="fan-eli-answer" role="log" aria-live="polite" aria-label="Conversación"></div><form><label>Tu pregunta<input name="question" required maxlength="180" placeholder="Ej. ¿Qué gano con seis sellos?" autocomplete="off"></label><button>Enviar</button> <button type="button" data-eli-voice aria-pressed="false">🎙 Hablar</button><p data-eli-voice-status role="status" style="margin:.35rem 0 0"></p></form></section>`;
 document.body.append(entry);
 const toggle=entry.querySelector('.eli-orb');
 const panel=entry.querySelector('#fan-eli-help');
 const greeting=panel.querySelector('#fan-eli-greeting');
 const answer=panel.querySelector('#fan-eli-answer');
 const form=panel.querySelector('form');
 const close=panel.querySelector('[data-close]');
 function setOpen(open){
  panel.hidden=!open;
  toggle.setAttribute('aria-expanded',String(open));
  if(!open){if(listening)recognition.abort();toggle.focus();return;}
  refreshContext();
  form.reset();
  close.focus();
 }
 toggle.onclick=()=>setOpen(panel.hidden);
 close.onclick=()=>setOpen(false);
 entry.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&!panel.hidden){event.stopPropagation();setOpen(false);}
 });
 const replies={
  services:'Puedes consultar los servicios y el precio al elegir una opción en Pedir cita desde tu tarjeta.',
  rewards:'Ganas acceso anticipado a turnos con 1 sello, un detalle con 3, un 5 % de descuento con 6 y una decoración especial en dos uñas con 9.',
  appointment:'Abre tu tarjeta, entra en Pedir cita y elige tu servicio. Después prepara el carné y toca Enviar. El salón confirma el turno.',
  card:'Si tienes una invitación, abre el enlace y activa tu tarjeta. Para volver a abrirla en otro dispositivo, usa el código privado que guardaste. Si lo perdiste, contacta al salón.',
  restricted:'Puedo orientarte dentro de EDDELI. Para recuperar tu acceso, usa la opción oficial de tu cuenta o contacta al equipo.'
 };
 const academy=['Academia','Abre Academia para ver las etapas de ELI Beauty Academy. Los módulos se desbloquean según tu progreso.'];
 const access=['Acceso y registro','Si eres estudiante, entra con tu cuenta aprobada. Si todavía no tienes cuenta, usa Solicitar registro desde Acceso.'];
 const contexts={
  inicio:['Inicio','Desde Inicio puedes explorar las áreas, entrar a la academia o abrir el Club de Fans ELI.'],
  areas:['Explorar áreas','Toca una casilla para abrir el área. Las que indican Próximamente están en preparación.'],
  cocina:['Cocina y gastronomía','El curso de Cocina está en preparación. Por ahora su vista está reservada a administración.'],
  'club-eli':['Club de Fans ELI','Desde tu tarjeta puedes consultar los sellos y premios o pedir una cita.'],
  acceso:access,'login-alumno':access,registro:access,
  'login-admin':['Acceso de administración','Usa tu cuenta administrativa autorizada para abrir el panel.'],
  admin:['Administración','Desde el panel puedes abrir Alumnos, Cursos, Exámenes, Certificados, Cocina y Club de Fans ELI.'],
  'admin-alumnos':['Gestión de alumnos','En esta sección puedes revisar las solicitudes de matrícula y gestionar el acceso de estudiantes.'],
  'admin-cursos':['Gestión de cursos','Aquí puedes revisar los cursos y módulos de la academia.'],
  'admin-examenes':['Gestión de exámenes','Aquí puedes revisar las evaluaciones y las preguntas de cada examen.'],
  'admin-certificados':['Certificados','Aquí puedes gestionar las acreditaciones de la academia.'],
  'admin-config':['Configuración','Aquí puedes consultar el estado de tu cuenta administrativa y la conexión.'],
  estudiante:['Mi formación','Desde tu panel puedes consultar tus cursos, progresos, exámenes y certificados.'],
  academia:academy,modulo:academy,
  cursos:['Mis cursos','Aquí aparecen tus cursos disponibles. Abre un curso para ver sus módulos y continuar.'],
  'course-detail':['Detalle del curso','En esta pantalla puedes ver los módulos de tu curso y abrir los disponibles.'],
  biblioteca:['Biblioteca','Aquí encuentras los recursos de estudio disponibles para tu cuenta.'],
  notificaciones:['Notificaciones','Aquí puedes consultar tus avisos de EDDELI.'],
  perfil:['Mi perfil','Aquí puedes revisar tu cuenta y la información disponible para tu perfil.']
 };
 const questionTopics=[
  [/\b(cocina|gastronomia|recetas)\b/,'cocina'],
  [/\b(biblioteca|materiales de estudio)\b/,'biblioteca'],
  [/\b(notificaciones?|avisos?)\b/,'notificaciones'],
  [/\b(registr\w*|matricul\w*|iniciar sesion)\b/,'acceso'],
  [/\b(certificados?|acreditaciones?)\b/,'admin-certificados'],
  [/\b(academia|etapas?|lecciones?|modulos?|estudiar)\b/,'academia'],
  [/\b(cursos?|formacion|progreso)\b/,'cursos'],
  [/\b(perfil|cuenta)\b/,'perfil']
 ];
 function addMessage(speaker,message){
  const row=document.createElement('p');
  row.dataset.speaker=speaker;
  const author=document.createElement('strong');
  author.textContent=speaker;
  row.append(author,document.createTextNode(message));answer.append(row);
  if(answer.children.length>20)answer.firstElementChild.remove();
  answer.scrollTop=answer.scrollHeight;
 }
 function respond(message){addMessage('ELI',message);}
 function normalize(value){return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');}
 function locationContext(){
  const page=document.querySelector('main.content > .view.active')?.id||'inicio';
  const detail=document.getElementById('area-detail');
  const heading=page==='areas'&&detail&&!detail.hidden?detail.querySelector('h2')?.textContent:null;
  return heading?[page,heading,'Esta área está en preparación. Puedes volver a la cuadrícula para explorar las áreas disponibles.']:[page,...(contexts[page]||contexts.inicio)];
 }
 let previousContext='';
 function verifiedEddeliAdmin(){
  if(typeof currentUser==='undefined'||typeof currentProfile==='undefined')return false;
  return Boolean(currentUser?.email_confirmed_at&&currentProfile?.id===currentUser.id&&currentProfile.role==='admin'&&currentProfile.approval_status==='approved');
 }
 function refreshContext(){
  const [page,area,hint]=locationContext();
  const profile=typeof currentUser!=='undefined'&&currentUser&&typeof currentProfile!=='undefined'?currentProfile:null;
  const name=(profile?.full_name||(page==='club-eli'?card?.name:'')||'').trim().split(/\s+/)[0];
  greeting.textContent=name?'Hola, '+name+'. ¿En qué te puedo ayudar?':'Hola, soy ELI. ¿En qué te puedo ayudar?';
  const admin=verifiedEddeliAdmin();
  panel.querySelector('#fan-eli-context').textContent=(admin?'Sesión de administración de EDDELI · ':'')+'Estás en '+area+'.';
  const contextKey=page+'|'+area+'|'+name+'|'+admin;
  if(contextKey===previousContext)return;
  previousContext=contextKey;

 }
 const main=root.parentElement;
 const observer=new MutationObserver(()=>{if(!panel.hidden)refreshContext();});
 for(const view of main.querySelectorAll(':scope > .view'))observer.observe(view,{attributes:true,attributeFilter:['class','hidden']});
 const areaDetail=document.getElementById('area-detail');
 if(areaDetail)observer.observe(areaDetail,{attributes:true,attributeFilter:['hidden'],childList:true});
 const voice=panel.querySelector('[data-eli-voice]');
 const voiceStatus=panel.querySelector('[data-eli-voice-status]');
 const Recognition=window.SpeechRecognition||window.webkitSpeechRecognition;
 const recognition=Recognition?new Recognition():null;
 let listening=false;
 if(!recognition){voice.hidden=true;voiceStatus.textContent='Puedes escribir tu pregunta en este navegador.';}
 else{
  recognition.lang='es-ES';
  recognition.interimResults=false;
  function showListening(active){
   listening=active;
   voice.textContent=active?'Detener':'🎙 Hablar';
   voice.setAttribute('aria-pressed',String(active));
  }
  recognition.onstart=()=>{showListening(true);voiceStatus.textContent='Te escucho…';};
  recognition.onend=()=>{showListening(false);if(voiceStatus.textContent==='Te escucho…')voiceStatus.textContent='';};
  recognition.onresult=event=>{
   if(panel.hidden)return;
   form.elements.question.value=Array.from(event.results,result=>result[0].transcript).join(' ').slice(0,180);
   voiceStatus.textContent='Revisa tu pregunta y pulsa Enviar.';
   form.elements.question.focus();
  };
  recognition.onerror=event=>{
   if(event.error!=='aborted')voiceStatus.textContent='No pude escuchar la pregunta. Puedes volver a intentar o escribirla.';
  };
  voice.onclick=()=>{
   try{if(listening)recognition.stop();else recognition.start();}
   catch{voiceStatus.textContent='El micrófono ya está en uso. Espera un momento o escribe tu pregunta.';}
  };
 }
 form.onsubmit=event=>{
  event.preventDefault();
  const input=form.elements.question;
  const typed=input.value.trim();
  if(!typed)return;
  const question=typed.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  const privateQuestion=/\b(contrasenas?|claves?|pin|codigos?)\b/.test(question);
  input.value='';voiceStatus.textContent='';
  addMessage('Tú',privateQuestion?'Consulta sobre acceso':typed);
  if(/\b(contrasenas?|claves?|pin|codigos?)\b/.test(question)){respond(replies.restricted);return;}
  const [page,area,hint]=locationContext();
  if(/\b(administrador(?:a|es)?|administracion|administrar|gestionar|mis permisos)\b/.test(question)){
   if(!verifiedEddeliAdmin()){respond('Para acceder a Administración, inicia sesión con una cuenta administrativa aprobada de EDDELI.');return;}
   respond(page.startsWith('admin')?'Tu sesión de administración de EDDELI está activa. '+hint:'Tu sesión de administración de EDDELI está activa. Abre Administración para gestionar alumnos, cursos, exámenes y certificados, o para acceder a Cocina y al Club de Fans ELI.');return;
  }
  if(/\b(ayuda|donde estoy|que puedo hacer)\b/.test(question)){respond(hint);return;}
  const areaMatch=Object.values(typeof learningAreas==='undefined'?{}:learningAreas).find(item=>normalize(item.name).length>8&&question.includes(normalize(item.name)));
  if(areaMatch&&areaMatch.status!=='Disponible'&&!/\bcocina\b/.test(question)){respond(areaMatch.description+' Esta área está en preparación.');return;}
  const routed=questionTopics.find(([pattern])=>pattern.test(question));
  if(routed&&!/\b(club|sellos?|premios?|citas?)\b/.test(question)){
   const key=routed[1];
   respond(key==='admin-certificados'&& !page.startsWith('admin')?'Consulta tus certificados desde Mi perfil.':contexts[key][1]);return;
  }
  if(/\b(precios?|cuesta|coste)\b/.test(question)){
   const service=[...prices.entries()].find(([key])=>question.includes(normalize(key.split('|')[1])));
   if(service){respond(service[0].split('|')[1]+': '+service[1].toFixed(2)+' CUP. Con el 5 % de descuento por reserva, el total es '+(service[1]*.95).toFixed(2)+' CUP.');return;}
  }
  if(/\b(sellos?|premios?|descuento|gano)\b/.test(question)){
   const match=question.match(/\b(1|3|6|9|uno|un|tres|seis|nueve)\s+sellos?\b/);
   const count=match&&({uno:1,un:1,tres:3,seis:6,nueve:9}[match[1]]||Number(match[1]));
   respond(count?'Con '+count+(count===1?' sello desbloqueas ':' sellos desbloqueas ')+milestones[count]+'.':replies.rewards);
   return;
  }
  if(/\b(citas?|turnos?|reserv\w*)\b/.test(question)){respond(replies.appointment);return;}
  if(/\b(precios?|servicios?|cuesta|coste)\b/.test(question)){respond(replies.services);return;}
  if(/\b(tarjetas?|acceso|invitacion|activar)\b/.test(question)){respond(replies.card);return;}
  respond('No tengo una respuesta confirmada para esa pregunta. '+hint);
 };
}
installClubHelp();


const ownerMemberPanel=document.createElement('section');
ownerMemberPanel.hidden=true;
ownerMemberPanel.setAttribute('aria-label','Ficha privada de socia');
get('fan-staff-account').after(ownerMemberPanel);
let ownerMemberRevision=0;
const membershipLabels={active:'Activa',blocked:'Bloqueada',removed:'Dada de baja'};

function closeOwnerMember(){
 ownerMemberRevision++;
 ownerMemberPanel.hidden=true;
 ownerMemberPanel.replaceChildren();
}

async function showOwnerMember(member,opener,notice=''){
 const access=session;
 if(!access)return;
 const revision=++ownerMemberRevision;
 const isCurrent=()=>revision===ownerMemberRevision&&access===session;
 const close=clubButton('Cerrar ficha',()=>{
  closeOwnerMember();
  opener.focus();
 });
 const status=clubStatus();
 status.textContent='Cargando ficha…';
 ownerMemberPanel.replaceChildren(close,status);
 ownerMemberPanel.hidden=false;
 close.focus();
 try{
  const data=await rpc('owner_member_view',{p_member:member},access);
  if(!isCurrent())return;
  if(!data?.card)throw Error('No encontramos esta cuenta.');
  const {card,state,requests,history}=data;
  const total=card.stamps9??card.stamps;
  const heading=clubText('h3',card.name+' · Socia n.º '+card.id);
  heading.tabIndex=-1;
  const stamps=document.createElement('ol');
  stamps.className='fan-overview-stamps';
  stamps.setAttribute('aria-label','Sellos del carnet');
  for(let index=0;index<9;index++){
   const earned=index<total;
   const stamp=clubText('li',earned?'✓':String(index+1));
   stamp.classList.toggle('fan-earned',earned);
   stamp.setAttribute('aria-label','Sello '+(index+1)+(earned?' confirmado':' pendiente'));
   stamps.append(stamp);
  }
  const benefits=[
   ['decoracion',card.decoration],['detalle',card.detail_rewards],
   ['descuento',card.discount],['final',card.final_rewards]
  ].filter(([,count])=>count>0).map(([key,count])=>rewards[key]+' × '+count);
  if(total>0)benefits.unshift(milestones[1]);
  const visits=document.createElement('ol');
  for(const visit of card.stamp_visits??[]){
   visits.append(clubText('li',visit.detail||catalog.find(row=>row[0]===visit.service)?.[1]||'Visita confirmada'));
  }
  const carnet=document.createElement('section');
  carnet.className='fan-loyalty';
  carnet.append(clubText('h4','Carnet'),stamps,clubText('p',total+' de 9 sellos'));
  const requestsList=document.createElement('ul');
  for(const request of requests){
   requestsList.append(clubText('li',[
    new Date(request.created).toLocaleDateString('es'),(request.service??'').split('|').pop(),
    request.paid?'Visita registrada':'Pendiente',request.preference,rewards[request.reward]
   ].filter(Boolean).join(' · ')));
  }
  const historyList=document.createElement('ul');
  for(const action of history){
   historyList.append(clubText('li',new Date(action.changed).toLocaleString('es')+
    ' · '+membershipLabels[action.previous]+' → '+membershipLabels[action.state]));
  }
  const controls=document.createElement('div');
  const actions=[
   ['blocked','Bloquear','La socia perderá el acceso al Club.'],
   ['removed','Dar de baja','La socia perderá el acceso al Club. Su historial se conservará.'],
   ['active','Reactivar','La socia podrá volver a acceder al Club.']
  ];
  for(const [next,label,consequence] of actions){
   if(next===state||(state==='removed'&&next==='blocked'))continue;
   controls.append(clubButton(label,async()=>{
    if(!isCurrent()||!window.confirm(label+' a '+card.name+' (socia n.º '+card.id+')? '+consequence))return;
    const buttons=Array.from(controls.querySelectorAll('button'));
    buttons.forEach(button=>{button.disabled=true;});
    status.textContent='Guardando…';
    try{
     await rpc('owner_set_membership',{p_member:member,p_expected:state,p_state:next},access);
     if(isCurrent())await showOwnerMember(member,opener,'Estado actualizado.');
    }catch(error){
     if(isCurrent()){
      status.textContent=error.message;
      buttons.forEach(button=>{button.disabled=false;});
     }
    }
   }));
  }
  status.textContent=notice;
  ownerMemberPanel.replaceChildren(heading,close,clubText('p','Estado de la membresía: '+membershipLabels[state]),
   carnet,...(visits.children.length?[clubText('h4','Visitas de este carnet'),visits]:[]),
   clubText('h4','Beneficios'),clubText('p',benefits.join(' · ')||'Todavía no hay premios disponibles.'),
   clubText('h4','Solicitudes de cita'),requestsList.children.length?requestsList:clubText('p','Sin solicitudes.'),
   clubText('h4','Gestionar acceso'),controls,status,clubText('h4','Historial privado de cambios'),
   historyList.children.length?historyList:clubText('p','Sin cambios registrados.'));
  heading.focus();
 }catch(error){if(isCurrent())status.textContent=error.message;}
}

function invitationEntry(){
 const hash=location.hash.match(/^#inscripcion-club=([0-9a-f-]{36})$/i);
 if(!hash||typeof window.go!=='function')return false;
 window.go('club-eli');get('fan-identify').hidden=false;get('fan-join').parentElement.open=true;
 get('fan-join').elements.invite.value=hash[1];history.replaceState(null,'',location.pathname+location.search);return true;
}
function passwordResetEntry(){
 const match=location.hash.match(/^#club-restablecer=(\d{1,16})\.([0-9a-f]{64})$/i);
 const form=get('fan-password-reset');
 if(!match||!form||typeof window.go!=='function')return false;
 resetCredentials={p_member:match[1],p_reset:match[2]};
 window.go('club-eli');
 form.hidden=false;
 history.replaceState(null,'',location.pathname+location.search);
 return true;
}
if(!passwordResetEntry()&&!invitationEntry()){
 try{const saved=localStorage.getItem('eddeli.club.card');if(saved)load(saved).catch(error=>say(error.message));}catch{}
}
})();
