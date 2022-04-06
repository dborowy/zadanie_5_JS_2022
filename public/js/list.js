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
  const db = firebase.firestore();
  const phoneDiv = document.getElementById('phone-list')

db.collection("telefony")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());       
            var tag = document.createElement("div");
            var producentPElem = document.createElement("p");
            var modelPElem = document.createElement("p");
            var liczbaPElem = document.createElement("p");
            var producentP = producentPElem.innerHTML(`Producent: ${doc.data()['producent']}`);
            var modelP = modelPElem.innerHTML(`Model: ${doc.data()['model']}`);
            var liczbaP = liczbaPElem.innerHTML(`Liczba: ${doc.data()['liczba']}`);
            tag.appendChild(producentPElem);
            tag.appendChild(modelPElem);
            tag.appendChild(liczbaPElem);
            phoneDiv.appendChild(tag);
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });