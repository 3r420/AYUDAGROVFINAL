'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('valorar_respuesta', [{
      
      usuario_id: 1,
      respuesta_id: 1,
      calificacion: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('valorar_respuesta', null, {});
  }
};
