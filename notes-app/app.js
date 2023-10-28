const getNotes = require("./notes.js")
const chalk = require("chalk")
const yargs = require("yargs")

// modificar yargs version
yargs.version("1.1.0")


// add, remove, read, list (notes)

// Create add command
yargs.command({
    command : "add",
    description: "Añade una nueva nota",
    builder: {
        title: {
            describe: "Titulo de la nota",
            demandOption: true,
            type: "string",
        },
        body: {
            describe: "Contenido",
            demandOption: true,
            type: "string",
        }
    },
    handler: (argv) => {
        console.log("titulo: ", argv.title)
        console.log("contenido: ", argv.body)
    }
})

//Create remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    handler: () => {
        console.log("Removiendo nota")
    }
})

//Create read command
yargs.command({
    command: "read",
    description: "Leer nota",
    handler: () => {
        console.log("Leyendo nota")
    }
})

//Create command list
yargs.command({
    command: "list",
    description: "Enlistar nota",
    handler: () => {
        console.log("Enlistando nota")
    }
})

yargs.parse()

//console.log(yargs.argv)





