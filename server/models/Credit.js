const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const creditSchema = new Schema({
  order: {
    type: Schema.Types.ObjectId,
    ref: 'Order',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Credit', creditSchema);
