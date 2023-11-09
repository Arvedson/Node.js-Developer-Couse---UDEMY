setTimeout(() => {
    console.log("two seconds are up")
}, 2000)

const names = ["tom", "axel", "jorge", "dominique"]
const shortNames = names.filter((name) => {
    return name.length <= 5 
})


// cuando una funcion "sincrona" es ejecutada esta reotrna sus valores usando return
// una funcion asincrona no necesita retornar un valor ya que este sera llamado desde otra funcion 


const geocode = (address, callback) => { // el segundo argumento es una funcion que sera definida cuando esta sea llamada dentro de la funcion "main/geocode"
    setTimeout(() => {
        const data = {  
            latitude: 0,
            longitud: 0,
        }
        callback(data)  // aqui se esta llamando la funcion callback la cual retornara los datos asincronos (cuando sean obtenidos en la realidad). 

    }, 2000)
}


geocode("monterrey", (data1) => { // aqui se define el funcionamiento de la funcion callback que sera ejecutada dentro de main/geocode
    console.log(data1)            // notese como la funcion callback ya esta definida por los parametros asignados a main/geocode y este parametro no necesariamente 
                                  // tendra el nombre de los datos que se necesiten adquirir. data !== data1
})



//------------------------------------------
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!


const sumar = (num1, num2, sumarCallback) => {
    setTimeout(() => {
        resultado = num1 + num2
        sumarCallback(resultado)
    }, 2000) 
}

sumar(1, 4, (sum) => {
    console.log(sum)
})


