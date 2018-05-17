var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var session = require('express-session');
var cors = require('cors');

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

app.use(cors());
app.use(bodyparser.json()); // parse JSON request body
app.use(bodyparser.raw()); // parse raw request body
app.use(bodyparser.urlencoded({ extended: false })); // parse x-www-form-urlencoded request body

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/', require('./routes'));

var server = app.listen(3000, function() {});
