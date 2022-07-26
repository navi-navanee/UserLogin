const express =require('express')
const router =express.Router()
const {getLogin, setLogin} = require('../controllers/loginController')

router.get('/',getLogin)


router.post('/',setLogin)






module.exports = router