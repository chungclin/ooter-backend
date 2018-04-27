const Sequelize = require('sequelize');
const Passenger = require('./passenger');
const db = require('../db');


const Driver = db.define('driver', {
    name: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    phoneNumber: {
        type: Sequelize.STRING,
    },
    originAddress: {
        type: Sequelize.STRING
    },
    originLAT: {
        type: Sequelize.STRING,
    },
    originLONG: {
        type: Sequelize.STRING,
    },
    originRadius: {
        type: Sequelize.INTEGER,
    },
    destinationAddress: {
        type: Sequelize.STRING
    },
    destinationLAT: {
        type: Sequelize.STRING,
    },
    destinationLONG: {
        type: Sequelize.STRING,
    },
    destinationRadius: {
        type: Sequelize.INTEGER,
    }
})

module.exports = Driver