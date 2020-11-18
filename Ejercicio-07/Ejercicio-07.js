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

    añadirVideo(){
        $(document).ready(function () {
            $("article").after("<div class = \"video-container\"><iframe src = \"https://www.youtube.com/watch?v=eogpIG53Cis\"></iframe></div>");
        });
    }
    
}

var manejador = new ManejoHTML();