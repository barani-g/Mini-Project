//Import Packages
const router = require('express').Router();
const express = require('express');

//Import Model
let User = require('../models/user_model');

//Find Users
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: '+ err));
});

//Add User
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const role = req.body.role;
    const newUser = new User({userName, password, role});

    newUser.save()
        .then(()=> {console.log('User Added!')})
        .catch(err => res.status(400).json('Error: '+ err));
});


module.exports = router;