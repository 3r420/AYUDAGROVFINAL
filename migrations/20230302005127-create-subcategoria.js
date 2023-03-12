'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('subcategoria', {
      id_subcategoria: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
     
      categoria_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{tableName:'categoria'},
          key:'id_categoria'
        }
        
      },
      descripcion: {
        type: Sequelize.STRING
      },
      titulo: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('subcategoria');
  }
};