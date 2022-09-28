const bcrypt = require('bcryptjs');
const UnauthorizedError = require('../errors/UnauthorizedError');

async function checkUser(email, password) {
  try {
    const user = await this.findOne({ email }).select('+password');
    if (!user) {
      return Promise.reject(new UnauthorizedError('Указан неверный логин или пароль'));
    }
    const matched = await bcrypt.compare(password, user.password);
    if (!matched) {
      return Promise.reject(new UnauthorizedError('Указан неверный логин или пароль'));
    }
    return user;
  } catch (err) {
    return err;
  }
}

module.exports = checkUser;
