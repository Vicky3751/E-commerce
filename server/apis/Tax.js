const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Tax = require('../models/tax');

// Create a new tax
router.post('/', (req, res) => {
    const newTax = new Tax({
        name: req.body.name,
        rate: req.body.rate,
        country: req.body.country
    });

    newTax.save()
        .then(tax => res.json(tax))
        .catch(err => res.status(400).json({ msg: 'Failed to create tax', err }));
});

// Get all taxes
router.get('/', (req, res) => {
    Tax.find()
        .then(taxes => res.json(taxes))
        .catch(err => res.status(400).json({ msg: 'Failed to get taxes', err }));
});

// Get a specific tax
router.get('/:id', (req, res) => {
    Tax.findById(req.params.id)
        .then(tax => res.json(tax))
        .catch(err => res.status(400).json({ msg: 'Failed to get tax', err }));
});

// Update a specific tax
router.patch('/:id', (req, res) => {
    Tax.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(tax => res.json(tax))
        .catch(err => res.status(400).json({ msg: 'Failed to update tax', err }));
});

// Delete a specific tax
router.delete('/:id', (req, res) => {
    Tax.findByIdAndDelete(req.params.id)
        .then(tax => res.json(tax))
        .catch(err => res.status(400).json({ msg: 'Failed to delete tax', err }));
});

module.exports = router;
