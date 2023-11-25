const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Adjust the path based on your project structure

const Car = sequelize.define('Car', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Add other properties specific to a Car
});

module.exports = Car;
