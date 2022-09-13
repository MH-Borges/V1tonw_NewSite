import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail  } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
import { app } from './firebase.js'

const auth = getAuth(app);

window.addEventListener("DOMContentLoaded", async (e) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            window.location.href = "admin.html";
        } 
    });


    
});

document.getElementById("loginBt").addEventListener('click', function(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        if (errorCode == "auth/user-not-found") {
            return alert("Usuário nao encontrado");
        }
        if (errorCode == "auth/wrong-password") {
            return alert("Senha inválida");
        }
    });
})

document.getElementById("recoverPass").addEventListener('click', function(){
    const email = document.getElementById('email').value;
    
    sendPasswordResetEmail(auth, email)
    .then(() => {
        alert('Email de redefinição de senha enviado com sucesso');
    })
    .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        if(errorCode == 'auth/missing-email'){
            return alert("Por favor insira um email no campo 'Email'")
        }
    });
})