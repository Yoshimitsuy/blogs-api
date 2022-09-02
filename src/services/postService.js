const { User, Category, BlogPost } = require('../database/models');

const findPosts = async () => {
  console.log('postService OK');
  const data = await BlogPost.findAll({
    include: [{
      model: User,
      attributes: {
        exclude: ['password'],
      },
      as: 'user',
    }, {
      model: Category,
      as: 'categories',
    }],
  });

  return data;
};

module.exports = {
  findPosts,
};