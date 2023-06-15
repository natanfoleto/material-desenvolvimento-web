/*
 * Promise
 *
 * A promessa de que algo irá acontecer
 * Poderá dar certo ou errado
 * mas irá acontecer
 */

console.log("pedir uber");

const promessa = new Promise((resolve, reject) => {
  return resolve("carro chegou");
  // Fazer exemplo do reject
});

promessa.then((result) => console.log(result));

console.log("aguardando");

// promessa
// 	.then(result => console.log(result))
// 	.catch(erro => console.log(erro))
// 	.finally(() => console.log('finalizada'))
