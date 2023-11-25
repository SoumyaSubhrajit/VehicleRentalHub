// pages/api/fetchVehicleInfo.js
import { async } from 'regenerator-runtime';
import db from '../../db'; // Adjust the path as needed
import express from 'express';
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { type } = req.query;

    // Validate the 'type' parameter
    if (!['car', 'bike'].includes(type)) {
      return res.status(400).json({ error: 'Invalid vehicle type' });
    }

    const [rows] = await db.execute('SELECT * FROM vehicles WHERE type = ?', [type]);
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

export default router;


