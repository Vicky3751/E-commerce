const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const returnSchema = new Schema({
    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Return', returnSchema);

