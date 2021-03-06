import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import {initialiseQuestions} from '../reducers/questionReducer'
import Card from '../Grid/card'
import {Button} from 'semantic-ui-react'

import {serverURL} from './../../utils/config'
import '../../css/manager.css'

/*Component for displaying all the questions user has created. 
  Provides path to edit existing or create new question. */
const Manager = () => {

    let history = useHistory()
    const dispatch = useDispatch()

    const [id, setId] = useState(-1)
    const [questions, setQuestions] = useState([])

    //Fetch questions from the server. 
    useEffect(() => {
        console.log('Fetching questions from the server...')
        axios.get(serverURL + '/questions/')
            .then(response => {
                console.log('Questions received succesfully!')
                setQuestions(response.data)                
            })
            .catch(error => {
                console.log('Something went wrong...', error)
            })
    }, [])

    //Initialises redux store with data containing given id. Creator component can then fetch data from store. 
    const chooseQuestionWithId = (id) => {

        if(id >= 0) {

            const initialQuestions = id < questions.length ? questions[id] : {title: '', questions: []}

            setId(id)

            dispatch(initialiseQuestions(initialQuestions))

            history.push('/manager/creator') //Render Creator-component. 
        }
    }

    return(
        <>
            <div className='grid'>
                {questions.map((question, index) => <Card key={index} id={index} title={question.title} handleClick={() => chooseQuestionWithId(index)} />)}
            </div>
            <Button 
                className='add-button' 
                onClick={() => chooseQuestionWithId(questions.length)}
                size='massive'
                color='green'
            >
                ADD
            </Button>
        </>
    )
}

export default Manager