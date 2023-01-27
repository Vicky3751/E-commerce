const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Address = require('../models/address');

// Create a new address
router.post('/', (req, res) => {
    const newAddress = new Address({
        user: req.body.user,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        zip: req.body.zip
    });

    newAddress.save()
        .then(address => res.json(address))
        .catch(err => res.status(400).json({ msg: 'Failed to create address', err }));
});

// Get all addresses
router.get('/', (req, res) => {
    Address.find()
        .then(addresses => res.json(addresses))
        .catch(err => res.status(400).json({ msg: 'Failed to get addresses', err }));
});

// Get a specific address
router.get('/:id', (req, res) => {
    Address.findById(req.params.id)
        .then(address => res.json(address))
        .catch(err => res.status(400).json({ msg: 'Failed to get address', err }));
});

// Update a specific address
router.patch('/:id', (req, res) => {
    Address.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(address => res.json(address))
        .catch(err => res.status(400).json({ msg: 'Failed to update address', err }));
});

// Delete a specific address
router.delete('/:id', (req, res) => {
    Address.findByIdAndDelete(req.params.id)
        .then(address => res.json(address))
        .catch(err => res.status(400).json({ msg: 'Failed to delete address', err }));
});

module.exports = router;
