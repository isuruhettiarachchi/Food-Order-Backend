var foods = require('../models/FoodModel');

// function getFoods(callback) {
//     foods.find(callback);
// }

module.exports.getFoods = function(callback) {
    foods.find(callback);
}