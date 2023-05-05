"use strict";

const { DATE } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("rol", [
      {
        //usuario normal
        nombre: "Campesino",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Administrador",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Profesional",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("rol", null, {});
  },
};
