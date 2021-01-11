import React from 'react'; 
import {Icon} from 'semantic-ui-react';

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
