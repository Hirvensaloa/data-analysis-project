import React,{useState} from 'react' 
import {Form} from 'semantic-ui-react'
import {useDispatch} from 'react-redux'
import {updateQuestions} from '../reducers/questionReducer'

/*Template for slider type of question.
  takes id and possible content as paramaters. */
const Slider = ({id, content}) => {

    let question = ''

    if(typeof(content) !== 'undefined' && content.type === 'slider') {
        question = content.question
    }

    const dispatch = useDispatch()

    /*State keeps track of errors, error happens when user tries to submit blank input.
      If error is true, it will stop user from submitting question. */
    const [titleError, setError] = useState(false) 

    const handleTitleChange = (event) => {
        event.preventDefault()
        
        question = event.target.value

        if(question !== '') setError(false)

        const slider = {
            id: id,
            type: 'slider', 
            question: question
        }

       dispatch(updateQuestions(slider))
    }
    

    return (
        <div className='slider'>
            <Form className='questions-content'>
                <Form.Input
                    className='content__title'
                    value={question}
                    label='Slider title'
                    onChange={handleTitleChange}
                    error={titleError}
                />
            </Form>
        </div>
    )

}

export default Slider 