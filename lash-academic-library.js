(function(){
"use strict";

const BOOK_ID="lash-extension-handbook";
const BOOK_TITLE="Manual integral de extensiones de pestañas";
const BOOK_SUBTITLE="Fundamentos, diseño, técnica y bioseguridad profesional";
const chapterNames=[
 "Fundamentos, anatomía y ciclo de la pestaña natural",
 "Tipos de extensiones, fibras y características",
 "Adhesivos, pegamentos y productos auxiliares",
 "Instrumental manual y accesorios no eléctricos",
 "Equipos eléctricos, mobiliario e iluminación",
 "Higiene, desinfección y bioseguridad",
 "Diseño, visagismo y mapping",
 "Consulta, preparación y aislamiento",
 "Aplicación clásica pelo a pelo",
 "Volumen, híbridas y abanicos",
 "Mantenimiento, rellenos y retirada",
 "Reacciones, contraindicaciones y solución de problemas",
 "Práctica integral, evaluación y desarrollo profesional"
];
const chapterEyebrows=["BASES ESENCIALES","MATERIALES","QUÍMICA Y CONTROL","HERRAMIENTAS","PUESTO DE TRABAJO","SEGURIDAD","DISEÑO","PREPARACIÓN","TÉCNICA CLÁSICA","VOLUMEN","MANTENIMIENTO","CRITERIO PROFESIONAL","DESARROLLO PROFESIONAL"];

function esc(value){return String(value==null?"":value).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));}
function allowed(){return typeof window.hasApprovedAcademyAccess==="function"&&window.hasApprovedAcademyAccess();}
function libraryRoot(){return document.getElementById("academic-library-content");}
function addStyles(){if(document.getElementById("eddeli-academic-library-style"))return;const style=document.createElement("style");style.id="eddeli-academic-library-style";style.textContent=`
.academic-library-shell{max-width:1180px;margin:0 auto;padding:8px 0 36px}
.academic-library-head{display:flex;align-items:end;justify-content:space-between;gap:18px;margin:10px 0 23px}
.academic-library-head .eyebrow{font-size:11px;letter-spacing:2px;color:#a17c42;font-weight:800}
.academic-library-head h1{font:700 clamp(28px,4vw,42px) Georgia,serif;color:#1a2b4b;margin:8px 0}
.academic-library-head p{max-width:680px;color:#68758a;line-height:1.7;margin:0}
.library-shelf{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px;padding:26px;border:1px solid #ded1bb;border-radius:19px;background:repeating-linear-gradient(92deg,#6d4c32 0,#77553a 4px,#6a4931 8px,#79583c 13px);box-shadow:inset 0 8px 18px #281b1235,0 12px 26px #19274412}
.library-book-card,.library-future-card{min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;min-height:440px;padding:22px 18px;background:#fffdf8;border:1px solid #eadfce;border-radius:14px;box-shadow:0 10px 25px #21180e35;text-align:center}
.library-book-card h2{font:700 19px Georgia,serif;color:#1c2d4c;margin:4px 0}.library-book-card p{max-width:290px;color:#667286;font-size:13px;line-height:1.6;margin:0}
.library-book-card .book-stats{display:flex;justify-content:center;flex-wrap:wrap;gap:7px;margin:1px 0 4px}.library-book-card .book-stats span{font-size:10px;font-weight:700;color:#695534;background:#f4eee2;border:1px solid #e7dcc8;border-radius:999px;padding:6px 9px}
.academic-book-button{width:min(100%,285px);min-height:43px}
.academic-book-stage{position:relative;isolation:isolate;width:220px;height:300px;perspective:1000px;filter:drop-shadow(9px 15px 11px #17100b55);margin:0 auto 3px}
.academic-book-volume{position:absolute;inset:0;transform:rotateY(-13deg) rotateX(1deg);transform-style:preserve-3d;transition:transform .3s ease}
.library-book-card:hover .academic-book-volume{transform:rotateY(-7deg) translateY(-3px)}
.academic-book-volume:before{content:"";position:absolute;z-index:-1;top:7px;right:-13px;bottom:4px;width:18px;border:1px solid #bda77e;border-left:0;border-radius:0 4px 4px 0;background:repeating-linear-gradient(180deg,#fffdf7 0 3px,#e9e0cf 3px 4px);transform:translateZ(-1px)}
.academic-book-face{position:absolute;inset:0 0 0 15px;overflow:hidden;border:1px solid #aa844b;border-radius:3px 7px 7px 3px;background:radial-gradient(ellipse at 76% 32%,#233b60 0,#152746 42%,#111c32 100%);box-shadow:inset 4px 0 10px #070d1b88,inset 0 0 0 5px #142541,inset 0 0 0 6px #c6a66c;display:flex;flex-direction:column;align-items:center;text-align:center;padding:20px 18px 15px;color:#f1d79e}
.academic-book-spine{position:absolute;z-index:2;left:0;top:0;bottom:0;width:19px;border:1px solid #997747;background:linear-gradient(90deg,#091325,#21375a 50%,#101a2e);box-shadow:inset -3px 0 4px #0006;transform:translateZ(2px)}
.academic-book-spine:after{content:"EDDELI";position:absolute;left:3px;top:76px;writing-mode:vertical-rl;transform:rotate(180deg);font:700 8px Arial;letter-spacing:2px;color:#e2c27f}
.academic-book-brand{font:700 9px Arial;letter-spacing:3px;margin:1px 0 16px;color:#e9cd8e}
.academic-book-face h3{max-width:172px;font:700 22px/1.08 Georgia,serif;color:#f7e8c6;margin:6px 0 8px;text-shadow:0 2px 3px #0008}
.academic-book-face p{font:10px/1.45 Arial,sans-serif;color:#d8d8d2;margin:4px 0}
.academic-book-eye{width:148px;height:86px;margin:8px 0 9px;filter:drop-shadow(0 3px 5px #050a16aa)}
.academic-book-rule{width:52px;border-top:1px solid #d2b674;margin:6px auto 9px}.academic-book-footer{margin-top:auto;font:700 8px Arial;letter-spacing:2px;color:#e5ca8b}
.library-future-card{border:1px dashed #c7b89c;background:#fbfaf7;box-shadow:inset 0 0 0 5px #f3eee5}
.library-future-mark{width:64px;height:64px;border-radius:50%;display:grid;place-items:center;background:#f2eee6;color:#9b7a48;font-size:32px;font-weight:300}
.library-future-card h2{font:700 19px Georgia,serif;color:#394b66;margin:2px 0}.library-future-card p{max-width:240px;color:#7a8494;line-height:1.6;font-size:13px;margin:0}
.academic-reader{margin-top:22px}.academic-reader-top{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:15px}.academic-reader-top h2{font:700 25px Georgia,serif;color:#1a2b4b;margin:0}
.academic-reader-layout{display:grid;grid-template-columns:minmax(220px,270px) minmax(0,1fr);gap:18px;align-items:start}
.academic-toc{position:sticky;top:15px;max-height:calc(100vh - 150px);overflow:auto;background:#f8f5ef;border:1px solid #e6ddce;border-radius:14px;padding:16px}
.academic-toc h3{font:700 16px Georgia,serif;color:#263a59;margin:0 0 10px}.academic-toc a{display:block;padding:8px 9px;border-radius:8px;color:#43536a;text-decoration:none;font-size:12px;line-height:1.4}.academic-toc a:hover{background:#ece5d9;color:#1b2c4c}
.academic-book-pages{min-width:0}.academic-book-intro,.academic-book-chapter{background:#fffdf9;border:1px solid #e7e0d4;border-radius:15px;box-shadow:0 8px 24px #1c2b4310;padding:clamp(19px,3vw,32px);margin-bottom:17px}
.academic-book-intro{background:linear-gradient(140deg,#142542,#203a61);color:#f8f0dd}.academic-book-intro .academic-book-brand{margin:0 0 14px}.academic-book-intro h1{font:700 clamp(26px,4vw,40px)/1.1 Georgia,serif;margin:8px 0 12px;color:#f4dfad}.academic-book-intro p{line-height:1.75;color:#f1eee7}.academic-book-intro .academic-book-disclaimer{font-size:12px;color:#d7ddea;border-top:1px solid #ffffff35;padding-top:14px;margin-top:15px}.academic-cuba-guide{margin:0 0 17px;padding:clamp(19px,3vw,30px);border:1px solid #dbe4ec;border-radius:15px;background:#f5f8fb;box-shadow:0 8px 24px #1c2b4308}.academic-cuba-guide h2{font:700 clamp(21px,3vw,27px)/1.2 Georgia,serif;color:#1e3152;margin:0 0 12px}.academic-cuba-guide h3{font:700 16px Georgia,serif;color:#80643b;margin:18px 0 7px}.academic-cuba-guide p,.academic-cuba-guide li{color:#4d5b70;line-height:1.75}.academic-cuba-guide ul{padding-left:21px}.academic-cuba-guide li{margin:7px 0}
.academic-chapter-kicker{font-size:10px;letter-spacing:1.5px;font-weight:800;color:#a17c42}.academic-book-chapter h2{font:700 clamp(22px,3vw,30px)/1.2 Georgia,serif;color:#1e3152;margin:10px 0}.academic-chapter-intro{color:#667286;line-height:1.7;padding-bottom:14px;border-bottom:1px solid #ebe5da}
.academic-book-lesson{margin:20px 0;padding:0 0 18px;border-bottom:1px solid #eee8df}.academic-book-lesson .atlas-card{display:grid;grid-template-columns:minmax(170px,250px) minmax(0,1fr);align-items:center;max-width:860px;margin:14px 0 18px}.academic-book-lesson .atlas-art{height:auto;min-height:150px;padding:5px}.academic-book-lesson .atlas-art svg{height:auto;max-height:185px}.academic-book-lesson .atlas-copy{padding:12px}.academic-book-lesson .atlas-copy h4{font-size:14px}.academic-book-lesson .atlas-copy p{font-size:12px}@media(max-width:600px){.academic-book-lesson .atlas-card{grid-template-columns:1fr}.academic-book-lesson .atlas-art{height:165px;min-height:0}.academic-book-lesson .atlas-art svg{height:155px}}.academic-book-lesson h3{font:700 19px Georgia,serif;color:#314766;margin:6px 0 10px}.academic-book-lesson p,.academic-book-lesson li{color:#4d5b70;line-height:1.8}.academic-book-lesson h4{font-size:12px;color:#80643b;letter-spacing:.5px;margin:17px 0 5px}.academic-book-check{background:#f6f2e9;border-left:3px solid #ba985f;padding:13px 15px;border-radius:0 9px 9px 0;margin-top:14px;color:#374960;line-height:1.6}.academic-book-chapter-note{background:#f4f7fa;border:1px solid #e1e8ef;border-radius:11px;padding:14px;margin-top:14px;color:#526177;line-height:1.7}
.academic-audio-toolbar{display:flex;align-items:center;flex-wrap:wrap;gap:9px;padding:13px;background:#f8f5ef;border:1px solid #e6ddce;border-radius:13px;margin:0 0 17px}.academic-audio-toolbar label{font-size:12px;font-weight:700;color:#43536a}.academic-audio-toolbar select{max-width:240px;min-height:38px;padding:7px 10px;border:1px solid #d7cbb8;border-radius:8px;background:#fff;color:#31435d}.academic-audio-toolbar button,.book-chapter-audio{min-height:38px}.academic-audio-status{flex-basis:100%;font-size:12px;color:#667286;line-height:1.5}.academic-audio-note{font-size:11px;color:#7a8494;margin:0 0 15px}.book-chapter-audio{margin:5px 0 10px;padding:8px 13px;font-size:12px}
.academic-library-message{max-width:680px;margin:40px auto;text-align:center}
@media(max-width:900px){.library-shelf{grid-template-columns:repeat(2,minmax(0,1fr))}.academic-reader-layout{grid-template-columns:1fr}.academic-toc{position:static;max-height:none;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:2px}.academic-toc h3{grid-column:1/-1}}
@media(max-width:600px){.academic-library-shell{padding:0 0 24px}.academic-library-head{display:block}.library-shelf{grid-template-columns:1fr;padding:13px;gap:13px}.library-book-card,.library-future-card{min-height:0;padding:22px 14px}.academic-book-stage{width:195px;height:265px}.academic-book-face h3{font-size:19px}.academic-book-eye{width:130px;height:75px}.academic-reader-top{align-items:flex-start;flex-direction:column}.academic-toc{grid-template-columns:1fr}.academic-book-intro,.academic-book-chapter{padding:18px}.academic-audio-toolbar{align-items:stretch;flex-direction:column}.academic-audio-toolbar select,.academic-audio-toolbar button{width:100%;max-width:none}.book-chapter-audio{width:100%}}
`;document.head.appendChild(style);}

