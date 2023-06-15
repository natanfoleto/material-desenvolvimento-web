const promessa = new Promise(function (resolve, reject) {
  return resolve("ok");
});

// Esperando a promise
promessa
  .then((response) => {
    console.log(response);
  })
  .catch((response) => {
    console.log(response);
  })
  .finally(() => {
    console.log("Eu sempre vou executar");
  });

// Podemos substituir o código acima por esse...

// Esperando a promise com async/await
async function start() {
  const result = await promessa;
  console.log(result);
}

start();

// Como eu pegaria o catch e o finally?
// Basta adicionar um try/catch/finally
