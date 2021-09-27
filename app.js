/* eslint-disable no-console */
const express = require('express');
const logger = require('morgan');
const routes = require('./src/routes');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(logger('dev'));
app.use('/api/v1', routes);

app.listen(PORT, () => {
    console.log(`server listneing on port ${PORT}`);
});
