'use strict';
class MapaGeoJSON {
    constructor() {
    }

    enseñarRutas() {
        var archivo = document.getElementById("subirArchivos").files[0];
        if (archivo.name.toLowerCase().includes('.geojson')) {
            var fr = new FileReader();
            fr.onload = function (evento) {
                var map = new google.maps.Map(document.getElementById('mapa'), {
                    zoom: 8,
                    center:{lat: 43.3672702, lng: -5.8502461}
                });
                var file = JSON.parse(fr.result);
                map.data.addGeoJson(file);
            }
            fr.readAsText(archivo);
        }
        else {
            alert("Error : El archivo no contiene una extensión válida (no es .JSON)");
        }
    }
}
var mapa = new MapaGeoJSON();
