var map;
function initialize () {
    var center = new google.maps.LatLng(-12.1453636,-77.0241353)
    map = new google.maps.Map(document.getElementById('map'),{
        center: center;
        zoom:13
    });
    const request = {
        location:center,
        radius: 8047,
        types: ['cafe']
    };
    var service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, callback);   
    }

const callback = (results, status) =>{
    if(status == google.maps.places.PlacesService.ok){
        for(var i = 0; i < results.length; i++){
            createMarker(results[i]);
        }
    }
}

const createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });
}
google.maps.event.addDomListener(window, 'load',initialize)
