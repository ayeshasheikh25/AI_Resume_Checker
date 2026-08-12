const express = require('express')
const AuthRoutes = express.Router()
const authController = require('../controller/authController')
const auth = require('../middleware/authMiddleware')

AuthRoutes.post('/registration', authController.registration)
AuthRoutes.post('/login', authController.login)
AuthRoutes.post('/user',auth, authController.fetchUser)
AuthRoutes.get('/logout', auth , authController.logout)

module.exports = AuthRoutes