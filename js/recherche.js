
var elements = [
    {
        label: "ACCUEIL",
        lien: "../index.html"
    },
    {
        label: "CALCULETTE",
        lien: "./calculette.html"
    },
    {
        label: "CONVERTISSEUR",
        lien: "./convertisseur.html"
    },
    {
        label: "ASCII",
        lien: "./ascii.html" 
    },
    {
        label: "CARTE",
        lien: "./js.html" 
    },
    {
        label: "CONTACT",
        lien: "./contact.html"
    }
];

var resultats = document.createElement("ul");
resultats.id = "res";
var recherche = document.getElementById("search");

function rechercher() {
    var recherche = document.getElementById("search").value.toUpperCase();
    creationListe(elements);
}

function creationListe(liste) {
    //document.parentNode.removeChild(resultats);
    for(var i = 0; i < liste.length; i++) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.textContent = liste[i].label;
        a.href = liste[i].lien;
        li.appendChild(a);
        resultats.appendChild(li);
    }
    document.querySelector("article").appendChild(resultats);
}

function rankListe(liste, recherche) {
    var rankElements;
    var found = -1;
    for(var i = 0; i < liste.length; i++) {
        if(recherche.includes(liste[i].label)) {
            rankElements.push(liste[i]);
            found = i;
        }
    }
    
    for(var i = 0; i < liste.length; i++) {
        if(i != found)
            rankElements.push(liste[i]);
    }
    return rankElements;
}

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