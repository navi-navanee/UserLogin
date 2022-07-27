const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type : String,
        require : [true , 'Please add the name']
    },
    email:{
        type : String,
        require : [true , 'Please add the email'],
        unique:true
    },
    password:{
        type : String,
        require : [true , 'Please add the password']
    },
},{
    timeStamps : true,
})

module.exports = mongoose.model('User',userSchema)