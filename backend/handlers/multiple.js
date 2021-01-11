const logger = require('./../utils/logger')

const multipleModel = require('./../models/multipleModel')

const get = (req, res) => {

    multipleModel.find({})
        .then(result => {
            res.json(result)
        })

}

const post = (req, res) => {

    const multiple = new multipleModel({...req.body})

    multiple.save()
        .then(logger.info('Multiple Choice saved to mongoDB'))

}

module.exports = {
    get, 
    post
} 
