"use strict";
class Calculadora {
    constructor() {
        this.pantalla = "";
        this.memoria= "0";
        this.actualizar();
    }

    igual(){
        try { 
            this.pantalla=eval(this.pantalla);
            this.actualizar();
        }
        catch(err) {
            document.getElementById('pantalla').value = "Error = " + err;
        } 
    }

    actualizar() {
        var display = document.getElementById('pantalla');
        display.value = this.pantalla;
    }

    borrar(){
        this.pantalla = "";
        this.actualizar();
    }

    digitos(dígito){
        this.pantalla += dígito;
        this.actualizar();
    }

    suma(){
        this.pantalla += '+';
        this.actualizar();
    }

    resta(){
        this.pantalla += '-';
        this.actualizar();
    }

    multiplicacion(){
        this.pantalla += '*';
        this.actualizar();
    }

    division(){
        this.pantalla += '/';
        this.actualizar();
    }

    punto(){
        this.pantalla += '.';
        this.actualizar();
    }

    mrc(){
        this.pantalla=eval(this.memoria);
        this.actualizar();
        this.memoria = "0";
    }

    mMenos(){
        this.memoria+='-';
        this.memoria+=document.getElementById('pantalla').value;
        this.actualizar();
    }

    mMas(){
        this.memoria+='+';
        this.memoria+=document.getElementById('pantalla').value;
        this.actualizar();
    }
    
}
var calculadora = new Calculadora();