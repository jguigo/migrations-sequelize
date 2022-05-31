'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface. addColumn('clientes', 'telefone', {
      type: Sequelize.STRING,
      allowNull:true
    })
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.removeColumn('clientes', 'telefone');
  }
};
