var map;
var markers = [];

var toggle = document.getElementById("toggle");
clearLegend();

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


function showLegend() {
    var borne = document.getElementById("borne");
    borne.classList.remove("borne-hidden");
}

function clearLegend() {
    var borne = document.getElementById("borne");
    borne.classList.add("borne-hidden");
}