const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('../backend/middleware/errorMiddleware') 
const connetDB =require('./config/db')

const port =process.env.PORT || 5000
connetDB()

const app =express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/users',require('./routes/userRoutes'))

app.use(errorHandler)


app.listen(port,()=> console.log(`im working on port ${port}`))