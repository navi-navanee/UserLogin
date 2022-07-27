const express =require('express')
const router =express.Router()
const {loginrUser,registerUser} = require('../controllers/userController')

router.post('/login',loginrUser)

router.post('/register',registerUser)






module.exports = router