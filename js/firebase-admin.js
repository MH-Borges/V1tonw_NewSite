import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
import { app } from './firebase.js'
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";
const realdb = getDatabase();
const auth = getAuth(app);

window.addEventListener("DOMContentLoaded", async (e) => {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            window.location.href = "login.html";
        }
    });

    GetAllProjetos();


   
});

document.getElementById("logout").addEventListener('click', function(){
    signOut(auth).then(() => {
        window.location.href = "../../index.html";
    }).catch((error) => {
        alert('Erro ao fazer logout');
    });
});

document.getElementById("newProject").addEventListener('click', function(){
    window.location.href = "newProject.html"; 
});


var ArrayProjetos = [];
function GetAllProjetos(){
    const dbref = ref(realdb);

    get(child(dbref, "Projetos"))
    .then((snapshot) =>{
        snapshot.forEach(proj => {
            ArrayProjetos.push(proj.val());
        });
        AddAllProjetos();

    })

}



function AddAllProjetos(){
    var divProjeto = document.getElementById('ListPhotos');

    ArrayProjetos.forEach(proj => {
        var li = document.createElement('li');
        li.innerHTML = 
        `
        <a href="">
            <img src="`+ proj.ImgPrinc[0] +`" alt="`+ proj.NomeProjeto +`">
        </a>
        `;
        
        divProjeto.appendChild(li);

    });

}

