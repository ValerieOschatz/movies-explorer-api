const mongoose = require('mongoose');
const { isEmail } = require('validator');
const checkUser = require('../middlewares/checkUser');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [2, 'поле name должно содержать не менее 2 символов'],
    maxlength: [30, ', поле name должно содержать не более 30 символов'],
    required: [true, 'поле name обязательное'],
  },
  email: {
    type: String,
    required: [true, 'поле email обязательное'],
    unique: [true, 'пользователь с этим email уже существует'],
    validate: {
      validator: (v) => isEmail(v),
      message: 'введите корректный email',
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

userSchema.statics.findUserByCredentials = checkUser;

module.exports = mongoose.model('user', userSchema);
