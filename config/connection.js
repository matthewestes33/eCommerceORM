require('dotenv').config();

const Sequelize = require('sequelize');

//may need to change this fit week 13 models
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      // added port
      port: 3306,
      },
    });

module.exports = sequelize;
