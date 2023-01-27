const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  order: {
    type: Schema.Types.ObjectId,
    ref: 'Order',
    required: true
  },
  method: {
    type: String,
    required: true
  },
  transactionId: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['success', 'failure'],
    default: 'success'
  },
  amount: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Payment', paymentSchema);
