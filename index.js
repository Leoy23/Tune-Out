const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config() 

const tuneApp = express()

tuneApp.get('/', (req,res) => {
    res.json('hi')
})

tuneApp.get('/home-page', (req,res) => {
    res.json('hi')
})

tuneApp.listen(8000, () => console.log(`Server is running on ${PORT}`))