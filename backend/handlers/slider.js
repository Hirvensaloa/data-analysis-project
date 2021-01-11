const logger = require('./../utils/logger')

const sliderModel = require('./../models/sliderModel')

const get = (res) => {

    sliderModel.find({})
        .then(result => {
            res.json(result)
        })

}

const post = (req, res) => {

    const slider = new sliderModel({...req.body})

    slider.save()
        .then(logger.info('Slider saved to mongoDB'))

}

module.exports = {
    get,
    post
}