const request = require("request")
const axios = require('axios');


const url = "https://api.meteomatics.com/2023-11-06T18:40:00.000-06:00/t_2m:C,wind_speed_FL10:kmh/25.542698,-103.410512/json?model=mix"

const username = "node_arvedson_tomas"
const password = "c1K7LW1y3y"

request({
  url: url,
  headers: {
    "Authorization": `Basic ${btoa(username + ":" + password)}`,
  },
}, (error, response) => {

  const data = JSON.parse(response.body)
  console.log(data)

  const minTemperature = data.data[0].coordinates[0].dates[0].value;
  const windSpeed = data.data[1].coordinates[0].dates[0].value;

  console.log("La temperatura actual en Torreon es de:",minTemperature, "°C")
  console.log("La velocidad del viento es de", windSpeed, "km/h")

});

//-------------------------//

axios.get("https://api.opencagedata.com/geocode/v1/json?key=3408d91c500640649a423dfaa23babe2&q=Torreon+1%2C+Coahuila%2C")
  .then(response => {
    const lat = response.data.results[0].geometry.lat;
    const lng = response.data.results[0].geometry.lng;
    console.log(lat,lng)
  }).catch(error => {
    console.log(error);
  });

  //----------------------//