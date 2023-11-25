// app.js
import express from 'express';
import sequelize from './db';
import vehicleInfoApi from './api/fetchVehicleInfo';
// import bookingApi from './api/booking'; 

const app = express();
const PORT = process.env.PORT || 3000;

// Use the sequelize instance in your API routes
app.set('sequelize', sequelize);

// Middleware to parse JSON requests
app.use(express.json());

// API Routes
app.use('/api/fetchVehicleInfo', vehicleInfoApi);
app.use('/api/booking', bookingApi);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
