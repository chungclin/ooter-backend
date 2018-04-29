const router = require('express').Router();
const { Driver, Passenger } = require('../db/models')

router.get('/', (req, res, next) => {
    Passenger.findAll()
    .then(passengers => res.json(passengers))
    .catch(next)
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
    Passenger.create(req.body)
    .then((created) => {
        return Driver.findAll()
        .then(foundDrivers => {
            return foundDrivers.filter(driver => {
                return ((distance(created.originLAT, created.originLONG, driver.originLAT, driver.originLONG) < created.originRadius)
                        &&
                        (distance(created.destinationLAT, created.destinationLONG, driver.destinationLAT, driver.destinationLONG) < created.destinationRadius))
            })
        })
        .then(foundPassengers => res.json(foundPassengers))
    })
    .catch(next)
})


module.exports = router;