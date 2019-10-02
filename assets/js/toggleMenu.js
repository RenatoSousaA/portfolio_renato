class ToogleMenu {
    constructor() {
        this.iconBarras = document.querySelector('#iconBarsTimesMenu');
        this.iconTimes = document.querySelector('#iconTimesMenu');
        this.navHeader = document.querySelector('#navHeader');
        this.body = document.querySelector('body');

        this.iconBarras.addEventListener(
            'click',
            this.showMenuFull.bind(event, this)
        )

        this.iconTimes.addEventListener(
            'click',
            this.hideMenuFull.bind(event, this)
        )

        window.addEventListener(
            'resize',
            this.resizeElement.bind(event, this),
            this.body
        )
    }

    showMenuFull(element) {
        element.iconBarras.style.display = 'none';
        element.iconTimes.style.display = 'block';
        element.navHeader.style.display = 'block';
    }

    hideMenuFull(element) {
        element.iconBarras.style.display = 'block';
        element.iconTimes.style.display = 'none';

        element.navHeader.style.display = 'none';
    }

    resizeElement(element) {
        element.iconBarras.style.display = 'block';
        element.iconTimes.style.display = 'none';

        if (window.innerWidth > 640) {
            element.navHeader.style.display = 'block';
        } else {
            element.navHeader.style.display = 'none';
        }
    }
}