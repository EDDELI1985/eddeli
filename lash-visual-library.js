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
["Materiales y fibras comerciales","Compara las fibras y sus acabados; confirma siempre la composición y las características en la ficha del fabricante."],
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
["Parches y cintas de protección","Accesorios para proteger las pestañas inferiores; deben colocarse cómodamente y sin contacto con el ojo."],
["Paletas y superficies para adhesivo","Superficies de apoyo para organizar la gota y mantener el adhesivo libre de contaminación."],
["Mantenimiento e inventario de herramientas","Revisa limpieza, alineación, estado, almacenamiento e inventario de cada herramienta."]
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
["Material desechable y control de contaminación cruzada","Utiliza consumibles de un solo uso y separa material limpio, utilizado y residuos."],
["Incidentes y registro de bioseguridad","Documenta exposiciones, contaminación, medidas adoptadas y derivaciones necesarias."]
]},
{theme:"mapping",items:[
["Observación y análisis visual del ojo","Compara las características externas de ambos ojos sin diagnosticar ni etiquetar condiciones."],
["Mapa natural","Patrón de longitudes moderadas que acompaña la dirección natural."],
["Efectos de diseño comparados","Compara efectos natural, muñeca, gato y ardilla; ninguno es una receta universal."],
["Simetría y adaptación del diseño","Compara ambos lados y adapta el mapa a la dirección y resistencia de las pestañas naturales."]
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
const annotations={
eye:[["Párpado y línea de pestañas","Córnea y conjuntiva: zona prohibida"],["Tallo visible","Raíz dentro del folículo"],["Anágena: crecimiento","Catágena y telógena: transición/reposo"],["Expectativas y antecedentes","Observaciones y decisión segura"]],
fibres:[["Perfil de curvatura","Comparar sin estirar la fibra"],["Longitud en milímetros","Diámetro indicado por fabricante"],["Muestras de fibras","Comparar textura y presentación"],["Longitud y curvatura","Marca, lote y estado del envase"]],
adhesive:[["Envase y aplicador","Lote, fecha y advertencias"],["Gota pequeña y controlada","No contaminar ni reutilizar"],["Humedad del ambiente","Temperatura: registrar ambas"],["Limpiador y primer","Adhesivo y removedor: no confundir"]],
tools:[["Pinza recta: aislamiento","Puntas alineadas y cierre suave"],["Parches de protección","Cinta colocada sin invadir el ojo"],["Paleta para adhesivo","Superficie limpia y organizada"],["Herramientas revisadas","Limpieza, estado e inventario"]],
equipment:[["Luz estable y regulable","Evitar calor y deslumbramiento"],["Camilla nivelada","Cuello y espalda bien apoyados"],["Higrómetro","Termómetro: leer y registrar"],["Cables en buen estado","Ventilación y líquidos separados"]],
hygiene:[["Higiene de manos","Antes y después del servicio"],["Limpiar antes de desinfectar","Respetar tiempo del producto"],["Consumibles de un solo uso","Separar limpio, utilizado y residuos"],["Incidente documentado","Registro y respuesta segura"]],
mapping:[["Observar ambos ojos","Análisis externo sin diagnóstico"],["Longitudes progresivas","Seguir la dirección natural"],["Natural, muñeca, gato y ardilla","Comparar efectos y límites"],["Comparar simetría","Adaptar el mapa a cada ojo"]],
prep:[["Consulta y consentimiento","Explicar riesgos y cuidados"],["Limpieza compatible","Pestañas secas según fabricante"],["Párpado inferior protegido","Parches sin tocar el ojo"],["Maniquí de práctica","Aislar una fibra cada vez"]],
classic:[["Separar una pestaña","No atrapar pestañas vecinas"],["Sujetar la extensión","No deformar la fibra"],["Unión fibra-pestaña","Sin contacto con piel"],["Revisar dirección","Comprobar que no haya uniones"]],
volume:[["Clásico: una fibra","Una pestaña natural aislada"],["Abanico de fibras finas","Controlar el peso total"],["Híbrido: dos texturas","Distribución planificada"],["Base del abanico","Simetría y puntas ordenadas"]],
maintenance:[["Limpieza compatible","No frotar ni arrancar"],["Pestaña en crecimiento","Revisar si la unión está crecida"],["Removedor adecuado","Nunca tirar ni hacer palanca"],["Fecha y productos","Registrar retención e incidencias"]],
safety:[["Dolor o hinchazón","Detener el servicio"],["No volver a exponer","No diagnosticar ni medicar"],["Revisar técnica y producto","No improvisar parámetros"],["Derivar a atención sanitaria","No tratar síntomas oculares"]],
professional:[["Puesto preparado","Luz, camilla y herramientas"],["Consulta y preparación","Práctica supervisada y revisión"],["Fotos con autorización","Fichas y reflexión de práctica"],["Privacidad y consentimiento","Trazabilidad y normas locales"]]
};
const NS="http://www.w3.org/2000/svg";
function svg(theme,n){
 const palette=theme==="fibres"?{ink:"#168A8F",gold:"#D6A84A",panel:"#DDF2EF",panelAlt:"#FFF2D2",border:"#A9D8D3",goldBorder:"#E7D29A",text:"#28565A",muted:"#64888A",canvas:"#F7FCFB"}:{ink:"#36577f",gold:"#c9a66b",panel:"#e8eef7",panelAlt:"#f4eddf",border:"#d8e1ed",goldBorder:"#dfcba7",text:"#273b57",muted:"#6c7f98",canvas:"#fbfcfe"};
 const common=`fill="none" stroke="${palette.ink}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"`;
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
 const tailored={
  tools:{
   1:'<path d="M30 40Q90 15 150 40L150 60Q90 39 30 60Z" fill="#e8eef7" stroke="#36577f" stroke-width="3"/><path d="M40 54H140" stroke="#9b7844" stroke-width="3" stroke-dasharray="5 5"/><path d="M48 72Q90 91 132 72" fill="none" stroke="#36577f" stroke-width="3"/><path d="M52 78L45 94 M128 78L135 94" stroke="#9b7844" stroke-width="3"/>',
   2:'<path d="M28 30H152V88H28Z" fill="#f7f9fc" stroke="#36577f" stroke-width="3"/><path d="M42 45H138 M42 60H138 M42 75H120" stroke="#36577f" stroke-width="3"/><path d="M90 18V30 M82 18H98" stroke="#9b7844" stroke-width="3"/><circle cx="140" cy="76" r="6" fill="#c9a66b"/>',
   3:'<rect x="30" y="20" width="100" height="84" rx="8" fill="#f7f9fc" stroke="#36577f" stroke-width="3"/><path d="M48 42L56 50L70 34 M48 66L56 74L70 58 M48 88L56 96L70 80" fill="none" stroke="#9b7844" stroke-width="3"/><path d="M84 42H114 M84 66H114 M84 88H114" stroke="#36577f" stroke-width="3"/><path d="M148 30L166 94 M166 30L148 94" stroke="#36577f" stroke-width="3" stroke-linecap="round"/>'
  },
  hygiene:{
   2:'<rect x="24" y="28" width="38" height="58" rx="7" fill="#e8eef7" stroke="#36577f" stroke-width="3"/><rect x="81" y="28" width="38" height="58" rx="7" fill="#f4eddf" stroke="#9b7844" stroke-width="3"/><path d="M90 18H110V28 M35 18H51V28" stroke="#36577f" stroke-width="3"/><path d="M137 38H158V92H137Z" fill="#fff" stroke="#36577f" stroke-width="3"/><path d="M142 55H153 M142 68H153" stroke="#9b7844" stroke-width="3"/>',
   3:'<rect x="32" y="20" width="96" height="82" rx="8" fill="#f7f9fc" stroke="#36577f" stroke-width="3"/><path d="M50 42H111 M50 58H111 M50 74H95" stroke="#36577f" stroke-width="3"/><path d="M150 26L174 36V60Q166 82 150 90Q134 82 126 60V36Z" fill="#f4eddf" stroke="#9b7844" stroke-width="3"/><path d="M150 45V62 M150 73V75" stroke="#9b7844" stroke-width="4" stroke-linecap="round"/>'
  },
  mapping:{
   0:'<path d="M15 55Q90 8 165 55Q90 102 15 55Z" fill="#e8eef7" stroke="#36577f" stroke-width="3"/><path d="M42 54Q90 25 138 54" fill="none" stroke="#9b7844" stroke-width="3"/><path d="M90 16V94" stroke="#36577f" stroke-width="2" stroke-dasharray="5 5"/><circle cx="50" cy="55" r="5" fill="#9b7844"/><circle cx="90" cy="40" r="5" fill="#9b7844"/><circle cx="130" cy="55" r="5" fill="#9b7844"/>',
   2:'<path d="M18 54Q43 29 68 54Q43 79 18 54Z M72 54Q97 29 122 54Q97 79 72 54Z M126 54Q151 29 176 54Q151 79 126 54Z" fill="#e8eef7" stroke="#36577f" stroke-width="2"/><path d="M25 51L30 40 M38 45L43 34 M52 45L57 34 M80 51L85 40 M93 45L98 34 M107 51L112 40 M134 51L139 40 M147 45L152 34 M161 51L166 40" stroke="#9b7844" stroke-width="3" stroke-linecap="round"/><path d="M18 94H176" stroke="#9b7844" stroke-width="2" stroke-dasharray="4 4"/>',
   3:'<path d="M18 52Q55 18 90 52Q55 86 18 52Z M90 52Q125 18 162 52Q125 86 90 52Z" fill="#e8eef7" stroke="#36577f" stroke-width="3"/><path d="M90 14V100" stroke="#9b7844" stroke-width="2" stroke-dasharray="5 5"/><path d="M35 50L43 38 M52 43L59 31 M70 43L77 31 M107 43L114 31 M125 43L132 31 M143 50L151 38" stroke="#36577f" stroke-width="3" stroke-linecap="round"/>'
  }
 };
 if(tailored[theme]?.[n])body=tailored[theme][n];
 if(theme==="fibres")body=body.replace(/#c9a66b/g,palette.gold);
 const labels=annotations[theme]?.[n]||["Observar el esquema","Contrastar con la explicación"];
 const labelSvg=labels.map((label,i)=>'<rect x="'+(i===0?12:184)+'" y="224" width="164" height="30" rx="8" fill="'+(i===0?palette.panel:palette.panelAlt)+'" stroke="'+(i===0?palette.border:palette.goldBorder)+'"/><circle cx="'+(i===0?25:197)+'" cy="239" r="7" fill="'+(i===0?palette.ink:palette.gold)+'"/><text x="'+(i===0?25:197)+'" y="242" text-anchor="middle" font-size="8" font-weight="700" fill="#fff">'+(i+1)+'</text><text x="'+(i===0?38:210)+'" y="243" font-size="8.5" font-weight="600" fill="'+palette.text+'">'+label.replace(/&/g,'&amp;').replace(/</g,'&lt;')+'</text>').join("");
 return '<svg viewBox="0 0 360 266" role="img" aria-label="Diagrama didáctico de '+theme+', con dos referencias identificadas" xmlns="'+NS+'"><rect x="5" y="5" width="350" height="210" rx="13" fill="'+palette.canvas+'" stroke="'+palette.border+'"/><g transform="translate(18 24) scale(1.6)" '+common+'>'+body+'</g><text x="15" y="20" font-size="9" font-weight="800" letter-spacing="1" fill="'+palette.muted+'">OBSERVA · IDENTIFICA</text>'+labelSvg+'</svg>';
}
window.buildVisuals=function(index){
 const stage=atlas[index];if(!stage)return "";
 const cards=stage.items.map((it,i)=>'<article class="atlas-card"><div class="atlas-art">'+svg(stage.theme,i)+'</div><div class="atlas-copy"><span>ESQUEMA '+String(i+1).padStart(2,"0")+'</span><h4>'+it[0]+'</h4><p>'+it[1]+'</p></div></article>').join("");
 return '<section class="lash-atlas"><div class="atlas-heading"><div><span class="tech-kicker">ELI BEAUTY ACADEMY · MATERIAL VISUAL</span><h3>Atlas visual de estudio</h3><p>Cuatro esquemas ampliados con referencias numeradas para reconocer los detalles importantes de esta etapa.</p></div><span class="atlas-count">04 LÁMINAS</span></div><div class="atlas-grid">'+cards+'</div><p class="atlas-disclaimer">Material didáctico vectorial original. Las etiquetas ayudan a identificar cada parte; los esquemas son simplificados, no son fotografías clínicas ni indican medidas universales. Contrasta siempre con las fichas técnicas y practica bajo supervisión.</p></section>';
};
const style=document.createElement("style");
style.textContent='.lash-atlas{margin:24px 0}.atlas-heading{display:flex;justify-content:space-between;align-items:center;gap:14px;margin:18px 0}.atlas-heading h3{margin:5px 0;color:#1b3155}.atlas-heading p{margin:5px 0;color:#6c7789;font-size:13px;line-height:1.5}.atlas-count{flex:none;background:#e9edf4;color:#385071;padding:8px 11px;border-radius:20px;font-size:10px;font-weight:800;letter-spacing:1px}.atlas-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:13px}.atlas-card{overflow:hidden;border:1px solid #dfe6ef;border-radius:15px;background:#fff;box-shadow:0 7px 20px #1727470a}.atlas-art{height:218px;display:grid;place-items:center;padding:8px;background:linear-gradient(140deg,#f7f9fc,#e9eef5)}.atlas-art svg{width:100%;max-width:390px;height:210px}.atlas-copy{padding:14px}.atlas-copy span{font-size:9px;letter-spacing:1.5px;font-weight:800;color:#9b7844}.atlas-copy h4{margin:6px 0;color:#1c3559;font-size:15px}.atlas-copy p{margin:0;color:#46566d;font-size:13px;line-height:1.65}.atlas-disclaimer{margin:13px 0;padding:12px 14px;border-radius:10px;background:#f5f1e8;color:#74644b;font-size:11px;line-height:1.6}@media(max-width:650px){.atlas-grid{grid-template-columns:1fr}.atlas-art{height:210px}.atlas-heading{align-items:flex-start}}';
document.head.appendChild(style);
})();