import React from 'react' 

//Displays a visual summary of question. 
const Card = ({id, title, handleClick}) => {

    return(
        <div 
        className='grid-card'
        onClick={handleClick}
        >
            {id}
            {title}
        </div>
    )

}