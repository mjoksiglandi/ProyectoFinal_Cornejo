// Función para registrar un nuevo usuario
function register() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Registro exitoso, actualiza el nombre del usuario
            userCredential.user.updateProfile({
                displayName: name
            }).then(() => {
                // Actualización del nombre del usuario exitosa
                console.log("Nombre actualizado:", name);
                // Redirige al usuario a la página de inicio de sesión
                window.location.href = "login.html";
            }).catch((error) => {
                console.error("Error al actualizar el nombre:", error);
            });
        })
        .catch((error) => {
            // Error durante el registro
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Error: " + errorMessage);
        });
}
