const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Adjust the path based on your project structure

const Vehicle = sequelize.define('Vehicle', {
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  wheels: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Add other common properties for both Car and Bike
});

module.exports = Vehicle;
