const mainRouter = require('express').Router()
const questionRouter = require('./questions')
const answerRouter = require('./answers') 
const dataRouter = require('./data')

const logger = require('./../utils/logger')

const http = require('http') 

mainRouter.route('/')
    .get((req, res) => {
        logger.req(req)
        res.send('')
    })

mainRouter.use('/questions', questionRouter)
mainRouter.use('/answers', answerRouter)
mainRouter.use('/data', dataRouter)

module.exports = mainRouter 