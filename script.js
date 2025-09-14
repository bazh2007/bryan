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

// Globos simples subiendo
const coloresFemeninos = ["#ff6b81", "#ff9fcb", "#ffb6c1", "#ff77aa", "#ff99ee", "#ffa6d3", "#ffccf9", "#fface6"];

for (let i = 0; i < 25; i++) {
  const globo = document.createElement("div");
  globo.classList.add("globo");

  // Color aleatorio
  globo.style.background = "radial-gradient(circle at 30% 30%, #fff, " +
    coloresFemeninos[Math.floor(Math.random() * coloresFemeninos.length)] + ")";

  // Posición horizontal aleatoria
  globo.style.left = Math.random() * 100 + "vw";

  // Duración aleatoria de la animación
  globo.style.animationDuration = (6 + Math.random() * 6) + "s";

  document.body.appendChild(globo);
}
