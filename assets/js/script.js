// ===== Menu Mobile =====

let btnMenu  = document.querySelector ('#btn-menu-mob');
let linha1 = document.querySelector('.line-menu-mob-1');
let linha2 = document.querySelector('.line-menu-mob-2');
let menuMobile = document.querySelector('#menu-mobile');
let links = document.querySelector('.nav-list-mob');
let body = document.querySelector('body');


btnMenu.addEventListener('click', () => {
    linha1.classList.toggle('ativo1')
    linha2.classList.toggle('ativo2')

    menuMobile.classList.toggle('abrir')

    body.classList.toggle('no-overflow')

});

links.addEventListener('click', () => {

    linha1.classList.remove('ativo1')
    linha2.classList.remove('ativo2')
    menuMobile.classList.remove('abrir')

    body.classList.remove('no-overflow')
});




// ===== Modos Light e Dark =====

// Seleciona o botão de troca de tema
const inter = document.getElementById('inter');

// Aplica o tema salvo no localStorage, se existir
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
  body.classList.add('light-mode');
}

// Atualiza ícones (sol e lua) com base no tema atual
function updateIcons() {
  const sunIcon = inter.querySelector('.bx-sun');
  const moonIcon = inter.querySelector('.bx-moon');
  const isLight = body.classList.contains('light-mode');

  sunIcon.style.display = isLight ? 'none' : 'inline';
  moonIcon.style.display = isLight ? 'inline' : 'none';
}

// Função para alternar o tema
function toggleTheme() {
  const isLight = body.classList.toggle('light-mode');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  updateIcons();
}

// Aplica os ícones corretos ao carregar
updateIcons();

// Evento de clique no botão
inter.addEventListener('click', toggleTheme);

