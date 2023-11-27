let sections = document.querySelectorAll('section');
let sec1 = document.querySelector('.sec-1');
let navLinks = document.querySelectorAll('.nav-link');
const navMenu = document.querySelector('.nav-menu');
const menu = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');

window.onload = () => {
    sec1.classList.add('show-animate');
}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })

        }
        else {
            sec.classList.remove('show-animate')
        }
    })
}

function myFunction() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}


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

navMenu.addEventListener('click', toggleMobileNav);
navList.addEventListener('click', closeNav);