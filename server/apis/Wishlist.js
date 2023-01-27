const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Wishlist = require('../models/wishlist');

// Create a new wishlist
router.post('/', (req, res) => {
    const newWishlist = new Wishlist({
        user: req.body.user,
        products: req.body.products
    });

    newWishlist.save()
        .then(wishlist => res.json(wishlist))
        .catch(err => res.status(400).json({ msg: 'Failed to create wishlist', err }));
});

// Get all wishlists
router.get('/', (req, res) => {
    Wishlist.find()
        .then(wishlists => res.json(wishlists))
        .catch(err => res.status(400).json({ msg: 'Failed to get wishlists', err }));
});

// Get a specific wishlist
router.get('/:id', (req, res) => {
    Wishlist.findById(req.params.id)
        .then(wishlist => res.json(wishlist))
        .catch(err => res.status(400).json({ msg: 'Failed to get wishlist', err }));
});

// Update a specific wishlist
router.patch('/:id', (req, res) => {
    Wishlist.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(wishlist => res.json(wishlist))
        .catch(err => res.status(400).json({ msg: 'Failed to update wishlist', err }));
});

// Delete a specific wishlist
router.delete('/:id', (req, res) => {
    Wishlist.findByIdAndDelete(req.params.id)
        .then(wishlist => res.json(wishlist))
        .catch(err => res.status(400).json({ msg: 'Failed to delete wishlist', err }));
});

module.exports = router;
