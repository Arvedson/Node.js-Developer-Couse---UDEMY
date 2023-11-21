const express = require("express")

const app = express()


app.get("/", (req, res) => {
    res.send("<h1>Hola mundo! con Express</h1>") //send back HTML
})

app.get("/Inicio", (req, res) =>{
    res.send({ // send back JSON
        nombre: "Tomas",
        edad: 29,
        localidad: "Torreon",
    })
})

app.get("/about", (req, res) =>{
    res.send("<h1>Acerca de</h1>")
})

app.get("/weather", (req, res) =>{
    res.send({
        ubi: "torreon",
        temperatura: 10, 
        windspeed: 15,
    })
})

app.get("/help", (req, res) => {
    res.send("Ayuda")
})
const puerto = 3000;
app.listen(puerto, () => {
    console.log("Server is up on port 3000")
})
