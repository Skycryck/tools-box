
var liens = [
    {
        label: "ACCUEIL",
        lien: "../index.html",
    },
    {
        label: "CALCULETTE",
        lien: "./calculette.html",
    },
    {
        label: "CONVERTISSEUR",
        lien: "./convertisseur.html",
    },
    {
        label: "ASCII",
        lien: "./ascii.html",
    },
    {
        label: "CARTE",
        lien: "./js.html",
    },
    {
        label: "CONTACT",
        lien: "./contact.html",
    }
];

var res = document.createElement("ul");
document.querySelector("article").appendChild(res);
res.id = "res";


function rechercher() {
    removeRes();
    var recherche = document.getElementById("search").value.toUpperCase();
    addList(sortList(liens, recherche));
}

//Prend une liste en parametre et retourne cette meme liste ranger en fonction des indices "rank" de cette liste
//Trie par selection
function sortList(list, recherche) {
    for(var i = 0; i < list.length; i++) {
        for(var j = i + 1; j < list.length; j++) {
            if(getScore(list[i].label , recherche) < getScore(list[j].label, recherche)) {
                var temp = list[j];
                list[j] = list[i];
                list[i] = temp;
            }
        }
    }
    return list;
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

//Efface les resultats de la recherche precedente
function removeRes() {
    var res = document.getElementById("res");
    if(res.hasChildNodes()) {
        while(res.firstChild) { //Retire le 1er enfant de res, tant que res contient un 1er enfant
            res.removeChild(res.firstChild);
        }
    }
}

//Prend deux mot en parametre et retourne un score plus le score est eleve plus les mots sont similaires
function getScore(mot, recherche) {
    var score = 0;
    if(mot == recherche)
        score += 100;
    for(var i = 0; i < 20; i++) {
        switch (nbCharComun(mot, recherche)) {
            case i: score += i;
        }
    }
    return score;
}

//Retourne le nombre de caracteres en commun entre motA et motB
function nbCharComun(motA, motB) {
    var cpt = 0;
    for(var i = 0; i < motA.length; i++) {
        var charTester = motA[i];
        if(motB.includes(charTester))
            cpt++;
    }
    return cpt;
}
