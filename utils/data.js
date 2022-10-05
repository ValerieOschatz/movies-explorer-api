const CREATED = 201;
const regex = /https?:\/\/(www\.)?[\w-.]+\.[a-z]{2,3}[\w-.~:/?#[\]@!$&'()*+,;=]*#?/;
const notFoundUserErrorText = 'Запрашиваемый пользователь не найден';
const notFoundFilmErrorText = 'Запрашиваемый фильм не найден';
const badRequestErrorText = 'Переданы некорректные данные';
const conflictErrorText = 'Пользователь с этим email уже существует';
const forbiddenErrorText = 'Нельзя удалить чужой фильм';

module.exports = {
  CREATED,
  regex,
  notFoundUserErrorText,
  badRequestErrorText,
  conflictErrorText,
  notFoundFilmErrorText,
  forbiddenErrorText,
};
