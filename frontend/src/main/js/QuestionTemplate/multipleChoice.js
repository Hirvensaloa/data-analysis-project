import React,{useState} from 'react' 
import {Form} from 'semantic-ui-react'
import {useDispatch} from 'react-redux' 
import {updateQuestions} from '../reducers/questionReducer'  

//Component to create a template for multiple choice questions
const MultipleChoice = ({id, content}) => {

    let question = ''
    let option1 = ''
    let option2 = ''
    let option3 = ''
    let option4 = ''

    if(typeof(content) !== 'undefined' && content.type === 'multiple') {
        question = content.question
        option1 = content.options[0]
        option2 = content.options[1]
        option3 = content.options[2]
        option4 = content.options[3]
    }
    

    const dispatch = useDispatch()

    /*State keeps track of errors, error happens when user tries to submit blank input.
      If error is true, it will stop user from submitting question. */
    const [titleError, setError] = useState(false)
    const [optError1, setError1] = useState(false) 
    const [optError2, setError2] = useState(false) 
    const [optError3, setError3] = useState(false) 
    const [optError4, setError4] = useState(false)


    const handleTitleChange = (event) => {
        event.preventDefault()
        
        question = event.target.value
        
        if(question !== '')
            setError(false)
            
        updateStore()
    }

    const handleOptionChange = (event) => {
        event.preventDefault()
        const option = event.target.value

        switch(event.target.id){
            case '0':
                option1 = option
                setError1(false)
                break
            case '1':
                option2 = option
                setError2(false)
                break
            case '2':
                option3 = option
                setError3(false)
                break 
            case '3':
                option4 = option
                setError4(false) 
                break 
            default:
                break
        }

        updateStore()

    }

    const updateStore = () => {

        const multiple = {
            id: id,
            type: 'multiple',
            title: question,
            options: [option1, option2, option3, option4]
        }
    
        dispatch(updateQuestions(multiple))

    }


    return (
        <div className='multipleChoice'>
            <Form className='questions-content'>
                <Form.Input
                    className='content__title'
                    value={question}
                    label='Question title'
                    onChange={handleTitleChange}
                    error={titleError}
                />
            </Form>
            <Form className='content__title'>
                <h3 className='options-title'>Set options</h3>
                <Form.Input
                    id='0'
                    value={option1}
                    placeholder='Option 1'
                    onChange={handleOptionChange}
                    error={optError1}
                />
                <Form.Input
                    id='1'
                    value={option2}
                    placeholder='Option 2'
                    onChange={handleOptionChange}
                />
                <Form.Input
                    id='2'
                    value={option3}
                    placeholder='Option 3'
                    onChange={handleOptionChange}
                />
                <Form.Input
                    id='3'
                    value={option4}
                    placeholder='Option 4'
                    onChange={handleOptionChange}
                />
            </Form>
        </div>
    )

}

export default MultipleChoice