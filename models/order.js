var mongoose = require('mongoose');

var Product = mongoose.model('Product');

var orderSchema = new mongoose.Schema({
  address: {
    street: String,
    postcode: String,
    town: String,
    Country: String
  },
  products: [Product.schema],
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }

});


var Order = mongoose.model('Order', orderSchema);
module.exports = Order;

