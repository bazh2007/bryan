// Mostrar mensaje con efecto máquina de escribir
function mostrarMensaje() {
  const mensaje = document.getElementById("mensaje");
  const texto = document.getElementById("texto");

  if (!mensaje.classList.contains("mostrar")) {
    mensaje.classList.add("mostrar");

    const contenido = texto.innerHTML;
    texto.innerHTML = "";
    let i = 0;

    const escribir = setInterval(() => {
      texto.innerHTML += contenido.charAt(i);
      i++;
      if (i >= contenido.length) clearInterval(escribir);
    }, 40);
  }
}

// Globos con colores femeninos y tamaños distintos
const coloresFemeninos = ["#ff6b81", "#ff9fcb", "#ffb6c1", "#ff77aa", "#ff99ee", "#ffa6d3", "#ffccf9", "#fface6"];

for (let i = 0; i < 25; i++) {
  let globo = document.createElement("div");
  globo.classList.add("globo");
  globo.style.width = (30 + Math.random() * 40) + "px";
  globo.style.height = (40 + Math.random() * 50) + "px";
  globo.style.left = Math.random() * 100 + "vw";
  globo.style.background = "radial-gradient(circle at 30% 30%, #fff, " + coloresFemeninos[Math.floor(Math.random() * coloresFemeninos.length)] + ")";
  globo.style.animationDuration = (6 + Math.random() * 6) + "s";
  document.body.appendChild(globo);
}

// Partículas de fondo (estrellitas)
const canvas = document.getElementById("particulas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particulas = [];
for(let i=0; i<100; i++){
  particulas.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*2+1,
    d: Math.random()*1
  });
}

function animarParticulas(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "rgba(255,255,255,0.8)";
  ctx.beginPath();
  particulas.forEach(p => {
    ctx.moveTo(p.x, p.y);
    ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
  });
  ctx.fill();
  moverParticulas();
  requestAnimationFrame(animarParticulas);
}

let angulo = 0;
function moverParticulas(){
  angulo += 0.01;
  particulas.forEach(p => {
    p.y += Math.cos(angulo + p.d) + 0.5;
    p.x += Math.sin(angulo) * 0.5;
    if(p.x > canvas.width) p.x = 0;
    if(p.x < 0) p.x = canvas.width;
    if(p.y > canvas.height) p.y = 0;
  });
}

animarParticulas();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
