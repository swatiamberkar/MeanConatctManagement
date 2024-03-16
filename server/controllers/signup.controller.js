const express = require('express');
const httpStatusCodes = require('http-status-codes')
const router = express.Router();

const signup = require('../models/signup.model');

router.get('/', (req, res)=>{
    signup.find().then(docs => {
        res.send(docs);
    }).catch(err => {
        res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).send(err);
    })
});


router.post('/', (req, res)=>{
    const obj = req.body;
    signup.create(obj).then(doc => {
        res.status(httpStatusCodes.CREATED).send(doc)
    }).catch(err => {
        res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).send(err);
    })
});





module.exports = router;