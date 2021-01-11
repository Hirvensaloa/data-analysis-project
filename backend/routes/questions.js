const questionsRouter = require('express').Router()
const logger = require('../utils/logger')

const slider = require('./../handlers/slider')
const faceoff = require('./../handlers/faceoff')
const multiple = require('./../handlers/multiple')
const questionnaire = require('../handlers/questionnaire') 

const multer = require('multer')
const upload = multer()  


//Routes incoming requests to /questions/

questionsRouter.route('/slider')
  .get((req, res) => {
    logger.req(req)
    slider.get(res)
  })

questionsRouter.route('/slider')
  .post((req, res) => {
    logger.req(req)
    slider.post(req, res)
    
  })

questionsRouter.route('/faceoff')
  .get((req, res) => {
    logger.req(req)
    faceoff.get(req, res) 
  })

questionsRouter.route('/faceoff')
  .post(upload.single(), (req, res) => {
    logger.req(req)
    faceoff.post(req, res) 
  })

  questionsRouter.route('/multiple')
  .get((req, res) => {
    logger.req(req)
    multiple.get(req, res) 
  })

questionsRouter.route('/multiple')
  .post(upload.single(), (req, res) => {
    logger.req(req)
    multiple.post(req, res) 
  })

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


module.exports = questionsRouter