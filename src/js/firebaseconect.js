import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAaYszeyqjqXSpwlovU9RrvOKCbd1wFWoc",
    authDomain: "trashpandagarage-4abd6.firebaseapp.com",
    databaseURL: "https://trashpandagarage-4abd6-default-rtdb.firebaseio.com",
    projectId: "trashpandagarage-4abd6",
    storageBucket: "trashpandagarage-4abd6.appspot.com",
    messagingSenderId: "1010689914185",
    appId: "1:1010689914185:web:ccaea182f9c8aff4179698"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export class ManageAccount {
  register(email, password, displayName) {
     createUserWithEmailAndPassword(auth, email, password)
      .then((_) => {
        window.location.href = "login.html";
        alert("Registro exitoso. Serás redirigido a la página de inicio de sesión.");
      })
      .catch((error) => {
        console.error(error.message);
            alert("Error al registrar: " + error.message);
      });
  }

  authenticate(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((_) => {
        window.location.href = "../index.html";
        alert("Has iniciado sesión correctamente. Serás redirigido a la página principal.");
      })
      .catch((error) => {
        console.error(error.message);
                alert("Error al iniciar sesión: " + error.message);
      });
  }

  signOut() {
    signOut(auth)
      .then((_) => {
        window.location.href = "../index.html";
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}