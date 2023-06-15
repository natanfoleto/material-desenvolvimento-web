// clearInterval. Cancela um setInterval registrado

const timeOut = 1000

const fiscal = () => console.log('checking!')

let interval = setInterval(fiscal, timeOut)

setTimeout(() => clearInterval(interval), 3000)