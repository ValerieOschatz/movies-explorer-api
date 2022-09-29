require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');

const routes = require('./routes');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const defaultError = require('./middlewares/defaultError');
const { port, dbUrl } = require('./utils/data');

const app = express();

app.use(cookieParser());
app.use(requestLogger);
app.use(express.json(), routes);
app.use(errorLogger);
app.use(errors());
app.use(defaultError);

async function main() {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: false,
    });
  } catch (err) {
    console.log(err);
  }

  try {
    await app.listen(port);
  } catch (err) {
    console.log(err);
  }
  console.log(`App listening on port ${port}`);
}

main();
