import axios from 'axios' 

const questionReducer = (state = [], action) => {
    
    switch(action.type) {
        case 'UPDATE':
            return update(action.data, state)
        case 'DELETE':
            return state.filter((question) => question.id !== action.id)
        case 'SEND':
            return send(action.title, state)
    }
}

const update = (content, state) => {
    
    if(state.every((question) => question.id !== content.id)) {

        return [...state, content]

    } else {

        const index = state.findIndex((question) => question.id === content.id)
        const newArray = [...state]

        newArray[index] = content

        return newArray

    }
}

const send = (title, state) => {
    
    const data = {
        title: title,
        questions: state
    }

    const url = 'http://localhost:3001/questions'

    axios.post(url, data)

    return []
}

export const updateQuestions = (content) => {
    
    return{
        type: 'UPDATE',
        data: content
    }

}

export const deleteQuestion = (id) => {
    
    return{
        type: 'DELETE',
        id: id
    }

}

export const sendQuestions = (title) => {

    return{
        type: 'SEND',
        title: title
    }

}


export default questionReducer 