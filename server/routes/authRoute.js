const express = require('express')
const router = express.Router()
const authenticateUser = require('../middleware/authentication')
const { register, login, updateUser, logoutUser } = require('../controllers/authController')
const testUser = require('../middleware/testUser')

const rateLimiter = require('express-rate-limit')
const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: {
        msg: 'Too many requests from this IP, please try again after 15 minutes'
    }
})



router.post('/register', apiLimiter, register)
router.post('/login', apiLimiter, login)
router.patch('/updateUser', authenticateUser, updateUser)
router.get('/logout', logoutUser)

module.exports = router
