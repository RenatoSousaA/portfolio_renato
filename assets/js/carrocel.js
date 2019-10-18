var timeDefault = 93500;
var time = timeDefault;
var slideSelected;
refreshInteval = setInterval(intervalNextSlide, 1000);

function toSlide(slide) {
    if (slide != 'prev' && slide != 'next') {
        hideAllSlides();
        slideSelected = document.getElementById(slide);
        slideSelected.classList.add('ativo');
        window.setTimeout(function () {
            slideSelected.style.opacity = 1;
            slideSelected.style.transform = 'scale(1)';
        }, 50);
    } else {
        slidePrevNext(slide);
    }
}

function intervalNextSlide() {
    if (time <= 0) {
        slidePrevNext('next');
        time = timeDefault;
    } else {
        time = time - 1000;
    }
}

function slidePrevNext(slide) {
    slideSelected = document.getElementsByClassName('ativo');
    var idSlide = slideSelected[0].id;
    if (slide == 'prev') {
        if (idSlide == 'front-end-carrocel') {
            slideSelected = document.getElementById('grupo-carrocel');
        } else if (idSlide == 'back-end-carrocel') {
            slideSelected = document.getElementById('front-end-carrocel');
        } else {
            slideSelected = document.getElementById('back-end-carrocel');
        }
    } else {
        if (idSlide == 'front-end-carrocel') {
            slideSelected = document.getElementById('back-end-carrocel');
        } else if (idSlide == 'back-end-carrocel') {
            slideSelected = document.getElementById('grupo-carrocel');
        } else {
            slideSelected = document.getElementById('front-end-carrocel');
        }
    }
    hideAllSlides();
    slideSelected.classList.add('ativo');
    window.setTimeout(function () {
        slideSelected.style.opacity = 1;
        slideSelected.style.transform = 'scale(1)';
    }, 50);
    time = timeDefault;
}

function hideAllSlides() {
    var slides = document.getElementsByClassName('habilidades-sobre');

    for (var i = 0; i != slides.length; ++i) {
        slides[i].classList.remove('ativo');
        slides[i].style.opacity = 0;
        slides[i].style.transform = 'scale(0)';
    }
}