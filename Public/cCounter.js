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

function postItemToServer(name, calorie, date) {
  var req = new XMLHttpRequest();
  req.open('POST', url);
  req.setRequestHeader('Content-Type', 'application/json');
  req.send(JSON.stringify({'Name': name, 'Calorie': calorie, 'Date': date}));
  req.onreadystatechange = function () {
    if (req.readyState === 4) {
    }
  };
}

var refresh = function () {
  document.querySelector('.cal-container').innerHTML = '';
  listCalItems(listCallback);
}

var listCallback = function (response) {
  response.forEach(function(calItem) {
    var newCalItem = document.createElement('p');
    newCalItem.innerText = calItem.Name + ' ' + calItem.Calorie + ' ' + calItem.Date
    document.querySelector('.cal-container').appendChild(newCalItem);
  });
}


listCalItems(listCallback);
