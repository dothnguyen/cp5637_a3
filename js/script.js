

// carousel container
var box = document.querySelector('.carouselbox');

var items = box.querySelectorAll('.carousel-content .carousel-item');
var dots = box.querySelectorAll('.carousel-buttons .dot');

var slideIndex = 0;


function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(index) {
    if (index >= items.length) {
        index = 0;
    }

    if (index < 0) {
        index = items.length - 1;
    }

    slideIndex = index;

    for (i = 0; i < items.length; i++) {
        items[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    items[slideIndex].style.display = "inline-block";
    dots[slideIndex].className += " active ";


}

function carousel() {

    showSlides(slideIndex);

    slideIndex ++;

    setTimeout(carousel, 4000); // Change image every 4 seconds
}



carousel();