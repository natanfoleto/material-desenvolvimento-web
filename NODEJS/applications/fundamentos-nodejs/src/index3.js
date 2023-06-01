const express = require('express')

const app = express()

app.use(express.json())

/*
  * GET - Buscar uma infromações dentro do servidor
  * POST - Inserir uma informação no servidor
  * PUT - Alterar uma informação no servidor
  * PATCH - Alterar uma informação específica
  * DELETE - Deletar uma informação no servidor 
*/

/*
  * Tipos de parâmetros
  *
  * Route Params => Identificar um recurso para buscar/editar/deletar
  * Query Params => Paginação, Filtro de busca => /courses?page=18&order=asc
  * Body Params => Os objetos para inserção/alteração
*/

app.get("/courses", (request, response) => {
  const query = request.query
  console.log(query);

  return response.json([
    "Curso 1",
    "Curso 2",
    "Curso 3"
  ])
})

app.post("/courses", (request, response) => {
  const body = request.body

  console.log(body);

  // * precisamos informar para o express que queremos trabalhar com json

  return response.json([
    "Curso 1",
    "Curso 2",
    "Curso 3",
    "Curso 4"
  ])
})

app.put("/courses/:id", (request, response)  => {
  const params = request.params;
  // const { id } = request.params;

  console.log(params);

  return response.json([
    "Curso 6",
    "Curso 2",
    "Curso 3",
    "Curso 4"
  ])
})

app.patch("/courses/:id", (request, response)  => {
  return response.json([
    "Curso 6",
    "Curso 7",
    "Curso 3",
    "Curso 4"
  ])
})

app.delete("/courses/:id", (request, response)  => {
  return response.json([
    "Curso 6",
    "Curso 7",
    "Curso 4"
  ])
})

app.listen(3333)
