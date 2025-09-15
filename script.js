function mostrarMensaje() {
  const mensaje = document.getElementById("mensaje");
  const texto = document.getElementById("texto");

  if (!mensaje.classList.contains("mostrar")) {
    mensaje.classList.add("mostrar");

    // Efecto máquina de escribir
    const contenido = texto.innerHTML;
    texto.innerHTML = "";
    let i = 0;

    const escribir = setInterval(() => {
      texto.innerHTML += contenido.charAt(i);
      i++;
      if (i >= contenido.length) clearInterval(escribir);
    }, 40); // Velocidad (ms por letra)
  }
}

// 🎈 Globos animados
for (let i = 0; i < 25; i++) {
  let globo = document.createElement("div");
  globo.classList.add("globo");

  // Posición aleatoria en la pantalla
  globo.style.left = Math.random() * 100 + "vw";

  // Tamaño aleatorio entre 30 y 70px
  let size = 30 + Math.random() * 40;
  globo.style.width = size + "px";
  globo.style.height = size * 1.4 + "px";

  // Color aleatorio
  globo.style.background = "radial-gradient(circle at 30% 30%, #fff, " + randomColor() + ")";

  // Velocidad aleatoria (6s a 12s)
  globo.style.animationDuration = (6 + Math.random() * 6) + "s";

  document.body.appendChild(globo);
}

function randomColor() {
  // Colores femeninos / pastel
  const colores = ["#ff6b81", "#ff9f43", "#ffb6c1", "#ff99cc", "#a18cd1", "#c084f5", "#f8a5c2"];
  return colores[Math.floor(Math.random() * colores.length)];
}
