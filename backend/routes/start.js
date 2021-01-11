const mainRouter = require('express').Router()
const questionRouter = require('./questions')
const answerRouter = require('./answers') 

const logger = require('./../utils/logger')

const http = require('http') 

mainRouter.route('/')
    .get((req, res) => {
        logger.req(req)
        res.send('')
    })

mainRouter.use('/questions', questionRouter)
mainRouter.use('/answers', answerRouter)

module.exports = mainRouter 