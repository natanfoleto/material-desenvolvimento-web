function imprimirDado(dado) {
  console.log(dado);
}

imprimirDado(1);
imprimirDado("texto");
imprimirDado(true);
imprimirDado({ nome: "João" });
imprimirDado([1, 2, 3]);

function imprimirDado(dado) {
  console.log("outras tarefas");
  console.log(dado());
}
