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
});
