import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
import { app } from './firebase.js'
import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-storage.js";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";

const realdb = getDatabase();
const auth = getAuth(app);
const dbref = ref(realdb);


window.addEventListener("DOMContentLoaded", async (e) => {
  onAuthStateChanged(auth, (user) => {
      if (!user) {
          window.location.href = "login.html";
      }
  });

});


var imagem = [];
var reader = new FileReader();

document.getElementById("selectImgPrinc").addEventListener('click', function(e){
  e.preventDefault();

  var inputImg = document.createElement('input');
  inputImg.type = 'file';

  inputImg.onchange = e => {
    imagem = e.target.files;
    reader = new FileReader();
    reader.onload = function(){
      document.getElementById('imgPrinc').style = 'display: block;'
      document.getElementById('imgPrinc').src = reader.result;
    }
    reader.readAsDataURL(imagem[0]);

  }
  inputImg.click();


});

var files = [];
var fileReaders = [];
var imageLinksArray = [];
var imagePrincArray = [];
const galleryBtn = document.getElementById('selectGallery');
const salvarBtn = document.getElementById('SaveBt');
const voltarBtn = document.getElementById('Voltar');

const imgdiv = document.getElementById('ImgsGalley');
const nome = document.getElementById('nomeProjeto');
const txtProj = document.getElementById('txtProjeto');
const selectPerson = document.getElementById('selectPerson');

function Voltar(){
  window.location.href="./admin.html";
}

function OpenFileDialog(){
  let inp = document.createElement('input');
  inp.type = 'file';
  inp.multiple = 'multiple';

  inp.onchange = e =>{
    
    assignImgsToFilesArray(e.target.files);
    CreateImgsTags();  
  }

  inp.click();
}

function assignImgsToFilesArray(thefiles){
  let num = files.length + thefiles.length;
  let looplin = (num <=100) ? thefiles.length : (100-files.length);

  for (let i = 0; i < looplin; i++){
    files.push(thefiles[i]);
  }

  if(num>100){alert("Maximo de 100 imagens!!")}

}

function CreateImgsTags(){
  imgdiv.innerHTML = '';
  imgdiv.classList.add('galleryBlock')

  for(let i = 0; i < files.length; i++){
    fileReaders[i] = new FileReader();

    fileReaders[i].onload = function(){
      var imgBlock = document.createElement('div');
      imgBlock.classList.add('imgBlock');
      var img = document.createElement('img');
      img.id = 'imgNo' + i;
      img.src = fileReaders[i].result;
      imgBlock.append(img);
      imgdiv.append(imgBlock);
    }

    fileReaders[i].readAsDataURL(files[i]);
  }

}

function getShortTitle(){
  let namey = nome.value.substring(0,50);
  return namey.replace(/[^a-zA-Z0-9]/g,"");
}

function IsAllImagesUpload(){
  return imageLinksArray.length == files.length;
}

