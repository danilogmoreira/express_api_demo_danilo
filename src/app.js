const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://root:1234@ds161931.mlab.com:61931/express_api_demo')

// configura app para usar bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/vinho', require('./routes/vinhoRoute'))

module.exports = app