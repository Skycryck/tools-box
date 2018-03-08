
var elements = [
    {
        label: "ACCUEIL",
        lien: "../index.html",
        rank: -1
    },
    {
        label: "CALCULETTE",
        lien: "./calculette.html",
        rank: -1
    },
    {
        label: "CONVERTISSEUR",
        lien: "./convertisseur.html",
        rank: -1
    },
    {
        label: "ASCII",
        lien: "./ascii.html",
        rank: -1
    },
    {
        label: "CARTE",
        lien: "./js.html",
        rank: -1
    },
    {
        label: "CONTACT",
        lien: "./contact.html",
        rank: -1
    }
];

var res = document.createElement("ul");
document.querySelector("article").appendChild(res);
res.id = "res";


function rechercher() {
    removeRes();
    var recherche = document.getElementById("search").value.toUpperCase();
    //addList(rankList(elements, recherche));
    setRankList(recherche);
}

//Ajoute la liste des resultats de la recherche a la page
function addList(liste) {
    var res = document.getElementById("res");
    for(var i = 0; i < liste.length; i++) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.textContent = liste[i].label;
        a.href = liste[i].lien;
        li.appendChild(a);
        res.appendChild(li);
    }
    document.querySelector("article").appendChild(res);
}

//Prend en parametre une liste et une recherche et retourne la liste ranger en fonction de la recherche
function setRankList(recherche) {
    var found = []
    for(var i = 0; i < elements.length; i++) {
        if(recherche.includes(elements[i].label)) { //Si la recherche contient un mot egale a un des labels place l'element du label en 1er
            elements[i].rank = 0;
            found.push(i);
        }
    }
    
    for(var j = 0; j < elements.length; j++) {
        if(!found.includes(j-1)) {
            elements[j].rank = j;
        }
    }
    
    for(var k = 0; k < elements.length; k++) {
        console.log(elements[k].label + " " + elements[k].rank);
    }
}

//Retourne le nombre de caracteres en commun entre motA et motB
function nbCharComun(motA, motB) {
    var cpt = 0;
    var dejaTester = "";
    for(var i = 0; i < motA.length; i++) {
        var charTester = motA.charAt(i);
        if(motB.includes(charTester) && (!dejaTester.includes(charTester))) {
            cpt++;
            dejaTester = dejaTester + charTester;
        }
    }
    return cpt;
}

//Efface les resultats de la recherche precedente
function removeRes() {
    var res = document.getElementById("res");
    if(res.hasChildNodes()) {
        while(res.firstChild) { //Retire le 1er enfant de res, tant que res contient un 1er enfant
            res.removeChild(res.firstChild);
        }
    }
}

