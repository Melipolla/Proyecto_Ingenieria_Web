$(document).ready(function() {
    $("#formulario").submit(function() {
      // Verificar que el campo de nombre no esté vacío
      if ($("#nombre").val() == "") {
        alert("Por favor ingresa tu nombre.");
        return false;
      }

       if ($("#apellidoP").val() == "") {
        alert("Por favor ingresa tu Apellido Paterno.");
        return false;
      }
       
      if ($("#apellidoM").val() == "") {
        alert("Por favor ingresa tu Apellido Materno.");
        return false;
      }

      if ($("#rut").val() == "") {
        alert("Por favor ingresa tu Rut.");
        return false;
      }

      if ($("#telefono").val() == "") {
        alert("Por favor ingresa tu numero.");
        return false;
      }

      if ($("#direccion").val() == "") {
        alert("Por favor ingresa tu Direccion.");
        return false;
      }

      if ($("#contraseña").val() == "") {
        alert("Por favor ingresa tu contraseña.");
        return false;
      }



      // Verificar que el campo de correo electrónico tenga un formato válido
      var correo = $("#correo").val();
      var expRegCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!expRegCorreo.test(correo)) {
        alert("Por favor ingresa un correo electrónico válido.");
        return false;
      }

        // Verifica si se ha seleccionado una opción del menú desplegable
        if ($('#region').val() == '') {
            alert('Por favor, selecciona una region.');
            return false;
        } 

    });
  });