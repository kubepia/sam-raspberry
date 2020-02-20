var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var serveStatic = require('serve-static')

var logger = require('morgan');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var loginRouter = require('./routes/login');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(serveStatic(path.join(__dirname, 'public'), {
    maxAge: '1h'
  }))

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/api/login', loginRouter);
app.use('/api/users', usersRouter);

module.exports = app;