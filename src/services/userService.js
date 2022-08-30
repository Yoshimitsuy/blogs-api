const { User } = require('../database/models');
const { tokenGen } = require('../helpers/token');
const { checkUser } = require('../helpers/userCheck');

const createUser = async ({ displayName, email, password, image }) => {
  console.log('service');
  const checkOK = checkUser({ displayName, email, password, image });
  if (checkOK.code) return checkOK;
  
  const dataEmail = await User.findOne({
    where: { email },
});

  if (dataEmail) return { code: 409, message: 'User already registered' };

  await User.create({
      displayName,
      email,
      password,
      image,
  });

  return tokenGen({ email });
};

module.exports = {
  createUser,
};
