colorArray = [ '#FF4500', '#36B7FF' ];
const random = Math.floor(Math.random()* colorArray.length);
const btTeste = document.getElementById('btTeste');

const selectValue = document.getElementById('selectPerson');
if(selectValue.value == 0){
  const fichaTecnica = document.querySelector('.fichaTecnica');
  fichaTecnica.innerHTML = '<p>Por Favor selecione a quantidade de pessoas que participaram do projeto</p>';
}

function updateItems(_this) {
  var ItemCount = +_this.value;
  var results = document.querySelector('.fichaTecnica');
  results.innerHTML = '';
  for (var i = 1; i <= ItemCount; i++) {
    var divMaxBlock = document.createElement('div');
    divMaxBlock.className = "pessoa";
    var divBlock = document.createElement('div');
    var divBlock2 = document.createElement('div');
    var divBlock3 = document.createElement('div');
    var label = document.createElement("label");
    var label2 = document.createElement("label");
    var label3 = document.createElement("label");
    var input = document.createElement('input');
    var input2 = document.createElement('input');
    var input3 = document.createElement('input');
    divBlock.className = "formBlock PersonBlock";
    divBlock2.className = "formBlock PersonBlock";
    divBlock3.className = "formBlock PersonBlock";

    divBlock.appendChild(label);
    divBlock.appendChild(input);
    divBlock2.appendChild(label2);
    divBlock2.appendChild(input2);
    divBlock3.appendChild(label3);
    divBlock3.appendChild(input3);

    label.innerText = 'Pessoa 0' + i;
    label2.innerText = 'Link Perfil';
    label3.innerText = 'Oque fez no projeto';

    input.type = "text";
    input2.type = "text";
    input3.type = "text";

    input.placeholder = "Nome da Pessoa";
    input2.placeholder = "Link do Perfil";
    input3.placeholder = "Oque Fez";

    input.id = "PersonName" + i;
    input2.id = "PersonLink" + i;
    input3.id = "PersonDone" + i;

    divMaxBlock.appendChild(divBlock); 
    divMaxBlock.appendChild(divBlock2);
    divMaxBlock.appendChild(divBlock3);
    results.appendChild(divMaxBlock);

  }
}