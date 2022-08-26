'use strict';
/**
*
* @param {import('sequelize').Sequelize} sequelize 
* @param {import('sequelize').DataTypes} DataTypes 
*/
module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("BlogPost", {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    timestamps: false,
    tableName: 'BlogPost',
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId'
    })
  }

  return BlogPost;
};
