"use strict";

module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("clientes", {
         id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
         },
         nome: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         cpf: {
            type: Sequelize.STRING(11),
            allowNull: false,
         },
         email: {
            type: Sequelize.STRING,
         },
      });
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable("clientes");
   },
};
