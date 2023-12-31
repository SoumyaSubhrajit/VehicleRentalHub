const express = require('express');
const router = express.Router();
const { sequelize } = require('../../db');

router.get('/cruiser', async (req, res) => {
  try {
    const query = 'SELECT name  FROM cruiser_models'
    const [crusierModels] = await sequelize.query(query,
    )
    res.status(200).json(crusierModels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/sports', async (req, res) => {
  try {
    const query = 'SELECT name FROM sports_models'
    const [sportsModels] = await sequelize.query(query)
    res.status(200).json(sportsModels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




router.get('/hatchback', async (req, res) => {
  try {
    const query = 'SELECT name FROM hatchback_models'
    const [hatchbackModels] = await sequelize.query(query)
    res.status(200).json(hatchbackModels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/suv', async (req, res) => {
  try {
    const query = 'SELECT name FROM suv_models'
    const [suvModels] = await sequelize.query(query)
    res.status(200).json(suvModels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/sedan', async (req, res) => {
  try {
    const query = 'SELECT name FROM sedan_models'
    const [sedanModels] = await sequelize.query(query)
    res.status(200).json(sedanModels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;