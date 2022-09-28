const mongoose = require('mongoose');
const { regex } = require('../utils/data');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, 'поле country обязательное'],
  },
  director: {
    type: String,
    required: [true, 'поле director обязательное'],
  },
  duration: {
    type: Number,
    required: [true, 'поле duration обязательное'],
  },
  year: {
    type: String,
    required: [true, 'поле year обязательное'],
  },
  description: {
    type: String,
    required: [true, 'поле description обязательное'],
  },
  image: {
    type: String,
    required: [true, 'поле image обязательное'],
    validate: {
      validator: (v) => regex.test(v),
      message: 'введите адрес ссылки',
    },
  },
  trailerLink: {
    type: String,
    required: [true, 'поле trailerLink обязательное'],
    validate: {
      validator: (v) => regex.test(v),
      message: 'введите адрес ссылки',
    },
  },
  thumbnail: {
    type: String,
    required: [true, 'поле thumbnail обязательное'],
    validate: {
      validator: (v) => regex.test(v),
      message: 'введите адрес ссылки',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: [true, 'поле movieId обязательное'],
  },
  nameRU: {
    type: String,
    required: [true, 'поле nameRU обязательное'],
  },
  nameEN: {
    type: String,
    required: [true, 'поле nameEN обязательное'],
  },
});

module.exports = mongoose.model('movie', movieSchema);
