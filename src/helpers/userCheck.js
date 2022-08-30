const Joi = require('joi');

const schema = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'string.min': '400|"displayName" length must be at least 8 characters long',
  }),

  email: Joi.string().email({ minDomainSegments: 2 }).required().messages({
    'string.email': '400|"email" must be a valid email',
  }),

  password: Joi.string().min(6).required().messages({
    'string.min': '400|"password" length must be at least 6 characters long',
  }),

  image: Joi.string().required(),
});

const checkUser = (userKeys) => {
  const { error } = schema.validate(userKeys);

  if (error) {
    const [code, message] = error.message.split('|');

    return { code, message };
}
  return { Success: true };
};

module.exports = {
  checkUser,
};