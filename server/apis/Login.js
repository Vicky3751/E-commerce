const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Create a new user
router.post('/register', (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(400).json({ msg: 'Email already exists' });
            }

            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => res.json(user))
                        .catch(err => res.status(400).json({ msg: 'Failed to create user', err }));
                });
            });
        })
        .catch(err => res.status(400).json({ msg: 'Failed to check email', err }));
});

// Login a user
router.post('/login', (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(400).json({ msg: 'Email not found' });
            }

            bcrypt.compare(req.body.password, user.password)
                .then(isMatch => {
                    if (!isMatch) {
                        return res.status(400).json({ msg: 'Invalid password' });
                    }

                    jwt.sign(
                        { id: user.id },
                        process.env.JWT_SECRET,
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            });
                        }
                    );
                })
                .catch(err => res.status(400).json({ msg: 'Failed to compare password', err }));
        })
        .catch(err => res.status(400).json({ msg: 'Failed to check email', err }));
});

// Verify token for protected routes
const verifyToken = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

// Get user data
router.get('/user', verifyToken, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user))
        .catch(err => res.status(400).json({ msg: 'Failed to get user', err }));
});

// Update user data
router.patch('/user', verifyToken, (req, res) => {
    User.findById(req.user.id)
        .then(user => {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            user.password = req.body.password || user.password;

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(user.password, salt, (err, hash) => {
                    if (err) throw err;
                    user.password = hash;
                    user.save()
                        .then(user => res.json(user))
                        .catch(err => res.status(400).json({ msg: 'Failed to update user', err }));
                });
            });
        })
        .catch(err => res.status(400).json({ msg: 'Failed to find user', err }));
});

// Delete user
router.delete('/user', verifyToken, (req, res) => {
    User.findByIdAndDelete(req.user.id)
        .then(() => res.json({ msg: 'User deleted' }))
        .catch(err => res.status(400).json({ msg: 'Failed to delete user', err }));
});

module.exports = router;
