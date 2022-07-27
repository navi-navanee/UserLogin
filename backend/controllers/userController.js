const asyncHandler = require('express-async-handler')
const session = require('express-session')
const bcrypt = require('bcryptjs')
const User =require('../model/userModel')





const loginrUser = asyncHandler(async(req,res) => {

    const {email,password} =req.body
    
    //chack for user email
    const user=await User.findOne({email})

    if(user && (await bcrypt.compare(password ,user.password))) {
        const userInfo = {...user}
        console.log("im user info",userInfo);
        req.session.user =userInfo
        console.log("im the session.....",req.session.user);
        res.json({
            _id:user.id,
            name:user.name,
            email:user.email,
        })
    }else {
        res.status(400)
        throw new Error ('Invalid Details')
    }

     res.status(200).json({message: "im login"})

})


const registerUser =asyncHandler( async(req,res) => {  
    const {name,email,password} = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please add all fields..')
    }

    //Checking user is already exist or not
    
    const userExist=await User.findOne({email})
        if(userExist){
            res.status(400)
            throw new Error ('User already exist')
        }


        //Hahing the password
        const salt = await bcrypt.genSalt(10)
        const hash =await bcrypt.hash(password,salt)

        //create user

        const user=await User.create({
            name,
            email,
            password:hash
        })

       
        if(user){
        req.session.user =user
            res.status(201).json({
                _id:user.id,
                name:user.name,
                email:user.email
            })
        }else {
            res.status(400)
            throw new Error('Invalid userdata')
        }
    
    res.status(200).json({message :'set Login'})

})

module.exports = {
    loginrUser,
    registerUser,
    
}