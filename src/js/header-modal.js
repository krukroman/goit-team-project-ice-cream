const openHeaderModal = document.querySelectorAll('.header__btn')
const closeHeaderModal = document.querySelector('.header-modal__close-btn')
const header = document.querySelector('.page-header')

openHeaderModal.forEach((btn) => {
    btn.addEventListener('click', toggleHeaderModal)
})    
closeHeaderModal.addEventListener('click', toggleHeaderModal)

function toggleHeaderModal() {
    header.classList.toggle('header-modal-open')
    document.body.classList.toggle('header-modal-open')
}