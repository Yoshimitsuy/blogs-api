'use strict';
/**
*
* @param {import('sequelize').Sequelize} sequelize 
* @param {import('sequelize').DataTypes} DataTypes 
*/
module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    postId: { type: DataTypes.INTEGER, primaryKey: true },
    categoryId: { type: DataTypes.INTEGER, primaryKey: true },
  }, {
    timestamps: false,
    tableName: 'PostCategories',
  });

  PostCategory.associate = (models) => {

    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategory,
      foreignKey: 'postId',
      // otherKey: 'categoryId',
      as: 'BlogPosts',
      
    });

    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory,
      foreignKey: 'categoryId',
      // otherKey: 'postId',
      as: 'categories',
    });
  };

  return PostCategory;
};
