const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Adjust the path based on your project structure

const Booking = sequelize.define('Booking', {
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  // Add other properties related to a booking
});

module.exports = Booking;
