const Sequelize = require('sequelize');
const Driver = require('./driver');
const User = require('./user');
const db = require('../db');


const Passenger = db.define('passenger', {
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
    originRadius: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    destinationAddress: {
        type: Sequelize.STRING,
        allowNull: false
    },
    destinationRadiuss: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Passenger