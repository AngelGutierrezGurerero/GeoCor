
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

    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;

    create_map(Latitude, Longitude);

}

function create_map(Latitude, Longitude){
    var latLong = new google.maps.latLng(Latitude, Longitude);
    var mapOptions = {
        center: latLong,
        zoom: 11,
        mapTypeId: google.maps.mapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

function onPlacesError(error) {
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}