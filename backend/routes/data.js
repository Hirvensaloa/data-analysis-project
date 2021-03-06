const dataRouter = require('express').Router()
const logger = require('../utils/logger')

const dataHandler = require('../handlers/data')

//Routes incoming questions to /data

dataRouter.route('/')
    .get((req, res) => {
        logger.req(req)
        dataHandler.get(req, res)
    })

module.exports = dataRouter