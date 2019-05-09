const models = require('../models')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')

router.use( bodyParser.json());

router.post('/', function (req, res) {
    models.User.findOne({where: {
        email: req.body.email
    }}).then(user => {
        if(!user || !bcrypt.compareSync(req.body.senha, user.senha))
            res.status(403).send({auth:false})

        const id = user.id
        let token = jwt.sign({id}, process.env.SECRET, {
            expiresIn: 300
        })

        res.status(200).send({auth:true, token:token, user})
    }).catch( err => res.status(500).send(err))
})

module.exports = router