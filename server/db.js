// // db.js
// import { createConnection } from 'mysql2/promise';

// const connection = createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'kanha456',
//   database: 'vehiclerentalhub',
// });

// export default connection;

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  // Your database configuration goes here
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'kanha456',
  database: 'vehiclerentalhub',
});

export default sequelize;
