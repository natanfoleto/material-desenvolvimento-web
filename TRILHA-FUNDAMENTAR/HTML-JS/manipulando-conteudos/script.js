// Manipulando conteúdo

// textContent

const element = document.querySelector('#title')

element.textContent = "Olá Devs!"

console.log(element.textContent);

// innerText

element.innerText = "Alterando o texto interno"

// innerHTML

element.innerHTML = "Alterando o <em>HTML</em>"

// value

const input = document.querySelector('input')

input.value = "Valor que eu quiser" // posso também pegar um value que já existe

// propriedades

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID);

console.log(headerID.getAttribute('id'));

// remover atributos

header.removeAttribute('class')