const express = require('express');
const sequelize = require('./db.js')
const vehicleInfoApi = require('./pages/api/fetchVehicleInfo.js');
const numberWheelApi = require('./pages/api/numberWheel.js');

// import bookingApi from './api/booking'; 

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send("<h1>Hello</h1>");
})
// Use the sequelize instance in your API routes
app.set('sequelize', sequelize);

// Middleware to parse JSON requests
app.use(express.json());

app.use('/api/fetchVehicleInfo', vehicleInfoApi);
app.use('/api/numberWheel', numberWheelApi);
// For selecting 
// app.use('/api/booking', bookingApi);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
