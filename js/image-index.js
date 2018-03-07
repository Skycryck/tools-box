var filtre1 = document.getElementById("filtre1");
var filtre2 = document.getElementById("filtre2");

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");

function hoverFiltre(i) { 
    switch(i) { //i est le numero de l'image qui est en train d'etre survolee
        case 1: //Image n°1
            filtre1.classList.remove("filtre-hidden"); //Fait apparaitre la div qui sert de legend a l'image
            img1.classList.add("image-hover"); //Zoom l'image
            break;
        case 2: //Image n°2
            filtre2.classList.remove("filtre-hidden");
            img2.classList.add("image-hover");
            break;
    }
}

function outFiltre(i) {
    switch(i) { //i est le numero de l'image qui est en train d'etre survolee
    case 1: //Image n°1
        filtre1.classList.add("filtre-hidden");
        img1.classList.remove("image-hover");
        break;
    case 2: //Image n°2
        filtre2.classList.add("filtre-hidden");
        img2.classList.remove("image-hover");
        break;
    }
}
