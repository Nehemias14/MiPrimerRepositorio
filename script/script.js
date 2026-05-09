const flor = document.getElementById("flor");

const inicio = document.getElementById("inicio");

const galeria = document.getElementById("galeria");

const poema = document.getElementById("poema");

const mensajeSecreto = document.getElementById("mensajeSecreto");

const contador = document.getElementById("contador");

/* Poemas */

const poemas = [

  "uno mas uno, dos enamorados ",

  "jams rompere nuestro juramento 🌙",

  "cuando leas esto llamame, porque ya te extrañp 🌸"

];

/* Abrir flor */

flor.addEventListener("click", ()=>{

  inicio.style.display = "none";

  galeria.classList.remove("oculto");

});

/* Mostrar poema */

function mostrarPoema(i){

  poema.innerHTML = poemas[i];

}

/* Easter egg */

function mostrarSecreto(){

  mensajeSecreto.classList.toggle("mostrar");

}

/* Contador */

const fechaInicio = new Date("2024-12-28");

const hoy = new Date();

const diferencia = hoy - fechaInicio;

const dias = Math.floor(
  diferencia / (1000 * 60 * 60 * 24)
);

contador.innerHTML =
`Llevamos ${dias} días amandonOS ❤️`;