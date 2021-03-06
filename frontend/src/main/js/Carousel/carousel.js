import React,{useState} from 'react' 
import Slider from 'react-slick'
import AddButton from './AddSlide' 

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../css/carousel.css'

import Form from '../QuestionTemplate/form' 
import { updateQuestions } from '../reducers/questionReducer'
import { useDispatch } from 'react-redux'

//Carousel that displays questions from redux store. Created by creator.js component. 
const Carousel = ({questions}) => {

    const initialId = questions.length === 0 ? 0 : questions[questions.length - 1].id

    //Creates id's for questions
    const [id, incrementId] = useState(initialId)

    //Keeps track of the active index when component is re-rendered. 
    const [index, setIndex] = useState(0)

    const dispatch = useDispatch()

    //If parameter is undefined initialise items to be a empty list. 
    const items = () => typeof(questions) === 'undefined' ? [] : questions

    //Adds new item to carousel. 
    const add = () => {

        const newId = id + 1

        console.log('adding new question')

        dispatch(updateQuestions({id: newId}))
        incrementId(newId)
        setIndex(activeIndex)

    }

    let activeIndex = index

    return(
        <div>
            <Slider
            slidesToShow={1}
            centerMode={true}
            infinite={false}
            focusOnSelect={true}
            afterChange={(index) => {
                activeIndex = index
                console.log('changing to index: ', activeIndex)
                }
            }
            >
                {items().map(item => <Form key={item.id} id={item.id} content={item}/>)}
                <div key={-1}><AddButton handleClick={add}/></div>
            </Slider>
        </div>
    )
    
}

export default Carousel 