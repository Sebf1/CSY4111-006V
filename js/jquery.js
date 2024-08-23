$(document).ready(function() {
    $('form').submit(function(e) {
        // Evitar que el formulario se envíe automáticamente
        e.preventDefault();

        // Validación de nombre
        var nombre = $('#nombre').val();
        if (nombre.toLowerCase() === 'jose') {
            alert('Lo sentimos, el nombre "Jose" no está permitido.');
            return;
        }
        // Validación de edad
        var edad = parseInt($('#edad').val());
        if (edad <= 17 || edad > 65 || isNaN(edad)) {
            alert('Por favor, ingresa una edad entre 18 y 65.');
            return;
        }
        // Validación de correo electrónico
        var email = $('#email').val();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }
         // Validación de ciudad
         var ciudad = $('#ciudad').val();
         if (ciudad === '') {
             alert('Por favor, ingrese una ciudad.');
             return;
         }

        // Si todas las validaciones son exitosas, puedes enviar el formulario
        this.submit();
    });
});