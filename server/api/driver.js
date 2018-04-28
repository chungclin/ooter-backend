const router = require('express').Router();
const { Driver, Passenger } = require('../db/models')

router.get('/', (req, res, next) => {
    res.sendStatus(200)
})


function distance(lat1, lon1, lat2, lon2, unit) {
	var radlat1 = Math.PI * lat1/180
	var radlat2 = Math.PI * lat2/180
	var theta = lon1-lon2
	var radtheta = Math.PI * theta/180
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist)
	dist = dist * 180/Math.PI
	dist = dist * 60 * 1.1515
	if (unit=="K") { dist = dist * 1.609344 }
	if (unit=="N") { dist = dist * 0.8684 }
	return dist
}

router.post('/', (req, res, next) => {
    Driver.create(req.body)
    .then((created) => {
        return Passenger.findAll()
        .then(foundPassengers => {
            return foundPassengers.filter(passenger => {
                console.log((distance(created.originLAT, created.originLONG, passenger.originLAT, passenger.originLONG) < created.originRadius) 
                &&
                (distance(created.destinationLAT, created.destinationLONG, passenger.destinationLAT, passenger.destinationLONG) < created.destinationDistance), 'YAY')
                return ((distance(created.originLAT, created.originLONG, passenger.originLAT, passenger.originLONG) < created.originRadius)
                        &&
                        (distance(created.destinationLAT, created.destinationLONG, passenger.destinationLAT, passenger.destinationLONG) < created.destinationRadius))
            })
        })
        .then(foundPassengers => res.json(foundPassengers))
    })
    .catch(next)
})



module.exports = router;
