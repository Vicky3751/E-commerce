const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taxSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  taxRate: {
    type: Number,
    required: true
  },
  taxAmount: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Tax', taxSchema);
