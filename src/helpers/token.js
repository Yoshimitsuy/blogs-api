const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;
const JWT_CONFIG = { algorithm: 'HS256', expiresIn: '2d' };

const tokenGen = (payload) => {
  const token = jwt.sign(
    payload, JWT_SECRET, JWT_CONFIG,
  );
  return token;
};

const tokenVerify = (token) => {
  if (!token) throw new Error('401|Token not found');

  try {
    jwt.decode(token, JWT_SECRET);
  } catch (e) {
    console.error(e);
    throw new Error('401|Expired or invalid token');
  }
};

module.exports = {
  tokenGen,
  tokenVerify,
};
