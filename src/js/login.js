// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
