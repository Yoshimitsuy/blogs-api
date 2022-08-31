const express = require('express');
const { loginController } = require('./controllers/loginController');
const { postUser, getAllUsers } = require('./controllers/userController');
const { tokenValidation } = require('./middlewares/tokenValidation');
const { checkLogin } = require('./middlewares/loginCheck');

// ...

const app = express();

app.use(express.json());

app.post('/login', checkLogin, loginController.login);
app.post('/user', postUser);

app.get('/user', tokenValidation, getAllUsers);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
