
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        navigator.geolocation.getCurrentPosition (onPlacesSuccess, onPlacesError, { enableHighAccuracy: true });
    }
};

app.initialize();

var onPlacesSuccess = function (position) {
//Se obtienen las coordenadas
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
   
    create_map(Latitude, Longitude);
    alert("Latitude" + Latitude + "Longitude" + Longitude);
}

//Se crea el mapa con Google Maps JavaScript API
function create_map(Latitude, Longitude){
    var latLong = new google.maps.LatLng(Latitude, Longitude);

    var mapOptions = {
        center: latLong,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    var Map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
    document.getElementById("Longitude").innerHTML = Latitude;
    document.getElementById("Latitude").innerHTML = Longitude; 
}

function onPlacesError(error) {
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}