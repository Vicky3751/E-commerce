const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Cart = require('../models/cart');

// Create a new cart
router.post('/', (req, res) => {
    const newCart = new Cart({
        user: req.body.user,
        products: req.body.products,
        totalPrice: req.body.totalPrice,
        discount: req.body.discount
    });

    newCart.save()
        .then(cart => res.json(cart))
        .catch(err => res.status(400).json({ msg: 'Failed to create cart', err }));
});

// Get all carts
router.get('/', (req, res) => {
    Cart.find()
        .then(carts => res.json(carts))
        .catch(err => res.status(400).json({ msg: 'Failed to get carts', err }));
});

// Get a specific cart
router.get('/:id', (req, res) => {
    Cart.findById(req.params.id)
        .then(cart => res.json(cart))
        .catch(err => res.status(400).json({ msg: 'Failed to get cart', err }));
});

// Update a specific cart
router.patch('/:id', (req, res) => {
    Cart.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(cart => res.json(cart))
        .catch(err => res.status(400).json({ msg: 'Failed to update cart', err }));
});

// Delete a specific cart
router.delete('/:id', (req, res) => {
    Cart.findByIdAndDelete(req.params.id)
        .then(cart => res.json(cart))
        .catch(err => res.status(400).json({ msg: 'Failed to delete cart', err }));
});

module.exports = router;
