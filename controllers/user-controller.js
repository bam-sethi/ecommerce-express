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