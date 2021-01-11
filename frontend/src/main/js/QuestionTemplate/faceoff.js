import React, {useState} from 'react' 
import {Form} from 'semantic-ui-react'
import {useDispatch} from 'react-redux'
import {updateQuestions} from '../reducers/questionReducer'

import placeHolder from '../../resources/questionMark.png'

//Component for creating questions where user can choose from two images. 
const Faceoff = ({id, content}) => {

    const imageHolder = <img src={placeHolder} alt="" />

    let question = ""
    let imageLeft = imageHolder
    let imageRight = imageHolder

    if(typeof(content) !== 'undefined' && content.type === 'faceoff') {
        question = content.question
        imageLeft = content.imageLeft
        imageRight = content.imageRight
    }

    const dispatch = useDispatch()

    /*State keeps track of errors, error happens when user tries to submit blank input.
      If error is true, it will stop user from submitting question. */
    const [titleError, setError] = useState(false)
    const [imageError1, setError1] = useState(false)
    const [imageError2, setError2] = useState(false)

    const handleTitleChange = (event) => {
        event.preventDefault()

        question = event.target.value

        if(question !== "") setError(false) 

        updateStore()
    }

    const handleImageChange1 = (event) => {
        event.preventDefault()
        const src = URL.createObjectURL(event.target.files[0])
        const imageLeft = <img src={src} alt={placeHolder} className="faceoff-content__image"/>
  
        console.log(event.target.files)

        if(imageLeft !== placeHolder) setError1(false)
        
        updateStore()
    }

    const handleImageChange2 = (event) => {
        event.preventDefault()
        const src = URL.createObjectURL(event.target.files[0])
        const imageRight = <img src={src} alt={placeHolder} className="faceoff-content__image"/>
        
        if(imageRight !== placeHolder) setError2(false)
        
        updateStore()
    }

    //Send updated data to store. 
    const updateStore = () => {

        const faceoff = {
            id: id,
            type: 'faceoff',
            question: question,
            imageLeft: imageLeft,
            imageRight: imageRight
        }

        dispatch(updateQuestions(faceoff))            

        
    }

    return (
        <div className='faceoff'>
            <Form className='questions-content'>
                <Form.Input
                    className='content__title'
                    value={question}
                    label='Faceoff title'
                    onChange={handleTitleChange}
                    error={titleError}
                />
                <div className='faceoff-content__images'>
                    <div>
                        {imageLeft}
                        <Form.Input
                            label='First image'
                            type='file'
                            onChange={handleImageChange1}
                            error={imageError1}
                        />
                    </div>
                    <div>
                        {imageRight}
                        <Form.Input
                            label='Second image'
                            type='file'
                            onChange={handleImageChange2}
                            error={imageError2}
                        />
                    </div>
                </div>
            </Form>
        </div>
    )

}

export default Faceoff 