function bookCover(){return `<div class="academic-book-stage" aria-label="Portada del libro Manual integral de extensiones de pestañas"><div class="academic-book-volume"><div class="academic-book-spine"></div><div class="academic-book-face"><div class="academic-book-brand">ELI BEAUTY ACADEMY</div><svg class="academic-book-eye" viewBox="0 0 180 100" aria-hidden="true"><path d="M16 57Q90 -2 164 57Q90 112 16 57Z" fill="none" stroke="#d8bb7a" stroke-width="3"/><path d="M57 55Q90 26 123 55Q90 83 57 55Z" fill="#b9975d"/><circle cx="90" cy="55" r="15" fill="#172742" stroke="#f1d895" stroke-width="3"/><circle cx="90" cy="55" r="6" fill="#f0d79c"/><path d="M35 42L23 25M52 32L44 13M71 25L67 5M91 22V2M111 25L116 5M130 32L140 13M146 42L159 25" stroke="#e2c887" stroke-width="3" stroke-linecap="round"/><path d="M28 64Q90 95 152 64" fill="none" stroke="#947647" stroke-width="1.5"/></svg><h3>MANUAL INTEGRAL DE EXTENSIONES DE PESTAÑAS</h3><p>Fundamentos · Diseño · Técnica · Bioseguridad</p><div class="academic-book-rule"></div><div class="academic-book-footer">EDDELI · FORMACIÓN PROFESIONAL</div></div></div></div>`;}

