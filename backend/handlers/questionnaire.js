const logger = require('./../utils/logger');

const questionnaireModel = require('./../models/questionnaire');

//Gets all the questions from mongoDB and sends them. 
const get = (req, res) => {

    questionnaireModel.find({}).then(result => {
        res.send(result)
    })
}

//Posts a new question to mongoDB. 
const post = (req, res) => {

    console.log(req.body)

    const data = {
        questions: req.body.questions,
        title: req.body.title
    }

    const questionnaire = new questionnaireModel(data)
    
    //If req.body contains _id, we know that it exists in db. Therefore update question else post new one. 
    if(req.body._id) {

        questionnaire._id = req.body._id

        questionnaire.updateOne(data)
            .then(logger.info('Questionnaire modified succesfully'))
    } else 
        questionnaire.save()
            .then(logger.info('New questionnaire added to database'))

}

module.exports = {
    get,
    post
};