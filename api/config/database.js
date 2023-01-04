require("dotenv").config();
var sequelize = require("sequelize");
var db = new sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PWD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT,
    define: {
      underscored: true,
    },
  }
);
module.exports = db;
