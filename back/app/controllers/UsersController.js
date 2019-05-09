const models = require('../models')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')

router.use( bodyParser.json());



//Create
router.post('/', function (req, res) {
    let senha = bcrypt.hashSync(req.body.senha, 10);
    models.User.create({sexo: req.body.sexo, email: req.body.email, datanas: req.body.datanasc, nome: req.body.nome, img:req.body.img, senha})
        .then((user) => res.status(200).send(user))
        .catch((err) => res.status(500).send(err)
    );
})

//Get all
router.get('/', function(req, res) {
    models.User.findAll(
        {
            include: [{model: models.Analise}, {model: models.Endereco}, {model: models.Pet}]
    })
        .then(users => res.status(200).send(users))
        .catch((err) => res.status(500).send(err)
    );
})

//Find one by id
router.get('/:id', function(req, res) {
    let id = req.params.id;
    models.User.findByPk(id)
        .then(user => user === null ? res.status(404).send("NOT FOUND") : res.status(200).send(user))
        .catch(() => res.status(500).send("Fail")
    );
})

//Update
router.put('/:id', function(req, res) {
    let id = req.params.id;
    let senha = bcrypt.hashSync(req.body.senha, 10);
    models.User.update({sexo: req.body.sexo, email: req.body.email, datanas: req.body.datanasc, nome: req.body.nome, img:req.body.img, senha}, {where: {id}})
        .then((user) => res.status(200).send(user))
        .catch((err) => res.status(500).send(err)
    );
})

//Delete
router.delete('/:id', function(req, res){
    let id = req.params.id;
    models.User.destroy({ where : {id}})
    .then( () => res.status(200).send("Deleted"))
    .catch(() => res.status(404).send("NOT FOUND")
);
})

module.exports = router;