const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authentication');
const testUser = require('../middleware/testUser');

const rateLimiter = require('express-rate-limit');

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    msg: 'Too many requests from this IP, please try again after 15 minutes',
  },
});

const { register, login, updateUser, info, logout, updatePassword } = require('../controllers/auth');
router.post('/register', apiLimiter, register);
router.post('/login', apiLimiter, login);
router.post('/logout', logout);
router.get('/info', authenticateUser, info);
router.patch('/updateUser', authenticateUser, updateUser);
router.patch('/updatePassword', authenticateUser, updatePassword);
module.exports = router;
