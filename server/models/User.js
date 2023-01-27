const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  cart: [
    {
      productId: { type: Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, default: 1 }
    }
  ],
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Order'
    }
  ]
});

module.exports = mongoose.model('User', userSchema);