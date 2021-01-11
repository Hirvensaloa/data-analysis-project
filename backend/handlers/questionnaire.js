const logger = require('./../utils/logger');

const questionnaireModel = require('./../models/questionnaire');

const get = (req, res) => {

    questionnaireModel.find({}).then(result => {
        res.send(result)
    })
}

const post = (req, res) => {

    console.log(req.body)

/*

    const questionnaire = new questionnaireModel({...req.body});

    questionnaire.save()
        .then(logger.info('Questionnaire saved to mongoDB'))
*/
}

module.exports = {
    get,
    post
};