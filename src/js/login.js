import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaYszeyqjqXSpwlovU9RrvOKCbd1wFWoc",
  authDomain: "trashpandagarage-4abd6.firebaseapp.com",
  databaseURL: "https://trashpandagarage-4abd6-default-rtdb.firebaseio.com",
  projectId: "trashpandagarage-4abd6",
  storageBucket: "trashpandagarage-4abd6.appspot.com",
  messagingSenderId: "1010689914185",
  appId: "1:1010689914185:web:ccaea182f9c8aff4179698"
};


firebase.initializeApp(firebaseConfig);

// Obtén una instancia del proveedor de autenticación de Google
const provider = new firebase.auth.GoogleAuthProvider();

// Obtén una referencia al botón de inicio de sesión
const signInButton = document.getElementById('googleSignInButton');

// Agrega un listener para el evento click en el botón de inicio de sesión
signInButton.addEventListener('click', signInWithGoogle);

// Función para iniciar sesión con Google
function signInWithGoogle() {
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      // Información del usuario autenticado
      const user = result.user;
      console.log(user);
      // Puedes redirigir a otra página aquí
    })
    .catch((error) => {
      // Manejo de errores
      console.error(error);
    });
}