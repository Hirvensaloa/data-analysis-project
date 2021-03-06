const questionsRouter = require('express').Router()
const logger = require('../utils/logger')

const questionnaire = require('../handlers/questionnaire') 

const multer = require('multer')
const image = require('./../handlers/images') 


//Routes incoming requests to /questions

const upload = multer({dest: 'uploads/'})

questionsRouter.route('/')
  .get((req, res) => {
    logger.req(req)
    questionnaire.get(req, res) 
  })

questionsRouter.route('/')
  .post((req, res) => {
    logger.req(req)
    questionnaire.post(req, res) 
  })

questionsRouter.route('/images')
  .post(upload.single('image'), (req, res) => {
    logger.req(req)
    image.post(req, res)
  })

questionsRouter.route('/images/:name')
  .get((req, res) => {
    logger.req(req)
    image.get(req, res)
  })


module.exports = questionsRouter