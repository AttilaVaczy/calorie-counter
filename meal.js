"use strict" ;
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'test',
  password : 'test',
  database : 'calorie_counter'
});

connection.connect();

function getItems(callback) {
	connection.query("SELECT  * FROM  meals", function (err, result) {
		if (err) throw err;
		callback(result);
	});
}

function allItems () {
  var values = [];
    for (id in items) {
      values.push(items[id]);
    }
  return values;
}

function addItem(attributes) {
  connection.query('INSERT INTO meals SET ?', attributes, function(err, result) {
    if (err) throw err;
    console.log(result.insertID);
  });
}

function deleteItem(id, cb) {
  connection.query ('DELETE FROM meals WHERE ID = ?', id, function(err, result) {
    //if (err) throw err;
    console.log(result);
    var rows = result.affectedRows;
    console.log(err);
    cb(err, rows);
  });
}

module.exports = {
  getItems: getItems,
  allItems: allItems,
  addItem: addItem,
  deleteItem: deleteItem,
};
