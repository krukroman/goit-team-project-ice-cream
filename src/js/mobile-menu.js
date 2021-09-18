const openMobileMenuBtn = document.querySelector('.burger__btn')
const closeMobileMenuBtn = document.querySelector('.close__btn')
const heroBackdrop = document.querySelector('.header__backdrop')
const menu = document.querySelector('.page-header')
const navLinks = document.querySelectorAll('.mobile-nav__link')
const mobileHeaderBtn  = document.querySelector('.menu__btn')

openMobileMenuBtn.addEventListener("click", openMenu)
closeMobileMenuBtn.addEventListener("click", closeMenu)
heroBackdrop.addEventListener('click', closeMenu)
mobileHeaderBtn.addEventListener('click', closeMenu)


navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu)
})

function openMenu() {
    menu.classList.add('menu-open')
    document.body.classList.add('menu-open')
}
function closeMenu() {
    menu.classList.remove('menu-open')
    document.body.classList.remove('menu-open')
}


