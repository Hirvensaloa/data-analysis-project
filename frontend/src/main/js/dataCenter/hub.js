import React from 'react'

import Sidebar from './sidebar'
import Charts from './charts'

import '../../css/datahub.css'

//Hub is main page for inspecting data, it contains of sidebar and chart selector. 
const Hub = () => {

    return(
        <div className='hub'>
            <Sidebar/>
            <div className='hub-main'>
                <Charts/>
            </div>
        </div>
    )
}

export default Hub