function renderShelf(root){
 const en=localStorage.getItem("eddeli-language")==="en";
 root.innerHTML=`<div class="academic-library-shell"><header class="academic-library-head"><div><span class="eyebrow">ELI BEAUTY ACADEMY · ${en?"ACADEMIC LIBRARY":"BIBLIOTECA ACADÉMICA"}</span><h1>${en?"Study library":"Biblioteca académica"}</h1><p>${en?"Browse complete learning books, guides and reference material.":"Explora libros de estudio, guías completas y material de consulta profesional."}</p></div></header><div class="library-shelf" aria-label="${en?"Library book shelf":"Estantería de la biblioteca"}"><article class="library-book-card">${bookCover()}<h2>${esc(BOOK_TITLE)}</h2><p>${esc(BOOK_SUBTITLE)}</p><div class="book-stats"><span>13 ${en?"chapters":"capítulos"}</span><span>52 ${en?"lessons":"lecciones"}</span><span>${en?"Practice and safety":"Práctica y seguridad"}</span></div><button class="primary academic-book-button" type="button" onclick="window.openAcademicBook('${BOOK_ID}')">${en?"OPEN THE BOOK →":"ABRIR EL LIBRO →"}</button></article><article class="library-future-card"><div class="library-future-mark" aria-hidden="true">＋</div><h2>${en?"More books soon":"Más libros próximamente"}</h2><p>${en?"This shelf is ready for future titles and new academic specialties.":"Este espacio queda preparado para incorporar nuevos títulos y especialidades académicas."}</p></article><article class="library-future-card"><div class="library-future-mark" aria-hidden="true">✦</div><h2>${en?"New references":"Nuevas referencias"}</h2><p>${en?"A place for manuals, workbooks and professional reference guides.":"Un lugar para futuros manuales, cuadernos de trabajo y guías de consulta."}</p></article></div><div id="academic-book-reader" class="academic-reader" hidden></div></div>`;
}

