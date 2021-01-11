import React from 'react'

import Creator from './QuestionTemplate/creator' 

const Landing = ({pages, activePage}) => {

    console.log(`Current active: ${activePage}`)

    switch(activePage){

        case pages[0].name:
            return ( <div>Front page here!</div>)
        case pages[1].name:
            return <Creator />
        default:
            return (
                <div>Error! Could not find active page.</div>
            )

    }
}

export default Landing