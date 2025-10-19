const cor = document.querySelector('#corteste')
const buttonImg = document.querySelector('.Img-Header-Button')
const corpo = document.body
const logoHeader = document.querySelectorAll('.logo-hearder, .Logo-Conloq')
const header = document.querySelector('.header-bar')
const textColor = document.querySelectorAll('.item-nav-bar, .Titulo-Sobre, .Text-Sobre, .Title-Sobre-Tea, .Text-Sobre-Tea, .Title-Sobre-Tec-Tea, .Text-Sobre-Tec-Tea')

cor.addEventListener('change', ()=>{
    if(cor.checked){
        corpo.style.background = '#1a1a1a'
        header.style.background = '#1a1a1a'

        logoHeader.forEach(logo =>{
            logo.src = './img/logoBranco.svg'
        })
        buttonImg.src = './img/moon.svg'
        textColor.forEach(text =>{
            text.style.color = '#ffffff'
        })

    }else{
        corpo.style.background = '#ffffff'
        header.style.background = '#ffffff'
        logoHeader.forEach(logo =>{
            logo.src = './img/Logo-medio.svg'
        })   
        buttonImg.src = './img/Sunny.svg'
        textColor.forEach(text =>{
            text.style.color = '#000000'
        })
    }
});

const carrousel = document.querySelector('.Div-Carrousel-Img-Sobre-Tea');
carrousel.innerHTML += carrousel.innerHTML;



(function(){
      const buttons = document.querySelectorAll('.bolinhas-container button');
      const imgContainer = document.querySelector('.Div-Img-Sobre-Tec-Tea');

      function setActive(targetId) {
        buttons.forEach(b => b.classList.toggle('bolinha-ativa', b.dataset.target === targetId));
        // quando target é img2 aplicamos swap (inverte posições e camadas)
        if (targetId === 'img2') {
          imgContainer.classList.add('swap');
        } else {
          imgContainer.classList.remove('swap');
        }
      }

      buttons.forEach(btn => btn.addEventListener('click', () => setActive(btn.dataset.target)));

      // estado inicial
      setActive(document.querySelector('.bolinha-ativa')?.dataset.target || 'img1');
    })();



