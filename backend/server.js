const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('../backend/middleware/errorMiddleware') 
const port =process.env.PORT || 5000

const app =express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/login',require('./routes/loginRoutes'))

app.use(errorHandler)


app.listen(port,()=> console.log(`im working on port ${port}`))