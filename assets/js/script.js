// ===== Menu Mobile =====

let btnMenu  = document.querySelector('#btn-menu-mob');
let linha1 = document.querySelector('.line-menu-mob-1');
let linha2 = document.querySelector('.line-menu-mob-2');
let menuMobile = document.querySelector('#menu-mobile');
let links = document.querySelector('.nav-list-mob');
let body = document.querySelector('body');


btnMenu.addEventListener('click', () => {
    linha1.classList.toggle('ativo1')
    linha2.classList.toggle('ativo2')
    menuMobile.classList.toggle('abrir')
});

links.addEventListener('click', () => {
    linha1.classList.remove('ativo1')
    linha2.classList.remove('ativo2')
    menuMobile.classList.remove('abrir')
})