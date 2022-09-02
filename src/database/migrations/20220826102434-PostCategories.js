'use strict';

module.exports = {
  /**
 *
 * @param {import('sequelize').QueryInterface} queryInterface 
 * @param {import('sequelize').DataTypes} Sequelize  
 */

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostCategories', {
      postId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'BlogPosts',
          key: 'id',
        },
        primaryKey: true,
        foreignKey: true,
      },

      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id',
        },
        primaryKey: true,
        foreignKey: true,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
   await queryInterface.dropTable('PostCategories')
  },
};
