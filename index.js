// 1. Loads .env file contents into process.env by default.
require('dotenv').config()

//2. import express

const express = require('express')

//3. import cors

const cors = require('cors')

//7. import DB

const db = require('./DB/connection')

// 8. import router
const router = require('./Routes/router')
// const applicationMiddleware = require('./Middlewares/applicationMiddleware')

//4. Create application using express.
const pfserver = express()

//5. use 
pfserver.use(cors())
pfserver.use(express.json()) //Returns middleware that only parses.

//9.  use router
// pfserver.use(applicationMiddleware)

pfserver.use(router)

//Used to export images from backend
pfserver.use('/uploads',express.static('./uploads'))

//6. port creation.
const PORT= 4000 || process.env.PORT

pfserver.listen(PORT,()=>{
    console.log('pfserver listening on port' +PORT);
})

pfserver.get('/',(req,res)=>{
    res.send("Welcome to project-fair")
})
