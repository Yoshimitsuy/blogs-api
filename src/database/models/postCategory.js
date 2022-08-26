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
      foreingKey: 'postId',
    });

    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory,
      foreingKey: 'categoryId',
    });
  };

  return PostCategory;
};
