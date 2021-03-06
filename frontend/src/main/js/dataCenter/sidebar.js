import React from 'react'

import Barchart from './recharts/barchart'

//Contains some metadata of the company and additional data. 
const Sidebar = () => {
    return(
        <div className='hub-sidebar'>
            <h1 className='-sidebar--title'><b>Company name</b></h1>
            <Barchart layout='vertical'/>
            <h4>Employees: 213</h4>
            <h4>Daily customers: 25</h4>
            <h4>Offices: 3</h4>
        </div>
    )
}

export default Sidebar