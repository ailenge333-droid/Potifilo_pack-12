// JavaScript for the image slideshow functionality

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = 'block';  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

nextButton.addEventListener('click', () => {
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    updateSlides();
});

prevButton.addEventListener('click', () => {
    slideIndex--;
    if (slideIndex < 1) {slideIndex = slides.length}
    updateSlides();
});

function updateSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }
    slides[slideIndex - 1].style.display = 'block';  
}

showSlides(); // Initial call to start the slideshow