import React, {useState} from 'react' 
import {Form, Button} from 'semantic-ui-react'
import {useDispatch, useSelector} from 'react-redux' 
import {sendQuestions} from '../reducers/questionReducer'

import Carousel from '../Carousel/carousel'
 

import '../../css/questionnaire.css'

//Returns a component which is a base for creating new questions 
const Creator = () => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('') 
    const [titleError, setError] = useState(false) 

    const handleTitleChange = (event) => {
        event.preventDefault()
        setTitle(event.target.value)

        if(event.target.value !== "") setError(false) 
    }

    //Sends questionnaire to the database. 
    const sendData = () => {

        if(title === '') {
            setError(true)
        } else {

            dispatch(sendQuestions(title))
            
        }
    }

    const questions = useSelector(state => state)

    return (
        <div className='questionnaire'>
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
            <Carousel questions={questions}/>
            <Button 
                className='questionnaire-create'
                positive 
                size='huge'
                onClick={sendData}
            >
                Create
            </Button>
        </div>
    )

}

export default Creator 