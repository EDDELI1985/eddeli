
/* EDDELI · Ampliación académica del curso de extensiones de pestañas.
   Contenido original bilingüe, evaluaciones, rúbrica y plantillas imprimibles.
   No realiza escrituras en Supabase ni altera expedientes. */
(function(){
"use strict";

function addParagraphVectorSchemes(panel){
 const article=panel.querySelector(".lash-single-lesson .expanded-lesson");
 if(!article||article.dataset.stageOneVisuals==="1")return;
 const title=(article.querySelector("h2")?.textContent||"").trim().toLocaleLowerCase();
 const en=(typeof getLang==="function"?getLang():"es")==="en";
 const palette={navy:"#203b5b",blue:"#4f83a8",teal:"#4b927f",gold:"#c79a50",rose:"#bd806f",ink:"#35465b",pale:"#eef3f8",cream:"#fbf7ef",line:"#d9e2eb"};
 const frame=(inner)=>'<svg class="lash-edu-svg" viewBox="0 0 760 330" role="img" aria-hidden="true" focusable="false"><rect x="1" y="1" width="758" height="328" rx="18" fill="#ffffff" stroke="#dfe6ee"/>'+inner+'</svg>';
 const txt=(x,y,value,size=19,weight=600,color=palette.ink,anchor="start")=>`<text x="${x}" y="${y}" font-family="Arial,sans-serif" font-size="${size}" font-weight="${weight}" fill="${color}" text-anchor="${anchor}">${value}</text>`;
 const line=(x1,y1,x2,y2,color=palette.ink,width=3)=>`<path d="M${x1} ${y1}L${x2} ${y2}" stroke="${color}" stroke-width="${width}" stroke-linecap="round" fill="none"/>`;
 const dot=(x,y,color=palette.gold)=>`<circle cx="${x}" cy="${y}" r="6" fill="${color}"/>`;
 const diagrams={
  anatomy:[
   {caption:["Corte esquemático del ojo: párpados, córnea y conjuntiva","Schematic eye cross-section: eyelids, cornea and conjunctiva"],svg:()=>frame(
    `<path d="M65 164Q180 64 365 103Q510 130 570 164Q510 198 365 225Q180 264 65 164Z" fill="#eef3f8" stroke="${palette.navy}" stroke-width="5"/><path d="M65 164Q180 64 365 103Q510 130 570 164" fill="none" stroke="${palette.rose}" stroke-width="15" stroke-linecap="round"/><path d="M65 164Q180 264 365 225Q510 198 570 164" fill="none" stroke="${palette.rose}" stroke-width="13" stroke-linecap="round"/><ellipse cx="355" cy="164" rx="83" ry="74" fill="#d8eaf2" stroke="${palette.blue}" stroke-width="4"/><path d="M272 111Q240 164 272 217" fill="none" stroke="${palette.teal}" stroke-width="10"/><circle cx="355" cy="164" r="28" fill="#547fa0"/><circle cx="355" cy="164" r="12" fill="#172c45"/>`+
    line(120,91,100,48,palette.rose,2)+txt(72,38,en?"Upper eyelid":"Párpado superior",17,700,palette.rose)+
    line(132,238,105,286,palette.rose,2)+txt(72,310,en?"Lower eyelid":"Párpado inferior",17,700,palette.rose)+
    line(276,121,220,52,palette.teal,2)+txt(165,39,en?"Conjunctiva":"Conjuntiva",17,700,palette.teal)+
    line(420,116,470,54,palette.blue,2)+txt(478,48,en?"Cornea":"Córnea",17,700,palette.blue)+
    txt(625,153,en?"Ocular":"Superficie",16,700,palette.navy,"middle")+txt(625,176,en?"surface":"ocular",16,700,palette.navy,"middle")
   )},
   {caption:["Pestañas y borde palpebral: zona de trabajo externa","Lashes and eyelid margin: external working area"],svg:()=>frame(
    `<path d="M82 182Q380 18 678 182Q380 294 82 182Z" fill="#f7f9fb" stroke="${palette.navy}" stroke-width="5"/><path d="M92 183Q380 42 668 183" fill="none" stroke="${palette.rose}" stroke-width="13" stroke-linecap="round"/><path d="M105 173L78 111M145 151L128 83M190 132L184 67M240 115L242 54M292 101L300 45M345 92L359 39M400 92L419 39M455 101L480 45M510 115L540 54M560 132L596 67M610 151L650 83" stroke="${palette.navy}" stroke-width="6" stroke-linecap="round"/>`+
    line(180,75,150,30,palette.gold,2)+txt(72,27,en?"Natural lashes":"Pestañas naturales",17,700,palette.gold)+
    line(540,205,590,270,palette.rose,2)+txt(600,294,en?"Eyelid margin":"Borde palpebral",17,700,palette.rose)+
    `<rect x="248" y="230" width="264" height="48" rx="12" fill="#edf5f2" stroke="${palette.teal}" stroke-width="2"/>`+txt(380,260,en?"Work on one isolated natural lash":"Trabajar sobre una pestaña aislada",16,700,palette.teal,"middle")
   )},
   {caption:["Observación externa: señales que obligan a posponer o derivar","External screening: signs that require postponing or referral"],svg:()=>frame(
    `<rect x="54" y="48" width="300" height="232" rx="16" fill="#f4f8fb" stroke="${palette.line}" stroke-width="3"/><rect x="406" y="48" width="300" height="232" rx="16" fill="#fff8ef" stroke="#ead9bd" stroke-width="3"/>`+
    txt(204,82,en?"Observe externally":"Observar externamente",20,700,palette.navy,"middle")+txt(556,82,en?"Stop and refer":"Detener y derivar",20,700,palette.rose,"middle")+
    ["Clean appearance","No visible swelling","No unusual tearing"].map((v,i)=>`<circle cx="91" cy="125" r="11" fill="#e6f3ed" stroke="${palette.teal}" stroke-width="2"/>${txt(116,132,en?["Clean appearance","No visible swelling","No unusual tearing"][i]:["Aspecto limpio","Sin hinchazón visible","Sin lagrimeo inusual"][i],16,600)}`).join("")+
    ["Pain or marked redness","Discharge or injury","Active irritation"].map((v,i)=>`<path d="M447 ${114+i*52}l20 20m0 -20l-20 20" stroke="${palette.rose}" stroke-width="4" stroke-linecap="round"/>${txt(482,132+i*52,en?["Pain or marked redness","Discharge or injury","Active irritation"][i]:["Dolor o enrojecimiento","Secreción o lesión","Irritación activa"][i],16,600)}`).join("")+
    txt(380,310,en?"Observation is not a medical diagnosis":"La observación no es un diagnóstico médico",16,700,palette.ink,"middle")
   )}
  ],
  natural:[
   {caption:["Estructura simplificada: tallo, raíz y folículo","Simplified structure: shaft, root and follicle"],svg:()=>frame(
    `<rect x="60" y="196" width="640" height="86" rx="12" fill="#f3e8dc"/><path d="M380 205Q375 148 380 72Q384 42 399 22" fill="none" stroke="${palette.navy}" stroke-width="12" stroke-linecap="round"/><path d="M380 186Q322 184 322 235Q322 272 380 272Q438 272 438 235Q438 184 380 186Z" fill="#f8d9c4" stroke="${palette.rose}" stroke-width="4"/><path d="M380 188Q350 206 350 235Q350 257 380 264Q410 257 410 235Q410 206 380 188Z" fill="#d6a78d" stroke="${palette.rose}" stroke-width="3"/>`+
    line(400,50,505,50,palette.navy,2)+txt(520,56,en?"Shaft":"Tallo",19,700,palette.navy)+
    line(408,215,520,170,palette.rose,2)+txt(530,172,en?"Root":"Raíz",19,700,palette.rose)+
    line(437,250,535,265,palette.gold,2)+txt(545,272,en?"Follicle":"Folículo",19,700,palette.gold)+
    txt(90,245,en?"Eyelid skin":"Piel del párpado",17,700,palette.ink)
   )},
   {caption:["Longitud y diámetro influyen en el peso y la palanca","Length and diameter affect weight and leverage"],svg:()=>frame(
    `<path d="M105 248Q155 192 218 85" stroke="${palette.teal}" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M350 248Q402 183 465 52" stroke="${palette.navy}" stroke-width="13" fill="none" stroke-linecap="round"/><path d="M580 248Q632 183 680 52" stroke="${palette.rose}" stroke-width="5" fill="none" stroke-linecap="round"/>`+
    line(105,268,218,268,palette.teal,2)+line(105,258,105,278,palette.teal,2)+line(218,258,218,278,palette.teal,2)+
    line(350,268,465,268,palette.navy,2)+line(350,258,350,278,palette.navy,2)+line(465,258,465,278,palette.navy,2)+
    txt(160,305,en?"Short / fine":"Corta / fina",16,700,palette.teal,"middle")+txt(408,305,en?"Thicker fibre":"Fibra más gruesa",16,700,palette.navy,"middle")+
    `<path d="M580 248L680 52" stroke-dasharray="8 7" stroke="${palette.gold}" stroke-width="2" fill="none"/>`+txt(610,38,en?"Longer lever":"Mayor palanca",16,700,palette.gold,"middle")+
    txt(380,35,en?"Choose load for the natural lash":"Adaptar la carga a la pestaña natural",18,700,palette.ink,"middle")
   )},
   {caption:["Aislamiento individual y alineación sin unir pestañas vecinas","Individual isolation and alignment without bonding neighbouring lashes"],svg:()=>frame(
    `<path d="M105 245Q120 150 160 65M290 245Q305 150 345 65M475 245Q490 150 530 65" stroke="${palette.navy}" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M160 65L173 28M345 65L358 28M530 65L543 28" stroke="${palette.gold}" stroke-width="5" fill="none" stroke-linecap="round"/>`+
    `<rect x="65" y="258" width="190" height="42" rx="10" fill="#eaf4ef" stroke="${palette.teal}" stroke-width="2"/><rect x="280" y="258" width="190" height="42" rx="10" fill="#fff5e8" stroke="${palette.gold}" stroke-width="2"/><rect x="495" y="258" width="200" height="42" rx="10" fill="#fbeeee" stroke="${palette.rose}" stroke-width="2"/>`+
    txt(160,285,en?"One lash / one bond":"Una pestaña / una unión",15,700,palette.teal,"middle")+txt(375,285,en?"Follow growth direction":"Seguir dirección natural",15,700,palette.gold,"middle")+txt(595,285,en?"No sticky bonds":"Evitar uniones múltiples",15,700,palette.rose,"middle")+
    txt(160,32,en?"Natural lash":"Pestaña natural",16,700,palette.navy,"middle")+txt(530,32,en?"Extension fibre":"Fibra de extensión",16,700,palette.gold,"middle")
   )}
  ],
  growth:[
   {caption:["Fases generales del ciclo: anágena, catágena y telógena","General phases: anagen, catagen and telogen"],svg:()=>frame(
    `<circle cx="380" cy="165" r="112" fill="none" stroke="#e8edf2" stroke-width="34"/><path d="M380 53A112 112 0 0 1 486 202" fill="none" stroke="${palette.teal}" stroke-width="30"/><path d="M486 202A112 112 0 0 1 280 232" fill="none" stroke="${palette.gold}" stroke-width="30"/><path d="M280 232A112 112 0 0 1 380 53" fill="none" stroke="${palette.blue}" stroke-width="30"/>`+
    txt(380,155,en?"Lash":"Ciclo",24,700,palette.navy,"middle")+txt(380,184,en?"cycle":"de pestaña",22,700,palette.navy,"middle")+
    txt(380,30,en?"ANAGEN · growth":"ANÁGENA · crecimiento",17,700,palette.teal,"middle")+txt(610,250,en?"CATAGEN · transition":"CATÁGENA · transición",16,700,palette.gold,"middle")+txt(140,250,en?"TELOGEN · rest":"TELÓGENA · reposo",16,700,palette.blue,"middle")
   )},
   {caption:["Las pestañas de un mismo párpado pueden estar en fases distintas","Lashes on one eyelid can be in different phases"],svg:()=>frame(
    `<path d="M75 245Q380 120 685 245" fill="none" stroke="${palette.rose}" stroke-width="15" stroke-linecap="round"/>`+
    [160,290,420,550].map((x,i)=>{const colors=[palette.teal,palette.gold,palette.blue,palette.teal];const heights=[115,75,95,130];return `<path d="M${x} 235Q${x-8} ${235-heights[i]} ${x+4} ${235-heights[i]-28}" stroke="${palette.navy}" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="${x+4}" cy="${235-heights[i]-28}" r="9" fill="${colors[i]}"/>${txt(x,295,en?["Growth","Transition","Rest","Growth"][i]:["Crecimiento","Transición","Reposo","Crecimiento"][i],14,700,colors[i],"middle")}`}).join("")+
    txt(380,45,en?"Natural renewal is asynchronous":"La renovación natural no está sincronizada",19,700,palette.navy,"middle")
   )},
   {caption:["Antes del relleno: revisar crecimiento, unión y estado de cada pestaña","Before an infill: assess growth, bond and each natural lash"],svg:()=>frame(
    `<rect x="48" y="54" width="300" height="222" rx="16" fill="#eef6f1" stroke="${palette.teal}" stroke-width="3"/><rect x="412" y="54" width="300" height="222" rx="16" fill="#fff4ed" stroke="${palette.rose}" stroke-width="3"/>`+
    txt(198,88,en?"STABLE":"ESTABLE",20,700,palette.teal,"middle")+txt(562,88,en?"GROWN OUT / LOOSE":"CRECIDA / SUELTA",20,700,palette.rose,"middle")+
    `<path d="M115 220Q130 160 145 118M235 220Q250 160 265 118M480 220Q500 155 545 110M600 220Q615 155 650 110" stroke="${palette.navy}" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M145 118L151 93M265 118L271 93M545 110L570 83M650 110L675 83" stroke="${palette.gold}" stroke-width="5" stroke-linecap="round"/>`+
    txt(198,252,en?"Review and maintain":"Revisar y mantener",16,700,palette.teal,"middle")+txt(562,252,en?"Remove safely if indicated":"Retirar con técnica segura",16,700,palette.rose,"middle")+
    txt(380,312,en?"Never pull or pluck an extension":"Nunca tirar ni arrancar una extensión",16,700,palette.ink,"middle")
   )}
  ],
  consultation:[
   {caption:["Consulta inicial: expectativas, antecedentes y comodidad","Initial consultation: expectations, history and comfort"],svg:()=>frame(
    `<circle cx="130" cy="125" r="38" fill="#e8f1f8" stroke="${palette.blue}" stroke-width="4"/><path d="M65 270Q68 190 130 190Q192 190 195 270" fill="#e8f1f8" stroke="${palette.blue}" stroke-width="4"/><rect x="270" y="48" width="420" height="230" rx="16" fill="#f7f9fb" stroke="${palette.line}" stroke-width="3"/>`+
    ["Expectations","Previous reactions","Current symptoms","Design preferences"].map((v,i)=>`<circle cx="315" cy="98" r="10" fill="#e6f3ed" stroke="${palette.teal}" stroke-width="2"/>${txt(342,105,en?["Expected result","Previous reactions","Current symptoms","Design preferences"][i]:["Resultado esperado","Reacciones anteriores","Síntomas actuales","Preferencias de diseño"][i],18,600)}`).join("")+
    txt(130,310,en?"Client":"Clienta",16,700,palette.navy,"middle")+txt(480,32,en?"Ask and listen — do not diagnose":"Preguntar y escuchar — no diagnosticar",17,700,palette.navy,"middle")
   )},
   {caption:["Ficha de cliente: información necesaria, trazabilidad y confidencialidad","Client record: necessary information, traceability and confidentiality"],svg:()=>frame(
    `<rect x="210" y="28" width="340" height="276" rx="14" fill="#f8fafc" stroke="${palette.blue}" stroke-width="3"/><rect x="235" y="52" width="290" height="42" rx="8" fill="#eaf0f6"/>`+
    txt(380,80,en?"CLIENT RECORD":"FICHA DE CLIENTE",18,700,palette.navy,"middle")+
    ["Date / service","Product and batch","Observations","Consent / aftercare"].map((v,i)=>`<rect x="240" y="116" width="16" height="16" rx="3" fill="#e8f4ed" stroke="${palette.teal}" stroke-width="2"/>${txt(272,130,en?["Date / service","Product and batch","Observations","Consent / aftercare"][i]:["Fecha / servicio","Producto y lote","Observaciones","Consentimiento / cuidados"][i],16,600)}`).join("")+
    `<path d="M570 95Q640 95 640 165V220Q640 258 600 258H565" fill="none" stroke="${palette.gold}" stroke-width="4" stroke-linecap="round"/><path d="M575 245L560 258L575 271" fill="none" stroke="${palette.gold}" stroke-width="4"/>`+
    txt(620,70,en?"Private":"Datos",16,700,palette.gold,"middle")+txt(620,90,en?"data":"privados",16,700,palette.gold,"middle")+txt(380,320,en?"Collect only what is necessary and protect access":"Recoger solo lo necesario y proteger el acceso",15,700,palette.ink,"middle")
   )},
   {caption:["Consentimiento informado y criterio de parada ante señales de alarma","Informed consent and stop decision when warning signs appear"],svg:()=>frame(
    `<rect x="55" y="56" width="285" height="218" rx="16" fill="#eef6f1" stroke="${palette.teal}" stroke-width="3"/><rect x="420" y="56" width="285" height="218" rx="16" fill="#fff3ee" stroke="${palette.rose}" stroke-width="3"/>`+
    `<circle cx="198" cy="130" r="42" fill="#fff" stroke="${palette.teal}" stroke-width="4"/><path d="M176 130L192 147L222 111" fill="none" stroke="${palette.teal}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`+
    `<path d="M562 88L606 168H518Z" fill="#fff" stroke="${palette.rose}" stroke-width="4"/><path d="M562 112V142" stroke="${palette.rose}" stroke-width="7" stroke-linecap="round"/><circle cx="562" cy="154" r="4" fill="${palette.rose}"/>`+
    txt(198,210,en?"Explain risks and aftercare":"Explicar riesgos y cuidados",16,700,palette.teal,"middle")+txt(562,210,en?"Pain, redness or discharge":"Dolor, ojo rojo o secreción",16,700,palette.rose,"middle")+
    txt(198,245,en?"Consent is informed and voluntary":"Consentimiento libre e informado",14,600,palette.ink,"middle")+txt(562,245,en?"Stop service and refer":"Detener servicio y derivar",14,600,palette.ink,"middle")
   )}
  ]
 };
 let key="";
 if(/anatom[ií]a b[aá]sica del ojo|basic anatomy of the eye/.test(title))key="anatomy";
 else if(/estructura de la pesta[nñ]a natural|natural eyelash structure/.test(title))key="natural";
 else if(/ciclo de crecimiento(?: de la pesta[nñ]a)?|eyelash growth cycle/.test(title))key="growth";
 else if(/evaluaci[oó]n inicial y ficha de cliente|initial consultation and client record/.test(title))key="consultation";
 if(!key)return;
 const headings=[...article.querySelectorAll("h3")];
 const development=headings.find(h=>/desarrollo de la lecci[oó]n|lesson development/i.test(h.textContent.trim()));
 if(!development)return;
 article.dataset.stageOneVisuals="1";
 let node=development.nextElementSibling,index=0;
 while(node&&node.tagName!=="H3"){
  const next=node.nextElementSibling;
  if(node.tagName==="P"&&node.textContent.trim()){
   const item=diagrams[key][index];
   if(item){
    const figure=document.createElement("figure");
    figure.className="lash-edu-figure";
    figure.setAttribute("role","group");
    figure.setAttribute("aria-label",item.caption[en?1:0]);
    figure.innerHTML=item.svg()+'<figcaption>'+(en?item.caption[1]:item.caption[0])+'</figcaption>';
    node.insertAdjacentElement("afterend",figure);
   }
   index++;
  }
  node=next;
 }
 const style=document.createElement("style");
 style.dataset.lashEduStyle="1";
 style.textContent='.lash-edu-figure{width:100%;max-width:900px;margin:14px auto 24px;padding:10px;background:#fff;border:1px solid #dfe6ee;border-radius:16px;box-shadow:0 7px 22px #1727470b;overflow:hidden}.lash-edu-svg{display:block;width:100%;height:auto;max-height:390px}.lash-edu-figure figcaption{padding:9px 12px 5px;text-align:center;color:#52647a;font-size:13px;font-weight:700;line-height:1.5}.lash-single-lesson .expanded-lesson>p{line-height:1.85}.lash-single-lesson .lash-edu-figure+ h3{margin-top:24px}@media(max-width:600px){.lash-edu-figure{padding:5px;margin:10px auto 18px;border-radius:12px}.lash-edu-figure figcaption{font-size:12px;padding:8px 7px}.lash-edu-svg{max-height:none}}@media(prefers-reduced-motion:reduce){.lash-edu-figure{scroll-behavior:auto}}';
 if(!document.querySelector('style[data-lash-edu-style="1"]'))document.head.appendChild(style);
}
function addStageOneLessonDiagrams(panel){
 if(!panel)return;
 const articles=[...panel.querySelectorAll(".expanded-course .expanded-lesson")];
 let stageTwoCards=null;
 if(typeof window.buildVisuals==="function"){
  const visualHolder=document.createElement("div");
  visualHolder.innerHTML=window.buildVisuals(1);
  stageTwoCards=[...visualHolder.querySelectorAll(".atlas-card")];
 }
 const stageTwoVisualIndex=title=>{
  if(/materiales y fibras comerciales|commercial extension materials and fibres/i.test(title))return 2;
  if(/longitudes, di[aá]metros y grosores|extension lengths, diameters and thicknesses/i.test(title))return 1;
  if(/curvaturas y perfiles|curl types and profiles/i.test(title))return 0;
  if(/tipos de bandejas y presentaci[oó]n|tray types and presentation/i.test(title))return 3;
  return -1;
 };
 articles.forEach(article=>{
  const holder=document.createElement("div");
  holder.className="lash-single-lesson";
  holder.appendChild(article.cloneNode(true));
  addParagraphVectorSchemes(holder);
  const updated=holder.querySelector(".expanded-lesson");
  if(updated){
   const title=(updated.querySelector("h2")?.textContent||"").trim();
   const visualIndex=stageTwoVisualIndex(title);
   if(visualIndex>=0&&stageTwoCards&&stageTwoCards[visualIndex]){
    const support=document.createElement("section");
    support.className="lash-one-support";
    const heading=document.createElement("h3");
    heading.textContent=getLang()==="en"?"Visual guide":"Imagen correspondiente";
    support.appendChild(heading);
    support.appendChild(stageTwoCards[visualIndex].cloneNode(true));
    const stepsHeading=[...updated.querySelectorAll("h3")].find(h=>/pasos de aprendizaje guiado|guided learning steps/i.test(h.textContent));
    if(stepsHeading)updated.insertBefore(support,stepsHeading);
    else updated.appendChild(support);
   }
   article.replaceWith(updated);
  }
 });
}

const lesson=(tEs,tEn,oEs,oEn,cEs,cEn,sEs,sEn,aEs,aEn,qEs,qEn,rEs,rEn)=>({
 es:{title:tEs,objective:oEs,content:cEs,steps:sEs,avoid:aEs,check:qEs,answer:rEs},
 en:{title:tEn,objective:oEn,content:cEn,steps:sEn,avoid:aEn,check:qEn,answer:rEn}
});
const stages=[
{title:"Adhesivos, pegamentos y productos auxiliares",intro:"Comprender el adhesivo como producto químico profesional: composición declarada, documentación, comportamiento, condiciones de uso y respuesta segura ante exposiciones.",lessons:[
lesson("Familias de adhesivos y composición","Adhesive families and composition","Distinguir adhesivos por su composición declarada y reconocer qué documentación debe revisarse antes de utilizarlos.","Distinguish adhesives by their declared composition and identify the documentation to review before use.",
["Los adhesivos para extensiones son mezclas químicas formuladas para unir una fibra a una pestaña natural. Muchos sistemas profesionales utilizan cianoacrilatos, pero la fórmula, los aditivos, los pigmentos y los posibles sensibilizantes varían. No se debe deducir la composición por el color, el olor, la viscosidad ni la publicidad del envase.",
"Antes de incorporar un adhesivo, identifica fabricante, nombre comercial, ingredientes o composición declarada, lote, caducidad, advertencias, uso previsto y documentación técnica. Lee la ficha de datos de seguridad cuando esté disponible y conserva acceso a ella. Si el envase está deteriorado, sin identificación o fuera de fecha, no lo utilices."],
["Extension adhesives are chemical mixtures designed to bond a fibre to a natural lash. Many professional systems use cyanoacrylates, but formulas, additives, pigments and potential sensitizers vary. Composition cannot be reliably inferred from colour, smell, viscosity or marketing claims.",
"Before using an adhesive, identify the manufacturer, product name, declared ingredients or composition, batch, expiry, warnings, intended use and technical documentation. Read the safety data sheet when available and keep it accessible. Do not use damaged, unidentified or expired containers."],
["Compara dos fichas técnicas y localiza la composición declarada y las advertencias.","Localiza el lote, la caducidad y el uso previsto en el envase real.","Registra el producto elegido en una ficha de inventario y explica por qué es adecuado para el uso previsto."],
["Compare two technical sheets and locate declared composition and warnings.","Find the batch, expiry and intended use on the actual container.","Record the selected product on an inventory sheet and explain why it is suitable for its intended use."],
["No mezclar adhesivos ni combinar marcas sin confirmación escrita de compatibilidad.","No utilizar un producto sin etiqueta, trazabilidad o instrucciones comprensibles."],
["Do not mix adhesives or combine brands without written compatibility confirmation.","Do not use a product without a label, traceability or understandable instructions."],
"¿Qué documentación debes revisar antes de utilizar un adhesivo profesional?","What documentation should be reviewed before using a professional adhesive?",
"La etiqueta, la ficha técnica y la ficha de datos de seguridad disponible, además de las instrucciones del fabricante y los requisitos locales.","The label, technical sheet and available safety data sheet, together with manufacturer instructions and local requirements."),
lesson("Viscosidad, velocidad de trabajo y polimerización","Viscosity, working speed and polymerisation","Explicar cómo la viscosidad y el curado influyen en la manipulación sin convertir los tiempos comerciales en reglas universales.","Explain how viscosity and curing affect handling without treating advertised times as universal rules.",
["La viscosidad describe la resistencia del adhesivo a fluir. Una fórmula más fluida puede comportarse de manera distinta de una más espesa, pero ninguna viscosidad garantiza por sí sola una unión segura. La velocidad anunciada por el fabricante depende del sistema completo y de las condiciones de uso.",
"La polimerización es el proceso químico por el que el adhesivo forma la unión. Humedad, temperatura, cantidad de producto, antigüedad de la gota, técnica y compatibilidad de materiales pueden modificar el comportamiento. Sigue el rango y el método indicados por el fabricante; no añadas agua, aceleradores ni otros productos para corregir una unión."],
["Viscosity describes a liquid's resistance to flow. A more fluid formula may behave differently from a thicker one, but viscosity alone does not guarantee a safe bond. A manufacturer's advertised speed depends on the complete system and conditions of use.",
"Polymerisation is the chemical process through which the adhesive forms a bond. Humidity, temperature, product quantity, drop age, technique and material compatibility may affect behaviour. Follow the manufacturer's stated range and method; do not add water, accelerators or other products to correct a bond."],
["Compara dos adhesivos en sus fichas sin asumir que el más rápido es mejor.","Describe cómo cambia una gota expuesta con el paso del tiempo siguiendo la demostración del formador.","Anota qué variables deben registrarse cuando la retención cambia."],
["Compare two adhesives using their technical sheets without assuming the faster one is better.","Describe how an exposed drop changes over time using the trainer's demonstration.","Record which variables should be tracked when retention changes."],
["No reutilizar una gota que haya perdido las características indicadas por el fabricante.","No inventar tiempos de curado ni corregir la fórmula con mezclas caseras."],
["Do not reuse a drop that no longer has the characteristics specified by the manufacturer.","Do not invent curing times or alter the formula with homemade mixtures."],
"¿Por qué el tiempo de curado indicado no debe tratarse como una cifra universal?","Why should a stated curing time not be treated as a universal value?",
"Porque depende de la formulación, humedad, temperatura, cantidad, antigüedad de la gota, técnica y demás condiciones del sistema.","Because it depends on the formula, humidity, temperature, amount, drop age, technique and other system conditions."),
lesson("Humedad, temperatura y almacenamiento","Humidity, temperature and storage","Registrar las condiciones ambientales y conservar el adhesivo según las instrucciones específicas del fabricante.","Record environmental conditions and store adhesive according to the manufacturer's specific instructions.",
["La humedad y la temperatura del espacio pueden influir en el comportamiento de algunos adhesivos. Utiliza instrumentos adecuados y registra las lecturas antes del servicio; después compáralas con el intervalo declarado para el producto concreto. Si el ambiente está fuera de rango, no improvises ajustes ni continúes como si nada ocurriera.",
"El almacenamiento depende de la fórmula y del envase. Respeta las instrucciones sobre cierre, posición, luz, calor, humedad, refrigeración y transporte. Anota la fecha de apertura cuando proceda y no uses el adhesivo después de su caducidad o del periodo de uso tras apertura indicado por el fabricante."],
["Room humidity and temperature may influence the behaviour of some adhesives. Use suitable instruments and record readings before the service; compare them with the range stated for the specific product. If conditions are outside that range, do not improvise adjustments or proceed as though nothing has changed.",
"Storage depends on the formula and container. Follow instructions about closure, position, light, heat, humidity, refrigeration and transport. Record the opening date when applicable and do not use adhesive after expiry or beyond the stated post-opening period."],
["Practica la lectura de un termómetro y un higrómetro y registra fecha y hora.","Compara el registro con el rango de una ficha técnica real.","Diseña una etiqueta de control con fecha de apertura, lote y fecha límite indicada."],
["Practise reading a thermometer and hygrometer and record date and time.","Compare the record with the range in an actual technical sheet.","Design a control label showing opening date, batch and stated use-by date."],
["No asumir que todos los adhesivos se refrigeran o se conservan de la misma manera.","No utilizar el producto si no puedes verificar sus condiciones de conservación."],
["Do not assume all adhesives require refrigeration or identical storage conditions.","Do not use the product if its storage conditions cannot be verified."],
"¿Qué debes hacer si las condiciones ambientales quedan fuera del rango del adhesivo?","What should you do if environmental conditions fall outside the adhesive's stated range?",
"Detener la preparación, verificar el instrumento y la ficha del fabricante, corregir solo mediante un método autorizado y posponer el servicio si no se restablecen condiciones adecuadas.","Pause preparation, verify the instrument and manufacturer's sheet, adjust only by an authorised method, and postpone the service if suitable conditions cannot be restored."),
lesson("Limpiador, primer, bonder y removedor","Cleanser, primer, bonder and remover","Diferenciar productos auxiliares por su finalidad y comprobar compatibilidad, zona de aplicación y advertencias.","Differentiate auxiliary products by purpose and check compatibility, application area and warnings.",
["El limpiador se utiliza para retirar residuos compatibles con el sistema; el primer puede preparar la superficie según la fórmula; el bonder puede intervenir en el acabado o curado cuando el fabricante lo contempla; el removedor está diseñado para deshacer la unión. Sus nombres comerciales no garantizan que todos tengan la misma composición o modo de empleo.",
"Lee la etiqueta de cada producto y verifica si está diseñado para pestañas, si requiere enjuague o secado, cuánto debe aplicarse, qué materiales son compatibles y qué precauciones exige. Los removedores merecen especial control: deben mantenerse lejos del ojo, la piel no prevista y las mucosas, y utilizarse solo con formación y procedimiento adecuados."],
["A cleanser removes residues compatible with the system; a primer may prepare the surface according to its formula; a bonder may affect finishing or curing when specified by the manufacturer; a remover is designed to break down the bond. Marketing names do not mean every product has the same composition or use.",
"Read each product label and verify whether it is intended for lashes, whether rinsing or drying is required, how much to apply, which materials are compatible and what precautions apply. Removers require particular control: keep them away from the eye, unintended skin areas and mucous membranes, and use them only with suitable training and procedure."],
["Clasifica cuatro envases por función y explica qué dato de la etiqueta confirma su uso.","Construye una tabla de compatibilidad basada únicamente en documentación del fabricante.","Explica el protocolo de actuación si un producto auxiliar entra en contacto accidental con el ojo."],
["Classify four containers by function and explain which label detail confirms their use.","Build a compatibility table based only on manufacturer documentation.","Explain the response protocol if an auxiliary product accidentally contacts the eye."],
["No sustituir un producto por otro solo porque el envase o el nombre parezcan similares.","No aplicar removedor sobre la piel ni permitir que alcance el ojo."],
["Do not substitute one product for another merely because its container or name looks similar.","Do not apply remover to skin or allow it to reach the eye."],
"¿Qué determina si dos productos auxiliares pueden utilizarse juntos?","What determines whether two auxiliary products may be used together?",
"La compatibilidad documentada por sus fabricantes, sus instrucciones de uso y las condiciones del sistema completo.","Documented compatibility from their manufacturers, their instructions for use and the conditions of the complete system.")
]},
{title:"Instrumental manual y accesorios no eléctricos",intro:"Identificar herramientas, seleccionar las apropiadas y mantener un flujo limpio, ergonómico y trazable.",lessons:[
lesson("Pinzas de aislamiento y aplicación","Isolation and application tweezers","Diferenciar las funciones de las pinzas y comprobar su ajuste antes de utilizarlas.","Distinguish tweezer functions and check their condition before use.",
["Las pinzas rectas, curvas, tipo boot y de volumen presentan geometrías distintas. La pinza de aislamiento debe permitir separar una pestaña natural sin atrapar las vecinas; la de aplicación debe sujetar la fibra con control. La forma de la punta, el ángulo, el cierre y la mano de la profesional influyen en la elección.",
"Antes de cada práctica, inspecciona puntas, alineación, cierre, rebabas, corrosión y limpieza. Prueba el agarre sobre una tira de entrenamiento. Una herramienta que resbala, se engancha o exige fuerza excesiva debe retirarse y sustituirse; no intentes corregir puntas dañadas con métodos improvisados."],
["Straight, curved, boot-style and volume tweezers have different geometries. Isolation tweezers should separate one natural lash without trapping neighbours; application tweezers should hold the fibre with control. Tip shape, angle, closure and the professional's hand affect selection.",
"Before each practice, inspect tips, alignment, closure, burrs, corrosion and cleanliness. Test grip on a training strip. Remove and replace any tool that slips, catches or requires excessive force; do not attempt improvised repairs to damaged tips."],
["Identifica cinco tipos de pinza y describe su función en una ficha.","Comprueba alineación y cierre sujetando una tira de práctica sin forzar.","Separa una pestaña dibujada o simulada sin mover las fibras vecinas."],
["Identify five tweezer types and describe their function on a record sheet.","Check alignment and closure by holding a practice strip without forcing it.","Isolate one drawn or simulated lash without moving neighbouring fibres."],
["No utilizar pinzas dobladas, oxidadas o con puntas que no cierran correctamente.","No compartir herramientas reutilizables sin el procesamiento requerido."],
["Do not use bent or rusty tweezers or tips that do not close correctly.","Do not share reusable tools without the required reprocessing."],
"¿Qué debe comprobarse en una pinza antes de comenzar la práctica?","What should be checked on tweezers before practice?",
"La alineación, el cierre, la integridad de las puntas, la limpieza y que el agarre sea controlable sin fuerza excesiva.","Alignment, closure, tip integrity, cleanliness and whether grip is controllable without excessive force."),
lesson("Parches, cintas y accesorios de preparación","Pads, tapes and preparation accessories","Seleccionar accesorios adecuados para el área periocular y colocarlos sin presión ni contacto ocular.","Select accessories suitable for the periocular area and place them without pressure or eye contact.",
["Los parches y cintas ayudan a mantener separadas las pestañas inferiores y facilitar la observación. Deben estar diseñados para el uso previsto, íntegros y compatibles con la piel de la persona. La forma, tamaño y adhesividad deben permitir una colocación estable sin tirar del párpado ni invadir el ojo.",
"Los microbrushes, aplicadores y cepillos desechables son consumibles de uso individual. Prepara únicamente los necesarios y evita introducir un aplicador usado en el envase original. Si aparece picor, ardor, lagrimeo o incomodidad, detén la colocación y retira el accesorio con cuidado según el procedimiento seguro."],
["Pads and tapes help separate lower lashes and improve visibility. They must be designed for the intended use, intact and compatible with the person's skin. Their shape, size and adhesion should allow stable placement without pulling the eyelid or entering the eye.",
"Microbrushes, applicators and disposable brushes are single-use consumables. Prepare only what is needed and never return a used applicator to its original container. If itching, burning, tearing or discomfort occurs, stop placement and carefully remove the accessory using a safe procedure."],
["Compara accesorios etiquetados para uso periocular con materiales no diseñados para ese fin.","Practica la colocación en una plantilla, comprobando que no cubra la línea de agua.","Simula una comprobación de comodidad y retirada ante molestia."],
["Compare products labelled for periocular use with materials not designed for that purpose.","Practise placement on a template, ensuring it does not cover the waterline.","Simulate a comfort check and removal when discomfort occurs."],
["No utilizar cintas domésticas ni adhesivos sin indicación para la zona periocular.","No reutilizar parches, cepillos ni aplicadores desechables."],
["Do not use household tapes or adhesives not intended for the periocular area.","Do not reuse disposable pads, brushes or applicators."],
"¿Cuál es la prioridad al colocar parches o cintas?","What is the priority when placing pads or tapes?",
"Proteger la zona sin tocar el ojo, tirar de la piel ni provocar molestias; comprobar la comodidad antes de continuar.","Protect the area without touching the eye, pulling the skin or causing discomfort; check comfort before proceeding."),
lesson("Paletas, soportes y superficies para adhesivo","Palettes, holders and adhesive surfaces","Organizar superficies de trabajo que puedan mantenerse limpias y evitar contaminación del adhesivo.","Organise work surfaces that can be kept clean and prevent adhesive contamination.",
["Las paletas, placas, anillos y soportes mantienen ordenada la gota de adhesivo y otros materiales. Deben ser compatibles con el producto y permitir limpieza o eliminación según corresponda. Las superficies porosas, agrietadas o difíciles de procesar pueden retener residuos y no son apropiadas si no existe un método seguro de descontaminación.",
"Utiliza una superficie limpia y preparada para cada sesión. Evita que la boquilla del envase toque la gota, la paleta o cualquier material contaminado. Desecha los residuos según las indicaciones del producto y la normativa local; no devuelvas adhesivo sobrante al envase original."],
["Palettes, plates, rings and holders organise the adhesive drop and other materials. They must be compatible with the product and allow cleaning or disposal as appropriate. Porous, cracked or difficult-to-process surfaces may retain residue and are unsuitable when no safe decontamination method exists.",
"Use a clean surface prepared for each session. Prevent the bottle nozzle from touching the drop, palette or contaminated material. Dispose of residue according to product instructions and local rules; never return leftover adhesive to its original container."],
["Evalúa tres soportes por material, porosidad y posibilidad de limpieza.","Organiza una estación de práctica con zonas limpias y residuos separados.","Explica cómo evitar que la boquilla del adhesivo se contamine."],
["Assess three holders by material, porosity and cleanability.","Arrange a practice station with separate clean and waste areas.","Explain how to prevent contamination of the adhesive bottle nozzle."],
["No reutilizar una superficie desechable ni guardar gotas sobrantes.","No apoyar la boquilla del envase sobre superficies o herramientas."],
["Do not reuse a disposable surface or save leftover drops.","Do not rest the bottle nozzle on surfaces or tools."],
"¿Qué característica debe tener una superficie reutilizable de trabajo?","What characteristic should a reusable work surface have?",
"Debe ser compatible con el uso y disponer de un procedimiento de limpieza y procesamiento eficaz conforme a sus instrucciones.","It must be suitable for the use and have an effective cleaning and reprocessing procedure in accordance with its instructions."),
lesson("Mantenimiento, inventario y ergonomía de herramientas","Tool maintenance, inventory and ergonomics","Crear un sistema de revisión e inventario y organizar las herramientas para reducir errores y posturas forzadas.","Create an inspection and inventory system and organise tools to reduce errors and awkward posture.",
["El mantenimiento incluye inspección visual, limpieza, procesamiento, almacenamiento protegido y retirada de herramientas dañadas. Distingue consumibles de instrumentos reutilizables y conserva las instrucciones del fabricante. Registra las herramientas que requieren reparación o sustitución para que no vuelvan accidentalmente al puesto.",
"Coloca los instrumentos de uso frecuente dentro de un alcance cómodo, con puntas protegidas y sin cruzar la zona limpia con la zona usada. Ajusta la altura de trabajo y la posición de muñecas y hombros. Una postura estable mejora el control fino y reduce la fatiga durante sesiones prolongadas."],
["Maintenance includes visual inspection, cleaning, reprocessing, protected storage and removal of damaged tools. Distinguish consumables from reusable instruments and retain manufacturer instructions. Record tools requiring repair or replacement so they do not accidentally return to the workstation.",
"Place frequently used instruments within comfortable reach, with tips protected and clean and used areas kept separate. Adjust working height and wrist and shoulder position. A stable posture improves fine control and reduces fatigue during longer sessions."],
["Diseña una lista de revisión antes y después de cada jornada.","Clasifica herramientas reutilizables, desechables y fuera de servicio.","Ajusta una estación de práctica para mantener espalda, cuello y muñecas en posición neutra."],
["Design a before-and-after shift inspection checklist.","Classify tools as reusable, disposable or out of service.","Adjust a practice station to keep back, neck and wrists in a neutral position."],
["No guardar herramientas húmedas o sin protección cuando el procedimiento exige secado y almacenamiento.","No continuar usando una herramienta dañada por falta de repuesto."],
["Do not store tools wet or unprotected when the procedure requires drying and protected storage.","Do not keep using a damaged tool because a replacement is unavailable."],
"¿Qué debe hacerse con una herramienta que presenta una punta dañada?","What should be done with a tool that has a damaged tip?",
"Retirarla del servicio, identificarla para que no se reutilice y repararla o sustituirla mediante un método autorizado.","Remove it from service, identify it so it is not reused, and have it repaired or replaced through an authorised method.")
]},
{title:"Equipos eléctricos, mobiliario e iluminación",intro:"Preparar un puesto estable, ergonómico y ventilado, utilizando equipos adecuados y revisados.",lessons:[
lesson("Iluminación, lámparas y lupas","Lighting, lamps and magnifiers","Elegir iluminación que permita observar con precisión sin deslumbrar, generar calor excesivo ni incomodar a la persona.","Choose lighting that supports accurate observation without glare, excessive heat or client discomfort.",
["La iluminación debe permitir distinguir pestañas aisladas, uniones y residuos sin obligar a acercar excesivamente el rostro. Valora intensidad regulable, estabilidad, reproducción de color, dirección y posibilidad de evitar reflejos. Una lupa puede ampliar detalles, pero reduce el campo visual y exige distancia de trabajo adecuada.",
"Coloca la lámpara sin que su estructura toque a la persona ni proyecte calor molesto sobre los ojos. Ajusta la dirección antes de iniciar y comprueba la comodidad. Limpia las superficies según las instrucciones del equipo y evita productos que puedan dañar lentes, difusores o componentes eléctricos."],
["Lighting should make it possible to distinguish isolated lashes, bonds and residue without forcing the professional to bring their face too close. Consider adjustable intensity, stability, colour rendering, direction and glare control. A magnifier enlarges detail but narrows the field of view and requires a suitable working distance.",
"Position the lamp so it does not touch the client or direct uncomfortable heat toward the eyes. Adjust it before starting and check comfort. Clean surfaces according to equipment instructions and avoid products that may damage lenses, diffusers or electrical components."],
["Compara dos lámparas por estabilidad, regulación, reflejos y facilidad de limpieza.","Practica el ajuste de luz sobre una cabeza de entrenamiento.","Identifica señales de deslumbramiento o calor que requieren cambiar la posición."],
["Compare two lamps for stability, adjustability, glare and ease of cleaning.","Practise adjusting light on a training head.","Identify glare or heat signs that require repositioning."],
["No dirigir una fuente de calor intenso hacia el rostro ni utilizar equipos con cable dañado.","No asumir que más brillo siempre significa mejor visibilidad."],
["Do not direct intense heat toward the face or use equipment with damaged cables.","Do not assume that greater brightness always means better visibility."],
"¿Qué factores se valoran al seleccionar una lámpara de trabajo?","What factors should be assessed when selecting a work lamp?",
"Estabilidad, regulación, calidad de iluminación, control del deslumbramiento, calor, limpieza y comodidad.","Stability, adjustability, lighting quality, glare control, heat, cleanability and comfort."),
lesson("Camilla, silla y posición corporal","Treatment bed, chair and body positioning","Ajustar el mobiliario para mantener una postura neutra y permitir acceso seguro a la zona de trabajo.","Adjust furniture to maintain neutral posture and allow safe access to the work area.",
["La camilla debe ser estable y permitir que la persona permanezca cómoda, con apoyo adecuado de cabeza y cuello. La altura debe facilitar que la profesional trabaje sin elevar hombros ni flexionar demasiado la espalda. La silla debe permitir apoyo de pies y movilidad controlada.",
"Antes de comenzar, confirma que la persona puede mantener una posición cómoda y que el profesional puede acceder sin estirarse sobre el rostro. Ajusta la altura y el soporte cuando cambie la tarea. Si la persona refiere dolor, entumecimiento o dificultad respiratoria, interrumpe y modifica la posición."],
["The treatment bed should be stable and allow the client to remain comfortable, with suitable head and neck support. Its height should let the professional work without raised shoulders or excessive back flexion. The chair should support the feet and allow controlled movement.",
"Before starting, confirm that the client can maintain a comfortable position and that the professional can reach the work area without leaning over the face. Adjust height and support when the task changes. If the client reports pain, numbness or breathing difficulty, pause and change the position."],
["Ajusta una estación para dos alturas de trabajo distintas.","Comprueba apoyo de cabeza, cuello, espalda y pies en una simulación.","Registra una pausa ergonómica y los ajustes necesarios."],
["Adjust a workstation for two different working heights.","Check head, neck, back and foot support in a simulation.","Record an ergonomic break and any required adjustments."],
["No dejar a la persona en una posición que cause dolor o dificultad respiratoria.","No trabajar durante periodos prolongados con muñecas dobladas y hombros elevados."],
["Do not leave a client in a position that causes pain or breathing difficulty.","Do not work for prolonged periods with bent wrists and raised shoulders."],
"¿Qué indica que la altura de la camilla debe ajustarse?","What indicates that the treatment bed height should be adjusted?",
"Si obliga a encorvar la espalda, elevar los hombros, doblar las muñecas o estirarse sobre la persona.","If it forces the professional to bend the back, raise shoulders, bend wrists or lean over the client."),
lesson("Temperatura, humedad y ventilación del espacio","Room temperature, humidity and ventilation","Medir las condiciones del espacio y comprender el papel de la ventilación sin improvisar cambios que afecten al adhesivo.","Measure room conditions and understand ventilation without improvising changes that affect adhesive performance.",
["Un termómetro y un higrómetro permiten registrar temperatura y humedad. Los datos se comparan con la ficha del adhesivo usado ese día, no con un valor memorizado para todas las marcas. Registra también cambios relevantes durante la jornada y revisa la calibración o el estado de los instrumentos.",
"La ventilación debe ser adecuada al espacio y reducir la acumulación de vapores, sin dirigir corrientes fuertes hacia los ojos ni alterar de forma no controlada el microclima de trabajo. Si se utilizan extractores o purificadores, sigue las instrucciones del equipo y los requisitos locales de seguridad y ventilación."],
["A thermometer and hygrometer record temperature and humidity. Compare readings with the technical sheet for the adhesive used that day, not with a memorised value for every brand. Also record relevant changes during the session and check instrument condition or calibration.",
"Ventilation should suit the room and help prevent vapour build-up without directing strong air currents toward the eyes or uncontrolled changes to the working microclimate. If extractors or air cleaners are used, follow equipment instructions and local safety and ventilation requirements."],
["Registra temperatura y humedad en tres momentos simulados de la jornada.","Compara los datos con el rango de un adhesivo real.","Dibuja la ubicación de entradas y salidas de aire y detecta corrientes directas sobre el rostro."],
["Record temperature and humidity at three simulated points during a workday.","Compare the readings with the range for an actual adhesive.","Draw air inlets and outlets and identify direct airflow over the face."],
["No inventar un rango ambiental universal ni alterar el adhesivo para compensar el ambiente.","No dirigir ventiladores o extractores de forma incómoda hacia los ojos."],
["Do not invent a universal environmental range or alter adhesive to compensate for room conditions.","Do not direct fans or extractors uncomfortably toward the eyes."],
"¿Con qué referencia se comparan las lecturas ambientales?","What should environmental readings be compared with?",
"Con el intervalo indicado por el fabricante del adhesivo concreto y con las condiciones de seguridad del espacio.","The range stated by the manufacturer for the specific adhesive and the room's safety conditions."),
lesson("Seguridad eléctrica y equipos auxiliares","Electrical safety and auxiliary equipment","Inspeccionar equipos y conexiones y decidir si un dispositivo auxiliar es necesario y compatible.","Inspect equipment and connections and decide whether an auxiliary device is necessary and compatible.",
["Revisa enchufes, cables, aislamiento, estabilidad y limpieza de lámparas, camillas eléctricas y otros dispositivos. Mantén líquidos alejados de conexiones y desconecta el equipo antes de limpiarlo cuando así lo indiquen sus instrucciones. Un cable expuesto, olor a quemado, chispa o calentamiento anormal obliga a retirar el equipo.",
"Humidificadores, ventiladores, nano mister y otros dispositivos no son imprescindibles para todas las técnicas. Solo deben utilizarse cuando su finalidad, compatibilidad y modo de empleo estén documentados y no creen exposición ocular ni contradigan las instrucciones del adhesivo. La seguridad eléctrica y la ventilación nunca se sustituyen con aparatos improvisados."],
["Inspect plugs, cables, insulation, stability and cleanliness of lamps, electric beds and other devices. Keep liquids away from connections and disconnect equipment before cleaning when its instructions require it. Exposed wiring, burning smells, sparks or abnormal heating require removal from service.",
"Humidifiers, fans, nano misters and other devices are not essential for every technique. Use them only when their purpose, compatibility and method are documented and they do not create eye exposure or conflict with adhesive instructions. Electrical safety and ventilation must never be replaced with improvised devices."],
["Realiza una inspección visual de un equipo desconectado y registra defectos.","Clasifica dispositivos auxiliares por necesidad, compatibilidad y riesgo.","Explica qué harías ante un cable dañado o un olor a quemado."],
["Perform a visual inspection of disconnected equipment and record defects.","Classify auxiliary devices by necessity, compatibility and risk.","Explain what you would do if a cable were damaged or a burning smell appeared."],
["No utilizar equipos con fallos eléctricos ni repararlos con cinta o soluciones temporales.","No añadir dispositivos al protocolo sin verificar compatibilidad."],
["Do not use electrically faulty equipment or repair it with tape or temporary fixes.","Do not add devices to the procedure without verifying compatibility."],
"¿Qué debes hacer ante un cable dañado o un fallo eléctrico?","What should you do if a cable is damaged or an electrical fault occurs?",
"Retirar el equipo del servicio, desconectarlo de forma segura si es posible y solicitar revisión o sustitución por personal competente.","Remove the equipment from service, disconnect it safely if possible, and arrange inspection or replacement by a competent person.")
]},
{title:"Higiene, desinfección y bioseguridad",intro:"Aplicar un flujo de prevención de contaminación con limpieza, desinfección y procesamiento adecuados al tipo de material y a las normas locales.",lessons:[
lesson("Higiene de manos y preparación del puesto","Hand hygiene and workstation preparation","Establecer una secuencia de higiene de manos y preparación del espacio antes y después de cada servicio.","Establish a hand-hygiene and workstation preparation sequence before and after each service.",
["La higiene de manos reduce la transferencia de microorganismos entre personas, herramientas y superficies. Realízala en los momentos definidos por el protocolo aplicable: antes de preparar el material, antes del contacto, después de retirar guantes si se usan, tras tocar material usado y al finalizar. Las manos visiblemente sucias requieren lavado con agua y jabón.",
"Prepara el puesto con una secuencia que evite cruzar zonas: retira residuos, limpia superficies, aplica el desinfectante indicado cuando corresponda y respeta su tiempo de contacto. Coloca después el material limpio y protege los consumibles. Los guantes no sustituyen la higiene de manos."],
["Hand hygiene reduces transfer of microorganisms between people, tools and surfaces. Perform it at the points defined by the applicable protocol: before preparing materials, before contact, after removing gloves if used, after touching used items and at the end. Visibly soiled hands require washing with soap and water.",
"Prepare the workstation in a sequence that prevents cross-over: remove waste, clean surfaces, apply the specified disinfectant where appropriate and respect its contact time. Then place clean materials and protect consumables. Gloves do not replace hand hygiene."],
["Elabora una secuencia de apertura del puesto con puntos de verificación.","Practica higiene de manos siguiendo una guía oficial o protocolo local.","Simula el cambio de zona sucia a zona limpia sin contaminar materiales."],
["Create a workstation opening sequence with verification points.","Practise hand hygiene using an official guide or local protocol.","Simulate moving from a dirty zone to a clean zone without contaminating materials."],
["No considerar los guantes sustitutos del lavado o desinfección de manos.","No colocar material limpio sobre superficies aún sucias o húmedas cuando el producto exige secado."],
["Do not treat gloves as a substitute for handwashing or hand disinfection.","Do not place clean materials on surfaces that remain dirty or wet when the product requires drying."],
"¿Los guantes sustituyen la higiene de manos?","Do gloves replace hand hygiene?",
"No. La higiene de manos sigue siendo necesaria antes y después de las tareas indicadas por el protocolo.","No. Hand hygiene remains necessary before and after the tasks specified by the protocol."),
lesson("Limpieza, desinfección y esterilización","Cleaning, disinfection and sterilisation","Distinguir los tres procesos y seleccionar el que corresponda según el riesgo, el instrumento y la normativa.","Distinguish the three processes and select the one required by risk, instrument and regulation.",
["La limpieza retira suciedad y materia orgánica mediante acción física y un agente apropiado. La desinfección reduce o inactiva microorganismos según el producto y su nivel de eficacia. La esterilización es un proceso validado destinado a eliminar todas las formas de vida microbiana. No son términos intercambiables ni se puede saltar la limpieza cuando el protocolo la exige.",
"El procesamiento depende de cómo se utiliza el instrumento y de la clasificación y normativa aplicables. Sigue instrucciones del fabricante, compatibilidad del material, concentración, tiempo de contacto, enjuague, secado y almacenamiento indicados. No se debe declarar un instrumento estéril si no se ha completado un ciclo validado y controlado."],
["Cleaning removes soil and organic matter through physical action and a suitable agent. Disinfection reduces or inactivates microorganisms according to the product and its efficacy level. Sterilisation is a validated process intended to eliminate all forms of microbial life. These terms are not interchangeable, and cleaning cannot be skipped when required.",
"Processing depends on how an instrument is used and on applicable classification and regulations. Follow manufacturer instructions, material compatibility, concentration, contact time, rinsing, drying and storage requirements. Never label an instrument sterile unless a validated and monitored cycle has been completed."],
["Clasifica ejemplos de materiales según su uso y el procesamiento indicado.","Lee una etiqueta desinfectante y localiza concentración y tiempo de contacto.","Dibuja el flujo completo desde la limpieza hasta el almacenamiento protegido."],
["Classify sample materials by use and required processing.","Read a disinfectant label and locate concentration and contact time.","Draw the complete flow from cleaning to protected storage."],
["No usar un desinfectante fuera de su indicación ni modificar su concentración.","No llamar esterilización a una limpieza o desinfección superficial."],
["Do not use a disinfectant outside its stated purpose or alter its concentration.","Do not call surface cleaning or disinfection sterilisation."],
"¿Qué proceso debe preceder a la desinfección o esterilización cuando hay suciedad?","Which process must precede disinfection or sterilisation when soil is present?",
"La limpieza, porque la suciedad y la materia orgánica pueden interferir con el procesamiento posterior.","Cleaning, because soil and organic matter can interfere with subsequent processing."),
lesson("Material desechable y prevención de contaminación cruzada","Disposable materials and prevention of cross-contamination","Organizar consumibles de un solo uso y separar claramente material limpio, utilizado y residuos.","Organise single-use consumables and clearly separate clean, used and waste materials.",
["Los cepillos, microbrushes, aplicadores y otros consumibles etiquetados como desechables se utilizan una sola vez y para una sola persona. No se limpian para reutilizarlos ni se devuelven al envase original después del contacto. Los productos multiuso requieren un método de dispensación que evite contaminar el contenido restante.",
"Establece recipientes diferenciados para material limpio, material utilizado y residuos. Evita que las pinzas usadas vuelvan a la bandeja limpia y que las manos pasen de una zona contaminada a otra preparada sin higiene. La gestión de residuos debe cumplir las reglas locales, especialmente si hay material con sangre o fluidos."],
["Brushes, microbrushes, applicators and other items labelled disposable are used once and for one person. They must not be cleaned for reuse or returned to the original container after contact. Multi-use products require a dispensing method that prevents contamination of the remaining contents.",
"Set up separate containers for clean materials, used materials and waste. Prevent used tweezers from returning to the clean tray and prevent hands moving from a contaminated area to a prepared area without hygiene. Waste handling must follow local rules, especially for materials containing blood or body fluids."],
["Diseña tres recipientes identificados para el flujo de trabajo.","Simula el cambio de un consumible y la eliminación inmediata del usado.","Identifica un posible punto de contaminación cruzada en una estación de trabajo."],
["Design three labelled containers for the workflow.","Simulate changing a consumable and immediately disposing of the used item.","Identify a possible cross-contamination point at a workstation."],
["No reutilizar consumibles de un solo uso ni compartirlos entre clientes.","No introducir aplicadores usados en frascos o envases originales."],
["Do not reuse single-use consumables or share them between clients.","Do not insert used applicators into original bottles or containers."],
"¿Qué se hace con un aplicador etiquetado como desechable después de utilizarlo?","What should be done with an applicator labelled disposable after use?",
"Se elimina de forma adecuada y no se reutiliza ni se introduce de nuevo en el envase original.","Dispose of it appropriately; do not reuse it or place it back into the original container."),
lesson("Incidentes, exposición y registro de bioseguridad","Incidents, exposure and biosafety records","Responder de forma ordenada ante una exposición o contaminación, documentando hechos y derivando cuando corresponda.","Respond systematically to exposure or contamination, documenting facts and referring when appropriate.",
["Si ocurre una salpicadura, contacto ocular, derrame o contaminación, detén el servicio y evita ampliar la exposición. Sigue la etiqueta y ficha de seguridad del producto, el protocolo del centro y las indicaciones de emergencia locales. No improvises neutralizantes, mezclas ni maniobras sobre el ojo.",
"Registra fecha, hora, producto y lote, zona afectada, descripción objetiva, medidas adoptadas y derivación recomendada. Conserva la confidencialidad y evita diagnósticos o juicios. El registro sirve para aprender, rastrear el producto y mejorar el procedimiento; no sustituye la atención sanitaria."],
["If a splash, eye contact, spill or contamination occurs, stop the service and prevent further exposure. Follow the product label and safety data sheet, the establishment's protocol and local emergency instructions. Do not improvise neutralisers, mixtures or procedures on the eye.",
"Record date, time, product and batch, affected area, objective description, actions taken and recommended referral. Maintain confidentiality and avoid diagnoses or judgement. The record supports learning, product traceability and procedure improvement; it does not replace healthcare."],
["Completa un registro ficticio de incidente con hechos observables.","Localiza en una SDS las instrucciones de primeros auxilios y exposición accidental.","Explica cuándo debe detenerse el servicio y solicitar ayuda sanitaria."],
["Complete a sample incident record using observable facts.","Locate first-aid and accidental-exposure instructions in an SDS.","Explain when the service must stop and healthcare assistance should be sought."],
["No minimizar una exposición ni ocultarla para evitar una queja.","No recomendar medicamentos ni realizar tratamientos oculares."],
["Do not minimise or conceal an exposure to avoid a complaint.","Do not recommend medication or perform eye treatments."],
"¿Qué información básica debe incluir un registro de incidente?","What basic information should an incident record include?",
"Fecha y hora, producto y lote, descripción objetiva, zona afectada, acciones realizadas y derivación o seguimiento recomendado.","Date and time, product and batch, objective description, affected area, actions taken and recommended referral or follow-up.")
]},
{title:"Diseño, visagismo y mapping",intro:"Planificar una distribución estética comprensible y segura, adaptada a la dirección y resistencia de las pestañas naturales.",lessons:[
lesson("Observación y análisis visual del ojo","Observation and visual eye assessment","Observar características externas relevantes para el diseño sin diagnosticar ni etiquetar condiciones anatómicas.","Observe external features relevant to design without diagnosing or labelling anatomical conditions.",
["La valoración estética puede describir apertura visible, simetría aparente, dirección de crecimiento, densidad y distribución de pestañas, espacio disponible y preferencias de la persona. Estas observaciones son descriptivas; no permiten diagnosticar enfermedades, alteraciones funcionales ni condiciones médicas.",
"Compara ambos ojos con la persona en posición cómoda y mirada relajada. Registra diferencias que afecten al diseño, pero explica que el resultado final depende también del crecimiento natural, la selección de fibras y la técnica. Si detectas dolor, secreción, inflamación o lesión, suspende la valoración del servicio y recomienda atención sanitaria."],
["Aesthetic assessment may describe visible openness, apparent symmetry, growth direction, lash density and distribution, available space and the person's preferences. These observations are descriptive; they cannot diagnose disease, functional problems or medical conditions.",
"Compare both eyes with the client comfortable and gaze relaxed. Record differences that affect design, but explain that the final result also depends on natural growth, fibre selection and technique. If pain, discharge, swelling or injury is present, stop the service assessment and recommend healthcare."],
["Completa una ficha descriptiva de ambos ojos usando lenguaje neutral.","Marca dirección y densidad en una plantilla sin hacer diagnósticos.","Explica a una clienta ficticia qué aspectos del resultado pueden variar."],
["Complete a descriptive record of both eyes using neutral language.","Mark direction and density on a template without diagnosing.","Explain to a sample client which aspects of the result may vary."],
["No utilizar etiquetas como defecto o imperfección para describir rasgos naturales.","No prometer modificar la anatomía ni corregir condiciones médicas."],
["Do not use labels such as defect or imperfection for natural features.","Do not promise to change anatomy or correct medical conditions."],
"¿Qué tipo de valoración puede realizar la profesional para diseñar?","What type of assessment may the professional perform for design?",
"Una observación estética externa y descriptiva de pestañas, dirección, simetría aparente y preferencias, sin diagnosticar.","An external, descriptive aesthetic observation of lashes, direction, apparent symmetry and preferences, without diagnosing."),
lesson("Zonas, longitudes y transiciones del mapping","Zones, lengths and mapping transitions","Dividir el ojo en zonas y planificar transiciones graduales que respeten el crecimiento natural y la resistencia.","Divide the eye into zones and plan gradual transitions that respect natural growth and strength.",
["Un mapping representa cómo se distribuyen las longitudes y curvaturas a lo largo del párpado. Puede dividirse en zona interna, central y externa, y añadir subdivisiones cuando sea útil. El dibujo debe ser legible, simétrico cuando proceda y suficientemente flexible para adaptarse a la pestaña real.",
"Las transiciones graduales ayudan a evitar saltos visuales y cambios bruscos de carga. El mapa es una guía, no una obligación: modifica o descarta una sección si la longitud prevista no es compatible con la pestaña natural o si la dirección hace incómoda la colocación."],
["A mapping chart shows how lengths and curls are distributed along the eyelid. It may be divided into inner, central and outer zones, with extra subdivisions when useful. The drawing should be legible, appropriately balanced and flexible enough to adapt to the actual lashes.",
"Gradual transitions help avoid visual jumps and abrupt changes in load. A map is a guide, not a requirement: modify or omit a section if the planned length is unsuitable for the natural lash or if its direction makes placement uncomfortable."],
["Dibuja un mapa de tres zonas y etiqueta cada segmento.","Crea una transición gradual en una plantilla de entrenamiento.","Adapta el mapa cuando una zona tenga pestañas más finas o cortas."],
["Draw a three-zone map and label each segment.","Create a gradual transition on a training template.","Adapt the map when one zone has finer or shorter lashes."],
["No copiar un mapa sin valorar las pestañas reales.","No aumentar longitudes de forma brusca solo para conseguir un efecto de moda."],
["Do not copy a map without assessing the actual lashes.","Do not increase lengths abruptly just to achieve a fashionable effect."],
"¿Qué función cumple el mapping durante la aplicación?","What is the purpose of mapping during application?",
"Servir de guía para distribuir longitudes y curvaturas, que siempre se adaptan a las pestañas y a la comodidad de la persona.","To guide the distribution of lengths and curls, while remaining adaptable to the lashes and the person's comfort."),
lesson("Efectos natural, muñeca, gato y ardilla","Natural, doll, cat-eye and squirrel effects","Reconocer distribuciones visuales habituales y explicar sus límites sin considerarlas recetas universales.","Recognise common visual distributions and explain their limits without treating them as universal recipes.",
["El efecto natural busca una transición discreta; el estilo muñeca suele concentrar mayor longitud hacia el centro; el gato desplaza el énfasis hacia la zona externa; y el efecto ardilla combina una elevación visual antes del extremo. Las definiciones pueden variar entre academias y marcas, por lo que el dibujo debe aclarar qué se entiende por cada estilo.",
"La elección depende de pestañas disponibles, dirección de crecimiento, párpado, simetría aparente y preferencias. Un estilo que funciona en una plantilla puede no ser apropiado para otra persona. Prioriza comodidad, visión libre y carga compatible antes que reproducir exactamente una fotografía."],
["A natural effect aims for a subtle transition; a doll style often places greater length near the centre; a cat-eye shifts emphasis toward the outer area; and a squirrel effect creates a visual lift before the outer edge. Definitions may vary between academies and brands, so the chart should clarify each style.",
"Selection depends on available lashes, growth direction, eyelid, apparent symmetry and preferences. A style that works on a template may not suit another person. Prioritise comfort, unobstructed vision and compatible load over reproducing a photograph exactly."],
["Dibuja los cuatro estilos en plantillas iguales y compara la distribución.","Identifica qué zonas requieren adaptación por crecimiento o densidad.","Explica dos razones para rechazar o modificar un estilo solicitado."],
["Draw the four styles on identical templates and compare their distribution.","Identify zones requiring adaptation because of growth or density.","Explain two reasons to reject or modify a requested style."],
["No presentar un efecto como adecuado para todas las anatomías.","No comprometer visión, comodidad o resistencia por imitar una fotografía."],
["Do not present any effect as suitable for every anatomy.","Do not compromise vision, comfort or lash strength to imitate a photograph."],
"¿Por qué los estilos de mapping no son recetas universales?","Why are mapping styles not universal recipes?",
"Porque cada persona tiene dirección, densidad y resistencia diferentes, además de preferencias y condiciones de comodidad distintas.","Because each person has different growth direction, density and strength, as well as different preferences and comfort needs."),
lesson("Simetría, adaptación y comunicación del diseño","Symmetry, adaptation and design communication","Comparar ambos ojos, adaptar el mapa y obtener acuerdo informado sobre un resultado realista.","Compare both eyes, adapt the map and obtain informed agreement on a realistic result.",
["La simetría estética no significa que ambos ojos sean idénticos. Puede haber diferencias naturales de altura, dirección o densidad. El objetivo es crear una composición equilibrada sin forzar longitudes ni sobrecargar una zona para compensar visualmente otra.",
"Presenta el mapa antes de comenzar y explica qué puede conseguirse, qué limitaciones existen y qué ajustes podrían ser necesarios durante la aplicación. Confirma que la persona comprende el diseño y acepta la propuesta. Si el resultado solicitado no es seguro o realista, ofrece una alternativa o no realices el servicio."],
["Aesthetic symmetry does not mean both eyes are identical. Natural differences in height, direction or density may exist. The goal is a balanced composition without forcing lengths or overloading one area to visually compensate for another.",
"Show the map before starting and explain what can be achieved, what limitations exist and which adjustments may be needed during application. Confirm that the person understands and agrees with the design. If the requested result is unsafe or unrealistic, offer an alternative or decline the service."],
["Prepara dos mapas adaptados a diferencias entre ojos.","Practica explicar el diseño en lenguaje sencillo y confirmar la aceptación.","Registra los cambios acordados y el motivo de cada uno."],
["Prepare two maps adapted to differences between the eyes.","Practise explaining the design in plain language and confirming agreement.","Record agreed changes and the reason for each."],
["No prometer simetría perfecta ni un resultado idéntico a una imagen.","No modificar el diseño acordado sin explicarlo y obtener aceptación."],
["Do not promise perfect symmetry or a result identical to a photograph.","Do not change the agreed design without explaining it and obtaining agreement."],
"¿Qué debe hacerse si el diseño solicitado no es compatible con la pestaña natural?","What should be done if the requested design is incompatible with the natural lashes?",
"Explicar el límite, proponer una alternativa segura o rechazar el servicio si no puede realizarse sin comprometer la pestaña.","Explain the limitation, offer a safe alternative or decline the service if it cannot be performed without compromising the lashes.")
]},
{title:"Consulta, preparación y aislamiento",intro:"Convertir la consulta en una decisión documentada y preparar la zona de trabajo antes de cualquier aplicación.",lessons:[
lesson("Consulta, antecedentes y consentimiento informado","Consultation, history and informed consent","Recoger información pertinente, explicar riesgos y alternativas y documentar una decisión libre e informada.","Collect relevant information, explain risks and alternatives, and document a free and informed decision.",
["La consulta debe explorar expectativas, experiencias previas, reacciones conocidas a cosméticos o adhesivos, molestias actuales, uso de lentes de contacto y condiciones oculares que la persona quiera comunicar. La profesional no diagnostica, no solicita suspender tratamientos médicos y no promete ausencia total de reacciones.",
"Explica el procedimiento, duración aproximada, mantenimiento, riesgos conocidos, cuidados posteriores y alternativa de no realizarlo. El consentimiento debe ser comprensible, voluntario y registrado conforme a las normas aplicables. Una firma no autoriza a continuar si aparecen señales de alarma o la persona cambia de opinión."],
["Consultation should cover expectations, previous experiences, known reactions to cosmetics or adhesives, current discomfort, contact lens use and eye conditions the person wishes to disclose. The professional does not diagnose, ask clients to stop medical treatment or promise that reactions cannot occur.",
"Explain the procedure, approximate duration, maintenance, known risks, aftercare and the option not to proceed. Consent must be understandable, voluntary and recorded according to applicable rules. A signature does not authorise continuation if warning signs appear or the person changes their mind."],
["Realiza una entrevista simulada con preguntas abiertas y neutrales.","Explica riesgos y alternativas sin alarmar ni minimizar.","Documenta la aceptación o la decisión de posponer el servicio."],
["Conduct a simulated interview using open, neutral questions.","Explain risks and alternatives without alarming or minimising.","Document acceptance or the decision to postpone the service."],
["No presionar a la persona para que acepte ni ocultar riesgos.","No tratar el consentimiento como permiso para ignorar síntomas."],
["Do not pressure a person to accept or conceal risks.","Do not treat consent as permission to ignore symptoms."],
"¿Puede el consentimiento firmado justificar el servicio si hay dolor ocular?","Can signed consent justify the service when eye pain is present?",
"No. Se debe detener o posponer el servicio y recomendar valoración sanitaria cuando corresponda.","No. The service must be stopped or postponed and healthcare assessment recommended when appropriate."),
lesson("Limpieza y preparación de pestañas naturales","Cleansing and preparation of natural lashes","Preparar las pestañas con productos compatibles y verificar que la superficie esté lista según las instrucciones del sistema.","Prepare lashes with compatible products and verify readiness according to system instructions.",
["La preparación comienza con la comprobación de que el servicio puede realizarse. Utiliza solo productos destinados al área y compatibles con el adhesivo. Retira maquillaje y residuos siguiendo las instrucciones del fabricante, evita que los líquidos alcancen el ojo y permite el secado o acondicionamiento que el sistema requiera.",
"Comprueba visualmente que no queden residuos, fibras sueltas ni humedad incompatible con el adhesivo. No frotes con fuerza ni utilices sustancias domésticas. Si la limpieza causa irritación, lagrimeo o molestia, detén el proceso y evalúa la necesidad de posponer el servicio."],
["Preparation begins by confirming that the service may proceed. Use only products intended for the area and compatible with the adhesive. Remove makeup and residue according to manufacturer instructions, keep liquids away from the eye and allow the drying or conditioning required by the system.",
"Visually check that no residue, loose fibres or incompatible moisture remains. Do not scrub forcefully or use household substances. If cleansing causes irritation, tearing or discomfort, stop and assess whether the service should be postponed."],
["Clasifica productos de preparación por uso y compatibilidad documentada.","Practica una secuencia de limpieza en una cabeza de entrenamiento.","Identifica residuos o humedad antes de simular la aplicación."],
["Classify preparation products by intended use and documented compatibility.","Practise a cleansing sequence on a training head.","Identify residue or moisture before simulating application."],
["No aplicar productos cerca del ojo sin indicación y control adecuados.","No iniciar la aplicación si la preparación no cumple las instrucciones del sistema."],
["Do not apply products near the eye without suitable indication and control.","Do not begin application if preparation does not meet system instructions."],
"¿Qué confirma que la preparación está terminada?","What confirms that preparation is complete?",
"Que no haya residuos visibles y que las pestañas estén en la condición de limpieza y secado indicada por el fabricante.","That no visible residue remains and the lashes meet the cleanliness and drying condition specified by the manufacturer."),
lesson("Protección inferior y colocación de parches","Lower-lash protection and pad placement","Colocar protección inferior estable y cómoda sin invadir el ojo ni provocar tracción sobre la piel.","Place lower-lash protection securely and comfortably without entering the eye or pulling the skin.",
["Los parches o cintas apropiados mantienen las pestañas inferiores separadas durante el trabajo. Selecciona el tamaño y material según la anatomía y la sensibilidad comunicada. La colocación debe mantenerse alejada de la superficie ocular y permitir que la persona cierre los ojos de forma natural.",
"Comprueba la posición desde distintos ángulos y pregunta por la comodidad antes de continuar. Si el parche se desplaza, roza el ojo o produce ardor, retíralo con cuidado y utiliza una alternativa adecuada o pospón el servicio. No tires de la piel ni fuerces la apertura del párpado."],
["Suitable pads or tapes keep lower lashes separated during the procedure. Choose size and material according to anatomy and reported sensitivity. Placement must remain away from the ocular surface and allow the person to close their eyes naturally.",
"Check the position from different angles and ask about comfort before proceeding. If the pad shifts, touches the eye or causes burning, remove it carefully and use a suitable alternative or postpone the service. Do not pull the skin or force the eyelid open."],
["Practica la colocación sobre una plantilla y revisa el margen respecto al ojo.","Comprueba el cierre natural del ojo en una simulación.","Ensaya la retirada lenta sin tirar de la piel."],
["Practise placement on a template and check clearance from the eye.","Check natural eye closure in a simulation.","Practise slow removal without pulling the skin."],
["No colocar el borde del parche sobre la línea de agua ni el globo ocular.","No continuar si la persona nota pinchazo, ardor o lagrimeo."],
["Do not place the pad edge on the waterline or eyeball.","Do not continue if the person reports stinging, burning or tearing."],
"¿Qué debe comprobarse después de colocar los parches?","What should be checked after placing pads?",
"Que no toquen el ojo, que las pestañas inferiores queden separadas y que la persona pueda cerrar los ojos sin molestias.","That they do not touch the eye, lower lashes remain separated and the person can close their eyes comfortably."),
lesson("Aislamiento de una pestaña natural","Isolation of one natural lash","Practicar la separación individual de pestañas para evitar uniones accidentales y tensión durante el crecimiento.","Practise isolating individual lashes to prevent accidental bonds and tension during growth.",
["El aislamiento consiste en separar una pestaña natural de sus vecinas para que una extensión se una únicamente a esa pestaña. La profesional debe mantener visibilidad, control de la pinza y una posición estable. La práctica inicial se realiza en maniquí, tira o cabeza de entrenamiento antes de cualquier trabajo sobre personas.",
"Una unión accidental entre dos o más pestañas puede generar tirones porque los pelos crecen a ritmos diferentes. Revisa las separaciones durante la práctica y al final de cada zona. Si no puedes aislar con claridad, detente, reajusta iluminación y postura o solicita supervisión; no avances por velocidad."],
["Isolation separates one natural lash from its neighbours so an extension bonds only to that lash. The professional must maintain visibility, tweezer control and a stable position. Initial practice takes place on a mannequin, strip or training head before any work on people.",
"An accidental bond between two or more lashes can create pulling because hairs grow at different rates. Check separations during practice and at the end of each zone. If isolation is unclear, stop, adjust lighting and posture or seek supervision; do not continue for speed."],
["Aísla una fibra en una tira de entrenamiento y observa las vecinas.","Repite el ejercicio cambiando el ángulo de la pinza sin forzarla.","Revisa todas las uniones simuladas antes de dar por terminada la práctica."],
["Isolate one fibre on a training strip and observe neighbouring fibres.","Repeat the exercise while changing tweezer angle without forcing it.","Review all simulated bonds before completing the practice."],
["No unir varias pestañas naturales en una sola aplicación.","No practicar con adhesivo sobre personas sin formación y supervisión adecuadas."],
["Do not bond several natural lashes in one application.","Do not practise with adhesive on people without suitable training and supervision."],
"¿Por qué debe aislarse una sola pestaña natural?","Why must only one natural lash be isolated?",
"Para evitar adhesiones múltiples que pueden producir tensión, molestias y daño cuando las pestañas crecen a ritmos distintos.","To prevent multiple bonds that may cause tension, discomfort and damage as lashes grow at different rates.")
]},
{title:"Aplicación clásica pelo a pelo",intro:"Aprender la lógica de la técnica clásica en material de entrenamiento, priorizando aislamiento, carga responsable, dirección y revisión.",lessons:[
lesson("Selección de fibra y control de adhesivo","Fibre selection and adhesive control","Seleccionar una fibra compatible con la pestaña natural y comprender el control de la cantidad de adhesivo.","Select a fibre compatible with the natural lash and understand adhesive quantity control.",
["La selección se basa en longitud, diámetro, curvatura, material, dirección natural y resistencia de cada pestaña. La fibra debe crear el efecto acordado sin imponer una carga excesiva. No existe una medida universal segura; utiliza referencias del fabricante y criterios enseñados por un profesional cualificado.",
"La cantidad de adhesivo y la zona de contacto dependen del sistema utilizado. La gota debe mantenerse en condiciones adecuadas y la herramienta no debe contaminar el envase. Practica primero sobre tiras y maniquí, observando que la unión sea controlada y sin exceso visible."],
["Selection is based on length, diameter, curl, material, natural direction and the strength of each lash. The fibre should create the agreed effect without excessive load. There is no universal safe measurement; use manufacturer references and criteria taught by a qualified professional.",
"Adhesive amount and contact area depend on the system. The drop must remain in suitable condition and tools must not contaminate the bottle. Practise first on strips and mannequins, checking that the bond is controlled and has no visible excess."],
["Compara fibras de distinta longitud y diámetro y justifica una selección prudente.","Practica la toma de una fibra en tira sin deformarla.","Evalúa una gota simulada y detecta exceso o contaminación."],
["Compare fibres of different lengths and diameters and justify a cautious selection.","Practise picking up a fibre on a strip without deforming it.","Assess a simulated drop and identify excess or contamination."],
["No seleccionar solo por longitud, moda o densidad deseada.","No utilizar más adhesivo para compensar una técnica inestable."],
["Do not select based only on length, trend or desired density.","Do not use more adhesive to compensate for unstable technique."],
"¿Qué determina la selección responsable de una extensión clásica?","What determines responsible selection of a classic extension?",
"La compatibilidad con la resistencia y dirección de la pestaña natural, el diseño acordado y las especificaciones del sistema.","Compatibility with natural lash strength and direction, the agreed design and system specifications."),
lesson("Dirección, alineación y distancia de la piel","Direction, alignment and clearance from skin","Comprender la alineación de la extensión y la necesidad de mantenerla separada de la piel y del ojo.","Understand extension alignment and the need to keep it away from skin and the eye.",
["La extensión debe acompañar la dirección de crecimiento natural y mantener una apariencia ordenada desde varios ángulos. Una fibra torcida o cruzada puede rozar, crear un resultado irregular o dificultar el mantenimiento. La orientación se practica con referencias visuales sobre maniquí, no forzando la pestaña.",
"La unión debe quedar en la pestaña natural, sin adherirse a la piel, al párpado ni a mucosas. La distancia y la geometría exactas dependen de la técnica enseñada y del sistema, por lo que no se deben inventar medidas. Si la fibra toca piel u ojo, detén la práctica y corrige mediante el procedimiento seguro."],
["The extension should follow natural growth direction and look orderly from different angles. A twisted or crossed fibre may rub, create an uneven result or complicate maintenance. Practise orientation using visual references on a mannequin rather than forcing the lash.",
"The bond must be on the natural lash, not on skin, eyelid or mucous membranes. Exact clearance and geometry depend on the taught technique and system, so measurements must not be invented. If a fibre touches skin or eye, stop and correct using a safe procedure."],
["Practica la alineación en tres ángulos de observación.","Identifica en una plantilla uniones que tocan piel o cruzan otras fibras.","Explica por qué no se deben inventar distancias universales."],
["Practise alignment from three viewing angles.","Identify bonds touching skin or crossing other fibres on a template.","Explain why universal clearance measurements should not be invented."],
["No adherir extensiones a la piel ni a varias pestañas a la vez.","No forzar la dirección contra el crecimiento natural."],
["Do not bond extensions to skin or to several lashes at once.","Do not force direction against natural growth."],
"¿Dónde debe quedar la unión de una extensión clásica?","Where should a classic extension bond be placed?",
"Sobre una sola pestaña natural, sin contacto con la piel, el párpado ni la superficie ocular.","On one natural lash only, without contact with skin, eyelid or ocular surface."),
lesson("Separación, adhesiones y control por zonas","Separation, stickies and zone-by-zone control","Detectar uniones accidentales y revisar la separación de las pestañas durante toda la práctica.","Detect accidental bonds and check lash separation throughout practice.",
["Una adhesión accidental ocurre cuando dos o más pestañas quedan unidas por adhesivo o por contacto de fibras. Puede causar tracción, molestias y daño al crecer las pestañas a ritmos diferentes. La revisión no debe limitarse al final: se realiza por zonas y con buena iluminación.",
"En la práctica, utiliza herramientas limpias y movimientos controlados para separar una unión antes de que el sistema cure, siguiendo el método enseñado. Nunca tires de las pestañas ni intentes arrancar una unión ya endurecida. Si no puede corregirse sin tracción, solicita supervisión y aplica el protocolo seguro de retirada."],
["An accidental bond occurs when two or more lashes are joined by adhesive or fibre contact. It may cause pulling, discomfort and damage as lashes grow at different rates. Inspection should not be limited to the end; check each zone under good lighting.",
"During practice, use clean tools and controlled movements to separate a bond before the system cures, following the taught method. Never pull lashes or try to tear apart a cured bond. If it cannot be corrected without traction, seek supervision and follow a safe removal protocol."],
["Simula una revisión de cada zona con iluminación lateral.","Marca uniones múltiples en una cabeza de entrenamiento.","Practica describir el problema y la corrección sin tirar de las fibras."],
["Simulate a zone-by-zone inspection using side lighting.","Mark multiple bonds on a training head.","Practise describing the problem and correction without pulling fibres."],
["No dejar adhesiones múltiples por falta de tiempo.","No arrancar ni separar a la fuerza una unión curada."],
["Do not leave multiple bonds because of time pressure.","Do not tear or forcibly separate a cured bond."],
"¿Qué riesgo generan las adhesiones entre pestañas naturales?","What risk do bonds between natural lashes create?",
"Pueden producir tracción, molestias y daño porque las pestañas unidas crecen a ritmos distintos.","They may cause pulling, discomfort and damage because bonded lashes grow at different rates."),
lesson("Revisión final, comodidad y cuidados posteriores","Final inspection, comfort and aftercare","Completar una revisión sistemática y comunicar cuidados posteriores y señales que requieren consulta.","Complete a systematic final inspection and communicate aftercare and signs that require advice.",
["La revisión final comprueba separación, dirección, estabilidad, limpieza y comodidad. Observa ambos ojos desde distintos ángulos y pregunta si hay dolor, picor, ardor o sensación de cuerpo extraño. La persona debe poder abrir y cerrar los ojos sin molestias atribuibles al trabajo.",
"Entrega instrucciones de cuidado compatibles con los productos utilizados: limpieza, manipulación, cosméticos permitidos y mantenimiento. Explica que no debe arrancar las extensiones y que debe buscar atención sanitaria si aparecen síntomas oculares importantes. Registra productos, lote, diseño, incidencias y recomendaciones."],
["The final inspection checks separation, direction, stability, cleanliness and comfort. Observe both eyes from different angles and ask about pain, itching, burning or foreign-body sensation. The person should be able to open and close the eyes without discomfort caused by the work.",
"Provide aftercare instructions compatible with the products used: cleansing, handling, permitted cosmetics and maintenance. Explain that extensions must not be pulled off and that healthcare should be sought if significant eye symptoms develop. Record products, batch, design, incidents and advice."],
["Utiliza una lista de comprobación de revisión final en maniquí.","Redacta instrucciones de cuidado con lenguaje claro y sin promesas de duración.","Simula una consulta de seguimiento ante molestia o retención irregular."],
["Use a final inspection checklist on a mannequin.","Write clear aftercare instructions without promising a fixed wear time.","Simulate a follow-up conversation about discomfort or uneven retention."],
["No finalizar sin revisar uniones, comodidad y limpieza.","No prometer retención idéntica para todas las personas."],
["Do not finish without checking bonds, comfort and cleanliness.","Do not promise identical retention for everyone."],
"¿Qué debe incluir la revisión final?","What should the final inspection include?",
"Separación, dirección, estabilidad, limpieza, comodidad y explicación de cuidados posteriores y señales de alarma.","Separation, direction, stability, cleanliness, comfort, and explanation of aftercare and warning signs.")
]},
{title:"Volumen, híbridas y abanicos",intro:"Comprender la construcción de abanicos y la distribución de volumen con criterio de peso, simetría y seguridad.",lessons:[
lesson("Diferencia entre clásico, volumen y abanico","Difference between classic, volume and fans","Distinguir una extensión individual de un abanico y comprender que el peso total importa más que el número aislado de fibras.","Distinguish a single extension from a fan and understand that total weight matters more than fibre count alone.",
["En la técnica clásica se utiliza una fibra individual sobre una pestaña natural aislada. En volumen, varias fibras finas forman un abanico que se aplica como una unidad sobre una pestaña natural. La técnica híbrida combina textura clásica y abanicos según un diseño planificado.",
"El número de fibras no basta para decidir si un abanico es adecuado. Diámetro, longitud, material, geometría, apertura y peso total influyen en la carga. Aprende a leer especificaciones y practica con muestras; no uses una regla de cantidad que ignore la resistencia individual de la pestaña."],
["In classic technique, one fibre is used on one isolated natural lash. In volume, several fine fibres form a fan applied as one unit to one natural lash. Hybrid technique combines classic texture and fans according to a planned design.",
"Fibre count alone cannot determine whether a fan is suitable. Diameter, length, material, geometry, spread and total weight affect load. Learn to read specifications and practise with samples; do not use a count rule that ignores individual lash strength."],
["Clasifica ejemplos de aplicación clásica, abanico y combinación híbrida.","Compara dos abanicos con distinto diámetro y número de fibras.","Explica por qué el peso total debe valorarse antes de aplicar."],
["Classify examples of classic application, fans and hybrid combinations.","Compare two fans with different diameters and fibre counts.","Explain why total weight must be assessed before application."],
["No considerar el número de fibras como único criterio de seguridad.","No aplicar un abanico a una pestaña incapaz de soportar su carga."],
["Do not treat fibre count as the only safety criterion.","Do not apply a fan to a lash unable to support its load."],
"¿Qué determina la carga de un abanico?","What determines a fan's load?",
"El peso total derivado del diámetro, longitud, material y construcción, valorado frente a la resistencia de la pestaña natural.","The total weight resulting from diameter, length, material and construction, assessed against natural lash strength."),
lesson("Construcción, apertura y estabilidad del abanico","Fan construction, spread and stability","Practicar abanicos uniformes sobre tiras de entrenamiento y reconocer bases inestables o deformadas.","Practise even fans on training strips and recognise unstable or distorted bases.",
["Un abanico se forma al separar fibras de manera controlada manteniendo una base compacta y estable. La apertura debe ser consistente con el efecto previsto y con el tamaño de la pestaña de práctica. Una base demasiado ancha, cruzada o irregular puede dificultar una unión limpia.",
"Evalúa simetría, separación, alineación y estabilidad antes de utilizar el abanico. La práctica debe realizarse primero en tiras o soportes de entrenamiento. No aumentes el número de fibras para corregir un abanico irregular; vuelve a construirlo y compara el resultado con la referencia del formador."],
["A fan is created by separating fibres in a controlled way while keeping a compact, stable base. The spread should match the intended effect and the size of the practice lash. A base that is too wide, crossed or uneven can make a clean bond difficult.",
"Assess symmetry, separation, alignment and stability before using the fan. Practise first on strips or training supports. Do not add more fibres to correct an irregular fan; rebuild it and compare the result with the trainer's reference."],
["Construye cinco abanicos y clasifícalos por simetría y estabilidad.","Identifica bases abiertas, cruzadas o con fibras pegadas.","Registra qué movimiento de pinza mejora el control sin forzar."],
["Build five fans and classify them by symmetry and stability.","Identify open, crossed or bonded bases.","Record which tweezer movement improves control without forcing."],
["No utilizar abanicos con fibras pegadas, deformadas o bases inestables.","No practicar sobre personas hasta demostrar control en material de entrenamiento."],
["Do not use fans with bonded, distorted fibres or unstable bases.","Do not practise on people until control has been demonstrated on training material."],
"¿Qué caracteriza una base de abanico adecuada?","What characterises a suitable fan base?",
"Una base controlada, estable y uniforme que permita una unión precisa sin fibras cruzadas ni exceso de adhesivo.","A controlled, stable and even base that allows precise bonding without crossed fibres or excess adhesive."),
lesson("Diseño híbrido y distribución de textura","Hybrid design and texture distribution","Combinar fibras clásicas y abanicos de forma planificada y coherente con el mapa acordado.","Combine classic fibres and fans in a planned way consistent with the agreed map.",
["Un diseño híbrido alterna o combina secciones clásicas y de volumen para crear textura. La proporción y la ubicación no son universales: dependen del efecto acordado, de la densidad natural y de la capacidad de soporte de cada pestaña.",
"Planifica las zonas en un mapa y registra dónde se utilizará cada técnica. Comprueba que la transición sea equilibrada y que la distribución no concentre demasiada carga en un área. Si una pestaña no soporta el elemento previsto, cambia el patrón; el mapa debe adaptarse a la realidad."],
["A hybrid design alternates or combines classic and volume sections to create texture. The proportion and placement are not universal; they depend on the agreed effect, natural density and the support capacity of each lash.",
"Plan zones on a map and record where each technique will be used. Check that transitions are balanced and that load is not concentrated in one area. If a lash cannot support the planned element, change the pattern; the map must adapt to reality."],
["Diseña un mapa híbrido con leyenda clara para clásico y volumen.","Compara dos distribuciones y localiza concentraciones de carga.","Justifica cambios cuando una zona no admite el abanico previsto."],
["Design a hybrid map with a clear legend for classic and volume.","Compare two distributions and locate concentrated load.","Justify changes when a zone cannot support the planned fan."],
["No alternar técnicas sin planificación ni revisión de peso.","No imponer simetría visual a costa de sobrecargar una zona."],
["Do not alternate techniques without planning and weight review.","Do not impose visual symmetry at the cost of overloading an area."],
"¿Cómo debe decidirse la distribución de un diseño híbrido?","How should the distribution of a hybrid design be decided?",
"Mediante un mapa previo adaptado a densidad, dirección y resistencia de las pestañas, revisando la carga de cada zona.","Through a prior map adapted to lash density, direction and strength, while checking the load in each zone."),
lesson("Selección responsable de densidad y control de peso","Responsible density selection and weight control","Evaluar la carga de cada abanico y reconocer cuándo reducir densidad o elegir una técnica más ligera.","Assess each fan's load and recognise when to reduce density or choose a lighter technique.",
["La densidad visual no debe confundirse con seguridad. El peso depende de las características de cada fibra y del conjunto aplicado. Una pestaña fina, frágil, corta o dañada puede requerir una opción más ligera o ninguna extensión. La valoración se realiza pelo a pelo y no solo por el aspecto general del párpado.",
"Registra tipo de fibra, diámetro, longitud, construcción y criterio de selección. Si faltan datos de peso o especificación, no inventes cálculos ni asumas que un abanico es seguro. La práctica avanzada requiere formación presencial y supervisión; el curso teórico no habilita por sí solo para aplicar técnicas complejas."],
["Visual density must not be confused with safety. Weight depends on each fibre's characteristics and the complete application. A fine, fragile, short or damaged lash may require a lighter option or no extension. Assessment is performed lash by lash, not only from the overall eyelid appearance.",
"Record fibre type, diameter, length, construction and selection rationale. If weight data or specifications are missing, do not invent calculations or assume a fan is safe. Advanced practice requires in-person training and supervision; theory alone does not qualify someone to perform complex techniques."],
["Compara fichas de fibras y registra qué datos faltan para estimar carga.","Clasifica ejemplos de pestañas de entrenamiento por necesidad de menor carga.","Explica cuándo elegir una técnica clásica ligera o no realizar la aplicación."],
["Compare fibre sheets and record which data are missing to estimate load.","Classify training-lash examples by need for lower load.","Explain when to choose a light classic technique or not perform an application."],
["No elegir densidad solo por el resultado de una fotografía.","No aplicar abanicos sobre pestañas debilitadas o dañadas."],
["Do not choose density solely from a photograph's result.","Do not apply fans to weakened or damaged lashes."],
"¿Qué debe prevalecer al elegir densidad de volumen?","What should take priority when selecting volume density?",
"La capacidad de soporte de cada pestaña natural y las especificaciones reales de la fibra, por encima del efecto visual deseado.","The support capacity of each natural lash and the actual fibre specifications, ahead of the desired visual effect.")
]},
{title:"Mantenimiento, rellenos y retirada",intro:"Evaluar crecimiento y retención, enseñar cuidados y retirar extensiones sin tracción ni daño.",lessons:[
lesson("Cuidados posteriores y limpieza en casa","Aftercare and home cleansing","Comunicar cuidados realistas y enseñar limpieza compatible sin manipular ni arrancar extensiones.","Communicate realistic aftercare and teach compatible cleansing without manipulating or pulling extensions.",
["La higiene habitual de la zona debe seguir las instrucciones del sistema y utilizar productos compatibles. Explica cómo limpiar suavemente, aclarar cuando corresponda y secar sin frotar. Evitar la limpieza por miedo a perder extensiones puede favorecer acumulación de residuos y no debe recomendarse.",
"Indica que no se deben tirar, cortar ni arrancar las extensiones. El uso de cosméticos, aceites o productos de limpieza depende de la compatibilidad declarada por el fabricante. Entrega las recomendaciones por escrito y explica que dolor, hinchazón, secreción o visión alterada requieren atención sanitaria."],
["Routine hygiene should follow system instructions and use compatible products. Explain how to cleanse gently, rinse where appropriate and dry without rubbing. Avoiding cleansing out of fear of losing extensions may encourage residue build-up and should not be recommended.",
"Tell clients not to pull, cut or pluck extensions. Use of cosmetics, oils or cleansers depends on manufacturer-declared compatibility. Provide written advice and explain that pain, swelling, discharge or altered vision require healthcare assessment."],
["Redacta una hoja de cuidados posteriores con instrucciones verificables.","Diferencia consejos cosméticos de indicaciones médicas.","Practica una explicación verbal breve y comprensible."],
["Write an aftercare sheet with verifiable instructions.","Distinguish cosmetic advice from medical instructions.","Practise a brief, understandable verbal explanation."],
["No recomendar dejar de limpiar la zona.","No prometer que una rutina garantice una retención fija."],
["Do not advise clients to stop cleansing the area.","Do not promise that a routine guarantees a fixed retention period."],
"¿Qué debe recomendarse si la persona nota dolor ocular o visión alterada?","What should be recommended if the person experiences eye pain or altered vision?",
"Suspender cualquier manipulación y buscar valoración sanitaria; no intentar tratar el síntoma en casa.","Stop any manipulation and seek healthcare assessment; do not attempt to treat the symptom at home."),
lesson("Valoración del crecimiento y decisión de relleno","Growth assessment and infill decision","Evaluar cada extensión por crecimiento, estabilidad, limpieza y estado de la pestaña antes de decidir un relleno.","Assess each extension for growth, stability, cleanliness and lash condition before deciding on an infill.",
["Durante la revisión, observa qué extensiones siguen estables, cuáles han crecido y cuáles están torcidas, sueltas o unidas a otras pestañas. La caída natural forma parte del ciclo y la retención varía entre personas; no se debe juzgar el resultado solo por el número de fibras visibles.",
"Un relleno requiere retirar las extensiones que ya no están bien posicionadas, limpiar y volver a valorar las pestañas naturales. Si hay suciedad persistente, daño, irritación o una proporción de extensiones inestables que impide trabajar con seguridad, pospón o recomienda una retirada completa."],
["During review, observe which extensions remain stable and which have grown out, twisted, loosened or bonded to other lashes. Natural shedding is part of the cycle and retention varies between people; the result should not be judged only by the number of visible fibres.",
"An infill requires removing extensions that are no longer well positioned, cleansing and reassessing natural lashes. If there is persistent residue, damage, irritation or too many unstable extensions to work safely, postpone or recommend full removal."],
["Clasifica extensiones simuladas en estables, crecidas, torcidas y sueltas.","Completa una ficha de decisión: relleno, retirada o posponer.","Explica por qué no se rellena encima de una unión deteriorada."],
["Classify simulated extensions as stable, grown out, twisted or loose.","Complete a decision record: infill, removal or postpone.","Explain why an infill should not be placed over a deteriorated bond."],
["No rellenar sin revisar cada zona y el estado natural.","No tirar de extensiones crecidas para acelerar la preparación."],
["Do not infill without checking each zone and natural lash condition.","Do not pull grown-out extensions to speed up preparation."],
"¿Qué condiciones deben comprobarse antes de realizar un relleno?","What should be checked before performing an infill?",
"Crecimiento, estabilidad de las uniones, limpieza, adhesiones múltiples y estado de las pestañas naturales.","Growth, bond stability, cleanliness, multiple bonds and the condition of natural lashes."),
lesson("Retirada profesional y control del removedor","Professional removal and remover control","Comprender la retirada como un procedimiento controlado que nunca debe basarse en tracción o raspado.","Understand removal as a controlled procedure that must never rely on pulling or scraping.",
["La retirada utiliza un producto diseñado para el sistema y aplicado por una profesional formada, siguiendo las instrucciones del fabricante. Antes de empezar, confirma el producto, sus advertencias, el material de protección y el procedimiento. Mantén el removedor lejos del ojo y de las mucosas.",
"El tiempo, cantidad y forma de aplicación no son universales: se siguen las instrucciones del producto concreto. No tires de las fibras ni uses pinzas para arrancar uniones resistentes. Si el adhesivo no se libera como se espera, detente y consulta el procedimiento o solicita apoyo competente."],
["Removal uses a product designed for the system and is performed by a trained professional according to manufacturer instructions. Before starting, confirm the product, warnings, protective materials and procedure. Keep remover away from the eye and mucous membranes.",
"Timing, amount and application method are not universal; follow instructions for the specific product. Do not pull fibres or use tweezers to tear off resistant bonds. If the adhesive does not release as expected, stop and consult the procedure or seek competent support."],
["Localiza las advertencias de un removedor real sin abrirlo ni aplicarlo.","Ordena una secuencia de retirada a partir de las instrucciones del fabricante.","Identifica acciones prohibidas como tirar, raspar o forzar el párpado."],
["Locate warnings on an actual remover without opening or applying it.","Arrange a removal sequence using the manufacturer's instructions.","Identify prohibited actions such as pulling, scraping or forcing the eyelid."],
["No aplicar removedor sin formación ni permitir contacto ocular.","No arrancar extensiones ni forzar la apertura de párpados pegados."],
["Do not apply remover without training or allow eye contact.","Do not pull extensions or force open bonded eyelids."],
"¿Qué principio debe guiar una retirada profesional?","What principle should guide professional removal?",
"Disolver la unión con un producto y método adecuados, sin tracción, raspado ni contacto con el ojo.","Dissolve the bond using a suitable product and method, without pulling, scraping or eye contact."),
lesson("Registro de mantenimiento y seguimiento","Maintenance and follow-up records","Documentar fechas, productos, lotes, retención e incidencias para dar continuidad y trazabilidad al servicio.","Document dates, products, batches, retention and incidents to support continuity and traceability.",
["El registro de mantenimiento puede incluir fecha, diseño, observaciones, zonas con mayor pérdida, productos y lotes, técnica realizada, cuidados entregados y próxima recomendación. Describe hechos observables y evita atribuir causas sin evidencia. La retención depende de múltiples factores y no debe prometerse un plazo idéntico.",
"Protege la ficha y comparte la información solo cuando exista una base legítima. Usa los registros para detectar patrones, revisar compatibilidad y mejorar la consulta, no para culpabilizar a la persona. Si hay síntomas, registra la incidencia y deriva; no conviertas el historial cosmético en un expediente médico."],
["A maintenance record may include date, design, observations, areas with greater loss, products and batches, technique performed, aftercare delivered and next recommendation. Describe observable facts and avoid assigning causes without evidence. Retention depends on multiple factors and no identical timeframe should be promised.",
"Protect the record and share information only when there is a lawful basis. Use records to identify patterns, review compatibility and improve consultation, not to blame the client. If symptoms occur, record the incident and refer; do not turn a cosmetic history into a medical record."],
["Completa una ficha ficticia de mantenimiento con datos de producto y lote.","Compara dos visitas y detecta cambios observables sin asumir causas.","Redacta una recomendación de seguimiento no médica."],
["Complete a sample maintenance record with product and batch details.","Compare two visits and identify observable changes without assuming causes.","Write a non-medical follow-up recommendation."],
["No registrar datos sensibles innecesarios ni compartir fichas sin autorización.","No afirmar una causa de pérdida sin revisar evidencia."],
["Do not record unnecessary sensitive data or share records without authorisation.","Do not claim a cause of shedding without reviewing evidence."],
"¿Para qué sirve registrar lote y producto en cada mantenimiento?","Why record product and batch at each maintenance visit?",
"Para conservar trazabilidad, revisar posibles patrones e identificar el material utilizado si aparece una incidencia.","To maintain traceability, review possible patterns and identify the material used if an incident occurs.")
]},
{title:"Reacciones, contraindicaciones y solución de problemas",intro:"Reconocer límites de competencia, detener servicios ante señales de alarma y documentar sin diagnosticar ni tratar.",lessons:[
lesson("Irritación, sensibilidad y posible reacción alérgica","Irritation, sensitivity and possible allergic reaction","Reconocer síntomas que requieren detener el servicio sin intentar establecer un diagnóstico.","Recognise symptoms that require stopping the service without attempting a diagnosis.",
["Enrojecimiento, picor, ardor, lagrimeo e hinchazón pueden tener distintas causas y gravedad. Una profesional de estética no puede determinar por observación si se trata de irritación, alergia, infección u otra condición. La intensidad, evolución y localización de los síntomas deben tomarse en serio.",
"Ante síntomas nuevos o crecientes, detén el servicio, evita una nueva exposición y sigue el protocolo de seguridad del producto. Recomienda valoración sanitaria según la situación. No realices una prueba repitiendo la exposición ni sugieras medicamentos o tratamientos oculares."],
["Redness, itching, burning, tearing and swelling may have different causes and levels of severity. An aesthetic professional cannot determine by observation whether the cause is irritation, allergy, infection or another condition. The intensity, progression and location of symptoms must be taken seriously.",
"If new or worsening symptoms occur, stop the service, prevent further exposure and follow the product safety protocol. Recommend healthcare assessment as appropriate. Do not test by repeating exposure or suggest medication or eye treatments."],
["Clasifica casos simulados según continuar, detener o derivar, justificando la decisión.","Practica una respuesta calmada y clara ante una reacción comunicada.","Registra síntomas descritos por la persona sin asignar diagnóstico."],
["Classify sample cases as proceed, stop or refer, and justify the decision.","Practise a calm, clear response to a reported reaction.","Record symptoms described by the person without assigning a diagnosis."],
["No diagnosticar alergias ni recomendar medicamentos.","No repetir la exposición para comprobar si la reacción vuelve."],
["Do not diagnose allergies or recommend medication.","Do not repeat exposure to see whether the reaction returns."],
"¿Cómo debe actuar la profesional ante una posible reacción?","How should a professional respond to a possible reaction?",
"Detener el servicio, evitar nueva exposición, seguir el protocolo de seguridad y recomendar valoración sanitaria; no diagnosticar ni medicar.","Stop the service, prevent further exposure, follow the safety protocol and recommend healthcare assessment; do not diagnose or medicate."),
lesson("Retención deficiente: análisis sin improvisación","Poor retention: analysis without guesswork","Investigar factores posibles de retención mediante registros y documentación antes de cambiar el procedimiento.","Investigate possible retention factors using records and documentation before changing the procedure.",
["La retención puede verse influida por ciclo natural, preparación, limpieza, compatibilidad, estado del adhesivo, ambiente, técnica y cuidados. Un solo resultado no permite identificar una causa. Revisa registros de varias sesiones y busca patrones objetivos antes de modificar una variable.",
"Comprueba primero que el producto esté dentro de fecha, se haya almacenado correctamente y se haya utilizado dentro de sus instrucciones. Revisa la preparación, la técnica y los cuidados explicados. Cambia solo lo que esté respaldado por evidencia y formación; no añadas productos ni modifiques cantidades al azar."],
["Retention may be influenced by the natural cycle, preparation, cleanliness, compatibility, adhesive condition, environment, technique and aftercare. One result does not identify a cause. Review records from several sessions and look for objective patterns before changing a variable.",
"First check that the product is in date, correctly stored and used within its instructions. Review preparation, technique and aftercare provided. Change only what is supported by evidence and training; do not add products or alter amounts randomly."],
["Construye una lista de factores y marca cuáles pueden verificarse con registros.","Analiza un caso simulado sin atribuir una causa única.","Propón una comprobación documentada antes de cambiar el sistema."],
["Build a list of factors and mark which can be verified through records.","Analyse a sample case without assigning one cause.","Propose a documented check before changing the system."],
["No culpar automáticamente a la clienta ni al adhesivo.","No cambiar varias variables a la vez sin registro ni fundamento."],
["Do not automatically blame the client or the adhesive.","Do not change several variables at once without records or justification."],
"¿Qué debe hacerse antes de cambiar el adhesivo por baja retención?","What should be done before changing adhesive because of poor retention?",
"Revisar datos de producto, almacenamiento, ambiente, preparación, técnica, ciclo natural y cuidados para identificar factores verificables.","Review product data, storage, environment, preparation, technique, natural cycle and aftercare to identify verifiable factors."),
lesson("Adhesiones múltiples, dirección y molestias","Multiple bonds, direction and discomfort","Identificar problemas técnicos que generan tracción y decidir una corrección segura o retirada supervisada.","Identify technical problems that create pulling and decide on safe correction or supervised removal.",
["Las adhesiones entre pestañas, fibras torcidas, bases voluminosas o extensiones demasiado crecidas pueden causar tirones y molestias. La revisión se realiza con iluminación adecuada y herramientas apropiadas, sin presionar el ojo. La persona debe comunicar cualquier sensación incómoda.",
"Si la corrección requiere fuerza, tracción o manipulación cercana al ojo que excede la competencia de la profesional, detén el procedimiento y solicita apoyo cualificado. No intentes ocultar el problema con más adhesivo ni añadir fibras para equilibrar una zona irregular."],
["Bonds between lashes, twisted fibres, bulky bases or overgrown extensions may cause pulling and discomfort. Inspect under suitable lighting with appropriate tools and without pressing the eye. The client should be encouraged to report any discomfort.",
"If correction requires force, pulling or eye-area manipulation beyond the professional's competence, stop and seek qualified support. Do not conceal the problem with more adhesive or add fibres to balance an uneven area."],
["Identifica adhesiones múltiples en imágenes o modelos de entrenamiento.","Clasifica problemas que pueden corregirse en práctica y los que requieren detenerse.","Describe una comunicación clara con la persona cuando se detecta una molestia."],
["Identify multiple bonds in images or training models.","Classify problems that can be corrected in practice and those requiring a stop.","Describe clear communication with the client when discomfort is identified."],
["No arrancar una unión ni continuar si hay dolor.","No añadir adhesivo para ocultar una base defectuosa."],
["Do not tear a bond apart or continue when pain is present.","Do not add adhesive to conceal a defective base."],
"¿Qué debe hacerse si una adhesión provoca dolor o tracción?","What should be done if a bond causes pain or pulling?",
"Detener la aplicación, no tirar de las pestañas y corregir solo mediante un procedimiento seguro dentro de la competencia o derivar a apoyo cualificado.","Stop application, do not pull the lashes, and correct only through a safe procedure within competence or seek qualified support."),
lesson("Contraindicaciones, señales de alarma y derivación","Contraindications, warning signs and referral","Identificar situaciones en las que el servicio debe posponerse y reconocer síntomas que requieren atención sanitaria.","Identify situations in which a service should be postponed and recognise symptoms requiring healthcare.",
["No se realiza el servicio cuando hay dolor ocular, ojo rojo intenso, secreción, hinchazón, lesión, infección sospechada, reacción activa o imposibilidad de mantener los ojos cerrados de forma cómoda. La lista debe adaptarse a las reglas locales y a la formación recibida; ante dudas, se pospone.",
"Visión borrosa o pérdida de visión, dolor intenso, exposición química ocular, hinchazón importante o empeoramiento rápido requieren atención sanitaria urgente según el sistema local de emergencias. La profesional no diagnostica, no aplica colirios ni retrasa la derivación para terminar el servicio."],
["Do not perform the service when there is eye pain, significant redness, discharge, swelling, injury, suspected infection, an active reaction or inability to keep the eyes comfortably closed. The list must be adapted to local rules and training; when in doubt, postpone.",
"Blurred or lost vision, severe pain, chemical eye exposure, significant swelling or rapid worsening require urgent healthcare according to the local emergency system. The professional does not diagnose, apply eye drops or delay referral to finish the service."],
["Clasifica señales de alarma y decide posponer o derivar.","Practica explicar una negativa al servicio con respeto y sin culpabilizar.","Localiza el número o procedimiento de emergencia aplicable al lugar de trabajo."],
["Classify warning signs and decide whether to postpone or refer.","Practise respectfully explaining a decision not to provide the service.","Locate the emergency number or procedure applicable to the workplace."],
["No realizar el servicio ante síntomas oculares relevantes.","No recomendar medicamentos ni demorar la atención urgente."],
["Do not perform the service when relevant eye symptoms are present.","Do not recommend medication or delay urgent care."],
"¿Qué síntomas requieren detener el servicio y recomendar atención sanitaria urgente?","Which symptoms require stopping the service and recommending urgent healthcare?",
"Por ejemplo, visión alterada, dolor intenso, exposición química ocular, hinchazón importante o empeoramiento rápido.","For example, altered vision, severe pain, chemical eye exposure, significant swelling or rapid worsening.")
]},
{title:"Práctica integral, evaluación y desarrollo profesional",intro:"Integrar conocimientos y criterio en simulaciones y demostrar preparación para una evaluación práctica supervisada.",lessons:[
lesson("Montaje completo y control previo del puesto","Complete workstation setup and pre-service checks","Preparar un puesto completo y verificar higiene, equipos, productos, trazabilidad y comodidad antes de una simulación.","Prepare a complete workstation and verify hygiene, equipment, products, traceability and comfort before a simulation.",
["El montaje integra mobiliario, iluminación, ventilación, instrumentos, consumibles, residuos y productos. Comprueba limpieza, integridad, fechas, lotes, documentación y condiciones ambientales. Distribuye los materiales para mantener un flujo desde limpio hacia usado, evitando cruces.",
"Antes de iniciar, verifica que la persona ficticia está informada, que la ficha está completa y que no existen señales que obliguen a posponer. Esta lista no sustituye una inspección legal o sanitaria del establecimiento; debe adaptarse a los requisitos locales y a las instrucciones de cada equipo."],
["Setup integrates furniture, lighting, ventilation, instruments, consumables, waste and products. Check cleanliness, integrity, dates, batches, documentation and environmental conditions. Arrange materials to maintain a clean-to-used workflow and prevent cross-over.",
"Before starting, verify that the sample client is informed, the record is complete and no warning sign requires postponement. This checklist does not replace legal or health inspection of the establishment; adapt it to local requirements and equipment instructions."],
["Completa una lista de apertura de puesto y marca cada control.","Identifica tres fallos que impedirían comenzar la simulación.","Presenta el puesto y explica el flujo limpio-usado."],
["Complete a workstation opening checklist and mark each check.","Identify three faults that would prevent the simulation from starting.","Present the workstation and explain the clean-to-used workflow."],
["No comenzar si falta higiene, trazabilidad o equipo seguro.","No considerar el montaje una prueba de competencia técnica."],
["Do not begin if hygiene, traceability or safe equipment are missing.","Do not treat workstation setup as proof of technical competence."],
"¿Qué debe confirmarse antes de iniciar una práctica integral?","What must be confirmed before starting an integrated practice?",
"Higiene, estado del puesto y equipos, trazabilidad, documentación, condiciones ambientales y ausencia de señales de alarma.","Hygiene, workstation and equipment condition, traceability, documentation, environmental conditions and absence of warning signs."),
lesson("Simulación completa desde consulta hasta cierre","Full simulation from consultation to close-out","Integrar consulta, registro, diseño, preparación, práctica técnica y cuidados en un caso simulado.","Integrate consultation, records, design, preparation, technical practice and aftercare in a simulated case.",
["La simulación reproduce el flujo completo sin sustituir el trabajo supervisado sobre personas. Comienza con consulta y consentimiento ficticios, revisión de señales de alarma, ficha, mapa, selección de materiales, preparación, aislamiento y ejercicios sobre maniquí.",
"Finaliza con revisión de uniones simuladas, explicación de cuidados, registro de productos y reflexión sobre decisiones. El estudiante debe poder justificar por qué continuó, modificó o detuvo cada paso. Una decisión de no realizar el servicio puede ser la respuesta profesional correcta."],
["The simulation reproduces the complete workflow without replacing supervised work on people. Begin with a sample consultation and consent, warning-sign review, record, map, material selection, preparation, isolation and mannequin exercises.",
"Finish with inspection of simulated bonds, aftercare explanation, product records and reflection on decisions. The student must justify why each step was continued, modified or stopped. Deciding not to provide the service may be the correct professional response."],
["Completa un caso de principio a fin usando una ficha ficticia.","Explica al evaluador los puntos de decisión y seguridad.","Entrega registro y reflexión final con fortalezas y áreas de mejora."],
["Complete an end-to-end case using a sample client record.","Explain decision and safety checkpoints to the assessor.","Submit the record and a final reflection on strengths and areas to improve."],
["No utilizar personas reales como práctica inicial sin supervisión presencial apropiada.","No omitir consulta, consentimiento ni revisión final para ahorrar tiempo."],
["Do not use real people for initial practice without appropriate in-person supervision.","Do not omit consultation, consent or final inspection to save time."],
"¿Qué demuestra una simulación integral bien realizada?","What does a well-performed integrated simulation demonstrate?",
"Que el estudiante puede seguir un proceso ordenado, justificar decisiones, documentar y detenerse cuando la seguridad lo exige.","That the student can follow an organised process, justify decisions, document and stop when safety requires it."),
lesson("Evaluación teórica, práctica y portafolio","Theory, practical assessment and portfolio","Distinguir conocimiento teórico de destreza práctica y reunir evidencias verificables de aprendizaje.","Distinguish theoretical knowledge from practical skill and assemble verifiable evidence of learning.",
["La evaluación teórica comprueba conceptos, interpretación de documentación y criterio de seguridad. La evaluación práctica observa higiene, organización, aislamiento en maniquí, control de herramientas, mapping, revisión y comunicación. Aprobar un test escrito no demuestra por sí solo destreza manual ni autorización profesional.",
"El portafolio puede incluir fichas de práctica, mapas, inventarios, registros simulados, fotografías autorizadas y reflexiones. Cada evidencia debe indicar fecha, objetivo, material utilizado y observaciones del formador. No incluyas datos personales de clientes reales sin base legítima y autorización aplicable."],
["Theory assessment checks concepts, document interpretation and safety judgement. Practical assessment observes hygiene, organisation, mannequin isolation, tool control, mapping, inspection and communication. Passing a written test alone does not demonstrate manual skill or professional authorisation.",
"A portfolio may include practice sheets, maps, inventories, sample records, authorised photographs and reflections. Each item should state date, objective, materials used and trainer observations. Do not include personal data from real clients without a lawful basis and applicable authorisation."],
["Organiza un portafolio con índice y evidencias fechadas.","Completa una autoevaluación y solicita observaciones del formador.","Explica qué destrezas requieren evaluación presencial."],
["Organise a portfolio with an index and dated evidence.","Complete a self-assessment and request trainer feedback.","Explain which skills require in-person assessment."],
["No declarar competencia práctica únicamente por completar lecciones o tests.","No publicar fotografías ni datos de clientes sin autorización."],
["Do not claim practical competence solely from completing lessons or tests.","Do not publish client photographs or data without authorisation."],
"¿Qué no demuestra por sí solo aprobar el examen teórico?","What does passing the theory exam alone not demonstrate?",
"No demuestra destreza manual supervisada ni cumplimiento automático de requisitos legales o licencia profesional.","It does not demonstrate supervised manual skill or automatic compliance with legal requirements or professional licensing."),
lesson("Ética, privacidad y desarrollo profesional","Ethics, privacy and professional development","Aplicar comunicación honesta, protección de datos, trazabilidad y aprendizaje continuo dentro de los límites profesionales.","Apply honest communication, data protection, traceability and continuous learning within professional limits.",
["La profesional debe comunicar precios, alcance, duración estimada, mantenimiento y límites del resultado con transparencia. No debe prometer resultados imposibles, ocultar riesgos ni presionar para obtener consentimiento. Las reclamaciones e incidencias se atienden con respeto y registro objetivo.",
"Protege las fichas, fotografías y datos de contacto; recoge solo lo necesario y conserva la información de forma segura según la normativa local. Mantén formación continua, revisa cambios en productos y requisitos, y deriva asuntos sanitarios a profesionales habilitados. La certificación de este curso acredita únicamente el aprendizaje interno definido por la academia."],
["The professional should communicate prices, scope, estimated duration, maintenance and result limitations transparently. Do not promise impossible outcomes, conceal risks or pressure consent. Handle complaints and incidents respectfully and with objective records.",
"Protect records, photographs and contact details; collect only what is necessary and store information securely under local rules. Continue learning, review product and regulatory changes, and refer health matters to qualified professionals. This course certificate attests only to the internal learning defined by the academy."],
["Redacta una explicación transparente del servicio y sus límites.","Revisa una ficha y elimina datos personales innecesarios.","Diseña un plan personal de formación continua y actualización documental."],
["Write a transparent explanation of the service and its limits.","Review a record and remove unnecessary personal data.","Design a personal plan for continued training and document updates."],
["No compartir datos o imágenes sin autorización y base legítima.","No presentar el certificado interno como licencia sanitaria o profesional oficial."],
["Do not share data or images without authorisation and a lawful basis.","Do not present the internal certificate as an official health or professional licence."],
"¿Qué acredita el certificado interno de este curso?","What does this course's internal certificate attest to?",
"El cumplimiento de los requisitos académicos internos definidos por la academia, no una licencia oficial ni la sustitución de requisitos legales locales.","Completion of the academy's defined internal academic requirements, not an official licence or a substitute for local legal requirements.")
]}
];
const stageNamesEn=["Adhesives, glues and auxiliary products","Manual tools and non-electrical accessories","Electrical equipment, furniture and lighting","Hygiene, disinfection and biosafety","Design, eye styling and mapping","Consultation, preparation and isolation","Classic one-to-one application","Volume, hybrid sets and fans","Maintenance, infills and removal","Reactions, contraindications and troubleshooting","Integrated practice, assessment and professional development"];
const legacySheetTitlesEn=["Basic anatomy of the eye and its surrounding structures","Natural eyelash structure","Eyelash growth cycle","Initial consultation and client record","Commercial extension materials and fibres","Extension lengths, diameters and thicknesses","Curl types and profiles","Tray types and presentation"];
const legacySheetSummariesEn=[
"Identify eyelids, eyelid margin, lash line, conjunctiva and ocular surface. Aesthetic application is limited to natural lashes and must not touch skin, mucosa or the eyeball.",
"The eyelash is a hair with a root and shaft. Thickness, length, direction and strength vary between people and between areas of the same eyelid.",
"Lashes pass through growth, transition and resting phases. Each lash is in a different phase, so natural shedding is continuous and infills require individual assessment.",
"Record expectations, reaction history, sensitivities, contact lens use, known eye conditions and usual care. Do not diagnose disease.",
"Extensions are usually synthetic fibres designed to create different finishes. Commercial names such as silk or synthetic mink do not guarantee a uniform composition; check manufacturer documentation.",
"Length and diameter are usually stated in millimetres. A larger diameter usually adds weight. Selection must respect the capacity of the natural lash.",
"J, B, C, CC, D, L and other designations describe curl profiles that may vary between manufacturers. Always compare actual samples and specifications.",
"Recognise single-length trays, mixed strips, coloured and flat fibres, and pre-made fans. Check batch, traceability and storage conditions."
];
const legacySafetyEn=["Do not work on red, painful or swollen eyes, with discharge, injury or suspected infection. Recommend healthcare assessment when appropriate.","Do not choose fibres only for fashion or appearance. Avoid weights and lengths that create excessive traction on natural lashes."];
const stageIntrosEn=["Understand professional adhesive as a chemical product: declared composition, documentation, behaviour, use conditions and safe response to exposure.","Identify tools, select appropriate equipment and maintain a clean, ergonomic and traceable workflow.","Prepare a stable, ergonomic and ventilated workstation using suitable, inspected equipment.","Apply contamination-prevention workflow with cleaning, disinfection and processing appropriate to materials and local rules.","Plan an aesthetic distribution that is clear and safe, adapted to natural lash direction and strength.","Turn consultation into a documented decision and prepare the work area before any application.","Learn the logic of classic technique on training materials, prioritising isolation, responsible load, direction and inspection.","Understand fan construction and volume distribution using weight, symmetry and safety criteria.","Assess growth and retention, teach aftercare and remove extensions without pulling or damage.","Recognise professional limits, stop services when warning signs appear and document without diagnosing or treating.","Integrate knowledge and judgement in simulations and demonstrate readiness for supervised practical assessment."];
const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const getLang=()=>{try{return localStorage.getItem("eddeli-language")==="en"?"en":"es";}catch(e){return "es";}};
const legacyQuestions=[
{stage:0,q:"¿Qué estructura debe recibir la extensión?",a:"Una sola pestaña natural aislada, nunca piel, párpado ni superficie ocular.",opts:["Una sola pestaña natural aislada, nunca piel, párpado ni superficie ocular.","La piel del párpado para mayor fijación.","La conjuntiva si la extensión es ligera.","Varias pestañas naturales pegadas entre sí."]},
{stage:0,q:"¿Qué puede aumentar la carga mecánica?",a:"Un diámetro mayor puede aumentar el peso y una longitud mayor puede aumentar la palanca.",opts:["Un diámetro mayor puede aumentar el peso y una longitud mayor puede aumentar la palanca.","Solo el color de la fibra.","La marca impresa en la bandeja.","La cantidad de cepillos utilizados."]},
{stage:0,q:"¿Por qué se desprenden extensiones durante el ciclo natural?",a:"Porque la pestaña natural completa su ciclo y se desprende junto con la extensión adherida.",opts:["Porque la pestaña natural completa su ciclo y se desprende junto con la extensión adherida.","Porque todas las extensiones caducan a los siete días.","Porque el adhesivo siempre pierde fuerza en agua.","Porque el crecimiento se detiene."]},
{stage:0,q:"¿Qué obliga a posponer el servicio durante la consulta?",a:"Dolor, enrojecimiento, secreción, hinchazón, lesión o sospecha de infección.",opts:["Dolor, enrojecimiento, secreción, hinchazón, lesión o sospecha de infección.","Preferencia por un diseño natural.","Uso de una ficha de cliente.","Solicitar una explicación de cuidados."]},
{stage:1,q:"¿Cómo se confirma la composición de una fibra comercial?",a:"Revisando la etiqueta y la documentación del fabricante.",opts:["Revisando la etiqueta y la documentación del fabricante.","Por el nombre comercial solamente.","Por el color de la bandeja.","Por el precio del producto."]},
{stage:1,q:"¿Qué diferencia longitud y diámetro?",a:"La longitud describe la distancia de base a punta y el diámetro el grosor de la fibra.",opts:["La longitud describe la distancia de base a punta y el diámetro el grosor de la fibra.","Ambos términos significan curvatura.","El diámetro describe el color.","La longitud indica la cantidad de adhesivo."]},
{stage:1,q:"¿Por qué se comparan las curvaturas entre fabricantes?",a:"Porque las letras comerciales no están completamente estandarizadas y el perfil puede variar.",opts:["Porque las letras comerciales no están completamente estandarizadas y el perfil puede variar.","Porque todas las marcas usan la misma geometría.","Porque la curvatura no afecta al resultado.","Porque la etiqueta no es necesaria."]},
{stage:1,q:"¿Qué información permite identificar una bandeja?",a:"Marca o fabricante, referencia, lote y características del producto.",opts:["Marca o fabricante, referencia, lote y características del producto.","Solo el color de la caja.","Solo el precio.","El nombre de la clienta."]}
];
function makeQuestions(stage){
 const lang=getLang();
 if(stage<2)return questionsForAll().slice(stage*4,stage*4+4);
 return stages[stage-2].lessons.map(l=>{const d=l[lang];const distractors=stages.flatMap(s=>s.lessons.map(x=>x[lang].answer||x[lang].answer)).filter(x=>x!==d.answer);const unique=[...new Set(distractors)].slice(0,3);return {q:d.check,a:d.answer,opts:[d.answer,...unique].sort((a,b)=>((a.length*7+b.length*3)%11)-((b.length*7+a.length*3)%11))};});
}
const questionsForAll=()=>{
 const lang=getLang();
 const enQ=["Which structure should receive the extension?","Which factors may increase mechanical load?","Why do extensions shed during the natural cycle?","What requires postponing the service during consultation?","How is a commercial fibre's composition confirmed?","What is the difference between length and diameter?","Why compare curl profiles between manufacturers?","What information identifies a tray?"];
 const enA=["One isolated natural lash only, never skin, eyelid or ocular surface.","A larger diameter may increase weight and a greater length may increase leverage.","The natural lash completes its cycle and sheds together with the attached extension.","Pain, redness, discharge, swelling, injury or suspected infection.","By checking the label and manufacturer's documentation.","Length is the distance from base to tip; diameter is fibre thickness.","Commercial letters are not fully standardised and profiles may vary.","Brand or manufacturer, reference, batch and product characteristics."];
 const enOpts=[
 [enA[0],"The eyelid skin for stronger attachment.","The conjunctiva if the extension is light.","Several natural lashes bonded together."],
 [enA[1],"Only the fibre colour.","The brand name printed on the tray.","The number of brushes used."],
 [enA[2],"All extensions expire after seven days.","Adhesive always fails when exposed to water.","Natural growth stops."],
 [enA[3],"A preference for a natural design.","Use of a client record.","A request for aftercare information."],
 [enA[4],"By the marketing name alone.","By the tray colour.","By the product price."],
 [enA[5],"Both terms mean curl.","Diameter describes colour.","Length indicates adhesive quantity."],
 [enA[6],"All brands use identical geometry.","Curl does not affect the result.","The label is unnecessary."],
 [enA[7],"Only the box colour.","Only the price.","The client's name."]
 ];
 const legacy=legacyQuestions.map((x,i)=>({q:lang==="en"?enQ[i]:x.q,a:lang==="en"?enA[i]:x.a,opts:lang==="en"?enOpts[i]:x.opts}));
 const detailed=stages.flatMap(s=>s.lessons.map(l=>({q:l[lang].check,a:l[lang].answer,opts:[l[lang].answer,...s.lessons.filter(x=>x!==l).slice(0,3).map(x=>x[lang].answer)]})));
 return [...legacy,...detailed];
};
function renderQuestionSet(items,prefix,title,subtitle,gradeFn){
 const lang=getLang();let html='<header class="lash-test-heading"><span class="pill">ELI BEAUTY ACADEMY · '+escapeHTML(title)+'</span><h1>'+escapeHTML(title)+'</h1><p>'+escapeHTML(subtitle)+'</p></header><form class="lash-quiz" id="'+prefix+'-form">';
 items.forEach((q,i)=>{const opts=[...new Set(q.opts)].slice(0,4);const shift=opts.length?(i*3+q.q.length)%opts.length:0;const ordered=opts.slice(shift).concat(opts.slice(0,shift));while(ordered.length<4)ordered.push("—");html+='<fieldset class="lash-question"><legend>'+(i+1)+'. '+escapeHTML(q.q)+'</legend>'+ordered.map((o,j)=>'<label class="lash-option"><input type="radio" name="'+prefix+'-'+i+'" value="'+j+'"><span>'+escapeHTML(o)+'</span></label>').join("")+'</fieldset>';});
 html+='</form><button class="primary" id="'+prefix+'-grade">'+(lang==="en"?"SUBMIT ANSWERS":"CORREGIR EVALUACIÓN")+'</button><div id="'+prefix+'-result" aria-live="polite"></div>';
 return html;
}
function scoreSet(items,prefix){
 let correct=0,answered=0;items.forEach((q,i)=>{const chosen=document.querySelector('input[name="'+prefix+'-'+i+'"]:checked');if(!chosen)return;answered++;const options=[...document.querySelectorAll('input[name="'+prefix+'-'+i+'"]')];if(options[Number(chosen.value)]&&options[Number(chosen.value)].nextElementSibling.textContent===q.a)correct++;});
 return {correct,answered,total:items.length,score:items.length?Math.round(correct/items.length*100):0};
}
function addInteractivePractice(stage,lang){
 const en=lang==="en",items=makeQuestions(stage);
 const safe=value=>escapeHTML(String(value==null?"":value));
 return '<section class="lash-interactive-practice"><h2>'+(en?"Practice and learn":"Practica y aprende")+'</h2><p>'+(en?"Choose an answer. If it is incorrect, it turns red. Try another option until you find the correct answer, which turns green.":"Selecciona una respuesta. Si es incorrecta, se marcará en rojo. Prueba otra opción hasta encontrar la correcta, que se marcará en verde.")+'</p>'+items.map((q,i)=>'<article class="lash-practice-question" data-practice-question="'+i+'"><h3>'+(i+1)+'. '+safe(q.q)+'</h3><div class="lash-practice-options">'+[...new Set(q.opts)].map(o=>'<button type="button" class="lash-practice-option" data-correct="'+(o===q.a?'1':'0')+'">'+safe(o)+'</button>').join("")+'</div><p class="lash-practice-feedback" aria-live="polite"></p></article>').join("")+'</section>';
}
function wireInteractivePractice(panel){
 if(!panel||panel.dataset.practiceFeedbackReady==="1")return;
 panel.dataset.practiceFeedbackReady="1";
 panel.addEventListener("click",function(ev){
  const button=ev.target.closest(".lash-practice-option");
  if(!button||!panel.contains(button)||button.disabled)return;
  const question=button.closest(".lash-practice-question");
  if(!question)return;
  const feedback=question.querySelector(".lash-practice-feedback");
  if(button.dataset.correct==="1"){
   button.classList.add("is-correct");
   question.querySelectorAll(".lash-practice-option").forEach(option=>{option.disabled=true;});
   feedback.textContent=getLang()==="en"?"Correct! Well done.":"¡Correcto! Muy bien.";
   feedback.className="lash-practice-feedback is-success";
  }else{
   button.classList.add("is-wrong");
   feedback.textContent=getLang()==="en"?"Not quite. Try another answer.":"No es correcto. Inténtalo con otra respuesta.";
   feedback.className="lash-practice-feedback is-error";
  }
 });
 const style=document.createElement("style");
 style.dataset.lashPracticeFeedback="1";
 style.textContent='.lash-interactive-practice{max-width:940px;margin:24px auto;padding:20px;border:1px solid #dce4ed;border-radius:16px;background:#f8fafc}.lash-interactive-practice>h2{margin-top:0}.lash-practice-question{margin:18px 0;padding:16px;border:1px solid #e0e6ee;border-radius:12px;background:#fff}.lash-practice-question h3{margin:0 0 12px}.lash-practice-options{display:grid;gap:9px}.lash-practice-option{width:100%;padding:12px 14px;text-align:left;white-space:normal;border:1px solid #b9c7d6;border-radius:10px;background:#eaf1f8;color:#203247;cursor:pointer;font:inherit}.lash-practice-option:hover:not(:disabled){border-color:#527da8;background:#e0ebf6}.lash-practice-option.is-wrong{border:2px solid #c62828;background:#fde8e7;color:#8b1717}.lash-practice-option.is-correct{border:2px solid #218447;background:#e4f5e9;color:#176334}.lash-practice-option:disabled{cursor:default;opacity:1}.lash-practice-feedback{min-height:1.4em;margin:10px 0 0;font-weight:700}.lash-practice-feedback.is-error{color:#b42318}.lash-practice-feedback.is-success{color:#18743b}@media(max-width:600px){.lash-interactive-practice{padding:13px}.lash-practice-question{padding:12px}.lash-practice-option{padding:11px;font-size:14px}}';
 if(!document.querySelector('style[data-lash-practice-feedback="1"]'))document.head.appendChild(style);
}
function addPracticeSection(stage,lang){
 const titles=lang==="en"?["Safety and hygiene","Consultation and records","Technical control","Design and finish","Communication and judgement"]:["Seguridad e higiene","Consulta y registros","Control técnico","Diseño y acabado","Comunicación y criterio"];
 const criteria=lang==="en"?["Follows hygiene sequence and prevents cross-contamination.","Collects relevant information, explains risks and records consent.","Uses tools and materials correctly within the taught scope.","Adapts the plan and checks separation, direction and comfort.","Explains decisions, recognises limits and stops when needed."]:["Sigue la secuencia de higiene y evita contaminación cruzada.","Recoge información pertinente, explica riesgos y registra el consentimiento.","Utiliza herramientas y materiales correctamente dentro de lo enseñado.","Adapta el plan y revisa separación, dirección y comodidad.","Explica decisiones, reconoce límites y se detiene cuando es necesario."];
 const headings=lang==="en"?["Not demonstrated","Needs guidance","Developing","Competent in simulation"]:["No demostrado","Requiere guía","En desarrollo","Competente en simulación"];
 return '<section class="lash-practical"><h2>'+(lang==="en"?"Practical assessment rubric":"Evaluación de la práctica")+'</h2><p>'+(lang==="en"?"This rubric is for training simulations. Assessment on people requires qualified in-person supervision and compliance with local rules.":"Esta rúbrica es para simulaciones formativas. La evaluación sobre personas requiere supervisión presencial cualificada y cumplimiento de las normas locales.")+'</p><div class="lash-rubric">'+criteria.map((c,i)=>'<article><strong>'+titles[i]+'</strong><p>'+c+'</p><div class="lash-rubric-levels">'+headings.map((h,j)=>'<label><input type="radio" name="rubric-'+stage+'-'+i+'" value="'+j+'"> '+(j+1)+'. '+h+'</label>').join("")+'</div></article>').join("")+'</div><p><strong>'+(lang==="en"?"Trainer feedback":"Observaciones del formador")+'</strong></p><textarea class="lash-feedback" placeholder="'+(lang==="en"?"Strengths, corrections and next practice goal":"Fortalezas, correcciones y próximo objetivo de práctica")+'"></textarea><button class="secondary" type="button" onclick="window.print()"> '+(lang==="en"?"PRINT RUBRIC":"IMPRIMIR RÚBRICA")+'</button></section>';
}
function addReferences(lang){
 const en=lang==="en";
 return '<section class="lash-references"><h2>'+(en?"Technical references and further reading":"Referencias técnicas y lecturas de apoyo")+'</h2><p>'+(en?"Use these sources as a starting point. Local rules and the instructions for each product and device take precedence.":"Utiliza estas fuentes como punto de partida. Prevalecen las normas locales y las instrucciones de cada producto y equipo.")+'</p><ul><li>CDC — Core Infection Prevention and Control Practices: <a href="https://www.cdc.gov/infection-control/hcp/core-practices/" target="_blank" rel="noopener">cdc.gov/infection-control/hcp/core-practices</a></li><li>CDC — Guidelines and Guidance Library: <a href="https://www.cdc.gov/infection-control/hcp/guidance/" target="_blank" rel="noopener">cdc.gov/infection-control/hcp/guidance</a></li><li>WHO Europe — Infection prevention and control: guidance to action tools: <a href="https://www.who.int/europe/publications/i/item/9789289055437" target="_blank" rel="noopener">who.int/europe/publications</a></li><li>ECHA — Safety Data Sheets: <a href="https://echa.europa.eu/safety-data-sheets" target="_blank" rel="noopener">echa.europa.eu/safety-data-sheets</a></li><li>European Chemicals Agency — CLP guidance: <a href="https://echa.europa.eu/regulations/clp" target="_blank" rel="noopener">echa.europa.eu/regulations/clp</a></li><li>'+(en?"Manufacturer's current label, technical sheet and safety data sheet for every adhesive, remover, cleanser, disinfectant and device used.":"Etiqueta vigente, ficha técnica y ficha de datos de seguridad del fabricante de cada adhesivo, removedor, limpiador, desinfectante y equipo utilizado.")+'</li></ul><p class="study-note">'+(en?"Clinical guidance for healthcare settings is used here only as a general infection-prevention reference; it does not replace rules specifically applicable to beauty services.":"Las guías clínicas se citan como referencia general de prevención de infecciones; no sustituyen las normas específicas aplicables a los servicios de belleza.")+'</p></section>';
}
const forms=[
["Ficha de consulta y consentimiento","Client consultation and consent","client"],
["Registro de higiene y reprocesamiento","Hygiene and reprocessing log","hygiene"],
["Registro ambiental y adhesivo","Environmental and adhesive log","environment"],
["Registro de incidente","Incident record","incident"],
["Ficha de mantenimiento y cuidados","Maintenance and aftercare record","maintenance"],
["Registro de práctica y portafolio","Practice and portfolio record","practice"]
];
function printableForms(lang){
 const en=lang==="en";const labels=en?["Date and time","Client code (avoid unnecessary personal data)","Service requested / design","Relevant history voluntarily disclosed","Visible observations (no diagnosis)","Known product reactions","Risks and alternatives explained","Consent / decision to postpone","Product name, batch and expiry","Hygiene steps completed","Instrument and processing method","Disinfectant label, dilution and contact time","Clean area / used area / waste","Temperature and humidity","Adhesive technical range checked","Product opening date and storage","Incident description and time","Affected area and product","Actions taken and referral","Follow-up and record owner","Maintenance observations","Aftercare instructions delivered","Practice objective and date","Tools and training material used","Trainer feedback and next goal"]:["Fecha y hora","Código de cliente (evitar datos personales innecesarios)","Servicio solicitado / diseño","Antecedentes relevantes comunicados voluntariamente","Observaciones visibles (sin diagnóstico)","Reacciones conocidas a productos","Riesgos y alternativas explicados","Consentimiento / decisión de posponer","Nombre del producto, lote y caducidad","Pasos de higiene realizados","Instrumento y método de procesamiento","Etiqueta del desinfectante, dilución y tiempo de contacto","Zona limpia / zona usada / residuos","Temperatura y humedad","Rango técnico del adhesivo comprobado","Fecha de apertura y almacenamiento","Descripción y hora del incidente","Zona afectada y producto","Medidas adoptadas y derivación","Seguimiento y responsable del registro","Observaciones de mantenimiento","Cuidados posteriores entregados","Objetivo y fecha de práctica","Herramientas y material de entrenamiento","Observaciones del formador y próximo objetivo"];
 const desc=en?"Training templates only. Adapt them to applicable privacy, health, workplace and record-retention rules. Do not use them as medical records.":"Plantillas formativas. Adáptalas a las normas aplicables de privacidad, salud, trabajo y conservación de registros. No son historias clínicas.";
 return '<section class="lash-forms"><h2>'+(en?"Printable professional templates":"Plantillas profesionales imprimibles")+'</h2><p>'+desc+'</p><div class="lash-form-buttons">'+forms.map((f,i)=>'<button class="secondary" type="button" onclick="window.printLashForm('+i+')">'+(en?f[1]:f[0])+'</button>').join("")+'</div><div id="lash-print-form"></div></section>';
}
window.printLashForm=function(index){
 const lang=getLang(),en=lang==="en";const labels=en?["Date and time","Client code (avoid unnecessary personal data)","Service requested / design","Relevant history voluntarily disclosed","Visible observations (no diagnosis)","Known product reactions","Risks and alternatives explained","Consent / decision to postpone","Product name, batch and expiry","Hygiene steps completed","Instrument and processing method","Disinfectant label, dilution and contact time","Clean area / used area / waste","Temperature and humidity","Adhesive technical range checked","Product opening date and storage","Incident description and time","Affected area and product","Actions taken and referral","Follow-up and record owner","Maintenance observations","Aftercare instructions delivered","Practice objective and date","Tools and training material used","Trainer feedback and next goal"]:["Fecha y hora","Código de cliente (evitar datos personales innecesarios)","Servicio solicitado / diseño","Antecedentes relevantes comunicados voluntariamente","Observaciones visibles (sin diagnóstico)","Reacciones conocidas a productos","Riesgos y alternativas explicados","Consentimiento / decisión de posponer","Nombre del producto, lote y caducidad","Pasos de higiene realizados","Instrumento y método de procesamiento","Etiqueta del desinfectante, dilución y tiempo de contacto","Zona limpia / zona usada / residuos","Temperatura y humedad","Rango técnico del adhesivo comprobado","Fecha de apertura y almacenamiento","Descripción y hora del incidente","Zona afectada y producto","Medidas adoptadas y derivación","Seguimiento y responsable del registro","Observaciones de mantenimiento","Cuidados posteriores entregados","Objetivo y fecha de práctica","Herramientas y material de entrenamiento","Observaciones del formador y próximo objetivo"];
 const groups=[[0,1,2,3,4,5,6,7],[8,9,10,11,12],[13,14,15],[16,17,18,19],[20,21],[22,23,24]];
 const idx=groups[index]||groups[0];const root=document.getElementById("lash-print-form");if(!root)return;
 root.innerHTML='<div class="lash-print-sheet"><h1>ELI BEAUTY ACADEMY</h1><h2>'+escapeHTML(en?forms[index][1]:forms[index][0])+'</h2><p>'+escapeHTML(en?"Training template — adapt to local requirements.":"Plantilla formativa — adaptar a los requisitos locales.")+'</p>'+idx.map(i=>'<div class="lash-print-field"><strong>'+escapeHTML(labels[i])+'</strong><div></div></div>').join("")+'<p class="lash-print-sign">'+(en?"Prepared by: ____________________   Date: ____________________":"Elaborado por: ____________________   Fecha: ____________________")+'</p></div>';
 root.scrollIntoView({behavior:"smooth",block:"start"});setTimeout(()=>window.print(),250);
};
window.openLashPrintableForms=function(){
 const academy=document.getElementById("academia");
 const modules=document.getElementById("modules");
 const panel=document.getElementById("lash-lesson-panel");
 if(!academy||!panel)return false;
 if(modules)modules.hidden=true;
 academy.classList.add("lash-studying");
 panel.hidden=false;
 const en=getLang()==="en";
 panel.innerHTML=printableForms(getLang())+'<div style="max-width:940px;margin:18px auto"><button class="secondary" type="button" onclick="window.returnToLashCurriculum()">← '+(en?"BACK TO ALL STAGES":"VOLVER A TODAS LAS ETAPAS")+'</button></div>';
 window.__lashViewState={mode:"printable-forms"};
 panel.scrollTop=0;
 return true;
};
const originalStage=window.renderLashStage;
const originalTechnicalSheets=window.buildTechnicalSheets;
window.buildTechnicalSheets=function(index){
 if(index<2){
  const m=lashCurriculum[index];if(!m)return "";
  const en=getLang()==="en";
  return '<section class="tech-library"><h3>'+(en?"Lesson-specific reference sheets":"Fichas de referencia por lección")+'</h3><div class="tech-grid">'+m.lessons.map((lesson,i)=>'<article class="tech-sheet"><span class="tech-kicker">'+(en?"REFERENCE SHEET ":"FICHA DE REFERENCIA ")+(i+1)+'</span><h4>'+escapeHTML(en?legacySheetTitlesEn[index*4+i]:lesson[0])+'</h4><p><strong>'+(en?"Description: ":"Descripción: ")+'</strong>'+escapeHTML(en?legacySheetSummariesEn[index*4+i]:lesson[1])+'</p><p><strong>'+(en?"Professional check: ":"Comprobación profesional: ")+'</strong>'+(en?"Compare the real case with the product documentation, the natural lash condition and the safe-work procedure.":"Contrasta el caso real con la documentación del producto, el estado de la pestaña natural y el procedimiento de trabajo seguro.")+'</p><p><strong>'+(en?"Stage safety rule: ":"Regla de seguridad de la etapa: ")+'</strong>'+escapeHTML(en?legacySafetyEn[index]:m.safety)+'</p></article>').join("")+'</div></section>';
 }
 const d=stages[index-2];if(!d)return "";
 const en=getLang()==="en";
 return '<section class="tech-library"><h3>'+(en?"Lesson-specific technical sheets":"Fichas técnicas específicas de cada lección")+'</h3><p class="study-note">'+(en?"Use these sheets with the actual product label, technical sheet and safety data sheet.":"Utiliza estas fichas junto con la etiqueta, ficha técnica y ficha de seguridad del producto real.")+'</p><div class="tech-grid">'+d.lessons.map((l,i)=>{const x=l[en?"en":"es"];return '<article class="tech-sheet"><span class="tech-kicker">'+(en?"REFERENCE SHEET ":"FICHA DE REFERENCIA ")+(i+1)+'</span><h4>'+escapeHTML(x.title)+'</h4><p><strong>'+(en?"Purpose: ":"Finalidad: ")+'</strong>'+escapeHTML(x.objective)+'</p><p><strong>'+(en?"Key points: ":"Puntos clave: ")+'</strong>'+escapeHTML(x.content[0])+'</p><p><strong>'+(en?"Operational check: ":"Comprobación operativa: ")+'</strong>'+escapeHTML(x.steps[0])+'</p><p><strong>'+(en?"Safety limit: ":"Límite de seguridad: ")+'</strong>'+escapeHTML(x.avoid[0])+'</p></article>';}).join("")+'</div><div class="tech-warning"><strong>'+(en?"Important: ":"Importante: ")+'</strong>'+(en?"Product-specific values, concentrations, contact times, environmental ranges and compatibility must come from current manufacturer documentation and applicable local rules.":"Los valores, concentraciones, tiempos de contacto, rangos ambientales y compatibilidades deben proceder de la documentación vigente del fabricante y de las normas locales aplicables.")+'</div></section>';
};
window.renderLashStage=function(index){
 if(index<2){const panel=document.getElementById('lash-lesson-panel');if(typeof originalStage==="function")originalStage(index);else if(typeof window.renderLashLesson==="function")window.renderLashLesson(index,0);if(panel){addStageOneLessonDiagrams(panel);panel.insertAdjacentHTML('beforeend',addInteractivePractice(index,getLang())+addPracticeSection(index,getLang())+addReferences(getLang()));wireInteractivePractice(panel);}return;}
 const lang=getLang(),d=stages[index-2];if(!d)return;
 const panel=document.getElementById("lash-lesson-panel");if(!panel)return;
 const academy=document.getElementById("academia");
 const modules=document.getElementById("modules");
 if(academy)academy.classList.add("lash-studying");
 if(modules)modules.hidden=true;
 const en=lang==="en",stageTitle=en?stageNamesEn[index-2]:d.title,stageIntro=en?stageIntrosEn[index-2]:d.intro;let html='<header class="lash-stage-heading"><span class="pill">'+(en?"STAGE ":"ETAPA ")+(index+1)+' / 13 · '+escapeHTML(stageTitle)+'</span><h1>'+escapeHTML(stageTitle)+'</h1><p>'+escapeHTML(stageIntro)+'</p><div class="lash-progress"><span style="width:'+Math.round((index+1)/13*100)+'%"></span></div><small>'+(en?"4 lessons · Stage ":"4 lecciones · Etapa ")+(index+1)+' of 13</small></header><section class="expanded-course"><h2>'+(en?"Lesson content":"Contenido de las lecciones")+'</h2>';
 if(index===5){const video='<div class="lash-intro-video" style="display:flex;justify-content:center;margin:22px 0 26px"><div style="position:relative;overflow:hidden;width:100%;max-width:760px;aspect-ratio:16/9;border-radius:14px;background:#111"><iframe src="https://www.youtube.com/embed/qafmxW0imKw?rel=0&modestbranding=1" title="Etapa 6: Higiene, desinfección y bioseguridad" style="position:absolute;inset:0;width:100%;height:100%;border:0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div></div>';html=html.replace('<section class="expanded-course">',video+'<section class="expanded-course">');}
 d.lessons.forEach((l,i)=>{const x=l[lang];html+='<article class="expanded-lesson"><span class="tech-kicker">'+(en?"LESSON ":"LECCIÓN ")+(i+1)+' / 4</span><h2>'+escapeHTML(x.title)+'</h2><p><strong>'+(en?"Learning objective: ":"Objetivo de aprendizaje: ")+'</strong>'+escapeHTML(x.objective)+'</p><h3>'+(en?"Lesson development":"Desarrollo de la lección")+'</h3>'+x.content.map(p=>'<p>'+escapeHTML(p)+'</p>').join("")+'<h3>'+(en?"Guided learning steps":"Pasos de aprendizaje guiado")+'</h3><ol>'+x.steps.map(v=>'<li>'+escapeHTML(v)+'</li>').join("")+'</ol><h3>'+(en?"Errors and unsafe actions to avoid":"Errores y acciones inseguras que debes evitar")+'</h3><ul>'+x.avoid.map(v=>'<li>'+escapeHTML(v)+'</li>').join("")+'</ul></article>';});
 html+='</section>'+((window.buildVisuals&&index>=0)?window.buildVisuals(index):"")+((window.buildTechnicalSheets)?window.buildTechnicalSheets(index):"")+addInteractivePractice(index,lang)+addPracticeSection(index,lang)+addReferences(lang)+'<div class="lash-stage-actions"><button class="primary lash-test-entry" onclick="window.renderLashTest('+index+')">'+(en?"TAKE STAGE TEST →":"REALIZAR TEST DE LA ETAPA "+(index+1)+" →")+'</button></div><nav class="lash-course-nav"><button class="secondary" onclick="window.renderLashStage('+(index-1)+')">← '+(en?"PREVIOUS":"ANTERIOR")+'</button><button class="primary" onclick="window.renderLashStage('+(index<12?index+1:index)+')">'+(index<12?(en?"NEXT STAGE →":"SIGUIENTE ETAPA →"):(en?"FINAL EXAM →":"PRUEBA FINAL →"))+'</button></nav>';
 panel.hidden=false;panel.innerHTML=html;wireInteractivePractice(panel);addParagraphVectorSchemes(panel);window.__lashViewState={mode:"stage",index};
};
window.renderLashTest=function(index){
 const panel=document.getElementById("lash-lesson-panel");if(!panel)return;
 const items=makeQuestions(index);const lang=getLang(),en=lang==="en";
 panel.innerHTML=renderQuestionSet(items,"lash-stage-"+index,en?"STAGE TEST":"TEST DE ETAPA",en?"Four questions covering the lessons in this stage. A score of 70% is the learning reference.":"Cuatro preguntas que cubren las lecciones de esta etapa. El 70% es la referencia de aprendizaje.")+'<nav class="lash-course-nav"><button class="secondary" onclick="window.renderLashStage('+index+')">← '+(en?"BACK TO LESSONS":"VOLVER A LAS LECCIONES")+'</button>'+(index<12?'<button class="primary" onclick="window.renderLashStage('+(index+1)+')">'+(en?"NEXT STAGE →":"SIGUIENTE ETAPA →")+'</button>':'<button class="primary" onclick="window.renderLashFinalExam()">'+(en?"FINAL EXAM →":"PRUEBA FINAL →")+'</button>')+'</nav>';
 document.getElementById("lash-stage-"+index+"-grade").onclick=()=>{const result=scoreSet(items,"lash-stage-"+index),box=document.getElementById("lash-stage-"+index+"-result");box.innerHTML='<div class="lash-result"><h2>'+(en?"Score: ":"Resultado: ")+result.score+'%</h2><p>'+result.correct+' / '+result.total+' · '+(en?"Answered: ":"Contestadas: ")+result.answered+'</p><p>'+(result.score>=70?(en?"Stage test passed.":"Test de etapa aprobado."):(en?"Review the lessons and try again.":"Repasa las lecciones y vuelve a intentarlo."))+'</p></div>';};
 window.__lashViewState={mode:"test",index};
};
window.renderLashFinalExam=function(){
 const panel=document.getElementById("lash-lesson-panel");if(!panel)return;const items=questionsForAll(),lang=getLang(),en=lang==="en";
 panel.innerHTML=renderQuestionSet(items,"lash-final",en?"FINAL COURSE EXAM":"EXAMEN FINAL DEL CURSO",en?"52 questions: four from each of the 13 stages. A score of 70% is the internal learning threshold.":"52 preguntas: cuatro de cada una de las 13 etapas. El 70% es el umbral académico interno.")+'<p class="study-note">'+(en?"This is an internal knowledge assessment. It does not by itself certify practical competence or issue a professional licence.":"Esta es una evaluación interna de conocimientos. Por sí sola no acredita destreza práctica ni concede una licencia profesional.")+'</p><button class="secondary" onclick="window.renderLashStage(12)">← '+(en?"BACK TO STAGE 13":"VOLVER A LA ETAPA 13")+'</button>';
 document.getElementById("lash-final-grade").onclick=()=>{const result=scoreSet(items,"lash-final"),box=document.getElementById("lash-final-result");box.innerHTML='<div class="lash-result"><h2>'+(en?"Final score: ":"Nota final: ")+result.score+'%</h2><p>'+result.correct+' / '+result.total+' · '+(en?"Answered: ":"Contestadas: ")+result.answered+'</p><p>'+(result.score>=70?(en?"Internal theory threshold achieved. Practical assessment remains separate.":"Umbral teórico interno alcanzado. La evaluación práctica es independiente."):(en?"Review the course and repeat the assessment.":"Repasa el curso y repite la evaluación."))+'</p></div>';};
 window.__lashViewState={mode:"final"};
};
const css=document.createElement("style");
css.textContent='.lash-practical,.lash-references,.lash-forms{margin:24px 0;padding:20px;border:1px solid #dfe6ef;border-radius:14px;background:#fff}.lash-practical h2,.lash-references h2,.lash-forms h2{color:#1d3153}.lash-rubric{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.lash-rubric article{border:1px solid #e3e8ef;border-radius:10px;padding:13px}.lash-rubric article p{line-height:1.6;color:#536178}.lash-rubric-levels{display:grid;gap:7px;font-size:12px}.lash-rubric-levels label{display:block}.lash-feedback{width:100%;min-height:85px;padding:10px;border:1px solid #d8e0ea;border-radius:8px}.lash-form-buttons{display:flex;flex-wrap:wrap;gap:8px}.lash-references li{margin:8px 0;line-height:1.6}.lash-print-sheet{display:none}.lash-print-field{margin:15px 0}.lash-print-field>div{height:36px;border-bottom:1px solid #999}.lash-print-sign{margin-top:35px}.lash-forms button{margin:5px 4px 5px 0}@media(max-width:650px){.lash-rubric{grid-template-columns:1fr}}@media print{body *{visibility:hidden!important}#lash-print-form,#lash-print-form *{visibility:visible!important}.lash-print-sheet{display:block!important;position:absolute;left:0;top:0;width:100%;padding:20px;color:#111}.lash-print-sheet h1,.lash-print-sheet h2{color:#111}.lash-print-field>div{height:42px}.lash-print-sign{margin-top:40px}}';
document.head.appendChild(css);

/* EDDELI · Evaluaciones conectadas a Supabase: las claves nunca se envían al navegador. */
async function renderDatabaseLashAssessment(stageIndex,isFinal){
 const panel=document.getElementById("lash-lesson-panel");
 if(!panel)return;
 const en=getLang()==="en";
 if(!currentUser||!currentProfile||currentProfile.role!=="student"||currentProfile.approval_status!=="approved"){
  panel.innerHTML='<div class="lash-result"><h2>'+(en?"Student access required":"Acceso de estudiante requerido")+'</h2><p>'+(en?"Sign in with an approved student account to take this assessment.":"Inicia sesión con una cuenta de estudiante aprobada para realizar esta evaluación.")+'</p></div>';
  return;
 }
 panel.hidden=false;
 panel.innerHTML='<p class="study-note">'+(en?"Loading the official assessment…":"Cargando la evaluación oficial…")+'</p>';
 try{
  let assessment;
  if(isFinal){
   const a=await supabaseClient.from("assessments").select("id,title,title_en,passing_score").eq("is_final",true).single();
   if(a.error)throw a.error;assessment=a.data;
  }else{
   const m=await supabaseClient.from("academy_modules").select("id,module_number,title,title_en").eq("module_number",stageIndex+1).eq("published",true).single();
   if(m.error)throw m.error;
   const a=await supabaseClient.from("assessments").select("id,title,title_en,passing_score").eq("module_id",m.data.id).eq("is_final",false).single();
   if(a.error)throw a.error;assessment=a.data;
  }
  const qr=await supabaseClient.from("exam_questions").select("id,question_text,question_text_en,options,options_en,question_order").eq("assessment_id",assessment.id).order("question_order",{ascending:true});
  if(qr.error)throw qr.error;
  if(!qr.data.length)throw new Error(en?"No questions have been added yet.":"Esta evaluación todavía no tiene preguntas.");
  const questions=qr.data;
  const title=en?(assessment.title_en||assessment.title):assessment.title;
  let html='<header class="lash-test-heading"><span class="pill">ELI BEAUTY ACADEMY · '+(isFinal?(en?"FINAL EXAM":"EXAMEN FINAL"):(en?"STAGE "+(stageIndex+1):"ETAPA "+(stageIndex+1)))+'</span><h1>'+escapeHTML(title)+'</h1><p>'+(en?"Answer every question. Your answers and score are recorded in your academic record.":"Responde todas las preguntas. Tus respuestas y tu nota quedarán registradas en tu expediente académico.")+'</p></header><form id="lash-db-assessment-form" class="lash-quiz">';
  questions.forEach((q,i)=>{
   const opts=en&&Array.isArray(q.options_en)&&q.options_en.length?q.options_en:q.options;
   const question=en?(q.question_text_en||q.question_text):q.question_text;
   html+='<fieldset class="lash-question"><legend>'+(i+1)+'. '+escapeHTML(question)+'</legend>'+opts.map((o,j)=>'<label class="lash-option"><input type="radio" name="'+escapeHTML(q.id)+'" value="'+escapeHTML(String(o))+'" required><span>'+escapeHTML(String(o))+'</span></label>').join("")+'</fieldset>';
  });
  html+='<button class="primary" type="submit">'+(en?"SUBMIT ASSESSMENT":"ENVIAR EVALUACIÓN")+'</button></form><div id="lash-db-assessment-result" aria-live="polite"></div><nav class="lash-course-nav"><button type="button" class="secondary" id="lash-db-back">'+(en?"BACK TO LESSONS":"VOLVER A LAS LECCIONES")+'</button></nav>';
  panel.innerHTML=html;
  document.getElementById("lash-db-back").onclick=()=>isFinal?window.renderLashStage(12):window.renderLashLesson(stageIndex,3);
  const nextButton=document.createElement("button");
  nextButton.type="button";nextButton.className="primary";
  nextButton.textContent=isFinal?(en?"COURSE MAP":"VOLVER AL ITINERARIO"):(stageIndex<12?(en?"NEXT STAGE →":"SIGUIENTE ETAPA →"):(en?"FINAL EXAM →":"PRUEBA FINAL →"));
  nextButton.onclick=()=>isFinal?closeLashPanel():(stageIndex<12?window.renderLashStage(stageIndex+1):window.renderLashFinalExam());
  document.querySelector("#lash-lesson-panel .lash-course-nav").append(nextButton);
  const form=document.getElementById("lash-db-assessment-form");
  form.onsubmit=async ev=>{
   ev.preventDefault();
   const submit=form.querySelector('button[type="submit"]');submit.disabled=true;
   submit.textContent=en?"SENDING…":"ENVIANDO…";
   const answers={};questions.forEach(q=>{answers[q.id]=new FormData(form).get(q.id);});
   try{
    if(Object.values(answers).some(v=>!v))throw new Error(en?"Answer every question before submitting.":"Debes responder todas las preguntas.");
    const result=await supabaseClient.rpc("eddeli_submit_assessment",{p_assessment_id:assessment.id,p_answers:answers});
    if(result.error)throw result.error;
    const outcome=result.data&&result.data[0];if(!outcome)throw new Error(en?"No result was returned.":"No se recibió el resultado de la evaluación.");
    form.remove();
    const box=document.getElementById("lash-db-assessment-result");
    box.innerHTML='<div class="lash-result"><h2>'+(en?"Recorded score: ":"Nota registrada: ")+Number(outcome.score).toFixed(2)+'%</h2><p>'+(outcome.passed?(en?"Assessment passed. Your academic record has been updated.":"Evaluación aprobada. Tu expediente académico ha sido actualizado."):(en?"Not passed yet. Review the lessons and try again.":"Todavía no aprobada. Repasa las lecciones y vuelve a intentarlo."))+'</p><p>'+(en?"Passing threshold: ":"Nota mínima: ")+assessment.passing_score+'%</p></div>';
    if(isFinal&&outcome.passed){
     const cert=await supabaseClient.from("certificates").select("certificate_code,issued_at").eq("student_id",currentUser.id).eq("course_id","8b097e3a-4a76-4896-a79f-e4097c1b68dc").maybeSingle();
     if(!cert.error&&cert.data)box.insertAdjacentHTML("beforeend",'<div class="lash-result"><h2>'+(en?"Certificate issued":"Certificado emitido")+'</h2><p>'+escapeHTML(cert.data.certificate_code)+'</p></div>');
    }
    if(!isFinal&&!outcome.passed){
     const retry=document.createElement("button");retry.className="primary";retry.textContent=en?"RETRY STAGE TEST":"REPETIR TEST DE ETAPA";
     retry.onclick=()=>window.renderLashTest(stageIndex);
     if(fixedNav)fixedNav.append(retry);else box.append(retry);
    }
    if(typeof window.loadStudentCourses==="function")window.loadStudentCourses();
   }catch(err){
    const box=document.getElementById("lash-db-assessment-result");box.textContent=(en?"Could not record the assessment: ":"No se pudo registrar la evaluación: ")+(err.message||String(err));
    submit.disabled=false;submit.textContent=en?"SUBMIT ASSESSMENT":"ENVIAR EVALUACIÓN";
   }
  };
  window.__lashViewState={mode:isFinal?"final-db":"test-db",index:stageIndex};
 }catch(err){
  panel.innerHTML='<div class="lash-result"><h2>'+(en?"Assessment unavailable":"Evaluación no disponible")+'</h2><p>'+escapeHTML(err.message||String(err))+'</p><button class="secondary" onclick="window.renderLashStage('+(isFinal?12:stageIndex)+')">'+(en?"BACK":"VOLVER")+'</button></div>';
 }
}
window.renderLashTest=function(index){renderDatabaseLashAssessment(index,false);};
window.renderLashFinalExam=function(){renderDatabaseLashAssessment(12,true);};


/* Navegación secuencial de estudio: una lección visible por pantalla. */
function lashPanelTop(){
 // Intentionally do not move the document when the student changes lesson.
}
function lashShowLocked(index,reason){
 const panel=document.getElementById("lash-lesson-panel");if(!panel)return;
 const en=getLang()==="en";
 panel.hidden=false;
 panel.innerHTML='<section class="lash-locked-screen"><h2>'+(en?"This stage is locked":"Esta etapa está bloqueada")+'</h2><p>'+escapeHTML(reason||(en?"Pass the previous stage assessment to continue.":"Aprueba la evaluación de la etapa anterior para continuar."))+'</p><button class="primary" onclick="window.renderLashStage('+Math.max(0,index-1)+')">'+(en?"RETURN TO PREVIOUS STAGE":"VOLVER A LA ETAPA ANTERIOR")+'</button><button class="secondary" onclick="closeLashPanel()">'+(en?"COURSE MAP":"ITINERARIO")+'</button></section>';
 window.__lashViewState={mode:"locked",index};lashPanelTop();
}
window.renderLashLesson=function(index,lessonIndex){
 const panel=document.getElementById("lash-lesson-panel");if(!panel)return;
 const en=getLang()==="en",legacy=index<2,advanced=index>=2?stages[index-2]:null;
 if(!legacy&&!advanced)return;
 if(lessonIndex<0){if(index>0)window.renderLashLesson(index-1,3);else closeLashPanel();return;}
 if(lessonIndex>3){window.renderLashTest(index);return;}
 let title="",intro="",level="",lessonHtml="",videoHtml="",visualHtml="",sheetHtml="";
 if(legacy){
  if(typeof originalStage==="function") originalStage(index);
  const temp=document.createElement("div");
  temp.innerHTML=panel.innerHTML;
  addStageOneLessonDiagrams(temp);
  const items=[...temp.querySelectorAll(".expanded-course .expanded-lesson")];
  const heading=temp.querySelector(".lash-stage-heading h1");
  const introNode=temp.querySelector(".lash-stage-heading>p");
  const levelNode=temp.querySelector(".lash-stage-heading .pill");
  if(!items[lessonIndex]){
   panel.hidden=false;
   panel.innerHTML='<section class="lash-locked-screen"><h2>'+(en?"Lesson content unavailable":"Contenido de la lección no disponible")+'</h2><p>'+(en?"The original lesson could not be read. Return to the course map.":"No se pudo leer la lección original. Vuelve al itinerario.")+'</p><button class="primary" onclick="closeLashPanel()">'+(en?"BACK TO COURSE MAP":"VOLVER AL ITINERARIO")+'</button></section>';
   return;
  }
  title=heading?heading.textContent.trim():(en?"Stage "+(index+1):"Etapa "+(index+1));
  intro=introNode?introNode.textContent.trim():"";
  level=levelNode?levelNode.textContent.trim():"";
  lessonHtml=items[lessonIndex].outerHTML;
  if(index===0&&lessonIndex===3){const v=temp.querySelector(".lash-intro-video");if(v)videoHtml=v.outerHTML;}
  const visual=temp.querySelectorAll(".atlas-card")[lessonIndex]||temp.querySelectorAll(".study-visual")[lessonIndex];
  if(visual)visualHtml='<section class="lash-one-support"><h3>'+(en?"Visual guide":"Guía visual")+'</h3>'+visual.outerHTML+'</section>';
  const sheet=temp.querySelectorAll(".tech-sheet")[lessonIndex];
  if(sheet)sheetHtml='<section class="lash-one-support"><h3>'+(en?"Technical reference":"Ficha técnica")+'</h3>'+sheet.outerHTML+'</section>';

 }else{
  title=en?(stageNamesEn[index-2]||advanced.title):advanced.title;
  intro=en?(stageIntrosEn[index-2]||advanced.intro):advanced.intro;
  level=en?"Professional training":"Formación profesional";
  const x=advanced.lessons[lessonIndex][getLang()]||advanced.lessons[lessonIndex].es||advanced.lessons[lessonIndex].en;
  lessonHtml='<article class="expanded-lesson"><span class="tech-kicker">'+(en?"LESSON ":"LECCIÓN ")+(lessonIndex+1)+' / 4</span><h2>'+escapeHTML(x.title)+'</h2><p><strong>'+(en?"Learning objective: ":"Objetivo de aprendizaje: ")+'</strong>'+escapeHTML(x.objective)+'</p><h3>'+(en?"Lesson development":"Desarrollo de la lección")+'</h3>'+x.content.map(v=>'<p>'+escapeHTML(v)+'</p>').join("")+'<h3>'+(en?"Guided learning steps":"Pasos de aprendizaje guiado")+'</h3><ol>'+x.steps.map(v=>'<li>'+escapeHTML(v)+'</li>').join("")+'</ol><h3>'+(en?"Errors and unsafe actions to avoid":"Errores y acciones inseguras que debes evitar")+'</h3><ul>'+x.avoid.map(v=>'<li>'+escapeHTML(v)+'</li>').join("")+'</ul></article>';
  const visualBox=document.createElement("div");visualBox.innerHTML=window.buildVisuals?window.buildVisuals(index):"";
  const visual=visualBox.querySelectorAll(".atlas-card")[lessonIndex];
  if(visual)visualHtml='<section class="lash-one-support"><h3>'+(en?"Visual guide":"Guía visual")+'</h3>'+visual.outerHTML+'</section>';
  const sheetBox=document.createElement("div");sheetBox.innerHTML=window.buildTechnicalSheets?window.buildTechnicalSheets(index):"";
  const sheet=sheetBox.querySelectorAll(".tech-sheet")[lessonIndex];
  if(sheet)sheetHtml='<section class="lash-one-support"><h3>'+(en?"Technical reference":"Ficha técnica")+'</h3>'+sheet.outerHTML+'</section>';
  if(index===5&&lessonIndex===0)videoHtml='<div class="lash-intro-video"><div><iframe src="https://www.youtube.com/embed/qafmxW0imKw?rel=0&modestbranding=1" title="Etapa 6: Higiene, desinfección y bioseguridad" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div></div>';
 }
 const previous=index===0&&lessonIndex===0
  ?'<button class="secondary" onclick="closeLashPanel()">'+(en?"COURSE MAP":"ITINERARIO")+'</button>'
  :'<button class="secondary" onclick="window.renderLashLesson('+index+','+(lessonIndex-1)+')">← '+(en?"PREVIOUS":"ANTERIOR")+'</button>';
 const next=lessonIndex<3
  ?'<button class="primary" onclick="window.renderLashLesson('+index+','+(lessonIndex+1)+')">'+(en?"NEXT LESSON →":"SIGUIENTE LECCIÓN →")+'</button>'
  :'<button class="primary" onclick="window.renderLashTest('+index+')">'+(en?"TAKE STAGE TEST →":"REALIZAR TEST →")+'</button>';
 const extras=lessonIndex===3?'<details class="lash-extra-resources"><summary>'+(en?"Optional stage resources":"Material complementario de la etapa")+'</summary>'+addPracticeSection(index,getLang())+addReferences(getLang())+'</details>':"";
 const testShortcut="";
 panel.hidden=false;
 panel.innerHTML='<header class="lash-stage-heading"><span class="pill">'+(en?"STAGE ":"ETAPA ")+(index+1)+' / 13 · '+escapeHTML(level)+'</span><h1>'+escapeHTML(title)+'</h1><p>'+escapeHTML(intro)+'</p><div class="lash-progress"><span style="width:'+Math.round(((index*4+lessonIndex+1)/52)*100)+'%"></span></div><small>'+(en?"LESSON ":"LECCIÓN ")+(lessonIndex+1)+' / 4 · '+(en?"STAGE ":"ETAPA ")+(index+1)+' / 13</small></header><div class="lash-single-lesson">'+videoHtml+lessonHtml+visualHtml+sheetHtml+extras+'</div><nav class="lash-course-nav">'+previous+'<span class="lash-nav-count">'+(index*4+lessonIndex+1)+' / 52</span>'+testShortcut+next+'</nav>';
 addParagraphVectorSchemes(panel);
 window.__lashViewState={mode:"lesson",index,lesson:lessonIndex};
 lashPanelTop();
};
/* Se conserva el renderizador completo definido antes: muestra las cuatro lecciones de cada etapa. */
const sequentialStyle=document.createElement("style");
sequentialStyle.textContent=`#academia.lash-studying{padding-bottom:0}#academia.lash-studying #lash-lesson-panel{position:fixed;top:88px;left:270px;right:18px;bottom:18px;z-index:1000;display:block!important;width:auto;max-width:none;margin:0!important;overflow-y:auto;overscroll-behavior:contain;padding:clamp(18px,3vw,34px) 20px 100px;border-radius:18px;background:#fff;box-shadow:0 14px 40px #101a3233}.lash-single-lesson{max-width:940px;margin:18px auto}.lash-single-lesson>.expanded-lesson{margin:0 0 16px}.lash-single-lesson .atlas-card,.lash-single-lesson .tech-sheet{max-width:760px;margin:12px auto}.lash-one-support{margin:16px 0}.lash-one-support>h3{color:#80643b}.lash-single-lesson .lash-intro-video{display:flex;justify-content:center;margin:18px 0}.lash-single-lesson .lash-intro-video>div{position:relative;width:100%;max-width:760px;aspect-ratio:16/9;border-radius:14px;overflow:hidden;background:#111}.lash-single-lesson .lash-intro-video iframe{position:absolute;inset:0;width:100%;height:100%;border:0}.lash-extra-resources{margin:18px 0;padding:14px;border:1px solid #e3e8ef;border-radius:12px;background:#fff}.lash-extra-resources summary{cursor:pointer;font-weight:700;color:#72572f}.lash-course-nav{position:fixed!important;left:50%!important;right:auto!important;bottom:10px!important;transform:translateX(-50%);width:min(980px,calc(100% - 24px));z-index:9999;background:#111b2b!important;color:#fff!important;border:1px solid #34435a!important;border-radius:15px;padding:10px 14px!important;box-shadow:0 8px 28px #0003}.lash-course-nav button{min-height:44px;min-width:140px}.lash-nav-count{align-self:center;color:#fff;font-size:13px;font-weight:700;white-space:nowrap}.lash-locked-screen{text-align:center;padding:35px 15px}.lash-locked-screen button{margin:8px}@media(max-width:850px){#academia.lash-studying #lash-lesson-panel{top:70px;left:10px;right:10px;bottom:82px;padding:16px 14px 90px}}@media(max-width:600px){.lash-course-nav{gap:7px!important;padding:8px!important}.lash-course-nav button{min-width:0;flex:1;font-size:11px;padding:9px 5px}.lash-nav-count{font-size:10px}.lash-single-lesson>.expanded-lesson{padding:16px}}.paragraph-vector{display:flex;align-items:center;gap:14px;margin:10px auto 18px;padding:10px 14px;border:1px solid #dbe4ed;border-radius:12px;background:linear-gradient(135deg,#f8fbff,#fff);max-width:520px}.paragraph-vector svg{display:block;width:76px;height:76px;flex:0 0 76px}.paragraph-vector figcaption{font-size:12px;font-weight:700;color:#536579}.paragraph-vector{box-sizing:border-box}@media(max-width:600px){.paragraph-vector{max-width:100%;padding:8px 10px}.paragraph-vector svg{width:64px;height:64px;flex-basis:64px}}`;
document.head.appendChild(sequentialStyle);


/* EDDELI · Recorrido independiente por etapas, con desbloqueo secuencial. */
const LASH_COURSE_ID="8b097e3a-4a76-4896-a79f-e4097c1b68dc";
async function getLashProgressState(){
 /* Recuperar sesión y perfil bajo demanda. La pantalla puede solicitar el
    itinerario antes de que restoreSession() haya terminado su carga asíncrona. */
 let user=currentUser, profile=currentProfile;
 if(!user){
  const sessionResult=await supabaseClient.auth.getSession();
  if(sessionResult.error)throw sessionResult.error;
  user=sessionResult.data.session?.user||null;
  if(user)currentUser=user;
 }
 if(!user)throw new Error("Inicia sesión para consultar las etapas de la academia.");
 if(!user.email_confirmed_at)throw new Error("Debes confirmar tu correo electrónico antes de acceder.");
 if(!profile||profile.id!==user.id){
  const profileResult=await supabaseClient.from("profiles").select("id,full_name,role,approval_status,phone,country").eq("id",user.id).maybeSingle();
  if(profileResult.error)throw profileResult.error;
  if(!profileResult.data)throw new Error("No se encontró el perfil de esta cuenta. Contacta con el administrador.");
  profile=profileResult.data;currentProfile=profile;
 }
 const admin=profile.role==="admin"&&profile.approval_status==="approved";
 const student=profile.role==="student"&&profile.approval_status==="approved";
 if(!admin&&!student)throw new Error("La cuenta no tiene acceso aprobado a la academia. Comprueba el rol y la aprobación con el administrador.");
 const modulesResult=await supabaseClient.from("academy_modules").select("id,module_number,title").eq("course_id",LASH_COURSE_ID).eq("published",true).order("module_number",{ascending:true});
 if(modulesResult.error)throw modulesResult.error;
 const modules=modulesResult.data||[];
 if(modules.length!==13)throw new Error("La academia debe tener exactamente 13 etapas publicadas. Se encontraron "+modules.length+". No se ha modificado ningún dato.");
 if(admin)return {admin:true,student:false,modules,completed:new Set(),enrollmentApproved:true,allComplete:true};
 const [progressResult,enrollmentResult]=await Promise.all([
  supabaseClient.from("module_progress").select("module_id,completed,grade").eq("student_id",user.id),
  supabaseClient.from("enrollments").select("status").eq("student_id",user.id).eq("course_id",LASH_COURSE_ID).maybeSingle()
 ]);
 if(progressResult.error)throw progressResult.error;
 if(enrollmentResult.error)throw enrollmentResult.error;
 const completed=new Set((progressResult.data||[]).filter(x=>x.completed===true).map(x=>x.module_id));
 const enrollmentApproved=!!(enrollmentResult.data&&enrollmentResult.data.status==="approved");
 return {admin:false,student:true,modules,completed,enrollmentApproved,allComplete:enrollmentApproved&&modules.every(m=>completed.has(m.id))};
}
function lashStageCanOpen(state,index){
 if(!state||index<0||index>12)return false;
 if(state.admin)return true;
 if(!state.student||!state.enrollmentApproved)return false;
 return state.modules.slice(0,index).every(m=>state.completed.has(m.id));
}
window.returnToLashCurriculum=async function(){
 closeLashPanel();
 if(typeof window.renderLashCurriculum==="function")await window.renderLashCurriculum();
};
window.renderLashCurriculum=async function(){
 const box=document.getElementById("modules");if(!box)return;
 box.replaceChildren();box.hidden=false;
 const safe=value=>String(value==null?"":value).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
 let state;
 try{state=await getLashProgressState();}
 catch(err){const note=document.createElement("article");note.className="card";note.innerHTML="<h3>Itinerario no disponible</h3><p>"+safe(err.message||String(err))+"</p>";box.append(note);return;}
 if(state.student&&!state.enrollmentApproved){
  const note=document.createElement("article");note.className="card";note.innerHTML="<h3>Matrícula pendiente</h3><p>Tu acceso al curso estará disponible cuando el administrador apruebe tu matrícula.</p>";box.append(note);return;
 }
 const progress=document.createElement("article");progress.className="card";
 const count=state.admin?13:state.completed.size;
 progress.innerHTML=state.admin
  ?"<span class='pill'>MODO ADMINISTRADOR</span><h3>Revisión completa de la academia</h3><p>Puedes entrar en cualquiera de las 13 etapas para revisar su contenido y previsualizar sus tests. Las revisiones del administrador no registran notas de alumno.</p>"
  :"<span class='pill'>TU PROGRESO</span><h3>"+count+" de 13 etapas aprobadas</h3><p>"+(state.allComplete?"Todas las etapas están aprobadas. La prueba final está disponible.":"Aprueba cada test para desbloquear la etapa siguiente. La prueba final se abrirá al aprobar las 13 etapas.")+"</p>";
 box.append(progress);
 (window.lashCurriculum||lashCurriculum).forEach((m,i)=>{
  const dbModule=state.modules[i];const passed=!state.admin&&state.completed.has(dbModule.id);
  const available=lashStageCanOpen(state,i);
  const card=document.createElement("article");card.className="card module-card";
  const tag=document.createElement("span");tag.className="pill";
  tag.textContent=state.admin?"REVISIÓN ADMINISTRATIVA":passed?"ETAPA APROBADA":available?"ETAPA DISPONIBLE":"ETAPA BLOQUEADA";
  const icon=document.createElement("div");icon.className="card-icon";icon.textContent=String(i+1);
  const title=document.createElement("h3");title.textContent=m.title;
  const desc=document.createElement("p");desc.textContent=m.intro;
  const meta=document.createElement("p");meta.innerHTML="<strong>4 lecciones</strong> · Estudiar · Test";
  const action=document.createElement("button");action.className=available?"primary":"secondary";
  action.textContent=state.admin?"REVISAR ETAPA →":passed?"VOLVER A ESTUDIAR":available?"ENTRAR A LA ETAPA →":"BLOQUEADA · SUPERA LA ANTERIOR";
  action.disabled=!available;action.onclick=()=>window.openModule(i);
  card.append(tag,icon,title,desc,meta,action);box.append(card);
 });
 const finalCard=document.createElement("article");finalCard.className="card module-card";
 const finalTag=document.createElement("span");finalTag.className="pill";finalTag.textContent=state.admin?"REVISIÓN ADMINISTRATIVA":state.allComplete?"PRUEBA FINAL DISPONIBLE":"PRUEBA FINAL BLOQUEADA";
 const finalTitle=document.createElement("h3");finalTitle.textContent="Prueba final del curso";
 const finalDesc=document.createElement("p");finalDesc.textContent=state.admin?"Puedes revisar la evaluación final sin registrar un intento.":state.allComplete?"Has aprobado las 13 etapas. Ya puedes realizar la prueba final.":"Debes aprobar las 13 etapas, una por una, antes de acceder a la prueba final.";
 const finalButton=document.createElement("button");finalButton.className=(state.admin||state.allComplete)?"primary":"secondary";finalButton.textContent=(state.admin||state.allComplete)?"ENTRAR A LA PRUEBA FINAL →":"BLOQUEADA";finalButton.disabled=!(state.admin||state.allComplete);finalButton.onclick=()=>window.renderLashFinalExam();
 finalCard.append(finalTag,finalTitle,finalDesc,finalButton);box.append(finalCard);
 const formsCard=document.createElement("article");formsCard.className="card module-card";
 const formsTag=document.createElement("span");formsTag.className="pill";formsTag.textContent="RECURSOS DISPONIBLES";
 const formsTitle=document.createElement("h3");formsTitle.textContent="Plantillas profesionales imprimibles";
 const formsDesc=document.createElement("p");formsDesc.textContent="Accede a fichas y registros formativos para consultar, completar e imprimir cuando los necesites. No necesitas aprobar etapas anteriores.";
 const formsButton=document.createElement("button");formsButton.className="primary";formsButton.textContent="ABRIR PLANTILLAS →";formsButton.onclick=()=>window.openLashPrintableForms();
 formsCard.append(formsTag,formsTitle,formsDesc,formsButton);box.append(formsCard);
};
window.openModule=async function(index){
 try{
  const state=await getLashProgressState();
  if(!lashStageCanOpen(state,index)){
   alert(state.student&&!state.enrollmentApproved?"Tu matrícula todavía no está aprobada.":"Debes aprobar el test de cada etapa anterior antes de continuar.");
   return false;
  }
  const panel=document.getElementById("lash-lesson-panel"),modules=document.getElementById("modules"),academy=document.getElementById("academia");
  if(!panel||!academy)return false;
  if(modules)modules.hidden=true;academy.classList.add("lash-studying");panel.hidden=false;
  await window.renderLashStage(index);return true;
 }catch(err){alert("No se pudo abrir la etapa: "+(err.message||String(err)));return false;}
};
const lashStageRendererBase=window.renderLashStage;
window.renderLashStage=async function(index){
 let state;
 try{state=await getLashProgressState();}
 catch(err){lashShowLocked(index,err.message||String(err));return;}
 if(!lashStageCanOpen(state,index)){
  lashShowLocked(index,state.student&&!state.enrollmentApproved?"Tu matrícula todavía no está aprobada.":"Para entrar en esta etapa debes aprobar todas las etapas anteriores.");
  return;
 }
 if(typeof lashStageRendererBase!=="function")return;
 lashStageRendererBase(index);
 const panel=document.getElementById("lash-lesson-panel");if(!panel)return;
 panel.querySelectorAll(".lash-course-nav").forEach(nav=>nav.remove());
 const next=panel.querySelector(".lash-test-entry")||panel.querySelector(".lash-stage-actions button");
 if(next)next.textContent=getLang()==="en"?"NEXT: GO TO STAGE TEST →":"SIGUIENTE: IR AL TEST →";
 window.__lashViewState={mode:"stage",index};
};
async function renderLashAssessmentFlow(stageIndex,isFinal){
 const panel=document.getElementById("lash-lesson-panel");if(!panel)return;
 const en=getLang()==="en",admin=!!(currentProfile&&currentProfile.role==="admin"),student=!!(currentProfile&&currentProfile.role==="student");
 const showMessage=(heading,message)=>{panel.hidden=false;panel.innerHTML="<section class='lash-locked-screen'><h2>"+escapeHTML(heading)+"</h2><p>"+escapeHTML(message)+"</p><button class='primary' onclick='window.returnToLashCurriculum()'>"+(en?"BACK TO ALL STAGES":"VOLVER A TODAS LAS ETAPAS")+"</button></section>";};
 if(!currentUser||!currentProfile||currentProfile.approval_status!=="approved"||(!admin&&!student)){
  showMessage(en?"Approved account required":"Cuenta aprobada requerida",en?"Sign in with an approved student or administrator account.":"Inicia sesión con una cuenta aprobada de alumno o administrador.");return;
 }
 panel.hidden=false;panel.innerHTML="<p class='study-note'>"+(en?"Loading assessment…":"Cargando evaluación…")+"</p>";
 try{
  const state=await getLashProgressState();
  if(!admin){
   if(!state.enrollmentApproved){showMessage(en?"Enrollment pending":"Matrícula pendiente","El administrador debe aprobar tu matrícula antes de realizar evaluaciones.");return;}
   if(isFinal&&!state.allComplete){showMessage(en?"Final exam locked":"Prueba final bloqueada","Debes aprobar las 13 etapas, una por una, antes de realizar la prueba final.");return;}
   if(!isFinal&&!lashStageCanOpen(state,stageIndex)){showMessage(en?"Stage locked":"Etapa bloqueada","Debes aprobar las etapas anteriores antes de realizar este test.");return;}
  }
  let assessment;
  if(isFinal){
   const a=await supabaseClient.from("assessments").select("id,title,title_en,passing_score").eq("course_id",LASH_COURSE_ID).eq("is_final",true).single();
   if(a.error)throw a.error;assessment=a.data;
  }else{
   if(stageIndex<0||stageIndex>12)throw new Error("Etapa no válida.");
   const m=await supabaseClient.from("academy_modules").select("id,module_number,title,title_en").eq("course_id",LASH_COURSE_ID).eq("module_number",stageIndex+1).eq("published",true).single();
   if(m.error)throw m.error;
   const a=await supabaseClient.from("assessments").select("id,title,title_en,passing_score").eq("module_id",m.data.id).eq("is_final",false).single();
   if(a.error)throw a.error;assessment=a.data;
  }
  const qr=await supabaseClient.from("exam_questions").select("id,question_text,question_text_en,options,options_en,question_order").eq("assessment_id",assessment.id).order("question_order",{ascending:true});
  if(qr.error)throw qr.error;if(!qr.data.length)throw new Error("Esta evaluación todavía no tiene preguntas.");
  const questions=qr.data,title=en?(assessment.title_en||assessment.title):assessment.title;
  let html='<header class="lash-test-heading"><span class="pill">ELI BEAUTY ACADEMY · '+(isFinal?(en?"FINAL EXAM":"PRUEBA FINAL"):(en?"STAGE "+(stageIndex+1):"ETAPA "+(stageIndex+1)))+'</span><h1>'+escapeHTML(title)+'</h1><p>'+(admin?(en?"Administrator preview. No attempt or grade will be saved.":"Vista de revisión del administrador. No se guardará ningún intento ni nota."):(en?"Complete this test. Your result will be saved in your academic record.":"Completa este test. Tu resultado quedará registrado en tu expediente académico."))+'</p></header>';
  if(admin){
   html+='<div class="lash-admin-test-preview">';
   questions.forEach((q,i)=>{const opts=en&&Array.isArray(q.options_en)&&q.options_en.length?q.options_en:q.options;html+='<article class="lash-question"><h3>'+(i+1)+'. '+escapeHTML(en?(q.question_text_en||q.question_text):q.question_text)+'</h3><ul>'+opts.map(o=>'<li>'+escapeHTML(String(o))+'</li>').join("")+'</ul></article>';});
   html+='</div><button class="primary" onclick="window.returnToLashCurriculum()">'+(en?"BACK TO ALL STAGES":"VOLVER A TODAS LAS ETAPAS")+'</button>';
   panel.innerHTML=html;window.__lashViewState={mode:isFinal?"final-db":"test-db",index:stageIndex};return;
  }
  html+='<form id="lash-db-assessment-form" class="lash-quiz">';
  questions.forEach((q,i)=>{const opts=en&&Array.isArray(q.options_en)&&q.options_en.length?q.options_en:q.options;const question=en?(q.question_text_en||q.question_text):q.question_text;html+='<fieldset class="lash-question"><legend>'+(i+1)+'. '+escapeHTML(question)+'</legend>'+opts.map(o=>'<label class="lash-option"><input type="radio" name="'+escapeHTML(q.id)+'" value="'+escapeHTML(String(o))+'" required><span>'+escapeHTML(String(o))+'</span></label>').join("")+'</fieldset>';});
  html+='<button class="primary" type="submit">'+(en?"SUBMIT TEST":"ENVIAR TEST")+'</button></form><div id="lash-db-assessment-result" aria-live="polite"></div>';
  panel.innerHTML=html;
  const form=document.getElementById("lash-db-assessment-form");
  form.onsubmit=async ev=>{
   ev.preventDefault();const submit=form.querySelector('button[type="submit"]');submit.disabled=true;submit.textContent=en?"SENDING…":"ENVIANDO…";
   const answers={};questions.forEach(q=>answers[q.id]=new FormData(form).get(q.id));
   try{
    if(Object.values(answers).some(v=>!v))throw new Error(en?"Answer every question before submitting.":"Debes responder todas las preguntas.");
    const result=await supabaseClient.rpc("eddeli_submit_assessment",{p_assessment_id:assessment.id,p_answers:answers});
    if(result.error)throw result.error;const outcome=result.data&&result.data[0];if(!outcome)throw new Error("No se recibió el resultado de la evaluación.");
    form.remove();const box=document.getElementById("lash-db-assessment-result");
    box.innerHTML='<div class="lash-result"><h2>'+(en?"Score: ":"Resultado: ")+Number(outcome.score).toFixed(2)+'%</h2><p>'+(outcome.passed?(en?"Stage test passed. The next stage is now unlocked.":"¡Test aprobado! La etapa siguiente ya está desbloqueada."):(en?"Not passed. Review the study material and try again.":"Test no aprobado. Repasa el contenido de estudio y vuelve a intentarlo."))+'</p><p>'+(en?"Passing score: ":"Nota mínima: ")+assessment.passing_score+'%</p></div>';
    if(isFinal&&outcome.passed){
     const cert=await supabaseClient.from("certificates").select("certificate_code,issued_at").eq("student_id",currentUser.id).eq("course_id",LASH_COURSE_ID).maybeSingle();
     if(!cert.error&&cert.data)box.insertAdjacentHTML("beforeend",'<div class="lash-result"><h2>'+(en?"Certificate issued":"Certificado emitido")+'</h2><p>'+escapeHTML(cert.data.certificate_code)+'</p></div>');
    }
    if(!outcome.passed){
     const retry=document.createElement("button");retry.className="primary";retry.textContent=en?"RETRY TEST":"REPETIR TEST";retry.onclick=()=>window.renderLashTest(stageIndex);
     box.append(retry);
    }
    const back=document.createElement("button");back.className="secondary";back.textContent=en?"BACK TO ALL STAGES":"VOLVER A TODAS LAS ETAPAS";back.onclick=()=>window.returnToLashCurriculum();box.append(back);
    if(typeof window.loadStudentCourses==="function")window.loadStudentCourses();
   }catch(err){
    const box=document.getElementById("lash-db-assessment-result");box.textContent=(en?"Could not record the test: ":"No se pudo registrar el test: ")+(err.message||String(err));
    submit.disabled=false;submit.textContent=en?"SUBMIT TEST":"ENVIAR TEST";
   }
  };
  window.__lashViewState={mode:isFinal?"final-db":"test-db",index:stageIndex};
 }catch(err){showMessage(en?"Assessment unavailable":"Evaluación no disponible",err.message||String(err));}
}
window.renderLashTest=function(index){return renderLashAssessmentFlow(index,false);};
window.renderLashFinalExam=function(){return renderLashAssessmentFlow(12,true);};

})();