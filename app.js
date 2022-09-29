require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');

const { PORT = 3000 } = process.env;
const routes = require('./routes');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const defaultError = require('./middlewares/defaultError');

const app = express();

app.use(cookieParser());
app.use(requestLogger);
app.use(express.json(), routes);
app.use(errorLogger);
app.use(errors());
app.use(defaultError);

async function main() {
  try {
    await mongoose.connect('mongodb://localhost:27017/bitfilmsdb', {
      useNewUrlParser: true,
      useUnifiedTopology: false,
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }

  try {
    await app.listen(PORT);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
}

main();
