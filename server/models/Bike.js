const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Adjust the path based on your project structure

const Bike = sequelize.define('Bike', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Add other properties specific to a Bike
});

module.exports = Bike;
