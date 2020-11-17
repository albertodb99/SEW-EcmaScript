"use strict";
class CalculadoraCambioDeBases{
    calculateBase2(){
        var base10 = document.getElementById('base10');
        var base2 = document.getElementById('base2');
        base2.value = parseInt(base10.value).toString(2);
    }

    calculateBase4(){
        var base10 = document.getElementById('base10');
        var base4 = document.getElementById('base4');
        base4.value = parseInt(base10.value).toString(4);
    }

    calculateBase8(){
        var base10 = document.getElementById('base10');
        var base8 = document.getElementById('base8');
        base8.value = parseInt(base10.value).toString(8);
    }

    calculateBase16(){
        var base10 = document.getElementById('base10');
        var base16 = document.getElementById('base16');
        base16.value = parseInt(base10.value).toString(16).toUpperCase();
    }

    calculateBases(){
        this.calculateBase2();
        this.calculateBase4();
        this.calculateBase8();
        this.calculateBase16();
    }
}
var calculadora = new CalculadoraCambioDeBases();