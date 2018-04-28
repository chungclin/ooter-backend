const Sequelize = require('sequelize');
const Passenger = require('./passenger');
const db = require('../db');


const Driver = db.define('driver', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false
    },
    originAddress: {
        type: Sequelize.STRING,
        allowNull: false
    },
    originLAT: {
        type: Sequelize.STRING,
        allowNull: false
    },
    originLONG: {
        type: Sequelize.STRING,
        allowNull: false
    },
    originRadius: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    destinationAddress: {
        type: Sequelize.STRING
    },
    destinationLAT: {
        type: Sequelize.STRING,        
        allowNull: false
    },
    destinationLONG: {
        type: Sequelize.STRING,
        allowNull: false
    },
    destinationRadius: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Driver