function bookVisualCards(stageIndex){if(typeof window.buildVisuals!=="function")return[];const holder=document.createElement("div");holder.innerHTML=window.buildVisuals(stageIndex);return Array.from(holder.querySelectorAll(".atlas-card"),card=>card.outerHTML);}

function renderBook(bookData){
 const root=libraryRoot();if(!root||!allowed())return;
 const reader=root.querySelector("#academic-book-reader");const shelf=root.querySelector(".library-shelf");
 if(!reader||!shelf)return;
 const curriculum=bookData?.curriculum||[];const groups=bookData?.stages||[];
 if(curriculum.length!==13||groups.length!==13||groups.some((group,i)=>!Array.isArray(group)||group.length!==4)){
  reader.hidden=false;reader.innerHTML="<div class='card academic-library-message'><h2>El libro no está disponible ahora</h2><p>No se ha encontrado el itinerario completo de 13 etapas y 52 lecciones. Vuelve a intentarlo más tarde.</p><button class='secondary' type='button' onclick='window.returnToAcademicLibrary()'>VOLVER A LA BIBLIOTECA</button></div>";return;
 }
 const stages=curriculum.map((stage,index)=>({stage,index,title:chapterNames[index]||stage.title,group:groups[index]}));
 const chapterMarkup=stages.map(({stage,index,title,group})=>{
  const visuals=bookVisualCards(index);
  const lessons=group.map((lesson,lessonIndex)=>{
   const x=lesson.es||lesson.en||{};
   return `<article class="academic-book-lesson"><span class="academic-chapter-kicker">LECCIÓN ${index*4+lessonIndex+1} · ${index+1}.${lessonIndex+1}</span><h3>${esc(x.title||chapterNames[index])}</h3>${visuals[lessonIndex]||""}${x.objective?`<p><strong>Objetivo de aprendizaje:</strong> ${esc(x.objective)}</p>`:""}${Array.isArray(x.content)?x.content.map(paragraph=>`<p>${esc(paragraph)}</p>`).join(""):""}${Array.isArray(x.steps)&&x.steps.length?`<h4>Pasos de aprendizaje guiado</h4><ol>${x.steps.map(step=>`<li>${esc(step)}</li>`).join("")}</ol>`:""}${Array.isArray(x.avoid)&&x.avoid.length?`<h4>Errores y acciones que debes evitar</h4><ul>${x.avoid.map(item=>`<li>${esc(item)}</li>`).join("")}</ul>`:""}${x.check||x.answer?`<div class="academic-book-check"><strong>Autoevaluación:</strong> ${esc(x.check||"")} ${x.answer?`<details><summary>Ver respuesta</summary><p>${esc(x.answer)}</p></details>`:""}</div>`:""}</article>`;
  }).join("");
  return `<section class="academic-book-chapter" id="academic-chapter-${index}"><span class="academic-chapter-kicker">CAPÍTULO ${String(index+1).padStart(2,"0")} · ${esc(chapterEyebrows[index])}</span><h2>${esc(title)}</h2><button class="secondary book-chapter-audio" type="button" onclick="window.playAcademicBookChapter(${index})">▶ ESCUCHAR ESTE CAPÍTULO</button><p class="academic-chapter-intro">${esc(stage.intro)}</p>${lessons}<div class="academic-book-chapter-note"><strong>Práctica del capítulo:</strong> ${esc(stage.practice||"Repasa las lecciones y registra tus observaciones con materiales de entrenamiento.")}<br><strong>Criterio de seguridad:</strong> ${esc(stage.safety||"Respeta la documentación del fabricante y la normativa sanitaria local.")}</div></section>`;
 }).join("");
 shelf.hidden=true;reader.hidden=false;
 reader.innerHTML=`<div class="academic-reader-top"><h2>${esc(BOOK_TITLE)}</h2><button class="secondary" type="button" onclick="window.returnToAcademicLibrary()">← VOLVER A LA ESTANTERÍA</button></div><div class="academic-audio-toolbar" role="region" aria-label="Audiolibro"><label for="academic-audio-voice">Voz de lectura</label><select id="academic-audio-voice" aria-label="Elegir voz"></select><button class="primary" type="button" onclick="window.playAcademicBook()">▶ ESCUCHAR TODO EL LIBRO</button><button id="academic-audio-pause" class="secondary" type="button" onclick="window.pauseAcademicBook()">⏸ PAUSAR</button><button class="secondary" type="button" onclick="window.stopAcademicBookAudio()">■ DETENER</button><span id="academic-audio-status" class="academic-audio-status" aria-live="polite">Preparando voces disponibles…</span></div><p class="academic-audio-note">La voz disponible depende de las voces instaladas en el teléfono o navegador. Se seleccionará una voz femenina en español cuando esté disponible.</p><div class="academic-reader-layout"><nav class="academic-toc" aria-label="Índice del libro"><h3>Índice · 13 capítulos</h3>${stages.map(({index,title})=>`<a href="#academic-chapter-${index}">${String(index+1).padStart(2,"0")}. ${esc(title)}</a>`).join("")}</nav><div class="academic-book-pages"><header class="academic-book-intro"><div class="academic-book-brand">ELI BEAUTY ACADEMY · EDDELI</div><h1>${esc(BOOK_TITLE)}</h1><p>${esc(BOOK_SUBTITLE)}</p><p>Una guía de estudio organizada en 13 capítulos y 52 lecciones: anatomía y materiales, diseño, técnicas de aplicación, mantenimiento, bioseguridad y desarrollo profesional.</p><p class="academic-book-disclaimer"><strong>Uso formativo:</strong> este manual no sustituye la formación práctica presencial ni las normas sanitarias locales. No es una guía médica. Ante dolor, irritación, lesión, secreción o duda ocular, se debe suspender el servicio y recomendar atención sanitaria. Para productos químicos y equipos, prevalecen siempre las etiquetas e instrucciones actuales del fabricante y su ficha de seguridad.</p></header><section class="academic-cuba-guide" aria-labelledby="academic-cuba-title"><h2 id="academic-cuba-title">Orientación de estudio para alumnos en Cuba</h2><p>Esta guía ayuda a planificar el estudio y la práctica según los productos que cada alumno pueda identificar y conseguir. La disponibilidad puede variar por provincia y proveedor. No exige una marca concreta ni declara productos aprobados; las instrucciones vigentes del fabricante y los requisitos locales aplicables deben verificarse antes de trabajar.</p><h3>Revisa cada producto antes de usarlo</h3><ul><li>Anota fabricante, nombre y referencia, lote, fecha de vencimiento y fecha de apertura cuando corresponda. Conserva la etiqueta legible y consulta las instrucciones y la ficha de seguridad del producto.</li><li>Guarda adhesivos, removedores y desinfectantes según la etiqueta. Registra las condiciones del local y compáralas con el rango indicado por el fabricante del adhesivo; si no puedes confirmar que el producto está dentro de sus condiciones de uso, no lo uses en la práctica.</li><li>No sustituyas adhesivos, removedores, limpiadores ni desinfectantes por productos domésticos o de otro uso. No uses envases sin identificación, vencidos o con instrucciones incompletas; verifica cualquier alternativa directamente con su fabricante y proveedor.</li></ul><h3>Organiza la práctica con seguridad</h3><ul><li>Empieza con ejercicios en maniquíes o láminas de práctica. Registra qué técnica practicaste, qué producto y lote utilizaste, y las condiciones indicadas en su etiqueta.</li><li>Separa limpieza de desinfección. Sigue la etiqueta del desinfectante para su preparación y tiempo de contacto, y comprueba los requisitos sanitarios vigentes con la autoridad competente de tu localidad.</li><li>Antes de practicar con una persona, explica el procedimiento y sus riesgos, solicita su consentimiento y trabaja bajo supervisión adecuada a tu nivel. No diagnostiques ni indiques medicamentos.</li></ul><h3>Cuándo detenerse y pedir orientación</h3><p>Si hay dolor ocular, visión alterada, secreción, hinchazón o irritación activa, no realices ni continúes el servicio. No intentes diagnosticar o tratar el problema: recomienda que la persona busque valoración en un servicio de salud.</p><p><strong>Registro de referencia local:</strong> producto y lote · proveedor consultado · instrucciones de almacenamiento y uso · fecha de revisión · dudas que debes confirmar con tu instructor o autoridad local.</p></section>${chapterMarkup}<footer class="academic-book-chapter-note"><strong>Fin del manual.</strong> Continúa practicando con supervisión adecuada, mantén actualizados tus conocimientos y consulta la documentación vigente de cada producto.</footer></div></div>`;
 setupAcademicAudio();
 reader.scrollIntoView({behavior:"smooth",block:"start"});
}

