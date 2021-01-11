import React from 'react' 

import PlusImg from '../../resources/PlusButton.png' 

//Button for adding new slide to carousel. 
const AddButton = ({handleClick}) => {
    return(
        <div key={-1} className='carousel-addSlide'>
            <img
            className='carousel-addImage' 
            src={PlusImg} 
            alt={'Click to add new question form'} 
            onClick={handleClick}
            />
        </div>
    )
}

export default AddButton 