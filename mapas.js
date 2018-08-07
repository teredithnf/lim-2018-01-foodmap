
const map = new google.maps.Map(document.getElementById('mapCanvas'),{
    center:{
        lat: -12.1453636,
        lng : -77.0241353
    },
    zoom :15
});

var marker = new google.maps.Marker({
    position:{
        lat: -12.1453636,
        lng : -77.0241353
    },
    map :map,
    draggable:true

});

var searchBox = new google.maps.places.SearchBox(document.getElementById('mapsearch'));

google.maps.event.addListener(searchBox, 'places_changed', function() {

    var places = searchBox.getPlaces();

    var bounds = new google.maps.LatLngBounds();
    var i,place;
    for(i=0; place=places[i];i++){
        bounds.extend(place.geometry.location);
        marker.setPosition(place.geometry.location);     
    }
    map.fitBounds(bounds);
    map.setZoom(15);
});

// https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters

// https://maps.googleapis.com/maps/api/place/findplacefromtext/json?parameters

// https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=mongolian%20grill&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=YOUR_API_KEY

// https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=YOUR_API_KEY