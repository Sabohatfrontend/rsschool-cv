const navMenu = document.querySelector('.nav-menu');
const menu = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const modeBtn = document.querySelector('.mode-btn');
const navLinks = document.querySelectorAll('.nav-link');
const body = document.body;


function toggleMobileNav() {
    navMenu.classList.toggle('active-nav');
    menu.classList.toggle('active-nav');
    body.classList.toggle('lock');
}

function closeNav() {
    body.classList.remove('lock');
    navMenu.classList.remove('active-nav');
    menu.classList.remove('active-nav');
}

function toggleMode() {
    modeBtn.classList.toggle('light-btn');
    body.classList.toggle('active');

}

const clickNavlink = (event) => {
    navLinks.forEach(item => {
        item.classList.remove('active');
    });
    event.target.classList.add('active');
}


navMenu.addEventListener('click', toggleMobileNav);
navList.addEventListener('click', closeNav);
modeBtn.addEventListener('click', toggleMode);
navList.addEventListener('click', (e) => {
    if (e.target.classList.value !== 'nav-list') clickNavlink(e);
})