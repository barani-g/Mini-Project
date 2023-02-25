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
router.route('/addUser').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const role = "user"
    const newUser = new User({username, password, role});

    newUser.save()
        .then(()=> {res.json('User Added!')})
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/addRestaurantUser').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const role = "res"
    const newUser = new User({username, password, role});

    newUser.save()
        .then(()=> {res.json('Restaurant User Added!')})
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/addAdmin').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const role = "admin"
    const newUser = new User({username, password, role});

    newUser.save()
        .then(()=> {res.json('Admin Added!')})
        .catch(err => res.status(400).json('Error: '+ err));
});


module.exports = router;