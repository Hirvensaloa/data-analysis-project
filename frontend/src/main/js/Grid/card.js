import React from 'react' 

//Displays title in a card. 
const Card = ({id, title, handleClick}) => {

    return(
        <div 
        className='card'
        onClick={handleClick}
        >
            {title}
        </div>
    )

}

export default Card