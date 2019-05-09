const models = require('../models')
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use( bodyParser.json());



//Create
router.post('/', (req, res) =>{
    const body = req.body;
    console.log(body)
    models.Pet.create(body)
        .then(() => res.status(200).send(body))
        .catch((err) => res.status(500).send(err)
    );
})

//Get all
router.get('/', function(req, res) {
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    models.Pet.findAll({include: {model: models.User}})
        .then(pets => res.status(200).send(pets))
        .catch((err) => res.status(500).send(err)
    );
})

//Find one by id
router.get('/:id', function(req, res) {
    let id = req.params.id;
    models.Pet.findByPk(id, {include
        : {model: models.User}
    })
        .then(pet => pet === null ? res.status(404).send("NOT FOUND") : res.status(200).send(pet))
        .catch(() => res.status(500).send("Fail")
    );
})

//Update
router.put('/:id', function(req, res) {
    let id = req.params.id;
    const pet = req.body;
    models.Pet.update(pet,{ where : {id}})
        .then( () => res.status(200).send(pet))
        .catch(() => res.status(404).send("NOT FOUND")
    );
})

//Delete
router.delete('/:id', function(req, res){
    let id = req.params.id;
    models.Pet.destroy({ where : {id}})
    .then( () => res.status(200).send("Deleted"))
    .catch(() => res.status(404).send("NOT FOUND")
);
})

module.exports = router