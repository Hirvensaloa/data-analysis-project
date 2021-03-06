import React, {useState, useEffect} from 'react'
import {Dropdown} from 'semantic-ui-react'
import axios from 'axios'

import {Error} from './../QuestionTemplate/icons'
import {serverURL} from './../../utils/config'
import Areachart from './recharts/areachart'

//Chart menu which can display multiple areacharts. Data for charts is fetched from the server.  
const Charts = () => {

    const [charts, setCharts] = useState([])
    const [activeChart, setActiveChart] = useState({title: '', data: []}) //Chart to be displayed. Initially a empy chart. 

    const [errorMsg, setErrorMsg] = useState('')

    //Fetch data for charts. 
    useEffect(() => {
        axios.get(serverURL + '/data')
            .then(response => {
                setCharts(response.data)
                setErrorMsg('')
            })
            .catch(err => {
                setErrorMsg('Error while fetching data: ', err)
            })
    }, [])

    //Renders charts, if no error has ocurred. 
    const render = () => {
        if(errorMsg === ''){
            return (
                <>
                    <h3>{activeChart.title}</h3>
                    <Areachart data={activeChart.data} />
                </>
                )
        } else {
            return <Error msg={errorMsg}/>
        }
    }

    return(
        <div className='hub-charts'>
            <Dropdown className='hub-charts--dropdown' text='Choose dataset'>
                <Dropdown.Menu>
                    {charts.map(chart => {
                        return <Dropdown.Item text={chart.title} onClick={() => setActiveChart(chart)} />
                    })}
                </Dropdown.Menu>
            </Dropdown>
            {render()}
        </div>
    )
}

export default Charts