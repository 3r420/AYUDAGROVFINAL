'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('respuesta', [{
      descripcion: 'respuestas claras ',
      hora_fecha: 'agosto 2023',
      pregunta_id:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('respuesta', null, {});
  }
  
};
