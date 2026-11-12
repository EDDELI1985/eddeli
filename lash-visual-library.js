/* EDDELI · Atlas visual técnico de extensiones de pestañas
   Ilustraciones vectoriales originales para estudio. No son fotografías clínicas. */
(function(){
"use strict";
const atlas = [
{theme:"eye",items:[
["Anatomía del ojo","Párpado superior, borde palpebral, línea de pestañas y superficie ocular. El trabajo estético se limita a la pestaña natural."],
["Estructura del pelo","Tallo, raíz y folículo en un esquema simplificado. No manipular ni aplicar adhesivo sobre piel o mucosa."],
["Ciclo de crecimiento","Fases anágena, catágena y telógena representadas como etapas. La caída natural es continua."],
["Ficha de valoración","Registro de expectativas, antecedentes y observaciones; no sustituye una evaluación sanitaria."]
]},
{theme:"fibres",items:[
["Curvaturas comparadas","Perfiles J, B, C, CC, D y L como referencia visual. Las letras y geometrías varían por fabricante."],
["Longitudes y diámetros","La longitud y el diámetro se leen en la etiqueta; más grosor puede significar más peso."],
["Acabados y fibras","Acabado mate, brillante, plano y textura. Los nombres comerciales no garantizan composición."],
["Bandeja y trazabilidad","Revisa mezcla de longitudes, curvatura, diámetro, fabricante, lote y estado del envase."]
]},
{theme:"adhesive",items:[
["Envase y etiqueta","Identifica producto, ingredientes, lote, caducidad y advertencias del fabricante."],
["Viscosidad y gota","La cantidad y consistencia afectan al manejo. No mezclar ni improvisar productos."],
["Control ambiental","Registra humedad y temperatura y compáralas con el rango de la ficha técnica."],
["Productos auxiliares","Diferencia limpiador, primer, bonder y removedor. Verifica compatibilidad y uso previsto."]
]},
{theme:"tools",items:[
["Pinza recta","Para aislamiento según diseño y técnica. Comprueba alineación y cierre de puntas."],
["Pinza curva y volumen","Formas de punta diferentes para tareas distintas; no existe una única pinza universal."],
["Aplicadores y cepillos","Microbrushes y cepillos desechables: uso individual y eliminación tras el servicio."],
["Soportes y paletas","Superficies para organizar material; deben poder limpiarse o ser desechables."]
]},
{theme:"equipment",items:[
["Lámpara de trabajo","Luz estable y regulable, sin deslumbramiento ni calor excesivo sobre el cliente."],
["Camilla y reposacabezas","Ajuste ergonómico para mantener cuello y espalda en posición neutra."],
["Termómetro e higrómetro","Instrumentos para registrar el ambiente y compararlo con la ficha del adhesivo."],
["Ventilación y seguridad eléctrica","Cables íntegros, enchufes seguros y ventilación adecuada; líquidos lejos de conexiones."]
]},
{theme:"hygiene",items:[
["Higiene de manos","Antes y después del servicio, siguiendo el protocolo local."],
["Limpieza de superficies","Retira suciedad antes de aplicar el desinfectante indicado."],
["Procesamiento instrumental","Limpieza, desinfección y esterilización son procesos diferentes."],
["Flujo limpio y usado","Mantén separados material limpio, material utilizado y residuos."]
]},
{theme:"mapping",items:[
["Zonas del ojo","Divide el diseño en zona interna, central y externa para planificar."],
["Mapa natural","Patrón de longitudes moderadas que acompaña la dirección natural."],
["Mapa muñeca","Mayor énfasis visual en el centro, siempre adaptado al ojo y pestaña natural."],
["Mapa gato","Transición gradual hacia la zona externa; no es adecuado para todas las anatomías."]
]},
{theme:"prep",items:[
["Consulta y consentimiento","Explica el servicio, riesgos conocidos, cuidados y alternativas antes de empezar."],
["Limpieza y preparación","Utiliza productos compatibles y deja las pestañas preparadas según fabricante."],
["Protección inferior","Parches colocados sin tocar el ojo ni tirar de la piel; comprueba comodidad."],
["Aislamiento en maniquí","Practica separar una pestaña natural cada vez antes de trabajar con una persona."]
]},
{theme:"classic",items:[
["Aislar","Separa una pestaña natural sin atrapar las pestañas vecinas."],
["Tomar extensión","Sujeta la fibra con pinza adecuada y evita deformarla."],
["Unión controlada","La extensión se une a una pestaña aislada, sin tocar piel ni mucosa."],
["Revisión final","Comprueba dirección, separación, comodidad y ausencia de adhesiones."]
]},
{theme:"volume",items:[
["Clásico","Una extensión individual sobre una pestaña natural aislada."],
["Abanico","Varias fibras finas forman un abanico; el peso total debe ser compatible."],
["Híbrido","Combina textura clásica y abanicos con distribución planificada."],
["Base y simetría","Practica bases limpias y abanicos equilibrados en tiras de práctica."]
]},
{theme:"maintenance",items:[
["Cuidado en casa","Limpieza compatible y manipulación cuidadosa; nunca arrancar extensiones."],
["Crecimiento natural","La pestaña crece y cambia de posición; valora cada extensión antes de rellenar."],
["Retirada profesional","Usa removedor adecuado y protocolo del fabricante, evitando tracción."],
["Registro de mantenimiento","Anota fecha, productos, lote, retención e incidencias."]
]},
{theme:"safety",items:[
["Señales de alarma","Dolor, hinchazón, secreción o visión borrosa: detener el servicio."],
["Irritación o reacción","No diagnosticar ni repetir la exposición para comprobar una posible alergia."],
["Retención deficiente","Revisa preparación, técnica, ambiente, producto y cuidados sin improvisar parámetros."],
["Derivación sanitaria","Ante síntomas oculares importantes, recomendar atención sanitaria; no tratar ni medicar."]
]},
{theme:"professional",items:[
["Montaje del puesto","Organiza iluminación, camilla, herramientas, ventilación y residuos."],
["Simulación integral","Consulta, ficha, preparación, práctica en maniquí y revisión."],
["Portafolio","Reúne mapas, fichas, fotografías autorizadas y reflexiones de práctica."],
["Criterio profesional","Consentimiento, privacidad, trazabilidad y cumplimiento de requisitos locales."]
]}
];
const NS="http://www.w3.org/2000/svg";
function svg(theme,n){
 const common='fill="none" stroke="#715a39" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"';
 let body="";
 if(theme==="eye"){
  body=['<path d="M12 54 Q90 4 168 54 Q90 104 12 54Z"/><ellipse cx="90" cy="54" rx="24" ry="25"/><circle cx="90" cy="54" r="9" fill="#c9a66b"/>',
  '<path d="M82 25 Q90 14 98 25 L98 75 Q90 88 82 75Z"/><path d="M90 27V74"/><path d="M90 18 Q75 5 68 20"/>',
  '<path d="M24 67 H176"/><path d="M42 67 Q52 43 62 67 M68 67 Q78 40 88 67 M94 67 Q104 42 114 67 M120 67 Q130 45 140 67"/><circle cx="54" cy="30" r="12"/><circle cx="90" cy="30" r="12"/><circle cx="126" cy="30" r="12"/>',
  '<rect x="22" y="16" width="136" height="82" rx="8"/><path d="M40 40H140 M40 58H120 M40 76H130"/><circle cx="148" cy="28" r="5" fill="#c9a66b"/>'][n];
 } else if(theme==="fibres"){
  body=['<path d="M20 88 Q60 12 100 88 M50 88 Q90 12 130 88 M80 88 Q120 12 160 88"/>',
  '<path d="M28 82V24 M58 82V12 M88 82V32 M118 82V18 M148 82V38"/><path d="M20 88H160"/>',
  '<path d="M25 75 Q60 40 95 75" stroke-width="7"/><path d="M25 60 Q60 25 95 60" stroke-width="3"/><path d="M110 75 Q140 45 170 75" stroke-width="5"/>',
  '<rect x="24" y="18" width="142" height="78" rx="7"/><path d="M40 38H150 M40 54H125 M40 70H145"/><circle cx="145" cy="82" r="6" fill="#c9a66b"/>'][n];
 } else if(theme==="adhesive"){
  body=['<path d="M65 18H115V34H65Z M58 34H122V94H58Z"/><path d="M75 50H105 M75 61H105 M75 72H98"/><path d="M78 18V10H102V18"/>',
  '<path d="M90 15 C60 45 65 75 90 80 C115 75 120 45 90 15Z" fill="#d9bd8d"/><path d="M90 85V98"/>',
  '<circle cx="62" cy="52" r="23"/><path d="M62 35V52L75 61"/><path d="M112 32H162V76H112Z"/><path d="M122 44H152 M122 56H152 M122 68H144"/>',
  '<rect x="24" y="25" width="58" height="62" rx="7"/><rect x="110" y="25" width="58" height="62" rx="7"/><path d="M38 43H68 M38 55H68 M124 43H154 M124 55H154"/>'][n];
 } else if(theme==="tools"){
  body=['<path d="M35 18L85 70 M85 18L35 70"/><path d="M35 18L24 8 M85 18L96 8"/>',
  '<path d="M30 18L78 68 Q90 80 102 68 L150 18"/><path d="M30 18L20 8 M150 18L160 8"/>',
  '<path d="M45 18V78 M60 18V78 M45 78Q52 96 60 78"/><path d="M100 18V78 M115 18V78 M100 78Q108 96 115 78"/>',
  '<path d="M35 28H145V88H35Z"/><path d="M48 45H132 M48 60H132 M48 75H115"/><circle cx="90" cy="16" r="8"/>'][n];
 } else if(theme==="equipment"){
  body=['<path d="M55 20H125L138 34H42Z"/><path d="M48 34V72 M132 34V72 M48 72H132"/><path d="M58 45H122"/>',
  '<path d="M22 60H158L145 78H35Z"/><path d="M45 78V94 M135 78V94"/><path d="M36 94H144"/>',
  '<circle cx="58" cy="54" r="28"/><path d="M58 54L75 39"/><circle cx="132" cy="54" r="28"/><path d="M132 54L132 34"/>',
  '<path d="M28 22H75V88H28Z M112 22H159V88H112Z"/><path d="M40 42H63 M124 42H147 M40 57H63 M124 57H147"/>'][n];
 } else if(theme==="hygiene"){
  body=['<path d="M58 25Q45 35 50 58L57 84H106L114 58Q118 35 105 25"/><path d="M65 25V14H98V25"/>',
  '<rect x="25" y="24" width="140" height="66" rx="8"/><path d="M42 44H148 M42 59H130 M42 74H140"/>',
  '<circle cx="45" cy="54" r="20"/><path d="M35 54L43 62L58 44"/><path d="M90 54H110"/><circle cx="145" cy="54" r="20"/>',
  '<rect x="22" y="28" width="42" height="56" rx="6"/><rect x="79" y="28" width="42" height="56" rx="6"/><rect x="136" y="28" width="42" height="56" rx="6"/><path d="M64 56H78 M121 56H135"/>'][n];
 } else if(theme==="mapping"){
  body=['<path d="M14 56Q90 5 166 56Q90 107 14 56Z"/><path d="M90 12V100 M55 26V86 M125 26V86"/>',
  '<path d="M14 56Q90 5 166 56Q90 107 14 56Z"/><path d="M25 54L36 38 M40 46L51 31 M57 39L66 27 M75 34L81 25 M95 34L101 25 M114 39L124 27 M133 46L144 31"/>',
  '<path d="M14 56Q90 5 166 56Q90 107 14 56Z"/><path d="M36 48L44 31 M58 39L66 18 M80 34L84 12 M102 34L108 14 M124 40L136 22"/>',
  '<path d="M14 56Q90 5 166 56Q90 107 14 56Z"/><path d="M30 53L40 39 M55 43L66 29 M82 37L91 27 M108 38L120 28 M132 47L150 37"/>'][n];
 } else if(theme==="prep"){
  body=['<path d="M30 55Q90 12 150 55Q90 98 30 55Z"/><path d="M48 55Q90 32 132 55"/>',
  '<path d="M42 18H138V88H42Z"/><path d="M58 38H122 M58 54H122 M58 70H110"/>',
  '<path d="M25 62Q90 20 155 62"/><path d="M45 65Q90 44 135 65"/><path d="M35 75H145"/>',
  '<path d="M40 20L90 85L140 20"/><path d="M90 85V18"/><circle cx="90" cy="18" r="8" fill="#c9a66b"/>'][n];
 } else if(theme==="classic"){
  body=['<path d="M20 80Q70 20 130 80"/><path d="M75 82Q95 45 125 25"/>',
  '<path d="M40 18L92 68 M92 18L40 68"/><path d="M92 68L145 28"/>',
  '<path d="M25 72Q80 18 150 72"/><path d="M92 72Q108 48 125 28"/><circle cx="126" cy="28" r="5" fill="#c9a66b"/>',
  '<path d="M20 65Q90 10 160 65"/><path d="M35 70L48 52 M55 61L66 43 M78 54L87 38 M100 54L110 38 M122 61L136 48"/>'][n];
 } else if(theme==="volume"){
  body=['<path d="M90 86V35"/><path d="M90 35L65 10 M90 35L78 7 M90 35L102 7 M90 35L115 10"/>',
  '<path d="M90 85L45 18 M90 85L65 10 M90 85L90 8 M90 85L115 10 M90 85L135 18"/>',
  '<path d="M28 78Q55 25 82 78 M98 78Q125 25 152 78"/><path d="M45 64L57 48 M112 64L124 48"/>',
  '<path d="M30 80Q90 20 150 80"/><path d="M55 64L75 40 M90 56V26 M125 64L105 40"/><path d="M20 88H160"/>'][n];
 } else if(theme==="maintenance"){
  body=['<path d="M35 40Q90 5 145 40"/><path d="M48 52Q90 25 132 52"/><path d="M60 64Q90 48 120 64"/>',
  '<path d="M20 65Q90 20 160 65"/><path d="M40 65Q55 45 70 65 M80 65Q95 45 110 65 M120 65Q135 45 150 65"/>',
  '<rect x="65" y="20" width="50" height="68" rx="8"/><path d="M78 20V10H102V20 M78 46H102 M78 60H102"/>',
  '<rect x="30" y="18" width="130" height="70" rx="8"/><path d="M48 38H142 M48 54H130 M48 70H138"/>'][n];
 } else if(theme==="safety"){
  body=['<path d="M90 12L150 34V62Q135 90 90 104Q45 90 30 62V34Z"/><path d="M90 35V62 M90 78V80"/>',
  '<circle cx="90" cy="55" r="34"/><path d="M90 34V58 M90 72V74"/><path d="M48 18L132 92"/>',
  '<circle cx="50" cy="55" r="20"/><path d="M70 55H110"/><path d="M100 45L112 55L100 65"/><rect x="120" y="35" width="42" height="40" rx="6"/>',
  '<path d="M20 55H60 M60 55L78 35 M60 55L78 75 M78 35H110 M78 75H110"/><rect x="110" y="18" width="55" height="30" rx="6"/><rect x="110" y="62" width="55" height="30" rx="6"/>'][n];
 } else {
  body=['<rect x="35" y="22" width="110" height="65" rx="8"/><path d="M50 42H130 M50 58H120 M50 74H130"/>',
  '<path d="M25 80H155 M45 80V45H135V80 M58 45V28H122V45"/>',
  '<rect x="30" y="20" width="55" height="68" rx="6"/><rect x="105" y="20" width="55" height="68" rx="6"/><path d="M43 40H72 M118 40H147 M43 56H72 M118 56H147"/>',
  '<path d="M90 12L145 35V62Q130 90 90 104Q50 90 35 62V35Z"/><path d="M65 58L82 73L116 40"/>'][n];
 }
 return '<svg viewBox="0 0 180 115" role="img" aria-label="Ilustración técnica esquemática" '+common+'>'+body+'</svg>';
}
window.buildVisuals=function(index){
 const stage=atlas[index];if(!stage)return "";
 const cards=stage.items.map((it,i)=>'<article class="atlas-card"><div class="atlas-art">'+svg(stage.theme,i)+'</div><div class="atlas-copy"><span>ESQUEMA '+String(i+1).padStart(2,"0")+'</span><h4>'+it[0]+'</h4><p>'+it[1]+'</p></div></article>').join("");
 return '<section class="lash-atlas"><div class="atlas-heading"><div><span class="tech-kicker">ELI BEAUTY ACADEMY · MATERIAL VISUAL</span><h3>Atlas visual de estudio</h3><p>Cuatro láminas técnicas para observar, identificar y recordar los conceptos de esta etapa.</p></div><span class="atlas-count">04 LÁMINAS</span></div><div class="atlas-grid">'+cards+'</div><p class="atlas-disclaimer">Material didáctico vectorial original. Los esquemas simplifican conceptos para estudiar; no son fotografías clínicas, no indican medidas universales y no sustituyen fichas técnicas, instrucciones del fabricante ni práctica presencial supervisada.</p></section>';
};
const style=document.createElement("style");
style.textContent='.lash-atlas{margin:24px 0}.atlas-heading{display:flex;justify-content:space-between;align-items:center;gap:14px;margin:18px 0}.atlas-heading h3{margin:5px 0;color:#1b3155}.atlas-heading p{margin:5px 0;color:#6c7789;font-size:13px;line-height:1.5}.atlas-count{flex:none;background:#e9edf4;color:#385071;padding:8px 11px;border-radius:20px;font-size:10px;font-weight:800;letter-spacing:1px}.atlas-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:13px}.atlas-card{overflow:hidden;border:1px solid #dfe6ef;border-radius:15px;background:#fff;box-shadow:0 7px 20px #1727470a}.atlas-art{height:145px;display:grid;place-items:center;padding:12px;background:linear-gradient(140deg,#f7f4ed,#e9eef5)}.atlas-art svg{width:100%;max-width:260px;height:115px}.atlas-copy{padding:14px}.atlas-copy span{font-size:9px;letter-spacing:1.5px;font-weight:800;color:#9b7844}.atlas-copy h4{margin:6px 0;color:#1c3559;font-size:15px}.atlas-copy p{margin:0;color:#657287;font-size:12px;line-height:1.6}.atlas-disclaimer{margin:13px 0;padding:12px 14px;border-radius:10px;background:#f5f1e8;color:#74644b;font-size:11px;line-height:1.6}@media(max-width:650px){.atlas-grid{grid-template-columns:1fr}.atlas-art{height:135px}.atlas-heading{align-items:flex-start}}';
document.head.appendChild(style);
})();