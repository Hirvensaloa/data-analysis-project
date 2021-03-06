import React, {useEffect, useState} from 'react' 
import {Form} from 'semantic-ui-react'
import {useDispatch} from 'react-redux'
import {updateQuestions} from '../reducers/questionReducer'
import {serverURL} from './../../utils/config'
import {arrayBufferToBase64} from './../../utils/tools'
import axios from 'axios'

import placeHolder from '../../resources/questionMark.png'

//Component for creating questions where user can choose from two images. 
const Faceoff = ({id, content}) => {

    //Placeholder for images until user has uploaded new image. 
    const imageHolder = <img src={placeHolder} alt="" />

    const [question, setQuestion] = useState(content !== undefined ? content.question : '')
    const [imageRight, setImageRight] = useState(imageHolder)
    const [imageLeft, setImageLeft] = useState(imageHolder)

    //Keeps track of image files, if any. This way we can send files to the server when we need to. 
    const [leftImageFile, setLeftImageFile] = useState('')
    const [rightImageFile, setRightImageFile] = useState('')

    const dispatch = useDispatch()

    //When true, component needs to update store. Set to true after changing images or title. 
    const [needUpdate, setNeedUpdate] = useState(false)

    //For every render check if there is need to update, if it is then update and set need to update false. 
    useEffect(() => {
        if(needUpdate) {
            updateStore()
            setNeedUpdate(false)
        }
    })

    useEffect(() => {

        //Fetch image with given name for server and uses set function to set new state. 
        const fetchImage = ((name, set) => {
            axios.get(serverURL + '/questions/images/' + name)
            .then(res => {

                const base64Flag = 'data:image/jpeg;base64, '
                const imageStr = arrayBufferToBase64(res.data.img.data.data)

                const src = base64Flag + imageStr

                set(<img src={src} alt='' className='faceoff-content__image' />)
            })
        })

        //If image right and left are defined and are not empty, fetch images from server. 
        if(content !== undefined && content.type === 'faceoff' && content.imageLeft !== undefined && content.imageRight !== undefined && content.imageLeft !== '' && content.imageRight !== '') {
            console.log('Fetching images...')
            fetchImage(content.imageLeft, setImageLeft)
            fetchImage(content.imageRight, setImageRight)
        }
    }, [])

    /*State keeps track of errors, error happens when user tries to submit blank input.
      If error is true, it will stop user from submitting question. */
    const [titleError, setError] = useState(false)
    const [imageError1, setError1] = useState(false)
    const [imageError2, setError2] = useState(false)

    const handleTitleChange = (event) => {
        event.preventDefault()

        setQuestion(event.target.value)

        if(question !== "") 
            setError(false) 

        setNeedUpdate(true)
    }

    const handleImageChangeLeft = (event) => {
        event.preventDefault()

        setLeftImageFile(event.target.files[0])

        const src = URL.createObjectURL(event.target.files[0])
        const image = <img src={src} alt={placeHolder} className="faceoff-content__image"/>

        setImageLeft(image)

        if(imageLeft !== placeHolder) 
            setError1(false)

        setNeedUpdate(true)
    }

    const handleImageChangeRight = (event) => {
        event.preventDefault()

        setRightImageFile(event.target.files[0])

        const src = URL.createObjectURL(event.target.files[0])
        const image = <img src={src} alt={placeHolder} className="faceoff-content__image"/>

        setImageRight(image)
        
        if(imageRight !== placeHolder) 
            setError2(false)

        setNeedUpdate(true)
    }

    //Send updated data to store. 
    const updateStore = () => {

        //Returns file name for left image. If there is file, use its name else use given image name and lastly just use empty string. 
        const imageLeftName = () => {
            if(leftImageFile !== '')
                return leftImageFile.name
            else if(content.imageLeft !== undefined)
                return content.imageLeft
            else 
                return ''
        }

        const imageRightName = () => {
            if(rightImageFile !== '')
                return rightImageFile.name
            else if(content.imageRight !== undefined)
                return content.imageRight
            else 
                return ''
        }

        const faceoff = {
            id: id,
            type: 'faceoff',
            question: question,
            imageLeft: imageLeftName(),
            imageRight: imageRightName(),
            leftFile: leftImageFile,
            rightFile: rightImageFile
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
                            onChange={handleImageChangeLeft}
                            error={imageError1}
                        />
                    </div>
                    <div>
                        {imageRight}
                        <Form.Input
                            label='Second image'
                            type='file'
                            onChange={handleImageChangeRight}
                            error={imageError2}
                        />
                    </div>
                </div>
            </Form>
        </div>
    )

}

export default Faceoff 