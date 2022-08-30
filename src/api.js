const express = require('express');
const { loginController } = require('./controllers/loginController');
const { checkLogin } = require('./middlewares/loginCheck');
// const routes = require('./routes');

// ...

const app = express();

app.use(express.json());

app.post('/login', checkLogin, loginController.login);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
