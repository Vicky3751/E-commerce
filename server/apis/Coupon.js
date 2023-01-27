const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Coupon = require('../models/coupon');

// Create a new coupon
router.post('/', (req, res) => {
    const newCoupon = new Coupon({
        code: req.body.code,
        discount: req.body.discount,
        expiry: req.body.expiry,
        usageLimit: req.body.usageLimit
    });

    newCoupon.save()
        .then(coupon => res.json(coupon))
        .catch(err => res.status(400).json({ msg: 'Failed to create coupon', err }));
});

// Get all coupons
router.get('/', (req, res) => {
    Coupon.find()
        .then(coupons => res.json(coupons))
        .catch(err => res.status(400).json({ msg: 'Failed to get coupons', err }));
});

// Get a specific coupon
router.get('/:id', (req, res) => {
    Coupon.findById(req.params.id)
        .then(coupon => res.json(coupon))
        .catch(err => res.status(400).json({ msg: 'Failed to get coupon', err }));
});

// Update a specific coupon
router.patch('/:id', (req, res) => {
    Coupon.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(coupon => res.json(coupon))
        .catch(err => res.status(400).json({ msg: 'Failed to update coupon', err }));
});

// Delete a specific coupon
router.delete('/:id', (req, res) => {
    Coupon.findByIdAndDelete(req.params.id)
        .then(coupon => res.json(coupon))
        .catch(err => res.status(400).json({ msg: 'Failed to delete coupon', err }));
});

module.exports = router;
