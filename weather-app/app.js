// node´s asynchronous non blocking model:

console.log("starting")

setTimeout(()=> {
    console.log("timer de 2 segundos")

}, 2000)

setTimeout(() => {
    console.log("timer de 0 segundos")
}, 0)

console.log("stoping")



/* returns:

starting
stoping
timer de 0 segundos
timer de 2 segundos

*/