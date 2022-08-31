const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

require('dotenv').config();

const { JWT_SECRET } = process.env;
const JWT_CONFIG = { algorithm: 'HS256', expiresIn: '2d' };

const login = async ({ email, password }) => {
  const data = await User.findOne({ where: { email, password } });

  if (!data) return null;

  const token = jwt.sign(
    { email: data.email },
    JWT_SECRET,
    JWT_CONFIG,
  );

  return token;
};

module.exports = {
  login,
};
