const request = require("request")

const url = "https://api.meteomatics.com/2023-11-05T18:50:00.000-06:00/t_min_2m_1h:C,wind_speed_mean_FL10_1h:bft/25.542698,-103.410512/json?model=mix"

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



