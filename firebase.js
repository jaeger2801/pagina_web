
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
  
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



  console.log('Corre FB');