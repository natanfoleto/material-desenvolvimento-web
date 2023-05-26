// Alterando estilos

const element = document.querySelector('body')
element.style.backgroundColor = "#f9f3d4"

console.log(element.style.backgroundColor);

// classList

element.classList.add('active', 'green') // remova a linha 4 pra funcionar

console.log(element.classList);

element.classList.remove('active')
element.classList.toggle('active')