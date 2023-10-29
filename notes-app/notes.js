const fs = require("fs")


const getNotes = function () {
    return "your notes..."
}

const loadNotes = () => {
    try{

        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (error){
        return []
    }
}

const addNote = (title, body) =>{
    const notes = loadNotes()
    const notesDuplicates = notes.filter((note) =>{
        return note.title === title 
    })

    if(notesDuplicates.length === 0){
        notes.push({
            title: title,
            body: body,
        });
        saveNotes(notes)
        console.log("new note added")
    } else {
        console.log("note title taken")
    }


}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
}



module.exports = {
    getNotes : getNotes,
    addNote : addNote,
}
