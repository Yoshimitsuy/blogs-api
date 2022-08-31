const express = require('express');
const { loginController } = require('./controllers/loginController');
const { postUser, getAllUsers, getById } = require('./controllers/userController');
const { tokenValidation, validateCategory } = require('./middlewares/tokenValidation');
const { checkLogin } = require('./middlewares/loginCheck');
const { addCategory } = require('./controllers/categoryController');

// ...

const app = express();

app.use(express.json());

app.post('/login', checkLogin, loginController.login);
app.post('/user', postUser);

app.get('/user', tokenValidation, getAllUsers);
app.get('/user/:id', tokenValidation, getById);

app.post('/categories', validateCategory, tokenValidation, addCategory);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
