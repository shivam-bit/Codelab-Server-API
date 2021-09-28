/* eslint-disable no-console */
const express = require('express');
const logger = require('morgan');
const routes = require('./src/routes');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(logger('dev'));
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`server listneing on port ${PORT}`);
});
