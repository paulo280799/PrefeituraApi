'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {return queryInterface.createTable('users', {
         id: {
           type: Sequelize.INTEGER,
           allowNull: false,
           primaryKey: true,
           autoIncrement: true,
         },
         name: {
           type: Sequelize.STRING,
           allowNull: false,
         },
         login: {
           type: Sequelize.STRING,
           allowNull: false,
         }
    });
  },

  down: (queryInterface) => {
      return queryInterface.dropTable('users');
    
  }
};
