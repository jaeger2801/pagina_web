
  // Import the functions you need from the SDKs you need
  /* import { async } from "@firebase/util"; */
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
  
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

  console.log(db);

export async function AddTaskLogin(username, password){
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

export async function AddTaskRegister(nombre, correo, contraseña){
  try {
    const docRef = await addDoc(collection(db, "registerData"), {
      nombre,
      correo,
      contraseña,
      });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

  