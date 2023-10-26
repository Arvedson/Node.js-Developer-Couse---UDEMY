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
    handler: () => {
        console.log("anaddiendo una nueva nota")
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

console.log(yargs.argv)





