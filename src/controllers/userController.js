const { createUser } = require('../services/userService');

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

module.exports = {
  postUser,
};
