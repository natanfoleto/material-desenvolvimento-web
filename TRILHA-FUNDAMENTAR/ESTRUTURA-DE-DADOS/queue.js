// Passo 1: Modelando
class Queue {
  constructor() {
      this.data = []
  }
  
  enqueue(item) {
      this.data.push(item)
      console.log(`${item} chegou na fila!`)
  }
  
  dequeue() {
      const item = this.data.shift()
      console.log(`${item} saiu da fila!`)
  }
  
  peek() {
      return this.top >= 0 ? this.data[this.top] : undefined
  }
}

// Passo 2: Utilizando

const fila = new Queue()

// adicionar dados

fila.enqueue('Natan')
fila.enqueue('João')
fila.enqueue('Daniel')

// removendo

fila.dequeue()
fila.dequeue()
fila.dequeue()




