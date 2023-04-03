<?php
$nombre_usuario = $_POST["nombre_usuario"];
$contraseña = $_POST["contraseña"];
$correo_electronico = $_POST["correo_electronico"];

// Conectar a la base de datos
$servername = "localhost";
$username = "nombre_de_usuario";
$password = "contraseña";
$dbname = "bdd.sql";

$conn = new mysqli($servername, $username, $password, $dbname);

// Comprobar si el nombre de usuario ya está en uso
$sql = "SELECT * FROM usuarios WHERE nombre_usuario = '$nombre_usuario'";
$resultado = $conn->query($sql);

if ($resultado->num_rows > 0) {
	echo "Este nombre de usuario ya está en uso. Por favor, elige otro.";
} else {
	// Insertar los datos del usuario en la base de datos
	$sql = "INSERT INTO usuarios (nombre_usuario, contraseña, correo_electronico) VALUES ('$nombre_usuario', '$contraseña', '$correo_electronico')";
	if ($conn->query($sql) === TRUE) {
		echo "Tu cuenta ha sido creada correctamente.";
	} else {
		echo "Error al crear la cuenta: " . $conn->error;
	}
}

$conn->close();
?>
