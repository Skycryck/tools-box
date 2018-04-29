document.addEventListener('DOMContentLoaded', init, false);

//Affichage de la calculatrice
var field = document.getElementById("field");

var a  = 0;
var da = "";
var b  = 0;
var db = "";

var decimal = false;
var turn = true;
var op = "";

function init() {
    resetField();

    document.getElementById("reset").addEventListener("click", resetField);
    document.getElementById("equal").addEventListener("click", calculate);
    document.getElementById("virgule").addEventListener("click", virgule);

    let chiffres = document.querySelectorAll(".chiffres");
    let operateurs = document.querySelectorAll(".op");

    for(var i = 0; i < chiffres.length; i++) {
        chiffres[i].addEventListener("click", number);
    }

    for(var i = 0; i < operateurs.length; i++) {
        operateurs[i].addEventListener("click", setOp);
    }
}

//Reset la calculatrice
function resetField(e) {
    setField("0");
    op = "";
    a = 0;
    da = "";
    b = 0;
    db = "";
    decimal = false;
    turn = true;
}

//Retourne la valeur de l'affichage de la calculatrice
function getField() {
    return field.value;
}

//Definie l'affichage de la calculatrice
function setField(val) {
    field.value = val;
}

//Definie l'operation qui vas etre effctuer par la calculatrice
function setOp(e) {
    op = this.name;
    addToField(" " + op + " ");
    turn = !turn;
    decimal = false;
}

//Ajoutee la valeur du parametre a l'affichage de la calculatrice
function addToField(val) {
    field.value += val;
}

//Est appeller a chaque click sur un chiffre, definie les nombres et leurs affichages
function number(e) {
    let chiffre = this.name;
    if(turn) {
        if(a === 0) {
            if(decimal)
                da = chiffre;
            else
                a = chiffre;
        }
        else {
            if(decimal)
                da += chiffre;
            else
                a += chiffre;
        }
        setField(a);
        if(decimal)
            addToField("," + da);
    }
    else {
        if(b === 0) {
            if(decimal)
                db = chiffre;
            else
                b = chiffre;
        }
        else {
            if(decimal)
                db += chiffre;
            else
                b += chiffre;
        }
        addToField(chiffre);
    }
}

//Est appeller au click sur egale, fait le calcul final et l'affiche
function calculate(e) {
    let res = 0;
    let na = Number(a + "." + da);
    let nb = Number(b + "." + db);

    switch (op) {
        case "+":
            res = na + nb;
            break;
        case "-":
            res = na - nb;
            break;
        case "*":
            res = na * nb;
            break;
        case "/":
            res = na / nb;
            break;
    }
    console.log(na + " " + op + " " + nb + " = " + res);
    res = arrondir(res, 12); //Evite erreur de precision
    setField(res);
    a = Math.trunc(res);

    let x = res.toString().indexOf(".") + 1;
    da = res.toString().slice(x);
    b = "0";
    db = "";
    turn = true;
    decimal = false;
}

//Ajoute la virgule a l'affichage
function virgule(e) {
    addToField(",");
    decimal = true;
}

//Retourne nb arrondit avec p decimal
function arrondir(nb, p) {
    let f = Math.pow(10, p);
    return Math.round(nb * f) / f;
}
