// numberWheel.js
const { sequelize } = require('../../db');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { wheels } = req.query;
    if (![2, 4].includes(Number(wheels))) {
      return res.status(400).json({ error: 'Invalid number of wheels' });
    }

    const query = `
      SELECT v.name
      FROM vehicles v
      WHERE v.wheels = :wheels
    `;

    const [rows] = await sequelize.query(query, {
      replacements: { wheels: wheels },
      wheels: sequelize.QueryTypes.SELECT,
    })
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
