'use strict';

var submitButton = document.querySelector('.submit')
var filterButton = document.querySelector('.filter')
var allButton = document.querySelector('.all')
var mealInput = document.querySelector('.meal-input');
var calorieInput = document.querySelector('.calorie-input');
var dateInput = document.querySelector('.date-input');
var filterDateInput = document.querySelector('.filter-date-input');

submitButton.addEventListener('click', function () {
  postItemToServer(mealInput.value, calorieInput.value, dateInput.value)
});

filterButton.addEventListener('click', function () {
  listCalItems(listItem)
});

allButton.addEventListener('click', function () {
  document.location.reload(true);
});
