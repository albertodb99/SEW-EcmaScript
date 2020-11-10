"use strict";
class Calculadora {
    constructor() {
        this.display = "";
        this.memoria= "0";
        this.actualizar();
    }

    calculate(){
        try { 
            this.display=eval(this.display);
            this.actualizar();
        }
        catch(err) {
            document.getElementById('display').value = "Error = " + err;
        } 
    }

    actualizar() {
        var pantalla = document.getElementById('display');
        pantalla.value = this.display;
    }

    clear(){
        this.display = "";
        this.actualizar();
    }

    createButton(button){
        this.display += button;
        this.actualizar();
    }

    createMemRC(){
        this.display=eval(this.memoria);
        this.actualizar();
        this.memoria = "0";
    }

    createMem(operator){
        this.memoria+=operator;
        this.memoria+=document.getElementById('display').value;
        this.actualizar();
    }
    
}
var calculadora = new Calculadora();