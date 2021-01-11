const mongoose = require('mongoose') 

const faceoffSchema = new mongoose.Schema({
    title: String
  })
  
const faceoffModel = mongoose.model('Faceoff', faceoffSchema)

module.exports = faceoffModel 