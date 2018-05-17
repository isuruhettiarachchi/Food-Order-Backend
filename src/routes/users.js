var express = require('express');
var router = express.Router();
var User = require('../models/UserModel');
var userController = require('../controllers/userController');

router.post('/add', (req, res) => {

    if (req.body.username &&
        req.body.password) {
        console.log("details received");
        var userData = {
            username: req.body.username,
            password: req.body.password
        }
        userController.addUser(userData).then(user => {
            res.json(user);
        }).catch(err => {
            res.send(err);
        });

    } else {
        res.send("bad request");
    }
});

router.post('/login', (req, res) => {

    if (req.body.username &&
        req.body.password) {
        console.log("login details received");

        User.authenticate(req.body.username, req.body.password, function (error, user) {
            if (error || !user) {
                var err = new Error('Wrong email or password.');
                err.status = 401;
                return res.send(err);
            } else {
                req.session.userId = user._id;
                return res.send('logged in');
            }
        });

    } else {
        res.send("bad request");
    }
});

module.exports = router;