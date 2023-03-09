'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('pregunta', [
      {
      descripcion: 'Cómo controlar manchas amarillas en las hojas del café', 
      hora_fecha: '03 de marzo de 2023, 7:38 PM',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pregunta', null, {});
  }
};
