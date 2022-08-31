const { createUser, getAll } = require('../services/userService');

const postUser = async (req, res) => {
  console.log('controller');
  const { displayName, email, password, image } = req.body;

  const data = await createUser({
    displayName,
    email,
    password,
    image,
  });

  if (data.code) {
    return res.status(Number(data.code)).json({ message: data.message });
  }
  return res.status(201).json({ token: data });
};

const getAllUsers = async (req, res) => {
  const data = await getAll();

  return res.status(200).json(data);
};

module.exports = {
  postUser,
  getAllUsers,
};
