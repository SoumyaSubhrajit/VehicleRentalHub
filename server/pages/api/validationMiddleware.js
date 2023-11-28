const { body, validationResult } = require('express-validator');
const express = require('express');
const router = express.Router();

const checkForOverlappingBookings = async (vehicleId, startDate, endDate) => {
  try {
    // Check for overlapping bookings in the database
    const overlappingBookings = await query(
      'SELECT * FROM bookings WHERE vehicle_id = ? AND ((? BETWEEN start_date AND end_date) OR (? BETWEEN start_date AND end_date))',
      [vehicleId, startDate, endDate]
    );

    return overlappingBookings.length > 0;
  } catch (error) {
    console.error(error);
    throw new Error('Error checking for overlapping bookings');
  }
};

const validateBookingData = [
  body('firstName').notEmpty().withMessage('First name is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  body('numberOfWheels').isIn(['2', '4']).withMessage('Number of wheels must be either 2 or 4'),
  body('carType').optional().isIn(['Hatchback', 'SUV', 'Sedan']).withMessage('Invalid car type'),
  body('bikeType').optional().isIn(['cruiser', 'sports']).withMessage('Invalid bike type'),
  body('carModel').optional().isString().withMessage('Invalid car model'),
  body('startDate').isISO8601().toDate().withMessage('Invalid start date'),
  body('endDate').isISO8601().toDate().withMessage('Invalid end date'),

  async (req, res, next) => {
    try {
      const { vehicleId, startDate, endDate } = req.body;
      if (!vehicleId || !startDate || !endDate) {
        return res.status(400).json({ error: 'Missing required data' });
      }

      const hasOverlappingBookings = await checkForOverlappingBookings(vehicleId, startDate, endDate);
      if (hasOverlappingBookings) {
        return res.status(400).json({ error: 'Overlapping bookings detected' });
      }
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
];

module.exports = { validateBookingData };
