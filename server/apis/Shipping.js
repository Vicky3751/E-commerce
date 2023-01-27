const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Shipping = require('../models/shipping');

// Create a new shipping
router.post('/', (req, res) => {
    const newShipping = new Shipping({
        order: req.body.order,
        address: req.body.address,
        delivery_date: req.body.delivery_date,
        tracking_number: req.body.tracking_number
    });

    newShipping.save()
        .then(shipping => res.json(shipping))
        .catch(err => res.status(400).json({ msg: 'Failed to create shipping', err }));
});

// Get all shippings
router.get('/', (req, res) => {
    Shipping.find()
        .then(shippings => res.json(shippings))
        .catch(err => res.status(400).json({ msg: 'Failed to get shippings', err }));
});

// Get a specific shipping
router.get('/:id', (req, res) => {
    Shipping.findById(req.params.id)
        .then(shipping => res.json(shipping))
        .catch(err => res.status(400).json({ msg: 'Failed to get shipping', err }));
});

// Update a specific shipping
router.patch('/:id', (req, res) => {
    Shipping.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(shipping => res.json(shipping))
        .catch(err => res.status(400).json({ msg: 'Failed to update shipping', err }));
});

// Delete a specific shipping
router.delete('/:id', (req, res) => {
    Shipping.findByIdAndDelete(req.params.id)
        .then(shipping => res.json(shipping))
        .catch(err => res.status(400).json({ msg: 'Failed to delete shipping', err }));
});

module.exports = router;
