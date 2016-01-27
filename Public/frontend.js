'use strict';

var submitButton = document.querySelector('.submit-button');
var filterButton = document.querySelector('.filter-button')
var mealInput = document.querySelector('.meal-input');
var calorieInput = document.querySelector('.calorie-input');
var dateInput = document.querySelector('.date-input');
var filterDateInput = document.querySelector('.filter-date-input');

submitButton.addEventListener('click', function () {
  postItemToServer(mealInput.value, calorieInput.value, dateInput.value)
});


filterButton.addEventListener('click', function () {
  listCalItems(listCallback)
});
