
var liens = [
    {
        label: "ACCUEIL",
        lien: "../index.html",
        description: "Accueil du site."
    },
    {
        label: "CALCULETTE",
        lien: "./calculette.html",
        description: "Calculatrice web qui permet d'ecrire ses calcul en expression informatique."
    },
    {
        label: "CONVERTISSEUR",
        lien: "./convertisseur.html",
        description: "Convertisseur de base vers, decimal hexadecimal et binaire."
    },
    {
        label: "ASCII",
        lien: "./ascii.html",
        description: "Table ascii complète"
    },
    {
        label: "CARTE",
        lien: "./js.html",
        description: "Carte de la rochelle, elle peut donner la localisation de borne de recharge pour les voitures éléctriques."
    },
    {
        label: "CONTACT",
        lien: "./contact.html",
        description: "Page de contact mail."
    },
];

//Est appeller au chargement de la page
window.onload = function() {
    var pos = document.location.href;
    var recherche;
    if(pos.includes("?")) {
        recherche = pos.substring(pos.lastIndexOf("?")+1, pos.length);
        addList(sortList(liens, recherche));
    }
}

//Fonction appeller lors d'un clic sur le bouton rechercher
function rechercher() {
    var recherche = document.getElementById("search").value.toUpperCase();
    var pos = document.location.href;
    if(!pos.includes("recherche.html")) {
        redirection(recherche);
    }
    else {
        removeRes();
        addList(sortList(liens, recherche));
    }
}

//Redirige le client vers la page de recherche et enregistre la valeur de la recherche dans l'url
function redirection(recherche) {
    var pos = document.location.href;
    if(pos.includes("index.html"))
        document.location.href = pos.substring(0,pos.lastIndexOf("/")) + "/pages/recherche.html?" + recherche;
    else
        document.location.href = pos.substring(0,pos.lastIndexOf("/")) + "/recherche.html?" + recherche;
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
    var res = document.createElement("ul");
    res.id = "res";
    for(var i = 0; i < liste.length; i++) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        var p = document.createElement("p");
        a.textContent = liste[i].label;
        a.href = liste[i].lien;
        p.textContent = liste[i].description;
        li.appendChild(a);
        li.appendChild(p);
        res.appendChild(li);
    }
    document.querySelector("article").appendChild(res);
}

//Efface les resultats de la recherche precedente
function removeRes() {
    var art = document.querySelector("article");
    if(art.hasChildNodes()) {
        while(art.firstChild) { //Retire le 1er enfant de res, tant que res contient un 1er enfant
            art.removeChild(art.firstChild);
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
