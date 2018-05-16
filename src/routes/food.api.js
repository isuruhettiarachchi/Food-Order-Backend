var food = require('../models/FoodModel');
var router = require('express').Router();

router.use(function (req,res,next) {
    console.log('Something happening');
    next();
 });

router.get('/',function(req,res) {
    res.json({message: 'welcome to api'});
});

router.route('/foods').get((req, res) => {
    food.find((err, food) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json(food);
    });
});

module.exports = food.api;
