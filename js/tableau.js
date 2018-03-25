var positionElementInPage = $('#titre-table').offset().top;
//Appeller a chaque redimension de la fenetre de l'utilisateur
$( window ).resize(function() {
    positionElementInPage = $('#titre-table').offset().top;
});

//Appeller a chaque fois que l'utilisateur scroll.
$(window).scroll(function() {
    //Si la position du scroll depasse la position de la 1ere ligne du tableau
    if ($(window).scrollTop() + 150 > positionElementInPage) {
        //Fixe la 1er ligne du tableau
        style();
    } else {
        //Detache la 1er ligne du tableau
        $('#titre-table').removeClass("fixedTop");
    }
});

//Fonction qui change le style de la 1er ligne du tableau
function style() {
    //Passe la 1ère ligne du tableau en fixed
    $('#titre-table').addClass("fixedTop");
    //Recupère la largeur des cellules
    var largeur = document.querySelector("td").offsetWidth;
    //Recupère une liste des cellules de la 1ere ligne
    var th = document.querySelectorAll("th");
    //Parcours cette liste de cellules pour definir leurs largeurs
    var largeurTableau = document.querySelector(".tftable").offsetWidth;
    document.getElementById("titre-table").style.width = largeurTableau + "px";

    var largeurDec = document.getElementById("dec").offsetWidth;
    var largeurOct = document.getElementById("oct").offsetWidth;
    var largeurHexa = document.getElementById("hexa").offsetWidth;
    var largeurBin = document.getElementById("bin").offsetWidth;
    var largeurChar = document.getElementById("char").offsetWidth;

    var d = document.getElementById("colDec").style.width = largeurDec + "px";
    var o = document.getElementById("colOct").style.width = largeurOct + "px";
    var h = document.getElementById("colHexa").style.width = largeurHexa + "px";
    var b = document.getElementById("colBin").style.width = largeurBin + "px";
    var c = document.getElementById("colChar").style.width = largeurChar + "px";
}
