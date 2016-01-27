'use strict';

var calContainer = document.querySelector('.cal-container');

var refresh = function () {
  calContainer.innerHTML = '';
  listCalItems(listItem);
}

function createItem (calItem) {
  var newCalItem = document.createElement('p');
  newCalItem.innerText = calItem.Name + ' ' + calItem.Calorie + ' ' + calItem.Date.split('T')[0]
  calContainer.appendChild(newCalItem);
}

var listItem = function (response) {
  var filter = filterDateInput.value
    calContainer.innerText = ''
    response.forEach(function(calItem) {
      if (filterItem(calItem)) {
        createItem(calItem)
        }
      });
    }

function filterItem (calItem) {
  if (filterDateInput.value === "") {
    return true
  } if (filterDateInput.value === calItem.Date.split('T')[0]) {
    return true
  } return false
}


listCalItems(listItem);
