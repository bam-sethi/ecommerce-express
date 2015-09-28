// var mongoose = require('mongoose');
// var express = require('express');
// var router = express.Router();
// // var app = express();
// module.exports = router;



// var Order = require('../models/order')


// // INDEX
// router.get('/', function(req, res) {

//   Order.find({}, function(err, orders){
//     if(err) console.log(err);
//     res.json(orders);
//   });

// });

// // CREATE

// router.post('/', function(req, res){

//   console.log(req.body);

//   var orderInfo = req.body;
//   var newOrder = new Order({
//     address: {
//       street: orderInfo.street,
//       postcode: orderInfo.postcode,
//       town: orderInfo.town,
//       Country: orderInfo.Country
//     },
//     // user: 
//     // product:
//   })

//   newOrder.save(function (err, order) {
//     if(err) console.log(err);
//     console.log('Order has been created!');
//   res.json(order);
//   });
// })

