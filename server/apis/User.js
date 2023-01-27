const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');

// Create a new user
router.post('/', (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });

  newUser.save()
    .then(user => res.json(user))
    .catch(err => res.status(400).json({ msg: 'Failed to create user', err }));
});

// Get all users
router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json({ msg: 'Failed to get users', err }));
});

// Get a specific user
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json({ msg: 'Failed to get user', err }));
});

// Update a specific user
router.patch('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(user => res.json(user))
    .catch(err => res.status(400).json({ msg: 'Failed to update user', err }));
});

// Delete a specific user
router.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json({ msg: 'Failed to delete user', err }));
});

module.exports = router;
