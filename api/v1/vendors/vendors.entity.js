const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    code: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    rank: { type: Number, required: false },
    productsSold: { type: Number, required: false },
    totalValue: { type: Number, required: false },
    //Reference
    products: { type: Array, required: false }
}, { collection: 'vendors' });

// Composite Unique key
schema.index({
    code: 1
  }, {
    unique: true
  });
  
  //Creating the model, model is the runtime object instance of the schema
  module.exports = mongoose.model("vendors", schema);