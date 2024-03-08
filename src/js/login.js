// Función para iniciar sesión con Google
function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        // Se ha iniciado sesión correctamente
        const user = result.user;
        console.log('Inicio de sesión exitoso:', user);
      })
      .catch((error) => {
        // Se ha producido un error
        console.error('Error al iniciar sesión:', error);
      });
      console.log(firebase);  
  }
