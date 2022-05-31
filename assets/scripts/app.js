
window.addEventListener('scroll', onScroll)

function onScroll() {
    showNavOnScroll();
    showBackToTopButtonScroll();
    activateMenuCurrentSection(home);
    activateMenuCurrentSection(services);
    activateMenuCurrentSection(about);
}

function activateMenuCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2;


    
    //verificar se a seção passou da linha 
    //quais dados vou precisar ?

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

    console.log(sectionTopReachOrPassedTargetline)


    //verificar se a base esta abaixo da linha do alvo

    const sectionEndAt = sectionTop + sectionHeight
   
    const sectionEndPassedTargetline = sectionEndAt <= targetLine

    console.log(sectionEndPassedTargetline)
   // limites Da seção 
    const sectionLimits = sectionTopReachOrPassedTargetline &&  !sectionEndPassedTargetline

    const sectionID = section.getAttribute('id')

    const menuElement = document.querySelector(`.menu a[href*=${sectionID}]`)

    if(sectionLimits) {
        menuElement.classList.add('active')
    }else{
        menuElement.classList.remove('active')
    }
}





function showNavOnScroll() {
    navigation.classList.add('scroll');
    
    if(scrollY == 0) {
        navigation.classList.remove('scroll');
    }
}

function showBackToTopButtonScroll() {
    if (scrollY > 700) {
        backToTopButton.classList.add('show')
    }else {
        backToTopButton.classList.remove('show')
    }
}


function openMenu() {
    document.body.classList.add('menu-expanded');

}

function closeMenu() {
    document.body.classList.remove('menu-expanded');
}

//logica animação dos cards com ajavascript puro 
//1 - selecionar elementos qie devem ser animados
//2 - definir a classe que é adicinada durante a animação 
//3 criar função de animação
//4 - virificar a distancia entre a barra do scroll e topo do site
//5 - virificar a distancia do 4 + offset é maior do que a distancia entre o elemento e o topo da pagina 
//6 - sr verdadeiro adicionar classe de animação, remover se for falsa 
// 7 - ativar a função de animação toda vez que o usuário utilizar o scroll
//8 - otimizar a animação 


