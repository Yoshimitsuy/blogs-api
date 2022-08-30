const express = require('express');
const { loginController } = require('./controllers/loginController');
const { postUser } = require('./controllers/userController');
const { checkLogin } = require('./middlewares/loginCheck');

// ...

const app = express();

app.use(express.json());

app.post('/login', checkLogin, loginController.login);
app.post('/user', postUser);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
