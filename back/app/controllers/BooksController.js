const models = require('../models')
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

router.use( bodyParser.json());



//Create
router.post('/', (req, res) =>{
    const body = req.body;
    console.log(body)
    const book = models.Book.create(body)
        .then(() => res.status(200).send(body))
        .catch(() => res.status(500).send("Fail")
    );
})

//Get all
router.get('/', function(req, res) {
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    models.Book.findAll(
        {include
            : {model: models.Author}
        })
        .then(books => res.status(200).send(books))
        .catch(() => res.status(500).send("Fail")
    );
})

//Find one by id
router.get('/:id', function(req, res) {
    let id = req.params.id;
    models.Book.findByPk(id, {include
        : {model: models.Author}
    })
        .then(book => book === null ? res.status(404).send("NOT FOUND") : res.status(200).send(book))
        .catch(() => res.status(500).send("Fail")
    );
})

//Update
router.put('/:id', function(req, res) {
    let id = req.params.id;
    const book = req.body;
    models.Book.update(book,{ where : {id}})
        .then( () => res.status(200).send(book))
        .catch(() => res.status(404).send("NOT FOUND")
    );
})

//Delete
router.delete('/:id', function(req, res){
    let id = req.params.id;
    models.Book.destroy({ where : {id}})
    .then( () => res.status(200).send("Deleted"))
    .catch(() => res.status(404).send("NOT FOUND")
);
})

module.exports = router