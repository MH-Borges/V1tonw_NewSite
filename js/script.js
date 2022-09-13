colorArray = [ '#FF4500', '#36B7FF' ];
const random = Math.floor(Math.random()* colorArray.length);

window.onload = function(){
    document.body.style.background = `${colorArray[random]}`;

    if(colorArray[random] == '#FF4500'){
        const texts = document.querySelectorAll('.marqueeText');
        for (const text of texts) { text.classList.remove('blue'); }
        const fichas = document.querySelectorAll('.infoLinks');
        for (const ficha of fichas) { ficha.classList.remove('blue'); }
    }
    else{
        const texts = document.querySelectorAll('.marqueeText');
        for (const text of texts) { text.classList.add('blue'); }

        const links = document.querySelectorAll('.link');
        for (const link of links) { link.classList.add('darkRed'); }

        const fichas = document.querySelectorAll('.infoLinks');
        for (const ficha of fichas) { ficha.classList.add('blue'); }
    }
}

window.addEventListener('scroll',() => {
    if(window.scrollY < (document.documentElement.clientHeight - 35)){
        document.querySelector('.projetos').classList.remove('fixed');
        document.querySelector('.blockImgs').classList.remove('imgs');

    }
    if(window.scrollY >= (document.documentElement.clientHeight - 35)){
        document.querySelector('.projetos').classList.add('fixed');
        document.querySelector('.blockImgs').classList.add('imgs');
    }

});

function clickPhoto() {
    document.querySelector('.ficha').style.opacity = '1';
    document.querySelector('.ficha').style.position = 'relative';

    const projects = document.querySelectorAll('.project');
    for (const project of projects) {  project.remove(); }

    var nomeProjeto = document.querySelector(".nomeProjeto").textContent;
    
    let text = "";
    let text2 = "";
    let i = 0;

    if(colorArray[random] == '#36B7FF'){
        while (i < 5) {
            text += `<li class='marqueeText project blue' style="flex: 0 0 auto; display: block;"> ${ nomeProjeto } </li>`;
            text2 += `<li class='marqueeText project infiniteslide_clone blue' style="flex: 0 0 auto; display: block;"> ${ nomeProjeto } </li>`;
            
            i++;
            }
    }else{
        while (i < 5) {
        text += `<li class='marqueeText project' style="flex: 0 0 auto; display: block;"> ${ nomeProjeto } </li>`;
        text2 += `<li class='marqueeText project infiniteslide_clone' style="flex: 0 0 auto; display: block;"> ${ nomeProjeto } </li>`;
        
        i++;
        }
    }
    document.querySelector(".scroll1").innerHTML = text + text2;

}

$(function () {
    $('.scroll').infiniteslide({
        speed: 50
    });

    $('.scroll1').infiniteslide({
        speed: 150,
        pauseonhover: false
    });

    $('.scroll2').infiniteslide({
        pauseonhover: false
    });

});