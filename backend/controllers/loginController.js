const asyncHandler = require('express-async-handler')


const getLogin = asyncHandler(async(req,res) => {
    res.status(200).json({message :'login'})
})

const setLogin =asyncHandler( async(req,res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message :'set Login'})

})

module.exports = {
    getLogin,
    setLogin
}