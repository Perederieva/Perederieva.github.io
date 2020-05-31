var prevButton = document.querySelector('.arrow-prev');
var nextButton = document.querySelector('.arrow-next');
prevButton.addEventListener('click', () => prevSlide());
nextButton.addEventListener('click', () => nextSlide());

var slides = document.querySelectorAll('.slider_images .slider_image');
var slidesText = document.querySelectorAll('.slider_list .slider_item');
var currentIndex = 0;
var prevIndex = 0;
setInterval(nextSlide,4000);

var dots = document.querySelectorAll('#dots .dot');
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function () {
        prevIndex = currentIndex;
        currentIndex = i;
        changeSlide(currentIndex);
        dots[i].className = 'dot active';
    });
}

function nextSlide() {
    prevIndex = currentIndex;
    currentIndex = (currentIndex + 1) % slides.length;

    changeSlide(currentIndex);
}

function prevSlide() {
    prevIndex = currentIndex;
    currentIndex = currentIndex - 1;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    changeSlide(currentIndex);
}

function changeSlide(n) {

    slides[prevIndex].className = 'slider_image';
    slidesText[prevIndex].className = 'slider_item';
    dots[prevIndex].className = 'dot';

    slides[n].className = 'slider_image showing';
    slidesText[n].className = 'slider_item active';
    dots[n].className = 'dot active';
}

// Burger menu

var burgerMenu = document.querySelector('.burger_menu');
var mainMenu = document.querySelector('.main_menu');

burgerMenu.addEventListener('click' , function () {
    burgerMenu.classList.toggle('active');
    mainMenu.classList.toggle('active');
    document.body.classList.toggle('lock');
});
