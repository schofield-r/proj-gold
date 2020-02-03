import { Server } from 'http';

const express = require('express');
const apiRouter = require('./routers/apiRouter');
const app = express();
const cors = require('cors');
// const {
//   handlePsqlErrors,
//   handleCustomErrors
// } = require('./controllers/errorController');

app.use(cors());

app.use(express.json());

app.use('api', apiRouter);

app.all('/*', (req, res, next) => {
  res.status(404).send({ msg: 'Endpoint does not exist' });
});

// app.use(handlePsqlErrors);

// app.use(handleCustomErrors);

module.exports = { app };
