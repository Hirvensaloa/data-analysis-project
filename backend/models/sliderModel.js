const mongoose = require('mongoose')

const sliderSchema = new mongoose.Schema({
    title: String
  })
  
const sliderModel = mongoose.model('Slider', sliderSchema)

module.exports = sliderModel

