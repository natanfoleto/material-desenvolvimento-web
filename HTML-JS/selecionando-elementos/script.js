// getElementById

const elementById = document.getElementById('blog-title') // Retorna um elemento
console.log(elementById);

// getElementByClassName

const elementByClassName = document.getElementsByClassName('one') // Retorna um HTMLCollection
console.log(elementByClassName);

// getElementByTagName

const elementByTagName = document.getElementsByTagName('span') // Retorna um HTMLCollection
console.log(elementByTagName);

// querySelector - Retorna um elemento

const elementByQuerySelector = document.querySelector('.one') // meta, [src], #id
console.log(elementByQuerySelector);

// querySelectorAll - Retorna um NodeList

const elementByQuerySelectorAll = document.querySelectorAll('') // meta, [src], #id
console.log(elementByQuerySelectorAll);

// Qual usar?

/* 
  Sabendo que o getElementsByClassName retorna um HTMLColletion
  e o querySelectorAll retorna um NodeList, no HTMLCollection
  não conseguimos usar um forEach, mas apaenas no NodeList que é
  retornado pelo querySelectorAll
*/