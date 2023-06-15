fetch("https://api.github.com/users/natanfoleto").then((response) => {
  response.json().then((data) => console.log(data));
});

fetch("https://api.github.com/users/natanfoleto")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
