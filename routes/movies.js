const express = require('express');

const moviesRoutes = express.Router();

const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { validateCreateMovie, validateCheckMovie } = require('../middlewares/validators');

moviesRoutes.get('/', getMovies);
moviesRoutes.post('/', validateCreateMovie, createMovie);
moviesRoutes.delete('/:movieId', validateCheckMovie, deleteMovie);

module.exports = moviesRoutes;
