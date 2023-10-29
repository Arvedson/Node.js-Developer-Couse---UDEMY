const fs = require("fs")

/*const book = {
    title: "el enemigo es el ego",
    author: "tomas",
}*/
//const bookJSON = JSON.stringify(book) /* JSON array */  cd
/* console.log(bookJSON) //console.log(bookJSON.title) --> undefined
const returnobject = JSON.parse(bookJSON) /* Javascript object 
console.log(returnobject.author)*/
// fs.writeFileSync("1-json.json", bookJSON)
//const dataBuffer = fs.readFileSync("1-json.json") //read the file to get the binary data
//console.log(dataBuffer) //convert binary data into json data
//const dataJSON = dataBuffer.toString() //parse json data into a js object
//const data = JSON.parse(dataJSON)
//console.log(data.author)

const dataBuffer = fs.readFileSync("1-json.json")      //
const dataJSON = dataBuffer.toString()                // <------------ load and parse JSON data 
const user = JSON.parse(dataJSON)                    //


user.name = "tomm"
user.age = 29

console.log(user.name)

const userJSON = JSON.stringify(user)             // stringify changed objet to overwrite it 
fs.writeFileSync("1-json.json", userJSON)        // -----------------------------------------