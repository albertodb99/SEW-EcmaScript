"use strict";
class Ejercicio14 {
    constructor (){
        this.canvas = document.getElementById('canvas');
        this.canvas1 = this.canvas.getContext('2d');
    }

    pantallaCompleta(){ 
        if (!document.fullscreenElement) {
            var i=document.getElementById("canvas");
            if (i.requestFullscreen) {
                i.requestFullscreen();
            } else if (i.webkitRequestFullscreen) {
                i.webkitRequestFullscreen();
            } else if (i.mozRequestFullScreen) {
                i.mozRequestFullScreen();
            } else if (i.msRequestFullscreen) {
                i.msRequestFullscreen();
            }
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen(); 
          }
        }         
    }

    añadirCorazon(){
        this.canvas1.fillStyle = "rgba(200, 0, 0, 0.5)";
        this.canvas1.beginPath();
        this.canvas1.moveTo(75, 250);
        this.canvas1.bezierCurveTo(75, 247, 70, 235, 50, 235);
        this.canvas1.bezierCurveTo(20, 235, 20, 272.5, 20, 272);
        this.canvas1.bezierCurveTo(20, 290, 40, 312, 75, 330);
        this.canvas1.bezierCurveTo(110, 312, 130, 290, 130, 272);
        this.canvas1.bezierCurveTo(130, 272.5, 130, 235, 100, 235);
        this.canvas1.bezierCurveTo(85, 235, 75, 247, 75, 250);
        this.canvas1.closePath();
        this.canvas1.fill();
    }

    añadeTexto(){
        var texto = document.getElementById("textoAAñadir").value;
        this.canvas1.font = 'italic 40px sans-serif';
        this.canvas1.strokeStyle = "rgba(255, 0, 0, 1)";
        this.canvas1.strokeText(texto, 150, 300);
    }

    añadirEstrella(){
        this.canvas1.fillStyle = "rgba(200, 0, 0, 0.5)";
        this.canvas1.beginPath();
        this.canvas1.moveTo(108, 0.0);
        this.canvas1.lineTo(141, 70);
        this.canvas1.lineTo(218, 78.3);
        this.canvas1.lineTo(162, 131);
        this.canvas1.lineTo(175, 205);
        this.canvas1.lineTo(108, 170);
        this.canvas1.lineTo(41.2, 205);
        this.canvas1.lineTo(55, 131);
        this.canvas1.lineTo(1, 78);
        this.canvas1.lineTo(75, 68);
        this.canvas1.lineTo(108, 0);
        this.canvas1.closePath();
        this.canvas1.fill()
    }
    
    async cargarArchivo(){
     var img = new Image()
    , f = document.getElementById("subirArchivos").files[0]
    , url = window.URL || window.webkitURL
    , src = url.createObjectURL(f);

    img.src = src;
    img.onload = (evento) => {
        this.canvas.height = this.canvas.width * (img.height / img.width);

        // step 1 - resize to 50%
        var oc = document.createElement('canvas'),
            octx = oc.getContext('2d');
    
        oc.width = img.width * 0.5;
        oc.height = img.height * 0.5;
        octx.drawImage(img, 0, 0, oc.width, oc.height);
    
        // step 2
        octx.drawImage(oc, 0, 0, oc.width * 0.5, oc.height * 0.5);
    
        // step 3, resize to final size
        this.canvas1.drawImage(oc, 0, 0, oc.width * 0.5, oc.height * 0.5,
        0, 0, canvas.width, canvas.height);
        //this.canvas1.drawImage(img,0,0);
        url.revokeObjectURL(src);
    }
}
   
}
var loader = new Ejercicio14();