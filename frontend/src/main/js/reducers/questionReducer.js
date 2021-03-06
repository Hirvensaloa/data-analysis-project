import axios from 'axios' 

import {serverURL} from './../../utils/config'
import {getCircularReplacer} from './../../utils/tools'

/*Stores questionnaire that is being handled in JSON. 
Format: 
{
    _id: ""
    title: ""
    questions: [...]
}
*/

const questionReducer = (state = [], action) => {
    
    switch(action.type) {
        case 'UPDATE':
            return update(action.data, state)
        case 'DELETE':
            return remove(action.id, state)
        case 'INIT' :
            return action.data
        case 'SEND':
            return send(action.title, state)
        default :
            return state
    }
}

const update = (content, state) => {
    
    if(state.questions.every((question) => question.id !== content.id)) {
        
        console.log('adding new question', content)

        const newState = {...state}
        
        newState.questions.push(content)

        return newState

    } else {

        const index = state.questions.findIndex((question) => question.id === content.id)
        const newState = {...state}

        newState.questions[index] = content

        console.log('Edited existing question', newState)

        return newState

    }
}

const remove = (id, state) => {

    const newState = {...state}

    newState.questions = state.questions.filter((question) => question.id !== id)

    return newState
}

//Sends new questionnaire to mongoDB. 
const send = (title, state) => {

    const url = serverURL + '/questions/'

    const data = {...state, ...{title: title}}

    //Sends each image separately.
    data.questions.forEach(question => {

        //If we encounter faceoff, we might have images that we need to send.
        if(question.type === 'faceoff') {

            //Send file if file is not empty and it has to be defined. 
            if(question.leftFile !== undefined && question.leftFile !== '') 
                sendImage(url + 'images', question.leftFile)
            if(question.rightFile !== undefined && question.rightFile !== '') 
                sendImage(url + 'images', question.rightFile)
        }

    })
    const json = JSON.parse(JSON.stringify(data, getCircularReplacer()))

    console.log('New questionnaire: ', json)   

    axios.post(url, json)

    return {questions: [], title: ''}
}

//Sends image file to url. 
const sendImage = (url, imgFile) => {

    const formData = new FormData()

    formData.append('image', imgFile)

    axios.post(url, formData, {
        headers: {
            'Content-type' : 'multipart/form-data'
        }
    })

}

//Overrides the current state with content. 
export const initialiseQuestions = (content) => {

    console.log(content)

    return{
        type: 'INIT',
        data: content
    }

}

//Updates existing questions by concatenating content or editing existing one. 
export const updateQuestions = (content) => {
    
    return{
        type: 'UPDATE',
        data: content
    }

}

//Deletes question with given id. 
export const deleteQuestion = (id) => {
    
    return{
        type: 'DELETE',
        id: id
    }

}

//Sends questions to database with given title. 
export const sendQuestions = (title) => {

    return{
        type: 'SEND',
        title: title
    }

}


export default questionReducer 