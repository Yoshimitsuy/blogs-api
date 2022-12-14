const jwt = require('jsonwebtoken');

require('dotenv').config();

const { JWT_SECRET } = process.env;
// const JWT_CONFIG = { algorithm: 'HS256', expiresIn: '2d' };

const tokenValidation = (req, res, next) => {
  const { authorization } = req.headers;

  try {
    jwt.verify(authorization, JWT_SECRET);
  } catch (err) {
    if (err.message === 'jwt must be provided') {
      return res.status(401).json({ message: 'Token not found' });
    }
  
    console.error('JWT error:', err);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

 next();
};

const validateCategory = async (req, res, next) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });

  next();
};

module.exports = {
  tokenValidation,
  validateCategory,
};