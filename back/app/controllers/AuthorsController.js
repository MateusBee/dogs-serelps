const models = require('../models')
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const security = require('../helpers/security')
router.use( bodyParser.json());



//Create
router.post('/', security.verifyJWT, (req, res) =>{
    const author = models.Author.create({first_name: req.body.first_name, last_name: req.body.last_name})
        .then(res.status(200).send(author))
        .catch(() => res.status(400).send("Fail")
    );
})

//Get all
router.get('/', security.verifyJWT, function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    models.Author.findAll({include
        : {model: models.Book}
    })
        .then(authors => res.status(200).send(authors))
        .catch(() => res.status(500).send("Fail")
    );
})

//Find one by id
router.get('/:id', security.verifyJWT, function(req, res) {
    let id = req.params.id;
    models.Author.findByPk(id, {include
        : {model: models.Book}
    })
        .then(author => author === null ? res.status(404).send("NOT FOUND") : res.status(200).send(author))
        .catch(() => res.status(500).send("Fail")
    );
})

//Update
router.put('/:id', security.verifyJWT, function(req, res) {
    let id = req.params.id;
    const author = {
        id,
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    models.Author.update(author,{ where : {id}})
        .then( () => res.status(200).send(author))
        .catch(() => res.status(404).send("NOT FOUND")
    );
})

//Delete
router.delete('/:id', function(req, res){
    let id = req.params.id;
    models.Author.destroy({ where : {id}})
    .then( () => res.status(200).send("Deleted"))
    .catch(() => res.status(404).send("NOT FOUND")
);
})

module.exports = router