const { EventEmitter } = require('events')

const ev = new EventEmitter()

ev.on('saySomething', (name) => {
  console.log('Eu ouvi você, ', name);
})

ev.emit('saySomething', 'Natan')

// temos também o once, ele ouve apenas uma vez