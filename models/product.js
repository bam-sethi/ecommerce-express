var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;