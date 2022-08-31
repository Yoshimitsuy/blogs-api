const { createCategory } = require('../services/categoryService');

const addCategory = async (req, res) => {
  const { name } = req.body;

  const data = await createCategory(name);

  return res.status(201).json(data);
};

module.exports = {
  addCategory,
};
