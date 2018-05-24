var router = require('express').Router();

// var foodApi = require('./foods');

router.use('/api/foods', require('./food.api'));
router.use('/api/users', require('./users'));

module.exports = router;