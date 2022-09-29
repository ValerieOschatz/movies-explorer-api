const {
  NODE_ENV,
  JWT_SECRET,
  PORT,
  DB_URL,
} = process.env;

const CREATED = 201;
const regex = /https?:\/\/(www\.)?[\w-.]+\.[a-z]{2,3}[\w-.~:/?#[\]@!$&'()*+,;=]*#?/;

const secretKey = NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret';
const port = NODE_ENV === 'production' ? PORT : 3001;
const dbUrl = NODE_ENV === 'production' ? DB_URL : 'mongodb://localhost:27017/bitfilmsdb';

module.exports = {
  CREATED,
  regex,
  secretKey,
  port,
  dbUrl,
};
