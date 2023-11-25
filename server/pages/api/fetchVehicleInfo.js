// pages/api/fetchVehicleInfo.js
const { sequelize } = require('../../db');  // Adjust the path based on your project structure
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { type } = req.query;

    // Validate the 'type' parameter
    if (!['car', 'bike'].includes(type)) {
      return res.status(400).json({ error: 'Invalid vehicle type' });
    }

    let query;
    if (type === 'car') {
      query = `
        SELECT v.name
        FROM vehicles v
        WHERE v.type = 'car'
      `;
    } else if (type === 'bike') {
      query = `
      SELECT  v.name
      FROM vehicles v
      WHERE v.type = 'bike';
      `;
    }
    const vehicles = await sequelize.query(query, {
      replacements: { type: type },
      type: sequelize.QueryTypes.SELECT,
    });
    console.log(vehicles);
    res.status(200).json(vehicles.map(el => el.name));
  } catch (error) {
    console.error('Error in fetchVehicleInfo:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

module.exports = router;
