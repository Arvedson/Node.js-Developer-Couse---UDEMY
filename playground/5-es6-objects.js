// object property shorthand
/*const name = "tomas"
const userAGe = 29

const user = {
    name: name,
    age: userAGe,
    location: "torreon"
}

console.log(user)*/

const name = "tomas"
const userAGe = 29

const user = {
    name,
    age: userAGe,
    location: "torreon"
}
//console.log(user)


// Object descructuring
const producto = {
    etiqueta: "Caja roja",
    stock: 5,
    costo: 10,
    precioDeventa: undefined,
    //area: 45,
}

//const stock = productos.stock
//const costo = productos.costo   

/*const {stock, costo:costoTotal, peso, volumen = 20, area = 30} = productos
console.log(stock)
console.log(costoTotal)
console.log(peso)
console.log(volumen)
console.log(area)*/

const scaneo = (scanId, { stock, costo }) => {
    console.log(scanId, stock, costo)
}
scaneo("0001", producto)



