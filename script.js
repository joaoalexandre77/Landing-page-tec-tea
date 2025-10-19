const cor = document.querySelector('#corteste')
const buttonImg = document.querySelector('.Img-Header-Button')
const corpo = document.body
const logoHeader = document.querySelectorAll('.logo-hearder, .Logo-Conloq')
const header = document.querySelector('.header-bar')
const textColor = document.querySelectorAll('.item-nav-bar, .Titulo-Sobre, .Text-Sobre, .Title-Sobre-Tea, .Text-Sobre-Tea, .Title-Sobre-Tec-Tea, .Text-Sobre-Tec-Tea')

cor.addEventListener('change', ()=>{
    if(cor.checked){
        logoHeader.forEach(logo =>{
            logo.src = './img/logoBranco.svg'
        })

        corpo.style.background = '#1a1a1a'
        header.style.background = '#1a1a1a'

        buttonImg.src = './img/moon.svg'
        textColor.forEach(text =>{
            text.style.color = '#ffffff'
        })

    }else{
        logoHeader.forEach(logo =>{
            logo.src = './img/Logo-medio.svg'
        })
        corpo.style.background = '#ffffff'
        header.style.background = '#ffffff'
        buttonImg.src = './img/Sunny.svg'
        textColor.forEach(text =>{
            text.style.color = '#000000'
        })
    }
})