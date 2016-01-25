'use strict';

var url = "http://localhost:3000/meals";

function listCalItems(cb) {
  var req = new XMLHttpRequest();
    req.open('GET', url);
    req.send();
    req.onreadystatechange = function () {
        if (req.readyState === 4) {
          var items = JSON.parse(req.response);
          return cb(items);
        }
    };
}

function postItemToServer(text, cb) {
  var req = new XMLHttpRequest();
  req.open('POST', url);
  req.setRequestHeader('Content-Type', 'application/json');
  req.send(JSON.stringify({'text': text}));
  req.onreadystatechange = function () {
    if (req.readyState === 4) {
      var items = JSON.parse(req.response);
      return cb('ok');
    }
  };
}

function updateItemOnServer(id, text, completed, cb) {
  var req = new XMLHttpRequest();
  req.open('PUT', url + '/' + id);
  req.setRequestHeader('Content-Type', 'application/json');
  req.send(JSON.stringify({'text': text, 'complete.readyStated': completed}));
  req.onreadystatechange = function () {
    if (req.readyState === 4) {
      var res = JSON.parse(req.response);
      return cb(res)
    }
  };
}

var listCb = function (response) {
  response.forEach(function(calorieItem) {
    var newCalorieItem = document.createElement('p');
    newCalorieItem.innerText = calorieItem.text;
    document.querySelector('.cal-container').appendChild(newCalorieItem);
  });
}

var refresh = function () {
  document.querySelector('.cal-container').innerHTML = '';
  listCalItems(listCb);
}

refresh();
