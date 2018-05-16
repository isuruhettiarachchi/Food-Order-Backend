var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');

// import * as api from './routes';

var app = express();

mongoose.connect('mongodb://localhost:27017/FoodOrderSystem', err => {
  if (err) {
    console.warn(err);
  }
  console.log('database connected');
});

mongoose.Promise = global.Promise;

// app.use('/', routes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/', require('./routes'));

var server = app.listen(3000, function() {});
