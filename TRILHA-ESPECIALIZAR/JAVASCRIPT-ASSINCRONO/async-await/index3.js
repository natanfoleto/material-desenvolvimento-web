import axios from "axios";

axios
  .get("https://api.github.com/users/natanfoleto")
  .then((response) => axios.get(response.data.repos_url))
  .then((repos) => console.log(repos.data))
  .catch((error) => console.log(error));

async function start() {
  const user = await axios.get("https://api.github.com/users/natanfoleto");
  const repos = await axios.get(user.data.repos_url);
  console.log(repos.data);
}

start();

// Se eu quiser fazer o tratamento dos erros, só fazer um try catch
