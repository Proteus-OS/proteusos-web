document.addEventListener('DOMContentLoaded', () => {
    
    // Funcionalidad para botones de copiar código
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Encuentra el elemento <pre> hermano del botón
            const pre = button.nextElementSibling;
            
            if (pre && pre.tagName === 'PRE') {
                const code = pre.innerText;
                
                navigator.clipboard.writeText(code).then(() => {
                    const originalText = button.innerText;
                    button.innerText = "¡Copiado!";
                    button.style.backgroundColor = "#28a745"; // Verde éxito
                    
                    setTimeout(() => {
                        button.innerText = originalText;
                        button.style.backgroundColor = ""; // Volver al original
                    }, 2000);
                }).catch(err => {
                    console.error('Error al copiar: ', err);
                });
            }
        });
    });

    // Opcional: Resaltar enlace activo en el menú al hacer scroll
});
