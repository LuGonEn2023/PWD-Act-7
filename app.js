// Esperamos a que el DOM cargue completamente
window.addEventListener("load", function() {
    
    // Referencias a los elementos
    const boton = document.getElementById("btn-accion");
    const contenedor = document.getElementById("contenedor-mensaje");

    // Función para alternar (mostrar/ocultar) el mensaje
    function alternarMensaje() {
        // Intentamos seleccionar el párrafo si ya existe
        const parrafoExistente = document.getElementById("mi-parrafo");

        if (parrafoExistente) {
            // CASO 1: El nodo existe, entonces lo ELIMINAMOS
            // Usamos removeChild como sugiere la teoría del DOM
            contenedor.removeChild(parrafoExistente);
            
            // Cambiamos el texto del botón para feedback visual
            boton.textContent = "Mostrar Mensaje";
            boton.style.backgroundColor = "#007bff"; // Azul original
            
        } else {
            // CASO 2: El nodo no existe, entonces lo CREAMOS
            // 1. Crear el nodo elemento (etiqueta p)
            const nuevoParrafo = document.createElement("p");
            
            // 2. Configurar atributos y contenido
            nuevoParrafo.id = "mi-parrafo";
            nuevoParrafo.textContent = "¡Hola! Soy un nodo párrafo creado dinámicamente con JavaScript.";
            nuevoParrafo.className = "mensaje-dinamico"; // Aplicar estilos CSS

            // 3. Anexar al DOM (dentro del contenedor)
            contenedor.appendChild(nuevoParrafo);

            // Cambiamos el texto del botón
            boton.textContent = "Ocultar Mensaje";
            boton.style.backgroundColor = "#dc3545"; // Rojo para indicar acción de borrar
        }
    }

    // Asignamos el evento 'click' al botón
    boton.addEventListener("click", alternarMensaje);
});