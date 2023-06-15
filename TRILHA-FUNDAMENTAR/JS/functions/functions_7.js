// callback function

function sayMyName(name) {
  console.log(name);

  console.log('antes de usar o callback');
  name();
  console.log('depois de usar o callback');
}

sayMyName('Natan') //  posso passar qualquer tipo de dado, inclusive outra function


sayMyName(
  () => {
    console.log('Estou em uma callback');
  }
)
