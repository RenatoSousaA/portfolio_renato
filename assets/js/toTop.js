let refreshInteval;
let positionY;
let initialPositionY;

const sobreSession = document.getElementById("sobre");
const educacaoSession = document.getElementById("educacao");
const habilidadesSession = document.getElementById("habilidades");
const contatoSession = document.getElementById("contato");

class ToTop {
    constructor() {
        this.btnToTop = document.querySelector('#toTop');
        this.body = document.querySelector('body');

        this.btnToTop.addEventListener(
            'click',
            this.toTop.bind()
        )

        window.addEventListener(
            'scroll',
            this.changeScroll
        )

        window.addEventListener(
            'load',
            this.changeScroll()
        )
    }

    toTop() {
        positionY = window.scrollY;
        initialPositionY = window.scrollY;
        refreshInteval = setInterval(intervalToTop, 15);

        function intervalToTop() {
            window.scrollTo(0, positionY);
            positionY = positionY - (initialPositionY / 20);

            if (positionY <= 0) {
                clearInterval(refreshInteval);
                window.scrollTo(0, 0);
            }
        }
    }

    changeScroll() {
        if (window.scrollY <= 0) {
            document.getElementById('toTop').style.visibility = 'hidden';
        } else {
            document.getElementById('toTop').style.visibility = 'visible';
        }

        removeAtivoHeader();

        if (window.scrollY < educacaoSession.offsetTop - 100) {
            document.getElementsByClassName("sobre-header")[0].classList.add('ativo-menu');
        } else if (window.scrollY < habilidadesSession.offsetTop - 100) {
            document.getElementsByClassName("educacao-header")[0].classList.add('ativo-menu');
        } else if (window.scrollY < contatoSession.offsetTop - 100) {
            document.getElementsByClassName("habilidades-header")[0].classList.add('ativo-menu');
        } else {
            document.getElementsByClassName("contato-header")[0].classList.add('ativo-menu');
        }

    }
}

function removeAtivoHeader() {
    document.getElementsByClassName("sobre-header")[0].classList.remove('ativo-menu');
    document.getElementsByClassName("educacao-header")[0].classList.remove('ativo-menu');
    document.getElementsByClassName("habilidades-header")[0].classList.remove('ativo-menu');
    document.getElementsByClassName("contato-header")[0].classList.remove('ativo-menu');
}