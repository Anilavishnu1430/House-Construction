const express = require('express')
const usercontroller = require('../controllers/userController')

const jwtMiddleware = require('../middlewares/jwtMiddleware')

const multerMiddleware = require('../middlewares/multerMiddleware')

const userRoute = express.Router()

//Register
userRoute.post('/api/register',usercontroller.registerUser)

//Login
userRoute.post('/api/login',usercontroller.loginUser)

//GoogleLoginAPI - endpoints define
userRoute.post('/api/googleLogin',usercontroller.googleLoginUser)

//User Profile Updation - endpoints define
userRoute.put('/api/updateProfile/:id',jwtMiddleware,multerMiddleware.single('profile'),usercontroller.updateUserProfile)

module.exports = userRoute