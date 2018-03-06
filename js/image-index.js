var filtre1 = document.getElementById("filtre1");
var filtre2 = document.getElementById("filtre2");

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");

function hoverFiltre1() {
    filtre1.classList.remove("filtre-hidden");
    img1.classList.add("image-hover");
}

function outFiltre1() {
    filtre1.classList.add("filtre-hidden");
    img1.classList.remove("image-hover");
}

function hoverFiltre2() {
    filtre2.classList.remove("filtre-hidden");
    img2.classList.add("image-hover");
}

function outFiltre2() {
    filtre2.classList.add("filtre-hidden");
    img2.classList.remove("image-hover");
}