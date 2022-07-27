const express =require('express')
const router =express.Router()
const {loginrUser,registerUser} = require('../controllers/loginController')

router.post('/login',loginrUser)

router.post('/register',registerUser)






module.exports = router