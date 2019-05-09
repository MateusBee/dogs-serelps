const express = require('express')
const app = express()
require('dotenv-safe').load()

const cors = require('cors');
const AuthorsController = require("./app/controllers/AuthorsController")
const BooksController = require("./app/controllers/BooksController")
const UsersController = require("./app/controllers/UsersController")
const AnaliseController = require("./app/controllers/AnalisesController")
const LoginController = require("./app/controllers/LoginController")
const EnderecosController = require("./app/controllers/EnderecosController")
const PetsController = require("./app/controllers/PetsController")

app.use(cors());
app.use("/authors", AuthorsController)
app.use("/books", BooksController)
app.use("/users", UsersController)
app.use('/login', LoginController)
app.use('/analises', AnaliseController)
app.use('/enderecos', EnderecosController)
app.use('/pets', PetsController)

app.listen(3000, function() {
    console.log("Servidor ouvindo na porta 3000!")
})