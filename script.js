window.addEventListener('scroll', onScroll) //Aqui a função evento vai adicionar um evento de scroll e um 'ouvinte' e quem receberia essa informação seria a nossa função onScroll

onScroll() //Aqui estamos chamando a função para executar apenas uma única vez


function onScroll() {
 showNavOnScroll()
 showBackToTopButtonOnScroll()
}

function showNavOnScroll() {//showNav faz a verificação se é necessário manter o menu fixo para o usuário durante o scroll ou se ele se encontra no início.
  if (scrollY > 0) {
    navigation.classList.add('scroll')
   } else {
    navigation.classList.remove('scroll')
   }
}

function showBackToTopButtonOnScroll() {//O botão showback está recebendo uma função para quando chegar em um local X, aparecer para o usuário
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
   } else {
    backToTopButton.classList.remove('show')
   }
}


function openMenu(){ //function openMenu tem a função de abrir o menu assim que o usuário solicitar
  document.body.classList.add('menu-expanded')

}

function closeMenu(){ //function close menu tem a função de fechar o menu assim que o usuário solicitar
  document.body.classList.remove('menu-expanded')
}


ScrollReveal({  //ScrollReavel é uma Lib que nos proporciona um efeito enquanto o usuário faz a rolagem na página
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`#home,
 #home img,
  #home .stats,
   #services,
    #services header,
      #services .card,
        #about,
          #about .content`);

          