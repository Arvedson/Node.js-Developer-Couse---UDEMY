const path = require("path")
const express = require("express") 


// console.log(__dirname)
// console.log(path.join(__dirname, "../public"))


const app = express()
const publicDirectoryPath = path.join(__dirname, "../public")
app.use(express.static(publicDirectoryPath)) //middleware express.static: se encarga de trabajar con archivos "estaticos" css, js, html, ts, jsx, etc.

// un middleware es una funcion que tiene acceso a al objeto de solicitud de "req" y respuesta "res", tambien tienen acceso a la
// siguiente funcion middleware, tambien controlan las secuencias en las que se van a ejecutar, los condicionamientos y funcionalidades 
// con los cuales seran procesados los datos dependiendo de la finalidad

app.set("view engine", "hbs")

// un template/plantilla es una herramienta que nos permite organizar y reutilizar archivos rendereables, rellenables con datos, dependiendo del usuario y del servidor
// son herramientas que promueven la organizacion y reutyilizacion de estructuras de documentos. comunmente estos documentos son html, css, js 
// existen los template engines, los cuales se encargan de insertar codigo bajo sus propias sintaxis. algunos ejemplos de estos modulos:
// Handlebars: File Extension: .hbs or .handlebars.  ------  EJS (Embedded JavaScript): File Extension: .ejs.   ------   Pug (formerly Jade): File Extension: .pug
// cada uno de estos motores de plantillas tienen funciones espcificas ya sea desde injectar codigo javascript <% %>, la insercion de datos {{ }} y mucho mas. 


app.get("", (req, res) => { // aqui se esta renderizando un documento html (hbo template engine module), la estructura de este documento se toma como plantilla para poderle insertar codigo en donde sea deseado. 
    res.render("index", {
        title: "weather app",
        name: "tomas"
    }) // la funcion render lleva como parametros la ruta/nombre del archivo y los valores a introducir
})



//---------------------------------//

// get es una funcion del modulo express para obtener informacion de un servidor (en este caso framework express)
// si un usuario interactuara con una interfaz grafica introduciendo x valores; estos serian pasados como parametros a las funciones callback (req, res).. 
// una vez que la funcion get tenga sus parametros definidos por el usuario, este podra acceder a x informacion.
// toda esta comunicacion son los bloques "configurados al gusto" que componen un URL

/* app.get("/", (req, res) => {
    res.send("<h1>Hola mundo! con Express</h1>") //send back HTML
})*/

app.get("/Inicio", (req, res) =>{ 
    res.send({ // send back JSON
        nombre: "Tomas",
        edad: 29,
        localidad: "Torreon",
    })
})

/*app.get("/about", (req, res) =>{
    res.send("<h1>Acerca de</h1>")
})*/

app.get("/weather", (req, res) =>{
    res.send({
        ubi: "torreon",
        temperatura: 10, 
        windspeed: 15,
    })
})

/*app.get("/help", (req, res) => {
    res.send("Ayuda")
})*/

const puerto = 3000;
app.listen(puerto, () => {
    console.log("Server is up on port 3000")
})
