import React from 'react'
import {Tab} from 'semantic-ui-react'  

import Faceoff from './faceoff'
import Slider from './slider'
import MultipleChoice from './multipleChoice'
import {Trash, Desktop} from './icons'
import {useDispatch} from 'react-redux' 
import {deleteQuestion} from '../reducers/questionReducer'

import '../../css/form.css'

//Container that contains a single question template. Content parameter is optional, if defined contains info about existing question template. 
const Form = ({id, content}) => {

    let activeIndex = 0

    if(typeof(content) !== 'undefined') {

        //Set activeIndex according to questions type.
        if (content.type === 'slider') activeIndex = 1
        else if (content.type === 'multiple') activeIndex = 2
    }

    const panes = [
        { menuItem: 'Faceoff', render: () => <Faceoff id={id} content={content}/>},
        { menuItem: 'Slider', render: () => <Slider id={id} content={content}/>},
        { menuItem: 'Multiple Choice', render: () => <MultipleChoice id={id} content={content}/>}
    ]

    const dispatch = useDispatch()

    const remove = () => {
        dispatch(deleteQuestion(id))
    }

    return(
        <div key={id}>
            <Tab 
            panes = {panes} 
            className='question-form' 
            defaultActiveIndex={activeIndex}
            >
                
            </Tab>
            <Desktop/>
            <Trash onClick={remove} />
        </div>      
    )
}

export default Form 