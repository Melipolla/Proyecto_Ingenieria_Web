$(document).ready(function() {
    $("#hormail").submit(function() {
      // Verificar que el campo de correo electrónico tenga un formato válido
      var correo = $("#correo").val();
      var expRegCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!expRegCorreo.test(correo)) {
        alert("Por favor ingresa un correo electrónico válido.");
        return false;
      }
    });
  });