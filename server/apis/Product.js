const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');

// Create a new product
router.post('/', (req, res) => {
    const newProduct = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
        category: req.body.category,
        brand: req.body.brand
    });

    newProduct.save()
        .then(product => res.json(product))
        .catch(err => res.status(400).json({ msg: 'Failed to create product', err }));
});

// Get all products
router.get('/', (req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json({ msg: 'Failed to get products', err }));
});

// Get a specific product
router.get('/:id', (req, res) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.status(400).json({ msg: 'Failed to get product', err }));
});

// Update a specific product
router.patch('/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(product => res.json(product))
        .catch(err => res.status(400).json({ msg: 'Failed to update product', err }));
});

// Delete a specific product
router.delete('/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.status(400).json({ msg: 'Failed to delete product', err }));
});

module.exports = router;

