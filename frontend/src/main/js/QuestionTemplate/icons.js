import React from 'react'
import {Icon} from 'semantic-ui-react'

//Icons from semantic-ui-react. 

export const Desktop = () => {
    return(
        <Icon
            className='icon-desktop'
            name='desktop'
            size='big'
            color='teal'
        />
    )
}

//Error icon can have message attached to it. 
export const Error = ({msg}) => {
    return(
        <div className='error'>
            <Icon
                className='icon-error'
                name='exclamation'
                size='big'
                color='red'
            />
            {msg}
        </div>
    )
}

export const Trash = ({onClick}) => {
    return(
        <Icon
            className='icon-trash'
            name='trash alternate outline'
            size='large'
            color='red'
            onClick={onClick}
        />
    )
}

export const Back = ({onClick}) => {
    return(
        <Icon
            className='angle-left'
            name='angle left'
            size='huge'
            color='red'
            onClick={onClick}
        />        
    )
}
