const sequelize = require("sequelize");
const db = require("../config/database");
var user = db.define(
  "agenda",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    Nome: { type: sequelize.STRING, allowNull: false },
    Endereco: { type: sequelize.STRING, allowNull: false },
    Celular: { type: sequelize.STRING },
    Email: { type: sequelize.STRING },
    Obs: { type: sequelize.STRING },
  },
  {
    // freeze name table not using *s on name
    freezeTableName: true,
    // caso não queira usar "createdAt/updateAt":
    timestamps: false,
  }
);
module.exports = user;
