'use strict';

class MapaDinamicoGoogle {
    constructor() {
        this.map;
        this.infowindow;
    }

    initMap() {
        var center = { lat: 43.3672702, lng: -5.8502461 };
        this.map = new google.maps.Map(document.getElementById('mapa'), { zoom: 10, center: center });
        var marcador = new google.maps.Marker({position:center,map:this.map});
    }

}
var mapaDinamicoGoogle = new MapaDinamicoGoogle();




//var mapaDinamicoGoogle = new Object();
//function initMap(){
//    var oviedo = {lat: 43.3672702, lng: -5.8502461};
//    var mapaOviedo = new google.maps.Map(document.getElementById('mapa'),{zoom: 8,center:oviedo});
//    var marcador = new google.maps.Marker({position:oviedo,map:mapaOviedo});
//}
//mapaDinamicoGoogle.initMap = initMap;
