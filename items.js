'use strict';

var CalItem = function () {
  this.id = nextId();
  this.text = "";
}

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'test',
  password : 'test',
  database : 'calorie_counter'
});

function allItems () {
  var values = [];
    for (id in items) {
      values.push(items[id]);
    }
  return values;
}

function addItem(attributes) {
  connection.query('INSTERT INTO calorie_counter SET ?', attributes, function(err, result) {
    if (err) throw err;
    console.log(result.insertID);
  });
}


module.exports = {
  all: allItems,
  add: addItem,
};
