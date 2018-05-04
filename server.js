var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var path = require('path')
var passport = require('passport');

var api = require('./app/routes/api')
var owners = require('./app/routes/owners')
var app = express()

app.use(logger('dev'))
app.use(passport.initialize());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({'extended':'false'}));
// app.use(express.static(path.join(__dirname, 'dist')));
app.use('/', express.static(path.join(__dirname, 'dist')));
// app.use('/dashboard', express.static(path.join(__dirname, 'dist')));
app.use('/api', api);
app.use('/owners', owners);

var dbConfig = require('./config/database.config.js')
var mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect(dbConfig.url)

mongoose.connection.on('error', (err) => {
    console.log('Could not connect to db')
    process.exit()
})

// require('./app/routes/pets.routes.js')(app)
// require('./app/routes/owners.routes.js')(app)

app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// if (process.env.NODE_ENV !== 'dev') {
//   app.use('/', express.static(path.join(__dirname, './dist')));
// }

module.exports = app;