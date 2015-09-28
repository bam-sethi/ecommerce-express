var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

module.exports = router;


var User = require('../models/user')


// INDEX
router.get('/', function(req, res){
  User.find({}, function(err, users){
    if(err) console.log(err);
    res.json(users);
  });
});

//SHOW
router.get('/:id', function(req, res){
  User.findOne( { _id: req.params.id }, function(err, user){
    if(err) console.log(err);
  res.json(user)
  });
});

//CREATE
router.post('/', function(req, res){

  console.log(req.body);
  var userData = req.body;
  
  var newUser = new User({
    name: userData.name,
    gender: userData.gender
  });

  newUser.save(function(err, user) {
    if(err) console.log(err);
    console.log('User has been created!');
  res.json(user);

  });
})