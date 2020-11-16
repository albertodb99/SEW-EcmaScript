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

    dígitos(dígito){
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

class CalculadoraCientifica extends Calculadora{
    constructor(){
        super();
        this.shift = false;
    }

    factorial() {
        this.pantalla=this.factorialAux(parseFloat(this.pantalla));  
        this.actualizar();
    }

    factorialAux(num){
        if (num === 0) { 
            return 1; 
        }
        else { 
            return num * this.factorialAux(num - 1); 
        }
    }

    raizCuadrada(){
        try { 
            this.pantalla+="Math.sqrt(";
            this.actualizar();
        }
        catch(err) {
            document.getElementById('pantalla').value = "Error = " + err;
        } 
    }

    logaritmo(){
        try { 
            this.pantalla+="Math.log10(";
            this.actualizar();
        }
        catch(err) {
            document.getElementById('pantalla').value = "Error = " + err;
        } 
    }

    changeShift(){
        this.shift = true;
    }

    calculateSeno(){
        if(this.shift){
            this.arcoseno();
            this.shift = false;
        }else{
            this.seno();
        }
    }

    calculateCoseno(){
        if(this.shift){
            this.arcocoseno();
            this.shift = false;
        }else{
            this.coseno();
        }
    }

    calculateTangente(){
        if(this.shift){
            this.arcotangente();
            this.shift = false;
        }else{
            this.tangente();
        }
    }

    seno(){
        try { 
            this.pantalla+="Math.sin(";
            this.actualizar();
        }
        catch(err) {
            document.getElementById('pantalla').value = "Error = " + err;
        } 
    }

    arcoseno(){
        try { 
            this.pantalla+="Math.asin(";
            this.actualizar();
        }
        catch(err) {
            document.getElementById('pantalla').value = "Error = " + err;
        } 
    }

    arcocoseno(){
        try { 
            this.pantalla+="Math.acos(";
            this.actualizar();
        }
        catch(err) {
            document.getElementById('pantalla').value = "Error = " + err;
        } 
    }

    coseno(){
        try { 
            this.pantalla+="Math.cos(";
            this.actualizar();
        }
        catch(err) {
            document.getElementById('pantalla').value = "Error = " + err;
        } 
    }

    tangente(){
        try { 
            this.pantalla+="Math.tan(";
            this.actualizar();
        }
        catch(err) {
            document.getElementById('pantalla').value = "Error = " + err;
        } 
    }

    arcotangente(){
        try { 
            this.pantalla+="Math.atan(";
            this.actualizar();
        }
        catch(err) {
            document.getElementById('pantalla').value = "Error = " + err;
        } 
    }

    elevarAlCuadrado(){
        try { 
            this.pantalla=Math.pow(eval(this.pantalla),2);
            this.actualizar();
        }
        catch(err) {
            document.getElementById('pantalla').value = "Error = " + err;
        } 
    }

    exponencial(){
        try { 
            this.pantalla+="Math.exp(";
            this.actualizar();
        }
        catch(err) {
            document.getElementById('pantalla').value = "Error = " + err;
        } 
    }

    diezElevadoA(){
        try { 
            this.pantalla+="Math.pow(10,";
            this.actualizar();
        }
        catch(err) {
            document.getElementById('pantalla').value = "Error = " + err;
        } 
    }

    cambiarSigno(){
        try { 
            this.pantalla = eval(this.pantalla * (-1));

            this.actualizar();
        }
        catch(err) {
            document.getElementById('pantalla').value = "Error = " + err;
        } 
    }

    borrarUltimoCaracter(){
        try{
            this.pantalla = this.pantalla.substring(0, this.pantalla.length - 1);
            this.actualizar();
            }catch(exception){
                this.pantalla=this.pantalla+"";
                this.borrarUltimoCaracter();
            }
    }

    borrarUltimoNumero(){

    }
}

var calculadora = new CalculadoraCientifica();