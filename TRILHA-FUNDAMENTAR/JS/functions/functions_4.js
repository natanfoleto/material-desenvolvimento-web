// function scope

let subject = 'create video'

function createThink(subject) {
  // não esta sobrescrevendo a var de fora
  subject = 'study'

  // se caso eu remover o parâmetro subject
  // ai sim o subject de fora será sobrescrito
  // a função prioriza o próprio scope, e depois os outros
  subject = 'study'
  return subject
}

console.log(subject);
console.log(createThink(subject));