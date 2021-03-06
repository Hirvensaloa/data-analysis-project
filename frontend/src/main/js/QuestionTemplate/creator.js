import React, {useState} from 'react' 
import {Form, Button, Transition} from 'semantic-ui-react'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux' 
import {sendQuestions} from '../reducers/questionReducer'

import {Back} from './icons'
import Carousel from '../Carousel/carousel'
 

import '../../css/questionnaire.css'

//Returns a component which is a base for creating new questions. 
const Creator = () => {

    let history = useHistory()

    const dispatch = useDispatch()

    //Fetch questionnaire data from redux store. 
    const store = useSelector(state => state)

    const [title, setTitle] = useState(store.title)
    const [titleError, setError] = useState(false)
    const [visible, setVisible] = useState(true) //If components are visible, used to fade components when questions have been sent. 

    const handleTitleChange = (event) => {
        event.preventDefault()
        setTitle(event.target.value)

        if(event.target.value !== "") 
            setError(false) 
    }

    //Sends questionnaire to the database. 
    const sendData = () => {

        //If title is empty, don't set data and display error. 
        if(title === '') {

            setError(true)
            
        } else {

            dispatch(sendQuestions(title))
            setVisible(false)         
            
            setTimeout(() => history.push('/manager'), 1500)
        }
    }

    const questionData = typeof store.questions === 'undefined' ? {title: '', questions: []} : store.questions

    return (
        <Transition visible={visible} animation='scale' duration={1000}>
            <div className='questionnaire'>
                <div className='-header--back'><Back onClick={() => history.push('/manager')}/></div>
                <div className='questionnaire-header'>
                    <Form className='questionnaire-title'>
                        <Form.Input
                                value={title}
                                label='Questionnaire name'
                                onChange={handleTitleChange}
                                error={titleError}
                            />
                    </Form>
                </div>
                    <Carousel questions={questionData}/>
                <Button 
                    className='questionnaire-create'
                    positive 
                    size='huge'
                    onClick={sendData}
                >
                    Create
                </Button>
            </div>
        </Transition>
    )

}

export default Creator 