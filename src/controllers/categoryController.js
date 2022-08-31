const { createCategory, findCategories } = require('../services/categoryService');

const addCategory = async (req, res) => {
  const { name } = req.body;

  const data = await createCategory(name);

  return res.status(201).json(data);
};

const getCategories = async (req, res) => {
  const data = await findCategories();

  return res.status(200).json(data);
};

module.exports = {
  addCategory,
  getCategories,
};
