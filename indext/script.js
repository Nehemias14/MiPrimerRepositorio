const flor =
document.getElementById("flor");

const inicio =
document.getElementById("inicio");

const galeria =
document.getElementById("galeria");

const poema =
document.getElementById("poema");

const mensajeSecreto =
document.getElementById("mensajeSecreto");

const contador =
document.getElementById("contador");

/* Poemas */

const poemas = [

  "uno mas uno = dos enamorados ❤️",

  "jamas rompere nuestro juramento 🌙",

  "amo esos ojitos que brillan como estrellas 🌸"

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

/* Easter Egg */

function mostrarSecreto(){

  mensajeSecreto.classList.toggle("mostrar");

}

/* Contador */

const fechaInicio =
new Date("2025-01-01");

const hoy =
new Date();

const diferencia =
hoy - fechaInicio;

const dias = Math.floor(

  diferencia /

  (1000 * 60 * 60 * 24)

);

contador.innerHTML =

`Llevamos ${dias} días creando recuerdos ❤️`;
/* ========================= */
/* PARTÍCULAS CINEMATOGRÁFICAS */
/* ========================= */

const canvas =
document.getElementById("particles");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

let particles = [];

for(let i = 0; i < 100; i++){

  particles.push({

    x:Math.random() * canvas.width,

    y:Math.random() * canvas.height,

    radius:Math.random() * 2,

    speedY:Math.random() * 1 + 0.2

  });

}

function animateParticles(){

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  ctx.fillStyle =
  "rgba(255,255,255,0.5)";

  particles.forEach(p=>{

    ctx.beginPath();

    ctx.arc(
      p.x,
      p.y,
      p.radius,
      0,
      Math.PI*2
    );

    ctx.fill();

    p.y += p.speedY;

    if(p.y > canvas.height){

      p.y = 0;

      p.x =
      Math.random() *
      canvas.width;
    }

  });

  requestAnimationFrame(
    animateParticles
  );

}

animateParticles();

/* ========================= */
/* CURSOR MÁGICO */
/* ========================= */

const cursor =
document.querySelector(
".cursor-glow"
);

document.addEventListener(
"mousemove",
(e)=>{

  cursor.style.left =
  e.clientX + "px";

  cursor.style.top =
  e.clientY + "px";

});
