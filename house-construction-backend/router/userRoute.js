const express = require('express')
const usercontroller = require('../controllers/userController')

const userRoute = express.Router()

//Register
userRoute.post('/api/register',usercontroller.registerUser)
//Login
userRoute.post('/api/login',usercontroller.loginUser)
//GoogleLoginAPI - endpoints define
userRoute.post('/api/googleLogin',usercontroller.googleLoginUser)

module.exports = userRoute