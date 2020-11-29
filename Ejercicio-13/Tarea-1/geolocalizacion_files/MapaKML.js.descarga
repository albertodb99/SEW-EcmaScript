'use strict';
class MapaKML {
    constructor() {
        this.map;
        this.polylines = [];
    }

    enseñarRutas() {
        var archivo = document.getElementById("subirArchivos").files[0];
        this.leerKML(archivo);
    }

    leerKML(archivo){
        if (archivo.name.toLowerCase().includes('.kml')) {
            var fr = new FileReader();
            fr.onload = async (event) => {
                this.map = new google.maps.Map(document.getElementById('mapa'), {
                    zoom: 8,
                    center:{lat: 43.3672702, lng: -5.8502461}
                });
                this.coordinates = await this.getCoordinates(event.target.result, this.map)
            }
            fr.readAsText(archivo);
        }
        else {
            alert("Error : El archivo no contiene una extensión válida (no es .kml)");
        }
    }

    async getCoordinates(string, map){
        var domParser = new DOMParser();
        var xmlConverted = domParser.parseFromString(string, "text/xml");
        console.log(xmlConverted);
        for (const polygon of xmlConverted.getElementsByTagName('Placemark')) {
            var coordinates = new Array();
            var coords = polygon.getElementsByTagName('coordinates');
            var points = coords[0].innerHTML.split("\n");
  
            for (const point of points) {
              let coord = point.split(",")
              var lat = coord[1];
              var lng = coord[0];
              if(lng != 0)
                coordinates.push({ lat: +lat, lng: +lng })
            }
            this.addPoly(coordinates, map);
          }
        return coordinates;
    }

    addPoly(coords, map) {
        const polyLine = new google.maps.Polyline({
            path: coords,
            geodesic: true,
            strokeColor: "#FF0000",
            strokeOpacity: 2.0,
            strokeWeight: 2,
        });
        polyLine.setMap(map);
    }

} 
var mapa = new MapaKML();
