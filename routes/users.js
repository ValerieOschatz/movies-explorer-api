const express = require('express');

const usersRoutes = express.Router();

const { getCurrentUser, updateUser } = require('../controllers/users');
const { validateUpdateUser } = require('../middlewares/validators');

usersRoutes.get('/me', getCurrentUser);
usersRoutes.patch('/me', validateUpdateUser, updateUser);

module.exports = usersRoutes;
