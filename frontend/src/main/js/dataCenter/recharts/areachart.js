import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import {Error} from './../../QuestionTemplate/icons'

import '../../../css/charts.css'

//Custom areachart component.
const Areachart = ({data}) => {

    const renderChart = () => {

      //If data is not an array, display error. 
        if(Array.isArray(data)) {

            const keys = data.length > 0 ? Object.keys(data[0]) : []

            const xTitle = keys.length > 1 ? keys[0] : ''
            const yTitle = keys.length > 1 ? keys[1] : ''
    
            return (
              <div className='areachart'>
                <ResponsiveContainer width='100%' height='100%'>
                  <AreaChart
                    className='areachart'
                    data={data}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={xTitle} />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey={yTitle} stroke="#8884d8" fill="#8884d8" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              )
        } else {
          return <Error msg={`Can't display data! Data is corrupted.`} />
        }
    }

    return (
      renderChart()
    )
}

export default Areachart