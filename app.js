"use strict";
exports.__esModule = true;
var express = require('express');
var apiRouter = require('./routers/apiRouter');
var app = express();
var cors = require('cors');
// const {
//   handlePsqlErrors,
//   handleCustomErrors
// } = require('./controllers/errorController');
app.use(cors());
app.use(express.json());
app.use('api', apiRouter);
app.all('/*', function (req, res, next) {
    res.status(404).send({ msg: 'Endpoint does not exist' });
});
// app.use(handlePsqlErrors);
// app.use(handleCustomErrors);
module.exports = { app: app };
