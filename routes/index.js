const express = require('express');

const { createUser, login, logout } = require('../controllers/users');
const { validateSignUp, validateSignIn } = require('../middlewares/validators');

const routes = express.Router();
const usersRoutes = require('./users');
const moviesRoutes = require('./movies');
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/NotFoundError');

routes.post('/signup', validateSignUp, createUser);
routes.post('/signin', validateSignIn, login);

routes.use(auth);

routes.use('/users', usersRoutes);
routes.use('/movies', moviesRoutes);
routes.get('/signout', logout);

routes.use('*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = routes;
