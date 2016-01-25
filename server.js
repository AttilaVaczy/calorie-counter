'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var items = require('./meal.js');

var app = express();

app.use(express.static('Public'));
app.use(bodyParser.json());

app.get('/meals', function (req, res) {
items.getItems(function (result) {
  res.status(200).json(result);
  })
});

app.post('/meals', function (req, res) {
  var item = items.addItem(req.body);
  res.status(201).json({'status': 'ok'});
});

app.delete('/meals/:id', function (req, res) {
  var item = items.deleteItem(req.body);

})

app.listen(3000, function () {
  console.log('Listening on port 3000...')
});
