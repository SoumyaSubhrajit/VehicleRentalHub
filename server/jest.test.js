
const request = require('supertest');
const app = require('./app'); // Replace with the actual path to your app


describe('GET /api/vehicles', () => {
  test('It should respond with a list of vehicles', async () => {
    const response = await request(app).get('/api/vehicles');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('vehicles');
    expect(response.body.vehicles).toHaveLength(/* expected number of vehicles */);
  });
});


describe('POST /api/bookings', () => {
  test('It should create a new booking', async () => {
    const newBooking = {
      firstName: 'John',
      lastName: 'Doe',
      carType: 'Sedan',
      carModel: 'Honda Civic',
      startDate: '2024-01-01',
      endDate: '2024-05-04',
    };

    const response = await request(app)
      .post('/api/bookings')
      .send(newBooking);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('booking');
    expect(response.body.booking).toHaveProperty('id');

  });
});

