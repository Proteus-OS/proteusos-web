/* Archivo script.js */
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    
    // Verificar el tema guardado en localStorage
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
    }
    
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-mode");
        
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
    });
    // Centrar el contenido en todas las páginas
    document.querySelector("main").style.display = "flex";
    document.querySelector("main").style.flexDirection = "column";
    document.querySelector("main").style.justifyContent = "center";
    document.querySelector("main").style.alignItems = "center";
    document.querySelector("main").style.minHeight = "100vh";
});
