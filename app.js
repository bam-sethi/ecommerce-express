var mongoose = require('mongoose');
var express = require('express');
// var bodyParser = require('bodyParser');
var app = express();
var router = express.Router()

mongoose.connect('mongodb://localhost/ecommerce-express');


var Product = require('./models/product');
var User = require('./models/user');
var Order = require('./models/order');


// MODULAR ROUTING
var userRouter = require('./controllers/user-controller');
app.use('/users', userRouter);
//might need to do the other routes
// var productRouter = require('./controllers/product-controller');
// app.use('/products', productRouter);
// var orderRouter = require('./controllers/order-controller');
// app.use('/users', orderRouter);


//root route
app.get('/', function(req, res){
  res.render('index')
});


//User Data
var ali = new User({
  name: 'Muhammed Ali',
  gender: 'Female'
});


ali.save(function(err, user){
  if(err) console.log(err);
  console.log('Ali Created!');
});



var nas = new User({
  name: 'Prince Nas',
  gender: 'Cyborg'
});

nas.save(function(err, user){
  if(err) console.log(err);
  console.log('nas created!');
});

//Product Data
var laser = new Product({
  name: 'Laser Pen',
  price: 1782,
  description: 'Very reliable and lazery'
});

laser.save(function(err, user){
  if(err) console.log(err);
  console.log('laser pen created!');
});

var painting = new Product({
  name: 'Mona Lisa',
  price: 1782,
  description: 'Nice to look at'
});

painting.save(function(err, user){
  if(err) console.log(err);
  console.log('painting created!');
});




var orderOne = new Order({
  address: {
    street: '101 The Strand',
    postcode: 'N4 187',
    town: 'Newcastle',
    Country: 'Scotland'
  },
  user: ali
});



orderOne.save(function(err, order){
  if(err) console.log(err);
  console.log('ORDER created!');

  User
  .findOne()
  .populate('user')
  .exec(function(err, user) {
    if(err) console.log(err);
    console.log(order.products, order.user, 'User Order Created! =)');
  });

});

orderOne.products.push({
  name: 'Bhudda Statue',
  price: 1,
  description: 'Very Relaxing'
});

orderOne.products.push(painting);






app.listen(process.env.PORT || 3000)