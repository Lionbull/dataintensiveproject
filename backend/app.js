/*
Create database:
    psql -d existing_database -a -f ./database/init.sql

Create fields to databases:
    psql -d difinland -a -f ./database/initdb.sql
    psql -d disweden -a -f ./database/initdb.sql
    psql -d dinorway -a -f ./database/initdb.sql
    psql -d didenmark -a -f ./database/initdb.sql
    psql -d diestonia -a -f ./database/initdb.sql

Insert test data:
    NOTICE: Estonia should replicate Sweden's data, so insert Swedish data to Estonia also
    psql -d difinland -a -f ./database/test_insert.sql
    psql -d disweden -a -f ./database/test_insert.sql
    psql -d dinorway -a -f ./database/test_insert.sql
    psql -d didenmark -a -f ./database/test_insert.sql
    psql -d diestonia -a -f ./database/test_insert.sql
*/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var apiRouter = require('./routes/api.js')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', apiRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // respond with error json
    res.status(err.status || 500);
    res.json('error');
});

module.exports = app;
