// pages/api/booking.js

const express = require('express');
const router = express.Router();
const { sequelize } = require('../../db');


// Endpoint to submit a booking
router.post('/submit', async (req, res) => {
  try {
    const { firstName, lastName, numberOfWheels, carType, carModel, startDate, endDate } = req.body;

    // Validate the incoming data (you can use a validation library here)
    if (!firstName || !lastName || !numberOfWheels || !startDate || !endDate) {
      return res.status(400).json({ error: 'Invalid data. Please provide all required fields.' });
    }

    // Check for overlapping bookings for the same vehicle type
    const overlappingBookingsQuery = `
  SELECT *
  FROM bookings
  WHERE vehicle_id IN (
    SELECT id
    FROM vehicles
    WHERE type = :carType
    AND type_id = :carModel
  )
  AND (start_date BETWEEN :startDate AND :endDate OR end_date BETWEEN :startDate AND :endDate)
`;

    const overlappingBookings = await sequelize.query(overlappingBookingsQuery, {
      replacements: {
        carType,
        carModel,
        startDate,
        endDate,
      },
      type: sequelize.QueryTypes.SELECT,
    });

    // If there are overlapping bookings, return an error
    if (overlappingBookings.length > 0) {
      return res.status(409).json({ error: 'Overlapping bookings for the selected vehicle type.' });
    }
    // Assuming you have a users table and want to associate the booking with a user
    // In a real-world scenario, you would use authentication to get the user ID
    const userId = 123; // Replace with your actual user ID retrieval logic

    // Insert the booking into the bookings table
    const insertBookingQuery = `
    INSERT INTO bookings (firstName, lastName, carType, carModel, vehicle_id, user_id, start_date, end_date)
    VALUES (
      :firstName,
      :lastName,
      :carType,
      :carModel,
      (SELECT id FROM vehicles WHERE wheels = :numberOfWheels AND name = :carType),
      :userId,
      :startDate,
      :endDate
    )
`;


    const result = await sequelize.query(insertBookingQuery, {
      replacements: {
        firstName,
        lastName,
        carType,
        carModel,
        numberOfWheels,
        userId,
        startDate,
        endDate,
      },
      type: sequelize.QueryTypes.INSERT,
    });

    // Return success response
    res.status(201).json({ message: 'Booking successful.', bookingId: result[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
