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

// Obtén una referencia al servicio de autenticación
const auth = firebase.auth();

// Función para iniciar sesión
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
          // Usuario inició sesión correctamente
          const user = userCredential.user;
          console.log('Usuario autenticado:', user);
      })
      .catch((error) => {
          // Error al iniciar sesión
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Error al iniciar sesión:', errorMessage);
      });
}

// Función para registrarse
function registrar() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
          // Usuario registrado correctamente
          const user = userCredential.user;
          console.log('Usuario registrado:', user);
      })
      .catch((error) => {
          // Error al registrar usuario
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Error al registrar usuario:', errorMessage);
      });
}