'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('pregunta', [
      {
      subcategoria_id:1,
      usuario_id:1,
      descripcion: 'Cómo controlar manchas amarillas en las hojas del café', 
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pregunta', null, {});
  }
};
