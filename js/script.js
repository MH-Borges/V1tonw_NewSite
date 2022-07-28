colorArray = [ '#FF4500', '#36B7FF' ];

window.onload = function(){
    const random = Math.floor(Math.random()* colorArray.length);
    document.body.style.background = `${colorArray[random]}`;
    document.querySelector('.block_vetor').style=`left:${Math.floor(Math.random() * 64)}vw`;

    if(colorArray[random] == '#FF4500'){
        
        const texts = document.querySelectorAll('.marqueeText');
        for (const text of texts) { text.classList.remove('blue'); }

    }
    else{

        const texts = document.querySelectorAll('.marqueeText');
        for (const text of texts) { text.classList.add('blue'); }

        const links = document.querySelectorAll('.link');
        for (const link of links) { link.classList.add('darkRed'); }

    }
   
    console.log(window.scrollY);

    window.addEventListener('scroll',() => {
        if(window.scrollY < 669){
            document.querySelector('.projetos').classList.remove('fixed');
            document.querySelector('.blockImgs').classList.remove('imgs');

        }
        if(window.scrollY >= 670){
            document.querySelector('.projetos').classList.add('fixed');
            document.querySelector('.blockImgs').classList.add('imgs');
        }
    });

}


$(function () {
    $('.scroll').infiniteslide({
        speed: 100,
        pauseonhover: false
    });


    $('.scroll1').infiniteslide({
    });
});