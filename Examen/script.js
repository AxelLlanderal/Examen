const mensajesMotivadores = [
  "¡Hoy es un gran día para comer delicioso!",
  "¡Sabor que alegra el alma!",
  "¡La comida sabe mejor cuando se comparte!",
  "¡Bienvenido al rincón del buen gusto!",
  "¡Cada platillo cuenta una historia, disfruta la tuya!"
];

const menu = {
  desayuno: [
    { nombre: "Wafles con miel", precio: "$45", imagen: "img/waflees con miel.jpg" },
    { nombre: "Huevos rancheros", precio: "$50", imagen: "img/huevos rancheros.jpg" }
  ],
  comida: [
    { nombre: "Fajitas de pollo", precio: "$100", imagen: "img/fajitas de pollo.jpg" },
    { nombre: "Torta de pierna", precio: "$70", imagen: "img/torta de pierna.jpg" }
  ],
  cena: [
    { nombre: "Tacos al pastor", precio: "$80", imagen: "img/tacos al pastor.jpg" },
    { nombre: "Hamburguesa al carbón", precio: "$70", imagen: "img/hamburguesa al carbón.jpg" }
  ],
  brunch: [
    { nombre: "Sándwich de pollo", precio: "$30", imagen: "img/sandwich de pollo.jpg" },
    { nombre: "Pay de manzana", precio: "$50", imagen: "img/pay de manzana.jpg" }
  ]
};


function iniciarBienvenida() {
  const parrafo = document.getElementById("bienvenida");
  parrafo.innerHTML = "Bienvenido al Restaurante El Pollito";

  const spanFecha = document.createElement("span");
  spanFecha.textContent = ` 📅 ${new Date().toLocaleString()}`;
  spanFecha.className = "fecha";
  parrafo.appendChild(spanFecha);

  const spanFrase = document.createElement("span");
  spanFrase.textContent = obtenerMensajeMotivador();
  spanFrase.className = "frase";
  parrafo.appendChild(spanFrase);
}

function actualizarBienvenida() {
  const parrafo = document.getElementById("bienvenida");
  parrafo.innerHTML = "Gracias por elegirnos. ¡Hoy será un gran día!";

  const spanFecha = document.createElement("span");
  spanFecha.textContent = ` 📅 ${new Date().toLocaleString()}`;
  spanFecha.className = "fecha";
  parrafo.appendChild(spanFecha);

  const spanFrase = document.createElement("span");
  spanFrase.textContent = " ¡Sabor garantizado!";
  spanFrase.className = "frase";
  parrafo.appendChild(spanFrase);

  const nuevoParrafo = document.createElement("p");
  nuevoParrafo.textContent = "🎉 ¡Te obsequiamos un postre por tu primera visita!";
  document.getElementById("mensajeExtra").appendChild(nuevoParrafo);
}

function mostrarMenu(categoria) {
  const contenedor = document.getElementById("menu");
  contenedor.innerHTML = `<h3>${capitalizar(categoria)}</h3>`;
  menu[categoria].forEach(platillo => {
    const div = document.createElement("div");
    div.className = "platillo";

    const img = document.createElement("img");
    img.src = platillo.imagen;
    img.alt = platillo.nombre;
    img.className = "imagen-platillo";

    const nombre = document.createElement("h4");
    nombre.textContent = platillo.nombre;

    const precio = document.createElement("p");
    precio.textContent = platillo.precio;

    div.appendChild(img);
    div.appendChild(nombre);
    div.appendChild(precio);

    contenedor.appendChild(div);
  });
}


function obtenerMensajeMotivador() {
  const i = Math.floor(Math.random() * mensajesMotivadores.length);
  return mensajesMotivadores[i];
}

function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

// Llamamos esta función al cargar la página
window.onload = iniciarBienvenida;
