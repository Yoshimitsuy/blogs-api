const { Category } = require('../database/models');

const createCategory = async (name) => {
  const data = await Category.create({ name });

  return data;
};

const findCategories = async () => {
  const data = await Category.findAll();

  return data;
};

module.exports = {
  createCategory,
  findCategories,
};