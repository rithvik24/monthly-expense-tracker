const express = require('express')
const app = express()
app.use(express.json())
const port = 3060
const configureDB = require('./config/database')

configureDB()
app.listen(port, () => {
    console.log('listening to port',port)
})