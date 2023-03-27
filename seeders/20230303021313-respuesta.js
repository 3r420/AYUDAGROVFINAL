'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('respuesta', [{
      pregunta_id:1,
      usuario_id:1,
      descripcion: 'respuestas claras ',
      hora_fecha: 'agosto 2023',
   
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('respuesta', null, {});
  }
  
};
