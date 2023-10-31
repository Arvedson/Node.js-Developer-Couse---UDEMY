const notes = require("./notes.js")
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
            type: "string",
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)

    }
})

//Create remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    bulder: {
        title: {
            describe: "Nota a remover",
            demandOption: true,
            type: "string",
        },
    },
    handler: (argv) => {
        notes.removeNote(argv.title)
    }
})

//Create command list
yargs.command({
    command: "list",
    description: "Enlistar nota", 
    handler: () => {
        notes.listNotes()
    }
})


//Create read command
yargs.command({
    command: "read",
    description: "Leer nota",
    bulder: {
        title: {
            describe: "Leyendo nota",
            demandOption: true,
            type: "string",
        },
    },
    handler: (argv) => {
        notes.readNote(argv.title)
    }
})


yargs.parse()

//console.log(yargs.argv)





