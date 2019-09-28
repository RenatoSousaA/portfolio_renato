function showMenuFull() {
    document.getElementById('iconBarsTimesMenu').style.display = 'none';
    document.getElementById('iconTimesMenu').style.display = 'block';

    document.getElementById('navHeader').style.display = 'block';
}

function hideMenuFull() {
    document.getElementById('iconTimesMenu').style.display = 'none';
    document.getElementById('iconBarsTimesMenu').style.display = 'block';

    document.getElementById('navHeader').style.display = 'none';
}

function resizeElement() {
    document.getElementById('iconTimesMenu').style.display = 'none';
    document.getElementById('iconBarsTimesMenu').style.display = 'block';

    if (window.outerWidth > 640) {
        document.getElementById('navHeader').style.display = 'block';
    } else {
        document.getElementById('navHeader').style.display = 'none';
    }
}