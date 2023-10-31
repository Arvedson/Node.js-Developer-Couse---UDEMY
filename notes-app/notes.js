const fs = require("fs")
const chalk = require("chalk")
const { title, argv } = require("process")



const getNotes = function () {
    return "your notes..."
}

const loadNotes = () => { //Lee los archivos en la carpeta asignada
    try{

        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (error){
        return []
    }
}

const addNote = (title, body) =>{ //antes de añadir una nota se verifica si ya existe una igual para no añadirla
    const notes = loadNotes()
    const notesDuplicates = notes.filter((note) => note.title === title)
    //const notesDuplicates = notes.filter((note) => {
    //    return note.title === title 
    //})

    if(notesDuplicates.length === 0){
        notes.push({
            title: title,
            body: body,
        });
        saveNotes(notes)
        const msg = chalk.green("nueva nota añadida")
        console.log(msg)
    } else {
        const chalk1 = chalk.red("el titulo de la nota esta repetido")
        console.log(chalk1)  // -forma incorrecta-
    }
}

const removeNote = (title) => { 
    const notes = loadNotes();
    const notesTokeep = notes.filter((note) => {
        return note.title !== title
    })
    if (notes.length > notesTokeep.length){
        console.log(chalk.green.inverse("nota removida"))
    } else {
        console.log(chalk.red.inverse("nota no encontrada")) // -forma correcta-
    }
}

const saveNotes = (notes) => { //guarda las notas creadas en la carpeta asignada
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.yellow("Tus notas son las siguientes:"))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {

    const notes = loadNotes()

    const notaEncontrada = notes.find((note) => note.title === title)

    if(notaEncontrada){
        console.log(chalk.blue(notaEncontrada.title))
        console.log(notaEncontrada.body)
    } else {
        console.log(chalk.red("nota no encontrada"))
    }
}

module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote,
    listNotes: listNotes,
    readNote: readNote,
}