let academicAudioChunks=[];
let academicAudioIndex=0;
let academicAudioToken=0;
let academicAudioLabel="";
let academicAudioVoices=[];
let academicVoicesChangedHandler=null;
function academicAudioStatus(message){const status=document.getElementById("academic-audio-status");if(status)status.textContent=message;}
function feminineVoiceHint(name){return /female|woman|mujer|femen|helena|elena|laura|lucia|lucía|paulina|sabina|monica|mónica|ana|sofia|sofía|zira/i.test(name||"");}
function setupAcademicAudio(){
 const synth=window.speechSynthesis;const select=document.getElementById("academic-audio-voice");
 if(!select)return;
 if(!synth||typeof window.SpeechSynthesisUtterance!=="function"){
  select.innerHTML="<option>Voz no disponible en este navegador</option>";select.disabled=true;
  academicAudioStatus("Este navegador no ofrece lectura en voz alta. El libro sigue disponible para leer.");return;
 }
 const fillVoices=()=>{
  const previous=select.value;
  const all=synth.getVoices();
  const spanish=all.filter(voice=>/^es(?:-|$)/i.test(voice.lang||""));
  academicAudioVoices=spanish.length?spanish:all;
  select.innerHTML=academicAudioVoices.length?academicAudioVoices.map((voice,index)=>`<option value="${index}">${feminineVoiceHint(voice.name)?"Voz femenina · ":"Voz disponible · "}${esc(voice.name)} (${esc(voice.lang||"es")})</option>`).join(""):"<option value=''>No hay voces disponibles</option>";
  if(previous&&academicAudioVoices[Number(previous)])select.value=previous;
  else {const female=academicAudioVoices.findIndex(voice=>feminineVoiceHint(voice.name));select.value=String(female>=0?female:0);}
  if(!academicAudioVoices.length){academicAudioStatus("No hay voces de lectura instaladas. Puedes leer el libro en pantalla.");return;}
  const chosen=academicAudioVoices[Number(select.value)];
  academicAudioStatus(feminineVoiceHint(chosen?.name)?"Voz femenina en español seleccionada.":"Elige una voz femenina de la lista si aparece; las voces dependen del dispositivo.");
 };
 if(academicVoicesChangedHandler)synth.removeEventListener?.("voiceschanged",academicVoicesChangedHandler);
 academicVoicesChangedHandler=fillVoices;synth.addEventListener?.("voiceschanged",fillVoices);fillVoices();
}
function academicTextChunks(text,limit=900){
 const sentences=String(text||"").replace(/\s+/g," ").match(/[^.!?]+[.!?]+|[^.!?]+$/g)||[];const chunks=[];let current="";
 sentences.forEach(sentence=>{const part=sentence.trim();if(!part)return;if(part.length>limit){const words=part.split(/\s+/);words.forEach(word=>{if(current&&current.length+word.length+1>limit){chunks.push(current.trim());current="";}current+=(current?" ":"")+word;});return;}if(current&&current.length+part.length+1>limit){chunks.push(current.trim());current="";}current+=(current?" ":"")+part;});
 if(current.trim())chunks.push(current.trim());return chunks;
}
function academicReadableText(container){
 if(!container)return "";
 return [...container.querySelectorAll("h1,h2,h3,h4,p,li,summary")].filter(node=>!node.closest("details")||node.tagName==="SUMMARY").map(node=>node.textContent.trim()).filter(Boolean).join(". ");
}
function speakAcademicChunk(token){
 if(token!==academicAudioToken)return;
 const synth=window.speechSynthesis;
 if(academicAudioIndex>=academicAudioChunks.length){academicAudioStatus("Terminó la lectura: "+academicAudioLabel+".");return;}
 const utterance=new window.SpeechSynthesisUtterance(academicAudioChunks[academicAudioIndex]);
 const voiceSelect=document.getElementById("academic-audio-voice");const voice=academicAudioVoices[Number(voiceSelect?.value)];
 utterance.lang=voice?.lang||"es-ES";if(voice)utterance.voice=voice;utterance.rate=0.96;utterance.pitch=1;
 utterance.onend=()=>{if(token!==academicAudioToken)return;academicAudioIndex++;academicAudioStatus("Escuchando "+academicAudioLabel+" · parte "+academicAudioIndex+" de "+academicAudioChunks.length);window.setTimeout(()=>speakAcademicChunk(token),0);};
 utterance.onerror=event=>{if(token!==academicAudioToken)return;academicAudioStatus("No se pudo continuar la lectura: "+(event.error||"error de voz"));};
 academicAudioStatus("Escuchando "+academicAudioLabel+" · parte "+(academicAudioIndex+1)+" de "+academicAudioChunks.length);
 synth.speak(utterance);
}
function startAcademicAudio(text,label){
 const synth=window.speechSynthesis;
 if(!synth||typeof window.SpeechSynthesisUtterance!=="function"){academicAudioStatus("La lectura en voz alta no está disponible. Puedes leer el texto en pantalla.");return false;}
 const chunks=academicTextChunks(text);if(!chunks.length){academicAudioStatus("No hay texto para reproducir.");return false;}
 academicAudioToken++;const token=academicAudioToken;synth.cancel();academicAudioChunks=chunks;academicAudioIndex=0;academicAudioLabel=label;
 const pauseButton=document.getElementById("academic-audio-pause");if(pauseButton)pauseButton.textContent="⏸ PAUSAR";
 if(!academicAudioVoices.length)setupAcademicAudio();
 if(!academicAudioVoices.length){academicAudioStatus("Activa una voz en español en los ajustes del teléfono para escuchar el libro.");return false;}
 speakAcademicChunk(token);return true;
}
window.playAcademicBook=function(){
 if(!allowed()){window.go("login-alumno");return false;}
 const pages=libraryRoot()?.querySelector(".academic-book-pages");return startAcademicAudio(academicReadableText(pages),"el libro");
};
window.playAcademicBookChapter=function(index){
 if(!allowed()){window.go("login-alumno");return false;}
 const chapter=libraryRoot()?.querySelector("#academic-chapter-"+Number(index));return startAcademicAudio(academicReadableText(chapter),"el capítulo "+(Number(index)+1));
};
window.pauseAcademicBook=function(){
 const synth=window.speechSynthesis;if(!synth)return;
 const button=document.getElementById("academic-audio-pause");
 if(synth.paused){synth.resume();if(button)button.textContent="⏸ PAUSAR";academicAudioStatus("Reanudando "+academicAudioLabel+".");}
 else if(synth.speaking){synth.pause();if(button)button.textContent="▶ REANUDAR";academicAudioStatus("Lectura pausada.");}
};
window.stopAcademicBookAudio=function(){
 academicAudioToken++;window.speechSynthesis?.cancel();academicAudioChunks=[];academicAudioIndex=0;academicAudioLabel="";const button=document.getElementById("academic-audio-pause");if(button)button.textContent="⏸ PAUSAR";academicAudioStatus("Lectura detenida.");
};
document.addEventListener("click",event=>{const nav=event.target.closest(".navbtn,.mobile-nav button");if(nav&&nav.dataset.page!=="biblioteca")window.stopAcademicBookAudio?.();});

window.renderAcademicLibrary=function(){
 addStyles();const root=libraryRoot();if(!root)return;
 if(!allowed()){root.innerHTML="<div class='card academic-library-message'><h2>Acceso académico requerido</h2><p>Inicia sesión con una cuenta aprobada de alumno o administrador.</p></div>";return;}
 renderShelf(root);
};
window.openAcademicBook=function(bookId){
 if(!allowed()){window.go("login-alumno");return false;}
 if(bookId!==BOOK_ID)return false;
 const root=libraryRoot();if(!root)return false;
 const data=typeof window.getLashLibraryBookContent==="function"?window.getLashLibraryBookContent():null;
 renderBook(data);return true;
};
window.returnToAcademicLibrary=function(){
 if(!allowed()){window.go("login-alumno");return false;}
 window.stopAcademicBookAudio?.();
 const root=libraryRoot();if(!root)return false;
 const reader=root.querySelector("#academic-book-reader");const shelf=root.querySelector(".library-shelf");
 if(reader)reader.hidden=true;if(shelf)shelf.hidden=false;
 root.scrollIntoView({behavior:"smooth",block:"start"});return true;
};
})();
