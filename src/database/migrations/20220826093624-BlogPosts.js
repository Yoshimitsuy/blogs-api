'use strict';

module.exports = {
  /**
 *
 * @param {import('sequelize').QueryInterface} queryInterface 
 * @param {import('sequelize').DataTypes} Sequelize 
 */

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        foreignKey: true,
      },

      published: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
   await queryInterface.dropTable('BlogPosts')
  },
};
