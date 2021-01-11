const mongoose = require('mongoose')

const multipleSchema = new mongoose.Schema({
    title: String,
    options: Array
})

const multipleModel = mongoose.model('Multiple Choice', multipleSchema) 

module.exports = multipleModel 