const express = require('express')

const app = express()

// http:lovalhost:3333/
app.get('/', (request, response) => {
  return response.send("Hello world!")
})

// http://localhost:3333
app.listen(3333)

