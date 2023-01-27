const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../models/order');

// Create a new order
router.post('/', (req, res) => {
    const newOrder = new Order({
        user: req.body.user,
        products: req.body.products,
        shippingAddress: req.body.shippingAddress,
        billingAddress: req.body.billingAddress,
        total: req.body.total,
        status: req.body.status,
        paymentMethod: req.body.paymentMethod
    });

    newOrder.save()
        .then(order => res.json(order))
        .catch(err => res.status(400).json({ msg: 'Failed to create order', err }));
});

// Get all orders
router.get('/', (req, res) => {
    Order.find()
        .then(orders => res.json(orders))
        .catch(err => res.status(400).json({ msg: 'Failed to get orders', err }));
});

// Get a specific order
router.get('/:id', (req, res) => {
    Order.findById(req.params.id)
        .then(order => res.json(order))
        .catch(err => res.status(400).json({ msg: 'Failed to get order', err }));
});

// Update a specific order
router.patch('/:id', (req, res) => {
    Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(order => res.json(order))
        .catch(err => res.status(400).json({ msg: 'Failed to update order', err }));
});

// Delete a specific order
router.delete('/:id', (req, res) => {
    Order.findByIdAndDelete(req.params.id)
        .then(order => res.json(order))
        .catch(err => res.status(400).json({ msg: 'Failed to delete order', err }));
});

module.exports = router;

