/* EDDELI · Selector de idioma ES/EN
   Traduce la interfaz y los elementos dinámicos principales. Preferencia guardada en este navegador. */
(function(){
"use strict";
const translations={
"Inicio":"Home","Explorar áreas":"Explore areas","Academia":"Academy","Cursos":"Courses","Biblioteca":"Library","Notificaciones":"Notifications","MI ESPACIO":"MY SPACE","Mi perfil":"My profile","Acceder":"Sign in","GESTIÓN":"MANAGEMENT","Administración":"Administration","Estudiantes":"Students","MENÚ PRINCIPAL":"MAIN MENU",
"Buscar en EDDELI...":"Search EDDELI...","Explorar áreas":"Explore areas","Ver todas las áreas →":"View all areas →","EXPLORAR ÁREAS →":"EXPLORE AREAS →","EMPEZAR A EXPLORAR":"START EXPLORING",
"TU UNIVERSO DE APRENDIZAJE":"YOUR LEARNING UNIVERSE","Aprende algo nuevo.":"Learn something new.","Construye tu futuro.":"Build your future.","EDDELI reúne academias, profesores y cursos de distintas especialidades en un solo lugar. Tú eliges qué quieres aprender.":"EDDELI brings together academies, teachers and courses from different fields in one place. You choose what you want to learn.",
"DESCUBRE TU PRÓXIMO PASO":"DISCOVER YOUR NEXT STEP","¿Qué te gustaría aprender?":"What would you like to learn?","Explora nuestras áreas de conocimiento y encuentra el camino que va contigo.":"Explore our learning areas and find the path that suits you.",
"Belleza y estética":"Beauty and aesthetics","Academia y cursos":"Academy and courses","Formación profesional":"Professional training","Salud y bienestar":"Health and wellness","Cuida tu bienestar":"Take care of your well-being","Cocina y gastronomía":"Cooking and gastronomy","Sabores y técnicas":"Flavours and techniques","Tecnología e innovación":"Technology and innovation","El mundo digital":"The digital world","Arte y creatividad":"Art and creativity","Expresa tus ideas":"Express your ideas","Idiomas":"Languages","Comunícate sin fronteras":"Communicate without borders","Desarrollo y negocios":"Personal development and business","Impulsa tus proyectos":"Grow your projects","Y mucho más":"And much more","Nuevas áreas por descubrir":"New areas to discover","Un solo espacio. Muchas formas de crecer.":"One space. Many ways to grow.","Aprende a tu ritmo, descubre nuevos intereses y desarrolla habilidades para tu vida.":"Learn at your own pace, discover new interests and develop skills for life.",
"EL CONOCIMIENTO NO TIENE LÍMITES":"KNOWLEDGE HAS NO LIMITS","Explora las áreas de EDDELI":"Explore EDDELI areas","Elige una especialidad. Cada área podrá reunir distintas academias, profesores y cursos.":"Choose a speciality. Each area can bring together academies, teachers and courses.",
"Acceso a EDDELI":"Access EDDELI","Gestión general de la plataforma.":"Platform management.","Acceso al espacio académico.":"Access the learning area.","CONTINUAR":"CONTINUE","¿Todavía no tienes cuenta?":"Don't have an account yet?","Solicita tu registro como estudiante.":"Apply for a student account.","SOLICITAR REGISTRO":"APPLY FOR REGISTRATION","Acceso administrativo":"Administrator sign-in","Accede con el correo y la contraseña de tu cuenta administrativa.":"Sign in with your administrator email and password.","Correo electrónico":"Email address","Contraseña":"Password","ENTRAR":"SIGN IN","OLVIDÉ MI CONTRASEÑA":"FORGOT PASSWORD","VOLVER":"BACK","Acceso de estudiantes":"Student sign-in","Accede con tu correo y contraseña. Tu cuenta debe estar aprobada para entrar.":"Sign in with your email and password. Your account must be approved to enter.","REGISTRARME":"REGISTER","Registro de estudiante":"Student registration","Nombre completo":"Full name","Contraseña (mínimo 8 caracteres)":"Password (at least 8 characters)","Teléfono":"Phone","País":"Country","Confirma tu correo. Después, la administración revisará tu solicitud antes de habilitar el acceso académico.":"Confirm your email. An administrator will then review your application before granting academic access.",
"CENTRO DE CONTROL":"CONTROL CENTER","Bienvenido al panel de gestión de EDDELI.":"Welcome to the EDDELI management dashboard.","Herramientas de gestión":"Management tools","Alumnos":"Students","Registro y seguimiento.":"Registration and tracking.","ABRIR":"OPEN","Organización académica.":"Academic organisation.","Exámenes":"Exams","Evaluaciones y pruebas.":"Assessments and tests.","Certificados":"Certificates","Emisión y consulta.":"Issue and view certificates.","Contenido":"Content","Materiales y lecciones.":"Learning materials and lessons.","Configuración":"Settings","Opciones de EDDELI.":"EDDELI options.","SALIR":"SIGN OUT",
"Gestión de alumnos":"Student management","Revisa solicitudes y aprueba o rechaza el acceso de los estudiantes.":"Review applications and approve or reject student access.","ACTUALIZAR":"REFRESH","Gestión académica":"Academic management","Administra cursos, módulos y evaluaciones de ELI BEAUTY ACADEMY.":"Manage courses, modules and assessments for ELI BEAUTY ACADEMY.","Crear curso":"Create course","Nombre del curso":"Course name","Identificador (ej. maquillaje)":"Identifier (e.g. makeup)","Descripción":"Description","CREAR CURSO":"CREATE COURSE","Crear módulo":"Create module","Número de módulo":"Module number","Título del módulo":"Module title","Contenido de la lección":"Lesson content","GUARDAR MÓDULO":"SAVE MODULE",
"Evaluaciones y preguntas":"Assessments and questions","Crea evaluaciones y añade preguntas con sus respuestas correctas. La clave de respuestas nunca se entrega al estudiante.":"Create assessments and add questions with their correct answers. The answer key is never shown to students.","Examen final":"Final exam","CREAR EVALUACIÓN":"CREATE ASSESSMENT","Añadir pregunta":"Add a question","Escribe la pregunta":"Write the question","Respuesta correcta: A":"Correct answer: A","Respuesta correcta: B":"Correct answer: B","Respuesta correcta: C":"Correct answer: C","Respuesta correcta: D":"Correct answer: D","Explicación (opcional)":"Explanation (optional)","GUARDAR PREGUNTA":"SAVE QUESTION",
"Certificados":"Certificates","Emite y consulta certificados de finalización. Comprueba previamente que el estudiante haya completado los requisitos académicos.":"Issue and view completion certificates. First check that the student has met the academic requirements.","Estudiante":"Student","Curso":"Course","EMITIR CERTIFICADO":"ISSUE CERTIFICATE","Configuración y estado":"Settings and status","Estado de la conexión y tu cuenta administrativa.":"Connection and administrator account status.","COMPROBAR CONEXIÓN":"CHECK CONNECTION",
"TU ESPACIO DE APRENDIZAJE":"YOUR LEARNING SPACE","Hola, estudiante":"Hello, student","Continúa tu formación y descubre tus próximos retos.":"Continue your training and discover your next challenges.","Mi espacio académico":"My learning space","Mis cursos":"My courses","Consulta tus formaciones.":"View your courses.","VER CURSOS":"VIEW COURSES","Mi progreso":"My progress","Seguimiento de tu aprendizaje.":"Track your learning.","Se activará con las cuentas reales":"Will be enabled with live accounts","Mis exámenes":"My exams","Consulta tus evaluaciones.":"View your assessments.","Mis certificados":"My certificates","Consulta tus acreditaciones.":"View your certificates.",
"ELI BEAUTY ACADEMY · FORMACIÓN PROFESIONAL":"ELI BEAUTY ACADEMY · PROFESSIONAL TRAINING","Especialista en Extensiones de Pestañas":"Eyelash Extension Specialist","Un recorrido formativo desde los fundamentos hasta la práctica profesional, con 13 etapas y 52 lecciones, fichas técnicas, ejercicios y evaluaciones de aprendizaje.":"A learning journey from the fundamentals to professional practice, with 13 stages and 52 lessons, technical reference sheets, exercises and learning assessments.","PROGRAMA COMPLETO · NIVEL INICIAL A PROFESIONAL":"COMPLETE PROGRAM · BEGINNER TO PROFESSIONAL",
"Tu zona de estudio":"Your study area","Avanza en orden. Estudia cada lección, revisa las fichas y realiza la práctica propuesta antes de pasar a la siguiente etapa. Este material es formativo: la práctica sobre personas requiere supervisión presencial y cumplimiento de las normas sanitarias locales.":"Follow the stages in order. Study each lesson, review the reference sheets and complete the proposed practice before moving on. This is educational material: practice on people requires in-person supervision and compliance with local health regulations.",
"13 etapas":"13 stages","52 lecciones":"52 lessons","Prácticas guiadas":"Guided practice","Seguridad ocular":"Eye safety","Itinerario de aprendizaje":"Learning pathway","ENTRAR A LA ETAPA →":"OPEN STAGE →","ETAPA":"STAGE","Lecciones de esta etapa":"Lessons in this stage","Biblioteca visual de la etapa":"Stage visual library","Biblioteca de fichas técnicas":"Technical reference library","Práctica propuesta":"Suggested practice","Seguridad profesional":"Professional safety","ETAPA ANTERIOR":"PREVIOUS STAGE","SIGUIENTE ETAPA →":"NEXT STAGE →","CERRAR":"CLOSE","Identificación":"Identification","Función y aplicación":"Function and application","Variantes y lectura de etiqueta":"Variations and label reading","Selección, cuidado y seguridad":"Selection, care and safety",
"Disponible":"Available","En preparación":"In preparation","Próximamente":"Coming soon","En expansión":"Expanding","Esta área formará parte del catálogo de EDDELI. Estamos preparando su contenido.":"This area will be part of the EDDELI catalogue. Its content is being prepared.",
"Material didáctico vectorial original. Los esquemas simplifican conceptos para estudiar; no son fotografías clínicas, no indican medidas universales y no sustituyen fichas técnicas, instrucciones del fabricante ni práctica presencial supervisada.":"Original vector-based learning material. These diagrams simplify concepts for study; they are not clinical photographs, do not show universal measurements and do not replace technical data sheets, manufacturer instructions or supervised in-person practice.",
"ESQUEMAS":"DIAGRAMS","LÁMINAS":"PLATES","ESQUEMA":"DIAGRAM","Vista general":"Overview","Partes y componentes":"Parts and components","Identificación y uso":"Identification and use","Control de seguridad":"Safety check",
"ETAPA ANTERIOR":"PREVIOUS STAGE","SIGUIENTE ETAPA →":"NEXT STAGE →","CERRAR":"CLOSE",
"Inicio":"Home","Academia y cursos":"Academy and courses",
"Fundamentos, anatomía y ciclo de la pestaña natural":"Fundamentals, anatomy and natural lash cycle",
"Tipos de extensiones, fibras y características":"Extension types, fibres and characteristics",
"Adhesivos, pegamentos y productos auxiliares":"Adhesives, glues and auxiliary products",
"Instrumental manual y accesorios no eléctricos":"Hand tools and non-electric accessories",
"Equipos eléctricos, mobiliario e iluminación":"Electrical equipment, furniture and lighting",
"Higiene, desinfección y bioseguridad":"Hygiene, disinfection and biosafety",
"Diseño, visagismo y mapping":"Design, eye styling and lash mapping",
"Consulta, preparación y aislamiento":"Consultation, preparation and isolation",
"Aplicación clásica pelo a pelo":"Classic one-to-one application",
"Volumen, híbridas y abanicos":"Volume, hybrid sets and fans",
"Mantenimiento, rellenos y retirada":"Maintenance, infills and removal",
"Reacciones, contraindicaciones y solución de problemas":"Reactions, contraindications and troubleshooting",
"Práctica integral, evaluación y desarrollo profesional":"Comprehensive practice, assessment and professional development",
"Anatomía básica del ojo y sus anexos":"Basic eye anatomy and related structures",
"Estructura de la pestaña natural":"Natural eyelash structure",
"Ciclo de crecimiento":"Growth cycle",
"Evaluación inicial y ficha de cliente":"Initial assessment and client record",
"Materiales y fibras comerciales":"Commercial materials and fibres",
"Longitudes, diámetros y grosores":"Lengths, diameters and thicknesses",
"Curvaturas y perfiles":"Curls and profiles",
"Tipos de bandejas y presentación":"Tray types and presentation",
"Familias de adhesivos y composición":"Adhesive families and composition",
"Viscosidad, velocidad y retención":"Viscosity, setting speed and retention",
"Humedad, temperatura y almacenamiento":"Humidity, temperature and storage",
"Primer, limpiador, bonder y removedor":"Primer, cleanser, bonder and remover",
"Pinzas de aislamiento y aplicación":"Isolation and application tweezers",
"Accesorios de preparación":"Preparation accessories",
"Soportes y superficies de trabajo":"Holders and work surfaces",
"Ergonomía y mantenimiento":"Ergonomics and maintenance",
"Iluminación y lámparas":"Lighting and lamps",
"Camilla, silla y ergonomía":"Treatment bed, chair and ergonomics",
"Control ambiental y ventilación":"Environmental control and ventilation",
"Equipos auxiliares y seguridad eléctrica":"Auxiliary equipment and electrical safety",
"Preparación de manos y puesto":"Hand and workstation preparation",
"Limpieza, desinfección y esterilización":"Cleaning, disinfection and sterilisation",
"Desechables y prevención de contaminación cruzada":"Single-use items and cross-contamination prevention",
"Protocolo ante incidentes":"Incident response protocol",
"Análisis visual del ojo":"Visual eye assessment",
"Mapas y transiciones":"Maps and transitions",
"Efectos habituales":"Common styling effects",
"Personalización y simetría":"Customisation and symmetry",
"Consulta y consentimiento informado":"Consultation and informed consent",
"Limpieza y preparación de pestañas":"Eyelash cleansing and preparation",
"Protección del párpado inferior":"Lower eyelid protection",
"Aislamiento de pestaña natural":"Natural lash isolation",
"Selección de extensión y carga de adhesivo":"Extension selection and adhesive pickup",
"Dirección y colocación":"Direction and placement",
"Control de adhesiones y simetría":"Bond control and symmetry",
"Finalización y revisión":"Finishing and inspection",
"Volumen y abanicos":"Volume and fans",
"Técnica híbrida":"Hybrid technique",
"Control de base y simetría":"Base control and symmetry",
"Selección responsable de densidad":"Responsible density selection",
"Cuidados posteriores":"Aftercare",
"Valoración para relleno":"Infill assessment",
"Retirada profesional":"Professional removal",
"Registro y planificación":"Record keeping and planning",
"Irritación frente a posible alergia":"Irritation versus possible allergy",
"Retención deficiente":"Poor retention",
"Adhesiones, dirección y molestias":"Stickies, direction and discomfort",
"Cuándo detener y derivar":"When to stop and refer",
"Montaje completo del puesto":"Complete workstation setup",
"Caso práctico integral":"Comprehensive practical case",
"Evaluación teórica y portafolio":"Theory assessment and portfolio",
"Ética, atención al cliente y negocio":"Ethics, client care and business"
};
const attrs={placeholder:{"Buscar en EDDELI...":"Search EDDELI...","Correo electrónico":"Email address","Tu correo":"Your email","Tu contraseña":"Your password","Nombre y apellidos":"First and last name","Crea una contraseña":"Create a password","Teléfono":"Phone","País":"Country","Nombre del curso":"Course name","Descripción":"Description","Título del módulo":"Module title","Contenido de la lección":"Lesson content"},title:{"Notificaciones":"Notifications","Perfil":"Profile"}};
let lang="es";
function translateText(value,target){
 if(target==="es")return value;
 let out=value;
 Object.keys(translations).sort((a,b)=>b.length-a.length).forEach(k=>{out=out.split(k).join(translations[k]);});
 return out;
}
function apply(target){
 lang=target;document.documentElement.lang=target;
 document.querySelectorAll("[data-language]").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.language===target)));
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
 const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
 nodes.forEach(n=>{if(!n.parentElement.closest("[data-no-translate]")){if(!n.__esOriginal)n.__esOriginal=n.nodeValue;n.nodeValue=translateText(n.__esOriginal,target);}});
 document.querySelectorAll("input,textarea,button").forEach(el=>{["placeholder","title"].forEach(attr=>{if(el.hasAttribute(attr)){const original=el.getAttribute("data-es-"+attr)||el.getAttribute(attr);if(!el.hasAttribute("data-es-"+attr))el.setAttribute("data-es-"+attr,original);const map=attrs[attr]||{};el.setAttribute(attr,target==="es"?original:(map[original]||translations[original]||original));}});});
 try{localStorage.setItem("eddeli-language",target);}catch(e){}
}
function mount(){
 const top=document.querySelector(".top-actions");if(!top)return;
 if(!document.getElementById("language-switch")){
  const wrap=document.createElement("div");wrap.id="language-switch";wrap.className="language-switch";wrap.setAttribute("aria-label","Language selector");
  wrap.innerHTML='<button type="button" data-language="es" aria-label="Español">ES</button><span aria-hidden="true">|</span><button type="button" data-language="en" aria-label="English">EN</button>';
  top.insertBefore(wrap,top.firstChild);
  wrap.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>apply(b.dataset.language)));
 }
 apply(lang);
}
const style=document.createElement("style");
style.textContent='.language-switch{display:flex;align-items:center;gap:5px;padding:4px 7px;border:1px solid #526487;border-radius:22px;background:#202e49;color:#93a3bd;font-size:11px;font-weight:800;letter-spacing:1px}.language-switch button{border:0;background:transparent;color:#b8c4d7;padding:6px 7px;border-radius:15px;font-size:11px;font-weight:800;cursor:pointer}.language-switch button[aria-pressed="true"]{background:#edc66f;color:#17213a}.top-actions{gap:9px}@media(max-width:520px){.language-switch{gap:1px;padding:3px}.language-switch button{padding:6px 5px}.top-actions{gap:6px}}';
document.head.appendChild(style);
const observer=new MutationObserver(()=>{if(lang==="en"){const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);while(walker.nextNode()){const n=walker.currentNode;if(!n.__esOriginal)n.__esOriginal=n.nodeValue;const translated=translateText(n.__esOriginal,"en");if(n.nodeValue!==translated)n.nodeValue=translated;}}});
document.addEventListener("DOMContentLoaded",()=>{try{lang=localStorage.getItem("eddeli-language")==="en"?"en":"es";}catch(e){lang="es";}mount();observer.observe(document.body,{childList:true,subtree:true});});
if(document.readyState!=="loading"){try{lang=localStorage.getItem("eddeli-language")==="en"?"en":"es";}catch(e){lang="es";}mount();observer.observe(document.body,{childList:true,subtree:true});}
window.eddeliSetLanguage=apply;
})();