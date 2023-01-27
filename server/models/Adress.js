const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Address', addressSchema);

