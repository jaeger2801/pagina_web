
  // Import the functions you need from the SDKs you need
  /* import { async } from "@firebase/util"; */
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
  import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCdrfTdZQ5cDQS-RIBwkp9CYUnSEEVgNBI",
    authDomain: "fb-proyecto-web2022.firebaseapp.com",
    projectId: "fb-proyecto-web2022",
    storageBucket: "fb-proyecto-web2022.appspot.com",
    messagingSenderId: "950773677342",
    appId: "1:950773677342:web:b02af14edc73c5c9469d0f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  
/* export async function AddTaskLogin(username, password){
  try {
    const docRef = await addDoc(collection(db, "loginData"), {
      username, 
      password,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

*/

export function newUser(nombre, correo, contraseña) {
  createUserWithEmailAndPassword(auth, nombre, correo, contraseña)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user; 
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    
    alert(errorMessage)
  });

}

export function logIn(email, password){
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

    const user = userCredential.user;

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
});
}

  