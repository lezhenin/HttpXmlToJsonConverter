const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.text({type: 'text/xml'}));

app.use('/', indexRouter);

module.exports = app;
