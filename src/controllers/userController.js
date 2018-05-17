var User = require('../models/UserModel');

module.exports.addUser = (UserData) => {

    console.log("adduser called" + JSON.stringify(UserData));
    return new Promise(function (resolve, reject) {

        const newUser = new User(UserData);
        newUser.save(err => {
            if (err) {
                console.log("error: " + err);
                reject(err)
            }
            resolve("user created");
        });
    });
}