"use strict";
class Meteo {
    constructor(nuevaCiudad){
        this.apikey = "47b790fd0fc41878c80c57c9846132cb";
        this.ciudad = nuevaCiudad;
        this.codigoPais = "ES";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
    }
    cargarDatos(){
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){
                    $("pre").text(JSON.stringify(datos, null, 2));
                
                    //PresentaciÃ³n de los datos contenidos en JSON
                    
                    var stringDatos =  "<article><h2>Ciudad: " + datos.name + "</h2>";
                        stringDatos += "<img src=http://openweathermap.org/img/wn/" + datos.weather[0].icon + "@2x.png alt = \"Icono del tiempo\"></img><ul>";
                        stringDatos += "<li>País: " + datos.sys.country + "</li>";
                        stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
                        stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
                        stringDatos += "<li>Temperatura: " + datos.main.temp + " grados Celsius</li>";
                        stringDatos += "<li>Temperatura máxima: " + datos.main.temp_max + " grados Celsius</li>";
                        stringDatos += "<li>Temperatura mínima: " + datos.main.temp_min + " grados Celsius</li>";
                        stringDatos += "<li>Presión: " + datos.main.pressure + " milibares</li>";
                        stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
                        stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
                        stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                        stringDatos += "<li>Hora de la medida: " + new Date(datos.dt *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt *1000).toLocaleDateString() + "</li>";
                        stringDatos += "<li>Descripción: " + datos.weather[0].description + "</li>";
                        stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                        stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul></article>";                    
                    $("footer").before(stringDatos);
                },
            error:function(){
                $("h3").html("Â¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>"); 
                $("h4").remove();
                $("pre").remove();
                $("p").remove();
                }
        });
    }

    cargarTodo(){
        this.cargarDatos('Cangas de Onís');
        this.cargarDatos('Gijón');
        this.cargarDatos('Proaza');
    }

    crearElemento(tipoElemento, texto, insertarAntesDe){
        // Crea un nuevo elemento modificando el Ã¡rbol DOM
        // El elemnto creado es de 'tipoElemento' con un 'texto' 
        // El elemnto se coloca antes del elemnto 'insertarAntesDe'
        var elemento = document.createElement(tipoElemento); 
        elemento.innerHTML = texto;
        $(insertarAntesDe).before(elemento);
    }
    verJSON(){
        //Muestra el archivo JSON recibido
        //this.crearElemento("h2","Datos en JSON desde <a href='http://openweathermap.org'>OpenWeatherMap</a>","footer"); 
        //this.crearElemento("h3",this.correcto,"footer"); // Crea un elemento con DOM 
        //this.crearElemento("h4","JSON","footer"); // Crea un elemento con DOM        
        //this.crearElemento("pre","","footer"); // Crea un elemento con DOM para el string con JSON
        //this.crearElemento("h4","Datos","footer"); // Crea un elemento con DOM 
        //this.crearElemento("p","","footer"); // Crea un elemento con DOM para los datos obtenidos con JSON
        this.cargarDatos();
        //$("button").attr("disabled","disabled");
    }
}
var meteo = new Meteo("Cangas de Onís");
meteo.verJSON();
var meteo = new Meteo("Gijón");
meteo.verJSON();
var meteo = new Meteo("Proaza");
meteo.verJSON();



/* Ejemplo de JSON recibido de http://openweathermap.org
{
  "coord": {
    "lon": -5.84,
    "lat": 43.36
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "cielo claro",
      "icon": "01n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 8,
    "pressure": 1020,
    "humidity": 87,
    "temp_min": 8,
    "temp_max": 8
  },
  "visibility": 10000,
  "wind": {
    "speed": 5.1,
    "deg": 240
  },
  "clouds": {
    "all": 0
  },
  "dt": 1510808400,
  "sys": {
    "type": 1,
    "id": 5466,
    "message": 0.0393,
    "country": "ES",
    "sunrise": 1510816698,
    "sunset": 1510851457
  },
  "id": 3114711,
  "name": "Oviedo",
  "cod": 200
}
 */