
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; // Cuánto píxeles antes de verse activa la animación

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Ejecutar la función cada vez que se hace scroll
window.addEventListener("scroll", reveal);


// --- 2. CAMBIO DE COLOR DE LA BARRA DE NAVEGACIÓN ---
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "#111111"; // Color más oscuro al bajar
        header.style.padding = "10px 10%";   // Se hace un poco más estrecha
    } else {
        header.style.background = "#222423"; // Color original
        header.style.padding = "20px 10%";
    }
});


// --- 3. EFECTO DE ESCRITURA EN EL HERO ---
const textToType = "Bienvenidos al sitio oficial de Gordoteton. El EP 2025 ya está disponible.";
let index = 0;
const typingElement = document.getElementById("typing-text");

function typeWriter() {
    if (index < textToType.length) {
        typingElement.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // Velocidad en milisegundos
    }
}

// Iniciar la escritura cuando la página cargue
window.onload = function() {
    typeWriter();
    reveal(); // Comprobar si hay secciones visibles al cargar
};