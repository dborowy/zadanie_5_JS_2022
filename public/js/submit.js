  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDWzWom-MZxx_6tiNdHz67AR-ZLW7VWLkI",
    authDomain: "zadanie-5-12395.firebaseapp.com",
    projectId: "zadanie-5-12395",
    storageBucket: "zadanie-5-12395.appspot.com",
    messagingSenderId: "734926560610",
    appId: "1:734926560610:web:0779b00ddcb48d23c3203b"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore();
  // db.collection("users").add({
  // first: "Ada",
  // last: "Lovelace",
  // born: 1815
  // })
  // .then((docRef) => {
  //     console.log("Document written with ID: ", docRef.id);
  // })
  // .catch((error) => {
  //     console.error("Error adding document: ", error);
    // });

function logSubmit(event) {
  event.preventDefault();
  const producent = document.getElementById('Make').value
  const model = document.getElementById('Model').value
  const liczba = document.getElementById('Quantity').value
  db.collection("telefony").add({
    producent: producent,
    model: model,
    liczba: liczba
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

}

const form = document.getElementById('form');
form.addEventListener('submit', logSubmit);
