// Configuración de Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Función para iniciar sesión
function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        // Inicio de sesión exitoso, puedes redirigir al usuario a otra página o realizar otras acciones.
        const user = result.user;
        console.log("Inicio de sesión exitoso:", user);
      })
      .catch((error) => {
        // Error durante el inicio de sesión
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error durante el inicio de sesión:", errorCode, errorMessage);
      });
  }
