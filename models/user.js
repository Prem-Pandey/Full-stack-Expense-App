const Sequelize = require('sequelize');

const sequelize = require('../util/database');
const User = sequelize.define('expense', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Catagory: Sequelize.STRING,
    Amount: {
        type: Sequelize.INTEGER
    }
})

module.exports = User;