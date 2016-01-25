'use strict';

var submitButton = document.querySelector('.submit-button');
var mealInput = document.querySelector('.meal-input');
var calorieInput = document.querySelector('.calorie-input');
var dateInput = document.querySelector('.date-input');

submitButton.addEventListener('click', function () {
  postItemToServer(mealInput.value, refresh)
  postItemToServer(calorieInput.value, refresh)
  postItemToServer(dateInput.value, refresh)
});
