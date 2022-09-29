const { celebrate, Joi } = require('celebrate');
const { regex } = require('../utils/data');

const validateUpdateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().required().email(),
  }),
});

const validateSignUp = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const validateSignIn = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const validateCreateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().regex(regex),
    trailerLink: Joi.string().required().regex(regex),
    thumbnail: Joi.string().required().regex(regex),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const validateCheckMovie = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().alphanum().length(24),
  }),
});

module.exports = {
  validateUpdateUser,
  validateSignUp,
  validateSignIn,
  validateCreateMovie,
  validateCheckMovie,
};
