function logSubmit(event) {
  event.preventDefault();
  const email = document.getElementById('exampleInputEmail1')
  const name = document.getElementById('exampleInputName1')
  const surname = document.getElementById('exampleInputSurname1')
  db.collection("users").add({
    email: email,
    name: name,
    surname: surname
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

}

const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', logSubmit);
