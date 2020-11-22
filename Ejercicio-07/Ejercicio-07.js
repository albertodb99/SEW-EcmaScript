"use strict";
class ManejoHTML {
    constructor() { }

    ocultarLista() {
        $(document).ready(function () {
            $("ul").hide();
        });
    }

    mostrarLista() {
        $(document).ready(function () {
            $("ul").show();
        });
    }

    eliminarEncabezadosInnecesarios() {
        $(document).ready(function () {
            $("h3").remove();
            $("h4").remove();
        });
    }

    añadirEnlacesDeInteres(){
        $(document).ready(function () {
            $("article").after("<article>"
            +"<h2>Otros enlaces de interés</h2>"
            + "<ul>"
            + "<li>"
            + "<a href = \"http://www.sensacine.com/peliculas/pelicula-1975/#:~:text=Rick%20Deckard%20(Harrison%20Ford)%20es,corta%20existencia%20de%20cuatro%20a%C3%B1os.\"> Información en SensaCine </a>"
            + "</li>"
            + "<li>"
            + "<a href = \"https://www.filmaffinity.com/es/film358476.html\"> Información en FilmAffinity </a>"
            + "</li>"
            + "<li>"
            + "<a href = \"https://www.imdb.com/title/tt0083658/\"> Información en IMDB </a>"
            + "</li>"
            + "</ul>"
            + "</article>");
        });
    }

    cambiaEncabezado2(){
        var textoACambiar = $("#cambiaH2").val();
        var h2cambiar =  $("#h2cambiar").val();
        $("#h2cambiar").text(textoACambiar);
        $("#cambiaH2").val("");
    }

    sumarFilasYColumnas(){
        var nFilas = $("#tabla tr").length;
        var nColumnas = $("#tabla tr:last td").length;
        $("table").before("<p>La tabla tiene " + nFilas +" filas y " + nColumnas + " columnas. Su suma es: " + (nFilas + nColumnas) + "</p>")
    }
    
}

var manejador = new ManejoHTML();