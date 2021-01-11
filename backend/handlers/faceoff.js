const S3 = require('./S3')
const logger = require('./../utils/logger') 

const faceoffModel = require('./../models/faceoffModel')

const get = (req, res) => {

    faceoffModel.find({})
        .then(response => {
            res.append(response) 
    })

    S3.fetch(res, 'nimetönaaa.png')

}

const post = (req, res) => {

    const faceoff = new faceoffModel({
        title: req.body.title
      })


    faceoff.save()
        .then(() => {
            logger.info('Faceoff saved to mongoDB')
        })
    
    const leftImg = req.body.imageLeft
    const rightImg = req.body.imageRight

    const leftKey = faceoff._id + '_left'
    const rightKey = faceoff.id + '_right' 
    
    S3.upload(leftKey, leftImg)
    S3.upload(rightKey, rightImg)  

}

module.exports = {
    get,
    post
}