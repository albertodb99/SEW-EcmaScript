"use strict";
class CalculadoraPolaca{
    constructor(){
        this.numero="";
        this.stack=new Stack();
    }

    actualizar(){
        
        var p1 = document.getElementById("display2");
        
        p1.value = this.stack.peek();

        var p2 = document.getElementById("display1");
        
       
        p2.value = this.stack.doblePeek();

        var p3 = document.getElementById("display3");
       
        p3.value=this.numero;
    }
    addDigit(numero){
        this.numero=this.numero+numero;
        this.actualizar();
    
    }
    operar(operacion){
        var result;
        switch(operacion){
            case '+':          
            result=parseInt(this.stack.pop())+parseInt(this.stack.pop());
            this.stack.push(result);
            break;
            case '-':          
            result=this.stack.pop()-this.stack.pop();
            this.stack.push(result);
            break;
            case '/':          
            result=this.stack.pop()/this.stack.pop();
            this.stack.push(result);
            break;
            case '*':          
            result=this.stack.pop()*this.stack.pop();
            this.stack.push(result);
            break;
            case '*':          
            result=this.stack.pop()*this.stack.pop();
            this.stack.push(result);
            break;
            case 'CE':          
            this.stack.pop();  
            break;
            case 'C':          
            this.stack=new Stack();
            break;
            case 'add':
            if(this.numero===""){}else{
            this.stack.push(this.numero);
            this.numero="";
            }
            break;
            case 'sen':          
            this.stack.push(Math.sin(this.stack.pop()));
            break;
            case 'cos':          
            this.stack.push(Math.cos(this.stack.pop()));
            break;
            case 'tan':          
            this.stack.push(Math.tan(this.stack.pop()));
            case 'exp':          
            this.stack.push(Math.exp(this.stack.pop()));
            break;
            case 'raiz':          
            this.stack.push(Math.sqrt(this.stack.pop()));
            break;
            case 'p2':  
            break;        
            this.stack.push(Math.pow(this.stack.pop(),2));
            case 'log':          
            this.stack.push(Math.log(this.stack.pop()));
            break;

        }
        this.actualizar();


    }

    
   

    
} 

// Stack class 
class Stack { 

	// Array is used to implement stack 
	constructor() 
	{ 
		this.items = []; 
	} 

	
push(element) 
{ 
	
	this.items.push(element); 
} 

// pop function 
pop() 
{ 
	
	if (this.items.length == 0) 
		return 0; 
	return this.items.pop(); 
} 

	// peek function 
peek() 
{ 
	// return the top most element from the stack 
    // but does'nt delete it. 
    if(this.items.length>=1)
    return this.items[this.items.length - 1]; 
    else return "---"; 
} 
doblePeek() 
{ 
	// return the top most element from the stack 
    // but does'nt delete it. 
    if(this.items.length>=2)
    return this.items[this.items.length - 2];
    else return "---"; 
} 
 
	// isEmpty() 
	// printStack() 
} 

var calculadora=new CalculadoraPolaca();