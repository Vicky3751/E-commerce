const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Return = require('../models/return');

// Create a new return
router.post('/', (req, res) => {
  const newReturn = new Return({
    user: req.body.user,
    order: req.body.order,
    products: req.body.products,
    reason: req.body.reason
  });

  newReturn.save()
    .then(returnItem => res.json(returnItem))
    .catch(err => res.status(400).json({ msg: 'Failed to create return', err }));
});

// Get all returns
router.get('/', (req, res) => {
  Return.find()
    .then(returns => res.json(returns))
    .catch(err => res.status(400).json({ msg: 'Failed to get returns', err }));
});

// Get a specific return
router.get('/:id', (req, res) => {
  Return.findById(req.params.id)
    .then(returnItem => res.json(returnItem))
    .catch(err => res.status(400).json({ msg: 'Failed to get return', err }));
});

// Update a specific return
router.patch('/:id', (req, res) => {
  Return.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(returnItem => res.json(returnItem))
    .catch(err => res.status(400).json({ msg: 'Failed to update return', err }));
});

// Delete a specific return
router.delete('/:id', (req, res) => {
  Return.findByIdAndDelete(req.params.id)
    .then(returnItem => res.json(returnItem))
    .catch(err => res.status(400).json({ msg: 'Failed to delete return', err }));
});

module.exports = router;
