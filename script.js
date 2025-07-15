// Listado completo de ramos con código, semestre y prerrequisitos
const ramos = [
  { nombre: "Introducción a la física", codigo: "R001", semestre: 1 },
  { nombre: "Cálculo 1", codigo: "R002", semestre: 1 },
  { nombre: "Álgebra 1", codigo: "R003", semestre: 1 },
  { nombre: "Comunicación efectiva 1", codigo: "R004", semestre: 1 },
  { nombre: "Inglés 1", codigo: "R005", semestre: 1 },
  { nombre: "Identidad, universidad y equidad de género", codigo: "R006", semestre: 1 },
  { nombre: "Formación general- Electiva", codigo: "R007", semestre: 1 },
  { nombre: "Proyecto Intro. A la ingeniería 1", codigo: "R008", semestre: 1 },
  { nombre: "Mecánica", codigo: "R009", semestre: 2, prereq: ["R001", "R002"] },
  { nombre: "Cálculo 2", codigo: "R010", semestre: 2, prereq: ["R002"] },
  { nombre: "Álgebra 2", codigo: "R011", semestre: 2, prereq: ["R003"] },
  { nombre: "Química general", codigo: "R012", semestre: 2 },
  { nombre: "Dibujo de ingeniería", codigo: "R013", semestre: 2, prereq: ["R003"] },
  { nombre: "Inglés 2", codigo: "R014", semestre: 2, prereq: ["R005"] },
  { nombre: "Diálogo de fe y cultura", codigo: "R015", semestre: 2, prereq: ["R006"] },
  { nombre: "Ecuaciones diferenciales", codigo: "R016", semestre: 3, prereq: ["R010", "R011"] },
  { nombre: "Cálculo 3", codigo: "R017", semestre: 3, prereq: ["R010"] },
  { nombre: "Dinámica", codigo: "R018", semestre: 3, prereq: ["R009"] },
  { nombre: "Materiales de ingeniería", codigo: "R019", semestre: 3, prereq: ["R012"] },
  { nombre: "Inglés 3", codigo: "R020", semestre: 3, prereq: ["R014"] },
  { nombre: "Diálogo fe y ciencia", codigo: "R021", semestre: 3, prereq: ["R015"] },
  { nombre: "Proyecto Intro. A la ingeniería 2", codigo: "R022", semestre: 3, prereq: ["R008", "R013"] },
  { nombre: "Electromagnetismo", codigo: "R023", semestre: 4, prereq: ["R009", "R003", "R017"] },
  { nombre: "Estadística", codigo: "R024", semestre: 4, prereq: ["R010"] },
  { nombre: "Estática", codigo: "R025", semestre: 4, prereq: ["R018"] },
  { nombre: "Termodinámica", codigo: "R026", semestre: 4, prereq: ["R010", "R012"] },
  { nombre: "Metodologías constructivas", codigo: "R027", semestre: 4, prereq: ["R019"] },
  { nombre: "Inglés 4", codigo: "R028", semestre: 4, prereq: ["R020"] },
  { nombre: "Óptica y física moderna", codigo: "R029", semestre: 5, prereq: ["R023"] },
  { nombre: "Métodos numéricos", codigo: "R030", semestre: 5, prereq: ["R016"] },
  { nombre: "Mecánica de fluidos", codigo: "R031", semestre: 5, prereq: ["R016", "R025", "R026"] },
  { nombre: "Análisis estructural", codigo: "R032", semestre: 5, prereq: ["R025"] },
  { nombre: "Mecánica de sólidos", codigo: "R033", semestre: 5, prereq: ["R025"] },
  { nombre: "Proyecto gestión y adm. de proy. de construcción", codigo: "R034", semestre: 5, prereq: ["R027"] },
  { nombre: "Modelos de tráfico", codigo: "R035", semestre: 6, prereq: ["R030"] },
  { nombre: "Programación", codigo: "R036", semestre: 6, prereq: ["R008", "R003"] },
  { nombre: "Mecánica de suelos 1", codigo: "R037", semestre: 6, prereq: ["R033"] },
  { nombre: "Hidráulica", codigo: "R038", semestre: 6, prereq: ["R031"] },
  { nombre: "Hormigón armado", codigo: "R039", semestre: 6, prereq: ["R032", "R033"] },
  { nombre: "Proyecto diseño de infraestructura vial", codigo: "R040", semestre: 6, prereq: ["R034", "R022"] },
  { nombre: "Elementos finitos aplicados a la ing.civil", codigo: "R041", semestre: 7, prereq: ["R031", "R037"] },
  { nombre: "Electrotecnia", codigo: "R042", semestre: 7, prereq: ["R023", "R016"] },
  { nombre: "Mecánica de suelos 2", codigo: "R043", semestre: 7, prereq: ["R037"] },
  { nombre: "Diseño en acero", codigo: "R044", semestre: 7, prereq: ["R032", "R033"] },
  { nombre: "Comunicación efectiva 2", codigo: "R045", semestre: 7, prereq: ["R004"] },
  { nombre: "Emprendimiento", codigo: "R046", semestre: 7 },
  { nombre: "Ética y moral profesional", codigo: "R047", semestre: 7, prereq: ["R021"] },
  { nombre: "Proyecto diseño de obras hidráulicas", codigo: "R048", semestre: 7, prereq: ["R040", "R038"] },
  { nombre: "Práctica en obras", codigo: "R049", semestre: 7 },
  { nombre: "Ingeniería y desarrollo sustentable", codigo: "R050", semestre: 8 },
  { nombre: "Ingeniería económica", codigo: "R051", semestre: 8, prereq: ["R010"] },
  { nombre: "Ingeniería sanitaria y ambiental", codigo: "R052", semestre: 8, prereq: ["R038"] },
  { nombre: "Fundaciones", codigo: "R053", semestre: 8, prereq: ["R043", "R039"] },
  { nombre: "Dinámica de estructuras", codigo: "R054", semestre: 8, prereq: ["R032"] },
  { nombre: "Proyecto diseño de estructuras industriales", codigo: "R055", semestre: 8, prereq: ["R044", "R043"] },
  { nombre: "Electivo profesional 1", codigo: "R056", semestre: 9 },
  { nombre: "Construcción de obras industriales", codigo: "R057", semestre: 9, prereq: ["R055"] },
  { nombre: "Análisis y diseño sísmico de edificios", codigo: "R058", semestre: 9, prereq: ["R044", "R053", "R054"] },
  { nombre: "Mecánica de rocas", codigo: "R059", semestre: 9, prereq: ["R043"] },
  { nombre: "Programación y gestión de obras", codigo: "R060", semestre: 9, prereq: ["R034"] },
  { nombre: "Electivo profesional 2", codigo: "R061", semestre: 9 },
  { nombre: "Práctica ingeniero ayudante", codigo: "R062", semestre: 9 },
  { nombre: "Proyecto de título", codigo: "R063", semestre: 10, prereq: ["R062"] }
];

const container = document.getElementById("malla-container");
const estado = {};

function crearMalla() {
  for (let i = 1; i <= 10; i++) {
    const semestreDiv = document.createElement("div");
    semestreDiv.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${i}`;
    semestreDiv.appendChild(titulo);

    ramos.filter(r => r.semestre === i).forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = ramo.nombre;
      div.dataset.codigo = ramo.codigo;
      if (!ramo.prereq) div.classList.add("habilitado");
      div.addEventListener("click", () => marcarAprobado(div, ramo));
      semestreDiv.appendChild(div);
    });

    container.appendChild(semestreDiv);
  }
}

function marcarAprobado(div, ramo) {
  if (div.classList.contains("habilitado") && !div.classList.contains("aprobado")) {
    div.classList.add("aprobado");
    estado[ramo.codigo] = true;
    actualizarHabilitados();
  }
}

function actualizarHabilitados() {
  document.querySelectorAll(".ramo").forEach(div => {
    const codigo = div.dataset.codigo;
    const ramo = ramos.find(r => r.codigo === codigo);
    if (ramo.prereq) {
      const habilitado = ramo.prereq.every(c => estado[c]);
      if (habilitado) div.classList.add("habilitado");
    }
  });
}

crearMalla();
