const mongoose = require('mongoose') 

const Schema = new mongoose.Schema({
    title: String,
    questions: Array
  })
  
const questionnaireModel = mongoose.model('Questionnaire', Schema)

module.exports = questionnaireModel 