// setTimeout. Roda uma função depois de X milissegundos

const timeOut = 3000

const finished = () => console.log('Done!')

setTimeout(finished, timeOut)

console.log('Mostrar');

// A função finished é um callback, será chamada de volta após os 3 segundos
