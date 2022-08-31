const { Category } = require('../database/models');

const createCategory = async (name) => {
  const data = await Category.create({ name });

  return data;
};

module.exports = {
  createCategory,
};