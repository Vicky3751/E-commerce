const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shippingSchema = new Schema({
  order: {
    type: Schema.Types.ObjectId,
    ref: 'Order',
    required: true
  },
  address: {
    type: String,
    required: true
  },
  trackingNumber: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'shipped', 'delivered'],
    default: 'pending'
  }
});

module.exports = mongoose.model('Shipping', shippingSchema);
