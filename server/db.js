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
