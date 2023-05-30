// console.log(process);
console.log(process.argv);

// Comando executado 'node process Natan Foleto'

const firstName = process.argv[2]
const lastName = process.argv[3]

console.log(`Seu nome é ${firstName} ${lastName}`);

// Flags

// Comando executado 'node process --name "Natan Foleto" --greeting "Tudo bem com você?"'

console.log(process.argv);
