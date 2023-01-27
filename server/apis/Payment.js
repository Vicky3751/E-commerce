const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Payment = require('../models/payment');

// Create a new payment
router.post('/', (req, res) => {
    const newPayment = new Payment({
        user: req.body.user,
        order: req.body.order,
        amount: req.body.amount,
        paymentMethod: req.body.paymentMethod
    });

    newPayment.save()
        .then(payment => res.json(payment))
        .catch(err => res.status(400).json({ msg: 'Failed to create payment', err }));
});

// Get all payments
router.get('/', (req, res) => {
    Payment.find()
        .then(payments => res.json(payments))
        .catch(err => res.status(400).json({ msg: 'Failed to get payments', err }));
});

// Get a specific payment
router.get('/:id', (req, res) => {
    Payment.findById(req.params.id)
        .then(payment => res.json(payment))
        .catch(err => res.status(400).json({ msg: 'Failed to get payment', err }));
});

// Update a specific payment
router.patch('/:id', (req, res) => {
    Payment.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(payment => res.json(payment))
        .catch(err => res.status(400).json({ msg: 'Failed to update payment', err }));
});

// Delete a specific payment
router.delete('/:id', (req, res) => {
    Payment.findByIdAndDelete(req.params.id)
        .then(payment => res.json(payment))
        .catch(err => res.status(400).json({ msg: 'Failed to delete payment', err }));
});

module.exports = router;
