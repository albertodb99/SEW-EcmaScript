'use strict';
class CargaFicheros {
    constructor() {

        if (window.File && window.FileReader && window.FileList && window.Blob) {
            //El navegador soporta el API File
            document.write("<p>Este navegador soporta el API File </p>");
        }
        else document.write("<p>¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!</p>");
    }

    leerArchivo(fichero) {
        var content = "<article id = \"" + fichero.name + "\">";
        content += "<h2>" + fichero.name + "</h2>";
        content += "<p>Nombre del fichero: " + fichero.name + "</p>";
        content += "<p>Tamaño del fichero: " + fichero.size + "</p>";
        content += "<p>Tipo del fichero: " + fichero.type + "</p>";
        content += "<p>Contenido: </p></article>";

        $("footer").before(content);
        var fr = new FileReader();
        fr.onload=function(event){ 
            document.getElementById(fichero.name).innerHTML += "<textarea disabled> \"" + fr.result + " \"</textarea>";
        } 
        fr.readAsText(fichero);
      }

      leerArchivos(){
        var nBytes = 0,
            archivos = document.getElementById("subirArchivos").files,
            nArchivos = archivos.length;
        for(var i = 0; i < nArchivos; i++){
            this.leerArchivo(archivos[i]);
            nBytes += archivos[i].size;
        }
        document.getElementById("numero").innerHTML = nArchivos;
        document.getElementById("tamaño").innerHTML = nBytes + " bytes";
      }
}
var cargador = new CargaFicheros();