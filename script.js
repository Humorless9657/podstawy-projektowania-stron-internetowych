/* Hamburger nav */
const hamburger = document.getElementById('header-hamburger');
const closeButton = document.getElementById('close');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    nav.style.width = '65%';
})

closeButton.addEventListener('click', () => {
    nav.style.width = '0%';
})

nav.addEventListener('click', () => {
    nav.style.width = '0%';
})

/* Slideshow */
const images = document.querySelectorAll('#slideshow-container img');
images[1].style.display = 'none';
images[2].style.display = 'none';
let currentImage = 0;

const circles = document.querySelectorAll('.circle');
circles[0].classList.add('circle-filled');

const rightButton = document.getElementById('right');
rightButton.addEventListener('click', () => {
    images[currentImage].style.display = 'none';
    circles[currentImage].classList.remove('circle-filled');
    if (currentImage !== 2) {
        images[currentImage + 1].style.display = 'block';
        circles[currentImage + 1].classList.add('circle-filled');
        currentImage += 1;
    } else {
        images[0].style.display = 'block';
        circles[0].classList.add('circle-filled');
        currentImage = 0;
    }
})

const leftButton = document.getElementById('left');
leftButton.addEventListener('click', () => {
    images[currentImage].style.display = 'none';
    circles[currentImage].classList.remove('circle-filled');
    if (currentImage !== 0) {
        images[currentImage - 1].style.display = 'block';
        circles[currentImage - 1].classList.add('circle-filled');
        currentImage -= 1;
    } else {
        images[images.length - 1].style.display = 'block';
        circles[images.length - 1].classList.add('circle-filled');
        currentImage = images.length - 1;
    }
})

circles.forEach(circle => circle.addEventListener('click', (e) => {
    const dataNo = parseInt(e.currentTarget.getAttribute('data-no'));
    images[currentImage].style.display = 'none';
    images[dataNo].style.display = 'block';
    circles[currentImage].classList.remove('circle-filled');
    circles[dataNo].classList.add('circle-filled');
    currentImage = dataNo;
}))

function changeImage() {
    images[currentImage].style.display = 'none';
    circles[currentImage].classList.remove('circle-filled');
    if (currentImage !== 2) {
        images[currentImage + 1].style.display = 'block';
        circles[currentImage + 1].classList.add('circle-filled');
        currentImage += 1;
    } else {
        images[0].style.display = 'block';
        circles[0].classList.add('circle-filled');
        currentImage = 0;
    }
    setTimeout(changeImage, 5000);
}
setTimeout(changeImage, 5000);


const projectsContainer = document.querySelector('.projects-container');
const slideshowContainer = document.querySelector('#slideshow-container');
slideshowContainer.style.display = 'none';

const tasks = document.querySelectorAll('.tasks');
tasks.forEach(task => task.addEventListener('click', () => {
    slideshowContainer.style.display = 'none';
    projectsContainer.style.display = 'block';
}))

const slideshow = document.querySelectorAll('.images');
slideshow.forEach(slide => slide.addEventListener('click', () => {
    projectsContainer.style.display = 'none';
    slideshowContainer.style.display = 'block';
}))
