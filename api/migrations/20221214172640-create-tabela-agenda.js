"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("agenda", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Endereco: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Celular: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Obs: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("agenda");
  },
};
