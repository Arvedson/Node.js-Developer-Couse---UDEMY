const request = require("request")
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")
const fs = require("fs")


/*request({
  url: url
}, (error, response) => {
  if (error) {
    console.log("No es posible conectar con el servidor")
  } else if (response.error) {
    console.log("Input invalido")
  } else {
    const data = JSON.parse(response.body)
    //console.log(data)
    const temperatura = data.current.temp_c
    const humedad = data.current.humidity
    console.log("temperatura", temperatura, "C°")
    console.log("humedad", humedad, "%")
  }
})*/

/*const url = "https://api.meteomatics.com/2023-11-10T16:45:00.000-06:00/t_apparent:C,relative_humidity_2m:p/4.099917,-72.9088133/json?model=mix"
const username = "node_arvedson_tomas"
const password = "c1K7LW1y3y"
request({
  url: url,
  headers: {
    "Authorization": `Basic ${btoa(username + ":" + password)}`,
  },
}, (error, response) => {

  if (error){
    console.log("No es posible conectarse con este servicio")

  } else if (response.body.error) {
    console.log("Input invalido")

  } else {
    const data = JSON.parse(response.body)
    console.log(data)
  
    const minTemperature = data.data[0].coordinates[0].dates[0].value;
    const humedad = data.data[1].coordinates[0].dates[0].value;
  
    console.log("La temperatura actual en Torreon es de:",minTemperature, "°C")
    console.log("La humedad es de", humedad, "%")

  }
});*/

//-------------------------//
/*
axios.get("https://api.opencagedata.com/geocode/v1/json?key=3408d91c500640649a423dfaa23babe2&q=Torreon+1%2C+Coahuila%2C")
  .then(response => {
    const lat = response.data.results[0].geometry.lat;
    const lng = response.data.results[0].geometry.lng;
    console.log(lat,lng)
  }).catch(error => {
    console.log("Input invalido");
  });
*/
  

const args = process.argv.slice(2)

if (args.length === 0){
  console.log("Introduzca una ubicacion")
} else {
  geocode(args, (error, coordinates) => {


    if (error) {
      console.error("Error:", error);
    } else {
      console.log("Latitud:", coordinates.lat);
      console.log("Longitud:", coordinates.lng);
      console.log("Ubicacion:", coordinates.ubicacion);
      
      forecast(coordinates, (temperatura, humedad, ubicacion) => {
        if(error){
          console.log("Error")
        } else {
          console.log("La temperatura en", ubicacion, "es de", temperatura, "C°, y la humedad es de", humedad, "%");
        }
      });   
    }
  });
  
}


/*const args = process.argv.slice(2)
if (args.length < 2) {
  console.log('Uso: node app.js <nombre_del_archivo> <contenido_a_pasara_la_funcion>');
} else {
  const fileName = args[0];
  const content = args.slice(1).join(' ');

  // Llama a tu función con nombre
  miFuncion(fileName, content);
}*/


























//----------------------------//

  // Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)


/*const forecast = (lat, lng, ubicacion, callback ) =>{

  const username = "node_arvedson_tomas"
  const password = "c1K7LW1y3y"

  const encodedCoordinates = encodeURIComponent(lat + "," + lng);
  const url = `https://api.meteomatics.com/2023-11-10T16:45:00.000-06:00/t_apparent:C,relative_humidity_2m:p/${encodedCoordinates}/json?model=mix`;
  

  request({
    url: url,
    headers: {
      "Authorization": `Basic ${btoa(username + ":" + password)}`,
    },
  }, (error, response) => {
  
    if (error){
      console.log("No es posible conectarse con este servicio")
  
    } else if (response.body.error) {
      console.log("Input invalido")
  
    } else {
      const data = JSON.parse(response.body)
      //console.log(data)
    
      const minTemperature = data.data[0].coordinates[0].dates[0].value;
      const humedad = data.data[1].coordinates[0].dates[0].value;
    
      console.log("La temperatura actual en Torreon es de:",minTemperature, "°C")
      console.log("La humedad es de", humedad, "%")
  
    }
  });
}*/







