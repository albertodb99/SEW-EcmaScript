//InfoNavegador.js
//Fichero para la tarea 3 del Ejercicio 2
//de la práctica de ECMAScript de SEW
var navegador = new Object();
navegador.nombre = navigator.appName;
navegador.idioma = navigator.language;
navegador.version = navigator.appVersion;
navegador.plataforma = navigator.platform;
navegador.vendedor = navigator.vendor;
navegador.agente = navigator.userAgent;
navegador.javaActivo = navigator.javaEnabled();