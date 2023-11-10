const axios = require('axios');

const geocode = (address, callback) => {
    const encodedAddress = encodeURIComponent(address);
    const url = "https://api.opencagedata.com/geocode/v1/json?key=3408d91c500640649a423dfaa23babe2&q=" + encodedAddress;
  
    axios.get(url)
      .then(response => {
        // verificamos los datos en caso de que haya una respuesta
        if (response.data && response.data.results && response.data.results.length > 0) {
          // Obtener las coordenadas (latitud y longitud) de la primera ubicación encontrada
          const lat = response.data.results[0].geometry.lat;
          const lng = response.data.results[0].geometry.lng;
          const ubicación= response.data.results[0].formatted;
          // se llama un callback en forma de objeto porque esa es la forma en que se estan recibiendo los datos 
          callback(null, { lat, lng, ubicación });
        } else {
          // si la respuesta no encuentra los datos validos
          callback("Direccion no encontrada", null);
        }
      })
      .catch(error => {
        // en caso de desconeccion y no haya respuesta alguna axios dara su propio statement
        callback(error.message, null);
      });
}

module.exports = geocode



