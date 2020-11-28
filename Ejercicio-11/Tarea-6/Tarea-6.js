'use strict';

class MapaDinamicoGoogle {
    constructor() {
        this.map;
        this.infowindow;
    }

    initMap() {
        var center = { lat: 43.3672702, lng: -5.8502461 };
        this.map = new google.maps.Map(document.getElementById('mapa'), { zoom: 10, center: center });
    }

    addMarker(){
      var latitudNueva = parseFloat($("#latitud").val());
      var longitudNueva = parseFloat($("#longitud").val());
      var informacion = $("#nombre").val();
      var latlng = new google.maps.LatLng(latitudNueva, longitudNueva);
      var marker = new google.maps.Marker({
        position: latlng,
        title: informacion,
        map: this.map
      });
      $('input').val('');
      (function (marker) {
        google.maps.event.addListener(marker, 'click', function () {
            if (!this.infowindow) {
                this.infowindow = new google.maps.InfoWindow();
            }
            this.infowindow.setContent(informacion);
            this.infowindow.open(this.map, marker);
        });
    })(marker);
    }
}
var mapaDinamicoGoogle = new MapaDinamicoGoogle();
