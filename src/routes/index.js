var router = require('express').Router();

// var foodApi = require('./foods');

router.use('/api/foods', require('./food.api'));

module.exports = router;