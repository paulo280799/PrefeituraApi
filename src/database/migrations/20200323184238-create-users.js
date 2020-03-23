'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {return queryInterface.createTable('users', {
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
         rua: {
          type: Sequelize.STRING,
          allowNull: false,
         },
         num_casa: {
           type: Sequelize.STRING,
           allowNull: false,
         },
         telefone: {
          type: Sequelize.STRING,
          allowNull: false,
         },
         login: {
           type: Sequelize.STRING,
           allowNull: false,
         },
         password: {
           type: Sequelize.STRING,
           allowNull: false,
         },
    });
  },

  down: (queryInterface) => {
      return queryInterface.dropTable('users');
    
  }
};
