const { findPosts } = require('../services/postService');

const getPosts = async (req, res) => {
  console.log('postController OK');
  const data = await findPosts();

  return res.status(200).json(data);
};

module.exports = {
  getPosts,
};