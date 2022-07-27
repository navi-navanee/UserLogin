const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('../backend/middleware/errorMiddleware') 
const connetDB =require('./config/db')
const session=require('express-session')

const port =process.env.PORT || 5000
connetDB()

const app =express()



app.use(express.json())
app.use(express.urlencoded({extended:false}))
// app.use(session({secret:'key',cookie:{maxAge:600000}}))

app.use(session({
    secret: 'key',
    resave: false,
    saveUninitialized: true,
    cookie:{
        httpOnly:true,
        maxAge:6000000,
    }
  }))

  app.use((req,res,next) => {
    console.log(req.session);
    next()
  })


app.use('/api/users',require('./routes/userRoutes'))

app.use(errorHandler)


app.listen(port,()=> console.log(`im working on port ${port}`))