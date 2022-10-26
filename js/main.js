let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    menu.classList.remove('active');
}
// Hide Menu and Search
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active')
}

//Header
let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});


let time = 5000,
currentImageIndex = 0,
images = document
            .querySelectorAll("#slider img")
max = images.length;

function nextImage() {
    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
    currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}


function start() {
    setInterval(() => {
        //troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)