const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  threshold: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Inventory', inventorySchema);
