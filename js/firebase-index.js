import { app } from './firebase.js'
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";
const realdb = getDatabase();

window.addEventListener("DOMContentLoaded", async (e) => {

    GetAllProjetos();

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
    let i = 1;
    ArrayProjetos.forEach(proj => {
        AddProjetos(proj, i++);
    });
}

function AddProjetos(projetos, index){
    var divProjeto = document.getElementById('ColunaImgs');

    var div = document.createElement('div');
    div.classList.add("outimg");

    if(index%2 === 0){
        div.classList.add("left");
    }

    div.innerHTML = 
    `
    <a onclick="clickPhoto()" data-toggle="pill" href="#galeria`+ index +`" aria-selected="false">
        <img class="third" src="`+ projetos.ImgPrinc[0] +`" alt="`+ projetos.NomeProjeto +`">
        <img class="second" src="`+ projetos.ImgPrinc[0] +`" alt="`+ projetos.NomeProjeto +`">
        <img class="first" src="`+ projetos.ImgPrinc[0] +`" alt="`+ projetos.NomeProjeto +`">
    </a>
    `;

    divProjeto.appendChild(div);
    
}

