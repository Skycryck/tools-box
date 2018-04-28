var map;
var markers = [];

var toggle = document.getElementById("toggle");
clearLegend();

//Initialisation de la carte
function initMap() {
    var def = {
        lat: 46.1558,
        lng: -1.1532
    };

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: def
    });

    //Si la geolocalisation html5 est dispo
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            map.setCenter(pos);

            var marker = new google.maps.Marker({
                position: pos,
                map: map
            });
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    }
    //Sinon position par defaut
    else {
        var marker = new google.maps.Marker({
            position: def,
            map: map
        });
    }

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

//Affiche la legende suplementaire
function showLegend() {
    var borne = document.getElementById("borne");
    borne.classList.remove("borne-hidden");
}

//Cache la legende
function clearLegend() {
    var borne = document.getElementById("borne");
    borne.classList.add("borne-hidden");
}
