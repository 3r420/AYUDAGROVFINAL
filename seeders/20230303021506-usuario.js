'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('usuario', [
      {
      nombre: 'Yennifer Nataly', 
      apellido: 'Martinez Ortega',
      correo_electronico: 'yennifernataly2003@gmail.com',
      contrasena: 'Yennita123',
      repetir_contrasena: 'yennita123',
      telefono: 3178081939,
      direccion: 'calle 70AN No 5-14',
      estado: 'activo',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuario', null, {});
  }
};
