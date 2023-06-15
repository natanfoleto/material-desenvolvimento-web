console.log(require());
console.log(require('path'));

// Vamos jogar um módulo em uma const
// módulo nativo

const path = require('path')

console.log(path.basename(__filename));

// Importar meus módulos

const myModule = require('./exports')

console.log(myModule);