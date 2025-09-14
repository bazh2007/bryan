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
