let burger_menu = document.querySelector('.burger-menu')
let menu = document.querySelector('.header__ul')
let link = document.querySelector('.header__link')

burger_menu.addEventListener('click', () => {
  burger_menu.classList.toggle('burger-menu-close')
  menu.classList.toggle('header__ul-show')
  document.querySelector('body').classList.toggle('no-scroll')
})

menu.addEventListener('click', () => {
  if (document.documentElement.clientWidth <= 500) {
    burger_menu.classList.toggle('burger-menu-close')
    menu.classList.toggle('header__ul-show')
    document.querySelector('body').classList.toggle('no-scroll')
  }
})
