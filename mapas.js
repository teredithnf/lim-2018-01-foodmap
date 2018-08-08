
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

const container = document.getElementById('container');
const body = document.getElementById('body');
setTimeout(function(){
    container.classList.add('cerrar');
    body.classList.remove('hiden');
    body.classList.add('show');
},2000);