function getPersonInfo(){
  let pessoa = [];
  if(selectPerson.value == 1){
    const NamePerson = document.getElementById('PersonName1').value;
    const LinkPerson = document.getElementById('PersonLink1').value;
    const DonePerson = document.getElementById('PersonDone1').value;
    pessoa.push({nome: NamePerson, Link: LinkPerson, Done: DonePerson});
  }

  if(selectPerson.value == 2){
    const NamePerson = document.getElementById('PersonName1').value;
    const LinkPerson = document.getElementById('PersonLink1').value;
    const DonePerson = document.getElementById('PersonDone1').value;
    const NamePerson2 = document.getElementById('PersonName2').value;
    const LinkPerson2 = document.getElementById('PersonLink2').value;
    const DonePerson2 = document.getElementById('PersonDone2').value;
    pessoa.push(
      {nome: NamePerson, Link: LinkPerson, Done: DonePerson},
      {nome: NamePerson2, Link: LinkPerson2, Done: DonePerson2}
    );
  }

  if(selectPerson.value == 3){
    const NamePerson = document.getElementById('PersonName1').value;
    const LinkPerson = document.getElementById('PersonLink1').value;
    const DonePerson = document.getElementById('PersonDone1').value;
    const NamePerson2 = document.getElementById('PersonName2').value;
    const LinkPerson2 = document.getElementById('PersonLink2').value;
    const DonePerson2 = document.getElementById('PersonDone2').value;
    const NamePerson3 = document.getElementById('PersonName3').value;
    const LinkPerson3 = document.getElementById('PersonLink3').value;
    const DonePerson3 = document.getElementById('PersonDone3').value;
    pessoa.push(
      {nome: NamePerson, Link: LinkPerson, Done: DonePerson},
      {nome: NamePerson2, Link: LinkPerson2, Done: DonePerson2},
      {nome: NamePerson3, Link: LinkPerson3, Done: DonePerson3}
    );
  }

  if(selectPerson.value == 4){
    const NamePerson = document.getElementById('PersonName1').value;
    const LinkPerson = document.getElementById('PersonLink1').value;
    const DonePerson = document.getElementById('PersonDone1').value;
    const NamePerson2 = document.getElementById('PersonName2').value;
    const LinkPerson2 = document.getElementById('PersonLink2').value;
    const DonePerson2 = document.getElementById('PersonDone2').value;
    const NamePerson3 = document.getElementById('PersonName3').value;
    const LinkPerson3 = document.getElementById('PersonLink3').value;
    const DonePerson3 = document.getElementById('PersonDone3').value;
    const NamePerson4 = document.getElementById('PersonName4').value;
    const LinkPerson4 = document.getElementById('PersonLink4').value;
    const DonePerson4 = document.getElementById('PersonDone4').value;
    pessoa.push(
      {nome: NamePerson, Link: LinkPerson, Done: DonePerson},
      {nome: NamePerson2, Link: LinkPerson2, Done: DonePerson2},
      {nome: NamePerson3, Link: LinkPerson3, Done: DonePerson3},
      {nome: NamePerson4, Link: LinkPerson4, Done: DonePerson4}
    );
  }

  if(selectPerson.value == 5){
    const NamePerson = document.getElementById('PersonName1').value;
    const LinkPerson = document.getElementById('PersonLink1').value;
    const DonePerson = document.getElementById('PersonDone1').value;
    const NamePerson2 = document.getElementById('PersonName2').value;
    const LinkPerson2 = document.getElementById('PersonLink2').value;
    const DonePerson2 = document.getElementById('PersonDone2').value;
    const NamePerson3 = document.getElementById('PersonName3').value;
    const LinkPerson3 = document.getElementById('PersonLink3').value;
    const DonePerson3 = document.getElementById('PersonDone3').value;
    const NamePerson4 = document.getElementById('PersonName4').value;
    const LinkPerson4 = document.getElementById('PersonLink4').value;
    const DonePerson4 = document.getElementById('PersonDone4').value;
    const NamePerson5 = document.getElementById('PersonName5').value;
    const LinkPerson5 = document.getElementById('PersonLink5').value;
    const DonePerson5 = document.getElementById('PersonDone5').value;
    pessoa.push(
      {nome: NamePerson, Link: LinkPerson, Done: DonePerson},
      {nome: NamePerson2, Link: LinkPerson2, Done: DonePerson2},
      {nome: NamePerson3, Link: LinkPerson3, Done: DonePerson3},
      {nome: NamePerson4, Link: LinkPerson4, Done: DonePerson4},
      {nome: NamePerson5, Link: LinkPerson5, Done: DonePerson5}
    );
  }
  
  if(selectPerson.value == 6){
    const NamePerson = document.getElementById('PersonName1').value;
    const LinkPerson = document.getElementById('PersonLink1').value;
    const DonePerson = document.getElementById('PersonDone1').value;
    const NamePerson2 = document.getElementById('PersonName2').value;
    const LinkPerson2 = document.getElementById('PersonLink2').value;
    const DonePerson2 = document.getElementById('PersonDone2').value;
    const NamePerson3 = document.getElementById('PersonName3').value;
    const LinkPerson3 = document.getElementById('PersonLink3').value;
    const DonePerson3 = document.getElementById('PersonDone3').value;
    const NamePerson4 = document.getElementById('PersonName4').value;
    const LinkPerson4 = document.getElementById('PersonLink4').value;
    const DonePerson4 = document.getElementById('PersonDone4').value;
    const NamePerson5 = document.getElementById('PersonName5').value;
    const LinkPerson5 = document.getElementById('PersonLink5').value;
    const DonePerson5 = document.getElementById('PersonDone5').value;
    const NamePerson6 = document.getElementById('PersonName6').value;
    const LinkPerson6 = document.getElementById('PersonLink6').value;
    const DonePerson6 = document.getElementById('PersonDone6').value;
    pessoa.push(
      {nome: NamePerson, Link: LinkPerson, Done: DonePerson},
      {nome: NamePerson2, Link: LinkPerson2, Done: DonePerson2},
      {nome: NamePerson3, Link: LinkPerson3, Done: DonePerson3},
      {nome: NamePerson4, Link: LinkPerson4, Done: DonePerson4},
      {nome: NamePerson5, Link: LinkPerson5, Done: DonePerson5},
      {nome: NamePerson6, Link: LinkPerson6, Done: DonePerson6}
    );
  }

  if(selectPerson.value == 7){
    const NamePerson = document.getElementById('PersonName1').value;
    const LinkPerson = document.getElementById('PersonLink1').value;
    const DonePerson = document.getElementById('PersonDone1').value;
    const NamePerson2 = document.getElementById('PersonName2').value;
    const LinkPerson2 = document.getElementById('PersonLink2').value;
    const DonePerson2 = document.getElementById('PersonDone2').value;
    const NamePerson3 = document.getElementById('PersonName3').value;
    const LinkPerson3 = document.getElementById('PersonLink3').value;
    const DonePerson3 = document.getElementById('PersonDone3').value;
    const NamePerson4 = document.getElementById('PersonName4').value;
    const LinkPerson4 = document.getElementById('PersonLink4').value;
    const DonePerson4 = document.getElementById('PersonDone4').value;
    const NamePerson5 = document.getElementById('PersonName5').value;
    const LinkPerson5 = document.getElementById('PersonLink5').value;
    const DonePerson5 = document.getElementById('PersonDone5').value;
    const NamePerson6 = document.getElementById('PersonName6').value;
    const LinkPerson6 = document.getElementById('PersonLink6').value;
    const DonePerson6 = document.getElementById('PersonDone6').value;
    const NamePerson7 = document.getElementById('PersonName7').value;
    const LinkPerson7 = document.getElementById('PersonLink7').value;
    const DonePerson7 = document.getElementById('PersonDone7').value;
    pessoa.push(
      {nome: NamePerson, Link: LinkPerson, Done: DonePerson},
      {nome: NamePerson2, Link: LinkPerson2, Done: DonePerson2},
      {nome: NamePerson3, Link: LinkPerson3, Done: DonePerson3},
      {nome: NamePerson4, Link: LinkPerson4, Done: DonePerson4},
      {nome: NamePerson5, Link: LinkPerson5, Done: DonePerson5},
      {nome: NamePerson6, Link: LinkPerson6, Done: DonePerson6},
      {nome: NamePerson7, Link: LinkPerson7, Done: DonePerson7}
    );
  }

  if(selectPerson.value == 8){
    const NamePerson = document.getElementById('PersonName1').value;
    const LinkPerson = document.getElementById('PersonLink1').value;
    const DonePerson = document.getElementById('PersonDone1').value;
    const NamePerson2 = document.getElementById('PersonName2').value;
    const LinkPerson2 = document.getElementById('PersonLink2').value;
    const DonePerson2 = document.getElementById('PersonDone2').value;
    const NamePerson3 = document.getElementById('PersonName3').value;
    const LinkPerson3 = document.getElementById('PersonLink3').value;
    const DonePerson3 = document.getElementById('PersonDone3').value;
    const NamePerson4 = document.getElementById('PersonName4').value;
    const LinkPerson4 = document.getElementById('PersonLink4').value;
    const DonePerson4 = document.getElementById('PersonDone4').value;
    const NamePerson5 = document.getElementById('PersonName5').value;
    const LinkPerson5 = document.getElementById('PersonLink5').value;
    const DonePerson5 = document.getElementById('PersonDone5').value;
    const NamePerson6 = document.getElementById('PersonName6').value;
    const LinkPerson6 = document.getElementById('PersonLink6').value;
    const DonePerson6 = document.getElementById('PersonDone6').value;
    const NamePerson7 = document.getElementById('PersonName7').value;
    const LinkPerson7 = document.getElementById('PersonLink7').value;
    const DonePerson7 = document.getElementById('PersonDone7').value;
    const NamePerson8 = document.getElementById('PersonName8').value;
    const LinkPerson8 = document.getElementById('PersonLink8').value;
    const DonePerson8 = document.getElementById('PersonDone8').value;
    pessoa.push(
      {nome: NamePerson, Link: LinkPerson, Done: DonePerson},
      {nome: NamePerson2, Link: LinkPerson2, Done: DonePerson2},
      {nome: NamePerson3, Link: LinkPerson3, Done: DonePerson3},
      {nome: NamePerson4, Link: LinkPerson4, Done: DonePerson4},
      {nome: NamePerson5, Link: LinkPerson5, Done: DonePerson5},
      {nome: NamePerson6, Link: LinkPerson6, Done: DonePerson6},
      {nome: NamePerson7, Link: LinkPerson7, Done: DonePerson7},
      {nome: NamePerson8, Link: LinkPerson8, Done: DonePerson8}
    );
  }

  if(selectPerson.value == 9){
    const NamePerson = document.getElementById('PersonName1').value;
    const LinkPerson = document.getElementById('PersonLink1').value;
    const DonePerson = document.getElementById('PersonDone1').value;
    const NamePerson2 = document.getElementById('PersonName2').value;
    const LinkPerson2 = document.getElementById('PersonLink2').value;
    const DonePerson2 = document.getElementById('PersonDone2').value;
    const NamePerson3 = document.getElementById('PersonName3').value;
    const LinkPerson3 = document.getElementById('PersonLink3').value;
    const DonePerson3 = document.getElementById('PersonDone3').value;
    const NamePerson4 = document.getElementById('PersonName4').value;
    const LinkPerson4 = document.getElementById('PersonLink4').value;
    const DonePerson4 = document.getElementById('PersonDone4').value;
    const NamePerson5 = document.getElementById('PersonName5').value;
    const LinkPerson5 = document.getElementById('PersonLink5').value;
    const DonePerson5 = document.getElementById('PersonDone5').value;
    const NamePerson6 = document.getElementById('PersonName6').value;
    const LinkPerson6 = document.getElementById('PersonLink6').value;
    const DonePerson6 = document.getElementById('PersonDone6').value;
    const NamePerson7 = document.getElementById('PersonName7').value;
    const LinkPerson7 = document.getElementById('PersonLink7').value;
    const DonePerson7 = document.getElementById('PersonDone7').value;
    const NamePerson8 = document.getElementById('PersonName8').value;
    const LinkPerson8 = document.getElementById('PersonLink8').value;
    const DonePerson8 = document.getElementById('PersonDone8').value;
    const NamePerson9 = document.getElementById('PersonName9').value;
    const LinkPerson9 = document.getElementById('PersonLink9').value;
    const DonePerson9 = document.getElementById('PersonDone9').value;
    pessoa.push(
      {nome: NamePerson, Link: LinkPerson, Done: DonePerson},
      {nome: NamePerson2, Link: LinkPerson2, Done: DonePerson2},
      {nome: NamePerson3, Link: LinkPerson3, Done: DonePerson3},
      {nome: NamePerson4, Link: LinkPerson4, Done: DonePerson4},
      {nome: NamePerson5, Link: LinkPerson5, Done: DonePerson5},
      {nome: NamePerson6, Link: LinkPerson6, Done: DonePerson6},
      {nome: NamePerson7, Link: LinkPerson7, Done: DonePerson7},
      {nome: NamePerson8, Link: LinkPerson8, Done: DonePerson8},
      {nome: NamePerson9, Link: LinkPerson9, Done: DonePerson9}
    );
  }

  if(selectPerson.value == 10){
    const NamePerson = document.getElementById('PersonName1').value;
    const LinkPerson = document.getElementById('PersonLink1').value;
    const DonePerson = document.getElementById('PersonDone1').value;
    const NamePerson2 = document.getElementById('PersonName2').value;
    const LinkPerson2 = document.getElementById('PersonLink2').value;
    const DonePerson2 = document.getElementById('PersonDone2').value;
    const NamePerson3 = document.getElementById('PersonName3').value;
    const LinkPerson3 = document.getElementById('PersonLink3').value;
    const DonePerson3 = document.getElementById('PersonDone3').value;
    const NamePerson4 = document.getElementById('PersonName4').value;
    const LinkPerson4 = document.getElementById('PersonLink4').value;
    const DonePerson4 = document.getElementById('PersonDone4').value;
    const NamePerson5 = document.getElementById('PersonName5').value;
    const LinkPerson5 = document.getElementById('PersonLink5').value;
    const DonePerson5 = document.getElementById('PersonDone5').value;
    const NamePerson6 = document.getElementById('PersonName6').value;
    const LinkPerson6 = document.getElementById('PersonLink6').value;
    const DonePerson6 = document.getElementById('PersonDone6').value;
    const NamePerson7 = document.getElementById('PersonName7').value;
    const LinkPerson7 = document.getElementById('PersonLink7').value;
    const DonePerson7 = document.getElementById('PersonDone7').value;
    const NamePerson8 = document.getElementById('PersonName8').value;
    const LinkPerson8 = document.getElementById('PersonLink8').value;
    const DonePerson8 = document.getElementById('PersonDone8').value;
    const NamePerson9 = document.getElementById('PersonName9').value;
    const LinkPerson9 = document.getElementById('PersonLink9').value;
    const DonePerson9 = document.getElementById('PersonDone9').value;
    const NamePerson0 = document.getElementById('PersonName0').value;
    const LinkPerson0 = document.getElementById('PersonLink0').value;
    const DonePerson0 = document.getElementById('PersonDone0').value;
    pessoa.push(
      {nome: NamePerson, Link: LinkPerson, Done: DonePerson},
      {nome: NamePerson2, Link: LinkPerson2, Done: DonePerson2},
      {nome: NamePerson3, Link: LinkPerson3, Done: DonePerson3},
      {nome: NamePerson4, Link: LinkPerson4, Done: DonePerson4},
      {nome: NamePerson5, Link: LinkPerson5, Done: DonePerson5},
      {nome: NamePerson6, Link: LinkPerson6, Done: DonePerson6},
      {nome: NamePerson7, Link: LinkPerson7, Done: DonePerson7},
      {nome: NamePerson8, Link: LinkPerson8, Done: DonePerson8},
      {nome: NamePerson9, Link: LinkPerson9, Done: DonePerson9},
      {nome: NamePerson0, Link: LinkPerson0, Done: DonePerson0}
    );
  }
  return pessoa; 
}

