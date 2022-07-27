const asyncHandler = require('express-async-handler')


const User =require('../model/userModel')



const loginrUser = asyncHandler(async(req,res) => {
     res.status(200).json({message: "im login"})

})


const registerUser =asyncHandler( async(req,res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const user =await User.create({
        name:req.body.name,
    })



    res.status(200).json({message :'set Login'})

})

module.exports = {
    loginrUser,
    registerUser,
    
}