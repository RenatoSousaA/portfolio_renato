let refreshInteval;
let positionY;
let initialPositionY;

function toTop() {
    positionY = window.scrollY;
    initialPositionY = window.scrollY;
    refreshInteval = setInterval(intervalToTop, 15);
}

function intervalToTop() {    
    window.scrollTo(0, positionY);
    positionY = positionY - (initialPositionY / 20);

    if (positionY <= 0) {
        clearInterval(refreshInteval);
        window.scrollTo(0, 0);
    }
}

function changeScroll() {
    if (window.scrollY <= 0) {        
        document.getElementById('toTop').style.visibility = 'hidden';
    } else {
        document.getElementById('toTop').style.visibility = 'visible';
    }
}