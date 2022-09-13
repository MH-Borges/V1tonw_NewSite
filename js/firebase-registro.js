import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
import { app } from './firebase.js'

const auth = getAuth(app);

window.addEventListener("DOMContentLoaded", async (e) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            window.location.href = "admin.html";
        } 
    });
});

document.getElementById("Registrar").addEventListener('click', function(){
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        window.location.href = "login.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        if (errorCode == "auth/email-already-in-use") {
            return alert("Email já está em uso");
        }
    });
})