// // db.js
// import { createConnection } from 'mysql2/promise';

// const connection = createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'kanha456',
//   database: 'vehiclerentalhub',
// });

// export default connection;

const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  // Your database configuration goes here
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'kanha456',
  database: 'vehiclerentalhub',
});

// Check the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = { sequelize };
