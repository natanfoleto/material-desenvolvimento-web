// fetch("https://api.github.com/users/natanfoleto")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

async function start() {
  const response = await fetch("https://api.github.com/users/natanfoleto");
  const user = await response.json();

  console.log(user);
}

start();
