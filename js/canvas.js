document.addEventListener('DOMContentLoaded', init, false);

var red = "#a43822";
var white = "#ffffff";

var canvas1 = document.getElementById("logo");
var ctx1 = canvas1.getContext("2d");

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

function drawLogo(color) {
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);

    var alpha = ctx1.globalAlpha;

    // calque1/Trac
    ctx1.save();
    ctx1.beginPath();
    ctx1.moveTo(24.0, 5.3);
    ctx1.lineTo(0.0, 29.3);
    ctx1.lineTo(5.5, 34.9);
    ctx1.lineTo(29.4, 10.9);
    ctx1.lineTo(29.4, 10.7);
    ctx1.lineTo(24.0, 5.3);
    ctx1.closePath();
    ctx1.fillStyle = color;
    ctx1.fill();

    // calque1/Trac
    ctx1.beginPath();
    ctx1.moveTo(5.5, 34.7);
    ctx1.lineTo(0.0, 40.2);
    ctx1.lineTo(24.2, 64.3);
    ctx1.lineTo(29.4, 59.1);
    ctx1.lineTo(29.4, 58.6);
    ctx1.lineTo(5.5, 34.7);
    ctx1.closePath();
    ctx1.fill();

    // calque1/Rectangle
    ctx1.beginPath();
    ctx1.moveTo(6.1, 40.2);
    ctx1.lineTo(0.0, 40.2);
    ctx1.lineTo(0.0, 29.3);
    ctx1.lineTo(6.1, 29.3);
    ctx1.lineTo(6.1, 40.2);
    ctx1.closePath();
    ctx1.fill();

    // calque1/Trac
    ctx1.beginPath();
    ctx1.moveTo(23.9, 5.4);
    ctx1.lineTo(29.3, 0.0);
    ctx1.lineTo(29.4, 10.9);
    ctx1.fill();

    // calque1/Trac
    ctx1.globalAlpha = alpha * 0.21;
    ctx1.beginPath();
    ctx1.moveTo(29.4, 58.6);
    ctx1.fill();

    // calque1/Trac
    ctx1.globalAlpha = alpha * 1.00;
    ctx1.beginPath();
    ctx1.moveTo(23.9, 64.1);
    ctx1.lineTo(29.3, 69.5);
    ctx1.lineTo(29.4, 58.6);
    ctx1.fill();

    // calque1/Trac
    ctx1.beginPath();
    ctx1.moveTo(128.0, 40.3);
    ctx1.lineTo(122.5, 34.8);
    ctx1.lineTo(98.6, 58.7);
    ctx1.lineTo(98.6, 59.1);
    ctx1.lineTo(103.9, 64.4);
    ctx1.lineTo(128.0, 40.3);
    ctx1.closePath();
    ctx1.fill();

    // calque1/Trac
    ctx1.beginPath();
    ctx1.moveTo(128.1, 29.4);
    ctx1.lineTo(103.9, 5.3);
    ctx1.lineTo(98.6, 10.5);
    ctx1.lineTo(98.6, 11.0);
    ctx1.lineTo(122.5, 34.9);
    ctx1.lineTo(128.1, 29.4);
    ctx1.closePath();
    ctx1.fill();

    // calque1/Rectangle
    ctx1.beginPath();
    ctx1.moveTo(122.0, 29.4);
    ctx1.lineTo(128.1, 29.4);
    ctx1.lineTo(128.1, 40.3);
    ctx1.lineTo(122.0, 40.3);
    ctx1.lineTo(122.0, 29.4);
    ctx1.closePath();
    ctx1.fill();

    // calque1/Trac
    ctx1.beginPath();
    ctx1.moveTo(104.1, 64.2);
    ctx1.lineTo(98.7, 69.6);
    ctx1.lineTo(98.6, 58.7);
    ctx1.fill();

    // calque1/Trac
    ctx1.beginPath();
    ctx1.moveTo(104.1, 5.5);
    ctx1.lineTo(98.7, 0.1);
    ctx1.lineTo(98.6, 11.0);
    ctx1.fill();

    // calque1/Rectangle
    ctx1.beginPath();
    ctx1.moveTo(42.9, 52.7);
    ctx1.lineTo(50.2, 60.0);
    ctx1.lineTo(85.7, 24.6);
    ctx1.lineTo(78.4, 17.2);
    ctx1.lineTo(42.9, 52.7);
    ctx1.closePath();
    ctx1.fill();

    // calque1/Rectangle
    ctx1.beginPath();
    ctx1.moveTo(65.2, 34.2);
    ctx1.lineTo(58.6, 40.9);
    ctx1.lineTo(88.9, 71.2);
    ctx1.lineTo(95.5, 64.5);
    ctx1.lineTo(65.2, 34.2);
    ctx1.closePath();
    ctx1.fill();

    // calque1/Rectangle
    ctx1.beginPath();
    ctx1.moveTo(44.2, 15.8);
    ctx1.lineTo(40.2, 19.8);
    ctx1.lineTo(62.3, 42.0);
    ctx1.lineTo(66.4, 38.0);
    ctx1.lineTo(44.2, 15.8);
    ctx1.closePath();
    ctx1.fill();

    // calque1/Trac
    ctx1.beginPath();
    ctx1.moveTo(40.3, 7.7);
    ctx1.bezierCurveTo(40.3, 7.7, 43.6, 4.2, 47.3, 3.6);
    ctx1.bezierCurveTo(51.4, 2.9, 53.2, 3.2, 55.8, 3.9);
    ctx1.bezierCurveTo(58.3, 4.6, 59.2, 6.1, 59.2, 6.1);
    ctx1.bezierCurveTo(59.2, 6.1, 55.7, 5.7, 53.9, 6.1);
    ctx1.bezierCurveTo(51.5, 6.7, 50.1, 7.6, 48.8, 9.6);
    ctx1.bezierCurveTo(47.9, 11.1, 48.0, 16.0, 48.0, 16.0);
    ctx1.lineTo(45.1, 18.9);
    ctx1.lineTo(40.1, 23.8);
    ctx1.bezierCurveTo(40.1, 23.8, 39.5, 23.1, 38.1, 23.1);
    ctx1.bezierCurveTo(36.7, 23.1, 34.9, 25.5, 34.9, 25.5);
    ctx1.lineTo(35.1, 30.0);
    ctx1.lineTo(32.1, 33.1);
    ctx1.lineTo(23.9, 25.0);
    ctx1.lineTo(27.0, 21.9);
    ctx1.bezierCurveTo(27.0, 21.9, 29.2, 22.9, 30.9, 21.7);
    ctx1.bezierCurveTo(32.6, 20.4, 34.4, 18.4, 33.7, 17.1);
    ctx1.bezierCurveTo(32.9, 15.8, 32.6, 15.2, 32.6, 15.2);
    ctx1.lineTo(40.3, 7.7);
    ctx1.closePath();
    ctx1.fill();

    // calque1/Trac
    ctx1.beginPath();
    ctx1.moveTo(89.8, 7.9);
    ctx1.bezierCurveTo(89.8, 7.9, 84.5, 11.1, 83.3, 12.8);
    ctx1.bezierCurveTo(82.8, 13.6, 82.5, 15.5, 82.7, 16.4);
    ctx1.bezierCurveTo(83.1, 17.8, 84.4, 20.3, 86.6, 20.6);
    ctx1.bezierCurveTo(89.1, 20.8, 90.6, 19.5, 90.6, 19.5);
    ctx1.lineTo(96.1, 14.4);
    ctx1.lineTo(97.0, 19.4);
    ctx1.bezierCurveTo(97.0, 19.4, 94.0, 24.6, 90.7, 25.8);
    ctx1.bezierCurveTo(87.5, 26.9, 83.3, 26.0, 83.3, 26.0);
    ctx1.lineTo(77.2, 19.1);
    ctx1.bezierCurveTo(77.2, 19.1, 76.4, 15.8, 77.4, 12.7);
    ctx1.bezierCurveTo(78.2, 10.1, 80.3, 8.6, 81.7, 7.7);
    ctx1.bezierCurveTo(82.2, 7.3, 84.5, 6.4, 84.5, 6.4);
    ctx1.fill();

    // calque1/Trac
    ctx1.beginPath();
    ctx1.moveTo(38.3, 69.3);
    ctx1.bezierCurveTo(38.3, 69.3, 43.7, 66.1, 44.9, 64.3);
    ctx1.bezierCurveTo(45.4, 63.6, 45.7, 61.7, 45.4, 60.8);
    ctx1.bezierCurveTo(45.0, 59.4, 43.8, 56.9, 41.6, 56.6);
    ctx1.bezierCurveTo(39.1, 56.4, 37.6, 57.7, 37.6, 57.7);
    ctx1.lineTo(32.1, 62.8);
    ctx1.lineTo(31.2, 57.8);
    ctx1.bezierCurveTo(31.2, 57.8, 34.1, 52.6, 37.4, 51.4);
    ctx1.bezierCurveTo(40.6, 50.3, 44.9, 51.2, 44.9, 51.2);
    ctx1.lineTo(51.0, 58.1);
    ctx1.bezierCurveTo(51.0, 58.1, 51.7, 61.4, 50.8, 64.5);
    ctx1.bezierCurveTo(50.0, 67.0, 47.9, 68.6, 46.5, 69.5);
    ctx1.bezierCurveTo(46.0, 69.9, 43.6, 70.8, 43.6, 70.8);
    ctx1.fill();
    ctx1.restore();
}

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

function overLogo(e) {
    drawLogo(white);
}

function outLogo(e) {
    drawLogo(red);
}

function overHamburger() {
    drawHamburger(white);
}

function outHamburger() {
    drawHamburger(red);
}
