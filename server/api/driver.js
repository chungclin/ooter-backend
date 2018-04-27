const router = require('express').Router();
const { Driver, Passenger } = require('../db/models')

router.get('/', (req, res, next) => {
    res.sendStatus(200)
})


router.post('/origin-coordinates', (req, res, next) => {
    // const { originLONG, originLAT } = req.body
    Driver.create(req.body)
    .then(createdAddressLATandLONG => {
        res.status(201).send(createdAddressLATandLONG)
    })
    .catch(next)
})

router.post('/destination-coordinates', (req, res, next) => {
    // const { originLONG, originLAT } = req.body
    Driver.create(req.body)
    .then(createdAddressLATandLONG => {
        res.status(201).send(createdAddressLATandLONG)
    })
    .catch(next)
})

module.exports = router;
