var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

router.post('/add', (req, res) => {

    if (req.body.username &&
        req.body.password) {
        console.log("details received");
        var userData = {
            username: req.body.username,
            password: req.body.password
        }
        userController.addUser(userData).then(user=>{
            res.json(user);
        }).catch(err=>{
           res.send(err); 
        });

    } else {
        res.send("bad request");
    }
});

module.exports = router;