galleryBtn.addEventListener('click', function(e){ e.preventDefault(); OpenFileDialog(); });
salvarBtn.addEventListener('click', function(e){ e.preventDefault(); UploadAllImages(); });
voltarBtn.addEventListener('click', function(e){ e.preventDefault(); Voltar(); });

function UploadAllImages(){
  galleryBtn.disabled = true;
  salvarBtn.disabled = true;

  for(let i = 0; i < files.length; i++){
    UploadImages(files[i], i);
  }

  for(let j = 0; j < imagem.length; j++){
    getImgPrinc(imagem[j]);
  }
}

function UploadImages(imgToUpload, imgNo){
  const metadata = {
    contetType: imgToUpload.type
  };

  const storage = getStorage();
  const ImageAddress="TheImages/"+getShortTitle() + "/img#" + (imgNo+1);
  const storageRef = sRef(storage, ImageAddress);
  const UploadProject = uploadBytesResumable(storageRef, imgToUpload, metadata);
  UploadProject.on('state_changed', (snapshot) =>{
  },

  (error)=>{
    alert("error: Falha ao dar Upload nas Imagens");
  },

  ()=>{
    getDownloadURL(UploadProject.snapshot.ref).then((downloadURL) =>{
      imageLinksArray.push(downloadURL);

      if(IsAllImagesUpload()){
        UploadAProject();
      }

    });
  }
  ) 
}

function getImgPrinc(imgToUpload){
  const metadata = {
    contetType: imgToUpload.type
  };
  const storage = getStorage();
  const ImageAddress="ImagemPrinc/"+getShortTitle();
  const storageRef = sRef(storage, ImageAddress);
  const UploadProject = uploadBytesResumable(storageRef, imgToUpload, metadata);
  UploadProject.on('state_changed',(snapshot) =>{},
  
    (error)=>{
      alert("error: Falha ao dar Upload na Imagem Principal");
    },

    ()=>{
      getDownloadURL(UploadProject.snapshot.ref).then((downloadURL) =>{
        imagePrincArray.push(downloadURL);
      
      });
    }
  );

}

function UploadAProject(){
  set(ref(realdb, "Projetos/"+ getShortTitle()),{
    NomeProjeto: nome.value,
    ImgPrinc: imagePrincArray,
    TxtProjeto : txtProj.value,
    LinksdasImgs: imageLinksArray,
    InformacaoPessoas: getPersonInfo()
  });

  setTimeout(() => { alert("upload Completo"); }, 8000);
  setTimeout(() => { Voltar(); }, 20000);
}
