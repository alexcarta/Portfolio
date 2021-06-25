const navMenu = document.getElementbyId('nav-menu'),
      navToggle = document.getElementbyId('nav-toggle'),
      navClose = document.getElementById('nav-close');



if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

