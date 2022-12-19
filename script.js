const hamburger = document.getElementById('header-hamburger');
const closeButton = document.getElementById('close');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    nav.style.width = '100%';
})

closeButton.addEventListener('click', () => {
    nav.style.width = '0%';
})

nav.addEventListener('click', () => {
    nav.style.width = '0%';
})
