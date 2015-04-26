function loadXMLDoc()
{
    var k = document.getElementById("change_text");
    k.innerHTML = "hhhhhh";
}


function loadDemo() {
    if (navigator.geolocation) {
        document.getElementById("support").innerHTML = "Geolocation supported."
    } else {
        document.getElementById("support").innerHTML = "Geolocation isn't supported."
    }
}

function updateLocation(position){
    var latitude = document.getElementById("latitude");
    var longitude = document.getElementById("longitude");
    var accuracy = document.getElementById("accuracy");
    var timestamp = document.getElementById("timestamp");

    latitude.innerHTML = "latitude: "+position.coords.latitude;
    longitude.innerHTML = "longitude: "+position.coords.longitude;
    accuracy.innerHTML = "accuracy: "+position.coords.accuracy;
    timestamp.innerHTML = "timestamp: "+position.coords.timestamp;

}

function handleLocationError(error){
    switch (error.code){
        case 0:
            updateStatus("There was an error while retrieving your location: "+error.message);
            break;
        case 1:
            updateStatus("The user pervented this page from retrieving a location.");
            break;
        case 2:
            updateStatus("The browser was unable to determine your location: "+error.message);
            break;
        case 3:
            updateStatus("The browser timed out before retrieving the location.");
            break;
    }
}

function updateStatus(str){
    var timestamp = document.getElementById("timestamp");
    timestamp.innerHTML = str;
}

function updateLocation(position){
    var latitude = document.getElementById("latitude");
    var longitude = document.getElementById("longitude");
    var accuracy = document.getElementById("accuracy");
    var timestamp = document.getElementById("timestamp");

    latitude.innerHTML = "latitude: "+position.coords.latitude;
    longitude.innerHTML = "longitude: "+position.coords.longitude;
    accuracy.innerHTML = "accuracy: "+position.coords.accuracy;
    timestamp.innerHTML = "timestamp: "+position.coords.timestamp;

}

