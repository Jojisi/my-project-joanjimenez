const backToTopButton = document.createElement("div");
backToTopButton.className = "back-to-top";
backToTopButton.innerHTML = "⬆ Púlsame para volver arriba"; // Texto personalizado
document.body.appendChild(backToTopButton);

// Comportamiento al hacer clic
backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Mostrar/ocultar según desplazamiento
window.addEventListener("scroll", () => {
  backToTopButton.style.display = window.scrollY > 200 ? "block" : "none";
});

// Alertas para navegación
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    console.log('Navegando a una nueva sección');
  });
});
