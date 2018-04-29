document.addEventListener('DOMContentLoaded', init, false);

//Couleurs
var red = "#a43822";
var white = "#ffffff";

//Logo
var canvas1 = document.getElementById("logo");
var ctx1 = canvas1.getContext("2d");

//Hamburger
var canvas2 = document.getElementById("hamburger");
var ctx2 = canvas2.getContext("2d");

function init() {
    canvas1.addEventListener("mouseover", overLogo, false);
    canvas1.addEventListener("mouseout", outLogo, false);

    canvas2.addEventListener("mouseover", overHamburger, false);
    canvas2.addEventListener("mouseout", outHamburger, false);

    drawLogo(red);
    drawHamburger(red);
}

//Dessine le logo
function drawLogo(color) {
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height); //Efface l'ancien canvas avant de deessiner le nouveau

    ctx1.save();
    ctx1.beginPath();
    ctx1.moveTo(29.4, 58.6);
    ctx1.fillStyle = color;
    ctx1.fill();

    // <
    ctx1.beginPath();
    ctx1.moveTo(29.4, 58.6);
    ctx1.lineTo(29.4, 58.6);
    ctx1.lineTo(6.1, 35.2);
    ctx1.lineTo(6.1, 34.3);
    ctx1.lineTo(29.4, 10.9);
    ctx1.lineTo(29.4, 10.9);
    ctx1.lineTo(29.4, 10.9);
    ctx1.lineTo(29.3, 0.0);
    ctx1.lineTo(23.9, 5.4);
    ctx1.lineTo(0.0, 29.3);
    ctx1.lineTo(0.0, 29.3);
    ctx1.lineTo(0.0, 29.3);
    ctx1.lineTo(0.0, 40.2);
    ctx1.lineTo(0.0, 40.2);
    ctx1.lineTo(0.0, 40.2);
    ctx1.lineTo(23.9, 64.1);
    ctx1.lineTo(23.9, 64.1);
    ctx1.lineTo(29.3, 69.5);
    ctx1.lineTo(29.4, 59.1);
    ctx1.lineTo(29.4, 59.1);
    ctx1.lineTo(29.4, 58.9);
    ctx1.lineTo(29.4, 58.6);
    ctx1.lineTo(29.4, 58.6);
    ctx1.closePath();
    ctx1.fill();

    // >
    ctx1.beginPath();
    ctx1.moveTo(128.1, 29.4);
    ctx1.lineTo(128.1, 29.4);
    ctx1.lineTo(128.1, 29.4);
    ctx1.lineTo(103.9, 5.3);
    ctx1.lineTo(103.9, 5.3);
    ctx1.lineTo(98.7, 0.1);
    ctx1.lineTo(98.6, 11.0);
    ctx1.lineTo(98.6, 11.0);
    ctx1.lineTo(98.6, 11.0);
    ctx1.lineTo(122.0, 34.4);
    ctx1.lineTo(122.0, 35.3);
    ctx1.lineTo(98.6, 58.7);
    ctx1.lineTo(98.6, 58.7);
    ctx1.lineTo(98.6, 58.7);
    ctx1.lineTo(98.7, 69.6);
    ctx1.lineTo(104.1, 64.2);
    ctx1.lineTo(104.1, 64.2);
    ctx1.lineTo(128.0, 40.3);
    ctx1.lineTo(128.0, 40.3);
    ctx1.lineTo(128.1, 40.3);
    ctx1.lineTo(128.1, 29.4);
    ctx1.closePath();
    ctx1.fill();

    //Marteau
    ctx1.beginPath();
    ctx1.moveTo(65.2, 34.2);
    ctx1.lineTo(63.9, 35.5);
    ctx1.lineTo(46.2, 17.8);
    ctx1.lineTo(48.0, 16.0);
    ctx1.bezierCurveTo(48.0, 16.0, 47.9, 11.1, 48.8, 9.6);
    ctx1.bezierCurveTo(50.1, 7.6, 51.5, 6.7, 53.9, 6.1);
    ctx1.bezierCurveTo(55.7, 5.7, 59.2, 6.1, 59.2, 6.1);
    ctx1.bezierCurveTo(59.2, 6.1, 58.3, 4.6, 55.8, 3.9);
    ctx1.bezierCurveTo(53.2, 3.2, 51.4, 2.9, 47.3, 3.6);
    ctx1.bezierCurveTo(43.6, 4.2, 40.3, 7.7, 40.3, 7.7);
    ctx1.lineTo(32.6, 15.2);
    ctx1.bezierCurveTo(32.6, 15.2, 32.9, 15.8, 33.7, 17.1);
    ctx1.bezierCurveTo(34.4, 18.4, 32.6, 20.4, 30.9, 21.7);
    ctx1.bezierCurveTo(29.2, 22.9, 27.0, 21.9, 27.0, 21.9);
    ctx1.lineTo(23.9, 25.0);
    ctx1.lineTo(32.1, 33.1);
    ctx1.lineTo(35.1, 30.0);
    ctx1.lineTo(34.9, 25.5);
    ctx1.bezierCurveTo(34.9, 25.5, 36.7, 23.1, 38.1, 23.1);
    ctx1.bezierCurveTo(39.5, 23.1, 40.1, 23.8, 40.1, 23.8);
    ctx1.lineTo(42.2, 21.8);
    ctx1.lineTo(59.9, 39.5);
    ctx1.lineTo(58.6, 40.9);
    ctx1.lineTo(88.9, 71.2);
    ctx1.lineTo(95.5, 64.5);
    ctx1.lineTo(65.2, 34.2);
    ctx1.closePath();
    ctx1.fill();

    //Cle
    ctx1.beginPath();
    ctx1.moveTo(96.1, 14.4);
    ctx1.lineTo(90.6, 19.5);
    ctx1.bezierCurveTo(90.6, 19.5, 89.1, 20.8, 86.6, 20.6);
    ctx1.bezierCurveTo(84.4, 20.3, 83.1, 17.8, 82.7, 16.4);
    ctx1.bezierCurveTo(82.5, 15.5, 82.8, 13.6, 83.3, 12.8);
    ctx1.bezierCurveTo(84.5, 11.1, 89.8, 7.9, 89.8, 7.9);
    ctx1.lineTo(84.5, 6.4);
    ctx1.bezierCurveTo(84.5, 6.4, 82.2, 7.3, 81.7, 7.7);
    ctx1.bezierCurveTo(80.3, 8.6, 78.2, 10.1, 77.4, 12.7);
    ctx1.bezierCurveTo(76.7, 15.0, 76.9, 17.5, 77.1, 18.5);
    ctx1.lineTo(44.5, 51.1);
    ctx1.bezierCurveTo(43.4, 50.9, 40.0, 50.5, 37.4, 51.4);
    ctx1.bezierCurveTo(34.1, 52.6, 31.2, 57.8, 31.2, 57.8);
    ctx1.lineTo(32.1, 62.8);
    ctx1.lineTo(37.6, 57.7);
    ctx1.bezierCurveTo(37.6, 57.7, 39.1, 56.4, 41.6, 56.6);
    ctx1.bezierCurveTo(43.8, 56.9, 45.0, 59.4, 45.4, 60.8);
    ctx1.bezierCurveTo(45.7, 61.7, 45.4, 63.6, 44.9, 64.3);
    ctx1.bezierCurveTo(43.7, 66.1, 38.3, 69.3, 38.3, 69.3);
    ctx1.lineTo(43.6, 70.8);
    ctx1.bezierCurveTo(43.6, 70.8, 46.0, 69.9, 46.5, 69.5);
    ctx1.bezierCurveTo(47.9, 68.6, 50.0, 67.0, 50.8, 64.5);
    ctx1.bezierCurveTo(51.4, 62.4, 51.3, 60.3, 51.2, 59.1);
    ctx1.lineTo(84.1, 26.1);
    ctx1.bezierCurveTo(85.5, 26.3, 88.4, 26.6, 90.7, 25.8);
    ctx1.bezierCurveTo(94.0, 24.6, 97.0, 19.4, 97.0, 19.4);
    ctx1.lineTo(96.1, 14.4);
    ctx1.closePath();
    ctx1.fill();
    ctx1.restore();
}

//Dessigne le hamburger
function drawHamburger(color) {
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    console.log(color);
    ctx2.fillStyle = color;
    let x = 0;
    let y = 15;
    let w = 108;
    let h = 20;
    ctx2.fillRect(x, y, w, h);
    ctx2.fillRect(x, y+40, w, h);
    ctx2.fillRect(x, y+(40*2), w, h);
}

//Quand la souri est sur le logo
function overLogo(e) {
    drawLogo(white);
}

//Quand la souri n'eest pas sur le logo
function outLogo(e) {
    drawLogo(red);
}

//Quand la souri est sur le hamburger
function overHamburger() {
    drawHamburger(white);
}

//Quand la souri n'est pas sur le hamburger
function outHamburger() {
    drawHamburger(red);
}
