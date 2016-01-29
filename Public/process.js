'use strict';

var calContainer = document.querySelector('.cal-container');
var calorieSum = document.querySelector('.sum');
var calorieTable = document.querySelector('tbody');

var refresh = function () {
  var new_tbody = document.createElement('tbody');
  calorieTable.parentNode.replaceChild(new_tbody, calorieTable);
  calorieTable = new_tbody;
  listCalItems(listItem);
}

function createItem (calItem) {
  var newCalItem = document.createElement('tr');
  var nameTd = document.createElement('td');
  var calTd = document.createElement('td');
  var dateTd = document.createElement('td');
  var delTd = document.createElement('td');
  var delBut = document.createElement('button');
  delBut.addEventListener('click', function () {
    deleteItems(calItem.ID, refresh)
  });
  nameTd.innerText = calItem.Name;
  calTd.innerText = calItem.Calorie;
  dateTd.innerText = calItem.Date.split('T')[0];
  newCalItem.appendChild(nameTd);
  newCalItem.appendChild(calTd);
  newCalItem.appendChild(dateTd);
  newCalItem.appendChild(delTd);
  delTd.appendChild(delBut);
  calorieTable.appendChild(newCalItem);
}

var listItem = function (response) {
  var sum = 0;
  var filter = filterDateInput.value
  calorieTable.innerHTML = "";
    response.forEach(function(calItem) {
      if (filterItem(calItem)) {
        sum += calItem.Calorie
        createItem(calItem)
        }
      });
      calorieSum.innerText = sum;
    }

function filterItem (calItem) {
  if (filterDateInput.value === "") {
    return true
  }
  if (filterDateInput.value === calItem.Date.split('T')[0]) {
    return true
  }
  return false
}

listCalItems(listItem);
