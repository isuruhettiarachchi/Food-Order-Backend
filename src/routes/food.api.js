var express = require('express');
var router = express.Router();
var foodController = require('../controllers/foodController');

router.use(function timelong(req, res, next) {
    console.log('Time', Date.now);
    next();
});

router.get('/', (req, res) => {
    foodController.getFoods((err, foods) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json(foods);
    })
});

module.exports = router;