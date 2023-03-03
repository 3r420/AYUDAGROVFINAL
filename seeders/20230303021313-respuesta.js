'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('respuesta', [{
      descripcion: 'respuestas claras ',
      hora_fecha: 'agosto 2023',
      hora_de_publicacion: 'siete de la mañana',
      pregunta_id:1,
      fecha_de_publicacion:'agosto 19',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('respuesta', null, {});
  }
  
};
