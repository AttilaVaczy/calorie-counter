'use strict';

var url = "http://localhost:3000/meals";
var calContainer = document.querySelector('.cal-container');


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
  calContainer.innerHTML = '';
  listCalItems(listCallback);
}


function createItem (calItem) {
  var newCalItem = document.createElement('p');
  newCalItem.innerText = calItem.Name + ' ' + calItem.Calorie + ' ' + calItem.Date.split('T')[0]
  calContainer.appendChild(newCalItem);
}

var listCallback = function (response) {
  var filter = filterDateInput.value
    calContainer.innerText = ''
      response.forEach(function(calItem) {
        if (filter === calItem.Date.split('T')[0]) {
          createItem(calItem)
          } else if (filter === "") {
            createItem(calItem)
          }
        });
      }

listCalItems(listCallback);
