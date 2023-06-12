$(document).ready(function() {
    $('form').submit(function(event) {
      // Evita que se envíe el formulario automáticamente
      event.preventDefault();
      
      // Obtiene los valores de los campos de Rut y contraseña
      var rut = $('#rut').val();
      var password = $('#password').val();
      
      // Verifica si los campos están vacíos
      if (rut == '' || password == '') {
        alert('Por favor, ingresa tu Rut y contraseña.');
      } else {
        // Valida el formato del Rut utilizando una expresión regular
        var rutRegex = /^[0-9]+-[0-9kK]{1}$/;
        if (!rutRegex.test(rut)) {
          alert('Por favor, ingresa un Rut válido con digito despues del guion.');
        } else {
          // Envía el formulario si los campos no están vacíos y el Rut es válido
          $(this).unbind('submit').submit();
        }
      }
    })
  });