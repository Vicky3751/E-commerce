const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Inventory = require('../models/inventory');

// Create a new inventory item
router.post('/', (req, res) => {
    const newInventory = new Inventory({
        product: req.body.product,
        quantity: req.body.quantity,
        warehouse: req.body.warehouse
    });

    newInventory.save()
        .then(inventory => res.json(inventory))
        .catch(err => res.status(400).json({ msg: 'Failed to create inventory item', err }));
});

// Get all inventory items
router.get('/', (req, res) => {
    Inventory.find()
        .then(inventories => res.json(inventories))
        .catch(err => res.status(400).json({ msg: 'Failed to get inventory items', err }));
});

// Get a specific inventory item
router.get('/:id', (req, res) => {
    Inventory.findById(req.params.id)
        .then(inventory => res.json(inventory))
        .catch(err => res.status(400).json({ msg: 'Failed to get inventory item', err }));
});

// Update a specific inventory item
router.patch('/:id', (req, res) => {
    Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(inventory => res.json(inventory))
        .catch(err => res.status(400).json({ msg: 'Failed to update inventory item', err }));
});

// Delete a specific inventory item
router.delete('/:id', (req, res) => {
    Inventory.findByIdAndDelete(req.params.id)
        .then(inventory => res.json(inventory))
        .catch(err => res.status(400).json({ msg: 'Failed to delete inventory item', err }));
});

module.exports = router;
