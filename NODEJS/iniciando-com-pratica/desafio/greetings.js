const getFlag = require('./flags')

console.log(`Oi ${getFlag('--name')}. ${getFlag('--greeting')}`);

// node greetings --name "Natan Foleto" --greeting "Tudo bem com você?"