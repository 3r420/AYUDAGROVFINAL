'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categoria', [{
      descripcion: 'hace referencia a frutos',
      titulo: 'frutos',
     
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categoria', null, {});
  }
};
