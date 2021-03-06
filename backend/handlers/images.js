const fs = require('fs')
const logger = require('./../utils/logger')

const imageModel = require('./../models/imageModel')

//Handles image posting to mongoDB.
const post = (req, res) => {
    let image = new imageModel

    image.img.data = fs.readFileSync(req.file.path)
    image.img.contentType = 'image/jpeg'
    image.name = req.file.originalname

    image.save()

    logger.info(req. file.originalname + '-Image saved to mongoDB.')
}

//Gets image with given name (req.params.name) from mongoDB. 
const get = (req, res) => {
    imageModel.findOne({name: req.params.name}, 'name img', (err, img) => {
        if(err)
            res.send(err)

        res.contentType('json')
        res.send(img)
    })
}

module.exports = {
    post,
    get
}