const router = require('express').Router();
const { Driver, Passenger } = require('../db/models')

router.get('/', (req, res, next) => {
    Passenger.findAll()
    .then(passengers => res.json(passengers))
    .catch(next)
})

router.post('/origin-coordinates', (req, res, next) => {
    // const { originLONG, originLAT } = req.body
    Passenger.create(req.body)
    .then(createdAddressLATandLONG => {
        res.status(201).send(createdAddressLATandLONG)
    })
    .catch(next)
})

router.put('/:email/origin', (req, res, next) => {

})


router.post('/destination-coordinates', (req, res, next) => {

})


module.exports = router;
