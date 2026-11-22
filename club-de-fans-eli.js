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
 get('fan-private').value=value;refreshPrices();say('Tarjeta actualizada.');
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
submit('fan-join',async fields=>{
 const invitation=fields.invite.value.trim().toLowerCase();
 const pending='eddeli.club.pending.'+invitation;
 let secret=localStorage.getItem(pending);
 if(!secret){secret=Array.from(crypto.getRandomValues(new Uint8Array(32)),b=>b.toString(16).padStart(2,'0')).join('');localStorage.setItem(pending,secret);}
 show(await rpc('join',{p_invitation:invitation,p_name:fields.name.value.trim(),p_token:secret}),secret);
 localStorage.removeItem(pending);fields.invite.value='';
});
get('fan-refresh').onclick=()=>load(token).catch(error=>say(error.message));
get('fan-signout').onclick=()=>{
 token='';card=null;requestId=undefined;localStorage.removeItem('eddeli.club.card');
 get('fan-member').hidden=true;get('fan-identify').hidden=false;
 get('fan-private').value='';get('fan-wa').hidden=true;get('fan-wa').removeAttribute('href');say('');
};
get('fan-service').onchange=refreshPrices;
get('fan-request').oninput=()=>{requestId=undefined;get('fan-wa').hidden=true;};
submit('fan-request',async fields=>{
 const value=fields.service.value,price=prices.get(value);
 if(!card||price===undefined)throw Error('Elige un servicio.');
 requestId ||= crypto.randomUUID();
 const preference=fields.preference.value.trim(),reward=fields.reward.value,socia=card;
 const requestCardToken=token;
 await rpc('request_visit',{p_token:requestCardToken,p_id:requestId,p_service:value,p_preference:preference,p_reward:reward||null});
 if(token!==requestCardToken)return;
 const message=['Hola, soy '+socia.name+', socia n.º '+socia.id+' del Club ELI.','Quiero reservar '+value.split('|')[1]+'.',preference&&'Prefiero '+preference+'.',reward&&'Quisiera usar '+rewards[reward]+'.','Precio '+price.toFixed(2)+' CUP · Descuento por reserva '+(price*.05).toFixed(2)+' CUP · Total '+(price*.95).toFixed(2)+' CUP.'].filter(Boolean).join('\n');
 const link=get('fan-wa');link.href='https://wa.me/5350655825?text='+encodeURIComponent(message);link.hidden=false;
 say('Solicitud guardada. Abre WhatsApp para enviar el mensaje al salón.');
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
  row.append(button);return row;
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