"use strict";
class PilaLIFO { 
    constructor (nombre){ 
        this.nombre = nombre;
        this.pila = new Array();
    }
    apilar(valor){
        this.pila.push(valor);
    }
    desapilar(){
        return (this.pila.pop());
    }
    mostrar(){
        var stringPila = this.nombre;
        for (let i = this.pila.length - 1 ; i >= 0; i--) {
            var indexReal = i+1;
            stringPila += "\nElemento " + indexReal + " : " + this.pila[i];
        }
        return stringPila;
    }
    reiniciarPila(){
        this.pila = new Array();
    }
}

class CalculadoraRPN {
    constructor() {
        this.pantalla = "";
        this.memoria= "0";
        this.actualizar();
    }

    añadirAPila(){
        try { 
            pilaLifo.apilar(this.pantalla);
            this.actualizar();
            this.pantalla = "";
            this.actualizar();
        }
        catch(err) {
            document.getElementById('pantalla').value = "Error = " + err;
        } 
    }

    actualizar() {
        var display = document.getElementById('mostrarPila');
        display.value = pilaLifo.mostrar();
        var screen = document.getElementById('pantalla');
        screen.value = this.pantalla;
    }

    borrar(){
        this.pantalla = "";
        this.actualizar();
    }

    dígitos(dígito){
        this.pantalla += dígito;
        this.actualizar();
    }

    realizarOperacion(operacion){
        var resultadoOperacion;
        switch(operacion){
            case '+':
                var operando1 = parseFloat(pilaLifo.desapilar());
                var operando2 = parseFloat(pilaLifo.desapilar());
                resultadoOperacion =  operando2 + operando1;
                pilaLifo.apilar(resultadoOperacion);
                break;
            case '-':
                var operando1 = parseFloat(pilaLifo.desapilar());
                var operando2 = parseFloat(pilaLifo.desapilar());
                resultadoOperacion =  operando2 - operando1;
                pilaLifo.apilar(resultadoOperacion);
                break;
            case '/':
                var operando1 = parseFloat(pilaLifo.desapilar());
                var operando2 = parseFloat(pilaLifo.desapilar());
                resultadoOperacion =  operando2 / operando1;
                pilaLifo.apilar(resultadoOperacion);
                break;
            case '*':
                var operando1 = parseFloat(pilaLifo.desapilar());
                var operando2 = parseFloat(pilaLifo.desapilar());
                resultadoOperacion =  operando2 * operando1;
                pilaLifo.apilar(resultadoOperacion);
                break;
            case 'sin':
                var operando1 = parseFloat(pilaLifo.desapilar());
                resultadoOperacion =  Math.sin(operando1);
                pilaLifo.apilar(resultadoOperacion);
                break;
            case 'cos':
                var operando1 = parseFloat(pilaLifo.desapilar());
                resultadoOperacion =  Math.cos(operando1);
                pilaLifo.apilar(resultadoOperacion);
                break;
            case 'tan':
                var operando1 = parseFloat(pilaLifo.desapilar());
                resultadoOperacion =  Math.tan(operando1);
                pilaLifo.apilar(resultadoOperacion);
                break;
            case 'log10':
                var operando1 = parseFloat(pilaLifo.desapilar());
                resultadoOperacion =  Math.log10(operando1);
                pilaLifo.apilar(resultadoOperacion);
                break;
            case 'log2':
                var operando1 = parseFloat(pilaLifo.desapilar());
                resultadoOperacion =  Math.log2(operando1);
                pilaLifo.apilar(resultadoOperacion);
                break;
            case 'exp':
                var operando1 = parseFloat(pilaLifo.desapilar());
                resultadoOperacion =  Math.exp(operando1);
                pilaLifo.apilar(resultadoOperacion);
                break;
            case 'sqrt':
                var operando1 = parseFloat(pilaLifo.desapilar());
                resultadoOperacion =  Math.sqrt(operando1);
                pilaLifo.apilar(resultadoOperacion);
                break;
            case 'cambioSigno':
                var operando1 = parseFloat(pilaLifo.desapilar());
                resultadoOperacion =  (-1)*operando1;
                pilaLifo.apilar(resultadoOperacion);
                break;
            case 'cuadrado':
                var operando1 = parseFloat(pilaLifo.desapilar());
                resultadoOperacion =  Math.pow(operando1,2);
                pilaLifo.apilar(resultadoOperacion);
                break;
            case 'elevarXaY':
                var operando1 = parseFloat(pilaLifo.desapilar());
                var operando2 = parseFloat(pilaLifo.desapilar());
                resultadoOperacion =  Math.pow(operando2, operando1);
                pilaLifo.apilar(resultadoOperacion);
                break;
            case 'elevarA10':
                var operando1 = parseFloat(pilaLifo.desapilar());
                resultadoOperacion =  Math.pow(10, operando1);
                pilaLifo.apilar(resultadoOperacion);
                break;
            case 'factorial':
                var operando1 = parseFloat(pilaLifo.desapilar());
                resultadoOperacion =  this.factorialAux(operando1);
                pilaLifo.apilar(resultadoOperacion);
                break;
        }
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
    reiniciarPila(){
        pilaLifo.reiniciarPila();
        this.actualizar();
    }
    borrarUltimoNumero(){
        pilaLifo.desapilar();
        this.actualizar();
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
}


var pilaLifo = new PilaLIFO("Pila de la calculadora RPN: ");
var calculadora = new CalculadoraRPN();



