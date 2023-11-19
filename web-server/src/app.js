const express = require("express")

const app = express()


app.get("/", (req, res) => {
    res.send("Hola mundo! con Express")
})

app.get("/Inicio", (req, res) =>{
    res.send("Pagina principal")
})

app.get("/weather", (req, res) =>{
    res.send("El clima")
})

app.get("/help", (req, res) => {
    res.send("Ayuda")
})
const puerto = 3000;
app.listen(puerto, () => {
    console.log("Server is up on port 3000")
})
