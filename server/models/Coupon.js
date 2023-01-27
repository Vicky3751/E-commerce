const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const couponSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    expireAt: {
        type: Date,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Coupon', couponSchema);
