const models = require('../models')
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

router.use( bodyParser.json());



//Create
router.post('/', (req, res) =>{
    const body = req.body;
    console.log(body)
    models.Endereco.create(body)
        .then(() => res.status(200).send(body))
        .catch((err) => res.status(500).send(err)
    );
})

//Get all
router.get('/', function(req, res) {
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    models.Endereco.findAll({include: {model: models.User}})
        .then(enderecos => res.status(200).send(enderecos))
        .catch((err) => res.status(500).send(err)
    );
})

//Find one by id
router.get('/:id', function(req, res) {
    let id = req.params.id;
    models.Endereco.findByPk(id, {include
        : {model: models.User}
    })
        .then(endereco => endereco === null ? res.status(404).send("NOT FOUND") : res.status(200).send(endereco))
        .catch(() => res.status(500).send("Fail")
    );
})

//Update
router.put('/:id', function(req, res) {
    let id = req.params.id;
    const endereco = req.body;
    models.Endereco.update(endereco,{ where : {id}})
        .then( () => res.status(200).send(endereco))
        .catch(() => res.status(404).send("NOT FOUND")
    );
})

//Delete
router.delete('/:id', function(req, res){
    let id = req.params.id;
    models.Endereco.destroy({ where : {id}})
    .then( () => res.status(200).send("Deleted"))
    .catch(() => res.status(404).send("NOT FOUND")
);
})

module.exports = router