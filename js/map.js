var map;
var markers = [];

var toggle = document.getElementById("toggle");
addLegend();

//Initialisation de la carte
function initMap() {
    var latitude;
    var longitude;
    
    if (!navigator.geolocation) //Verifie si le navigateur est compatible avec la geolocalisation
    {
        navigator.geolocation.getCurrentPosition(function(position)
        {
            latitude = round(position.coords.latitude).toString();
            longitude = round(position.coords.longitude).toString();
            console.log("Latitude : " + latitude + ", longitude : " + longitude);
        });
    }
    else { //Si le navigateur n'est pas compatible avec la geolocalisation
        latitude = 46.1558;
        longitude = -1.1532;
        alert("Votre navigateur ne prend pas en compte la géolocalisation HTML5");
    }
    
    var uluru = {
        lat: latitude, 
        lng: longitude
    };
    
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });

    var script = document.createElement('script');
    script.src = '../js/stations.json';
    document.getElementsByTagName('head')[0].appendChild(script);
}

window.stations = function(results) {
    for (var i = 0; i < results.features.length; i++) {
        var coords = results.features[i].geometry.coordinates;
        var latLng = new google.maps.LatLng(coords[1],coords[0]);
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
        });
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png')
        markers.push(marker);
    }
    clearMarkers();
}

//Action toggle
function toggleSwitch() {
    if(toggle.checked === true) { //Si cocher alors affiche les marqueurs
        showMarkers();
        showLegend();
    }
    else { //Sinon efface les.
        clearMarkers();
        clearLegend();
    }
}

//Definie la map de tout les marker
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

//Efface tout les marker de la carte
function clearMarkers() {
  setMapOnAll(null);
}

//Affiche tout les marker sur la carte
function showMarkers() {
    setMapOnAll(map);
}

function round(number) {
  var factor = Math.pow(10, 4);
  return Math.round(number * factor) / factor;
}

function addLegend() {
    var legend = document.getElementById("legend");
    legend.style.width = "900px";
    legend.style.height = "175px";
    
    var ul = document.createElement("ul");
    
    var h3 = document.createElement("h3");
    h3.textContent = "Legende :";
    
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    
    var img1 = document.createElement("img");
    img1.src = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
    
    var text1 = document.createElement("p");
    text1.textContent = "Votre Position : ";
    
    li1.appendChild(text1);
    li1.appendChild(img1);
    li1.id = "location";
    
    var img2 = document.createElement("img");
    img2.src = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
    
    var text2 = document.createElement("p");
    text2.textContent = "Bornes éléctriques : ";
    
    li2.appendChild(text2);
    li2.appendChild(img2);
    li2.id = "borne";
    
    ul.appendChild(li1);
    ul.appendChild(li2);
    
    legend.appendChild(h3);
    legend.appendChild(ul);

    clearLegend();
}

function showLegend() {
    var legend = document.getElementById("borne");
    var location = document.getElementById("location");
    legend.classList.remove("borne-hidden");
    location.classList.remove("location-borne-hidden");
}

function clearLegend() {
    var legend = document.getElementById("borne");
    var location = document.getElementById("location");
    legend.classList.add("borne-hidden");
    location.classList.add("location-borne-hidden");
}