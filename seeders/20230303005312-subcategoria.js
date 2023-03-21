'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('subcategoria', [
      {
      categoria_id: 1, 
      descripcion: 'subcategoria',
      titulo:'sub',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('subcategoria', null, {});
  }
};
