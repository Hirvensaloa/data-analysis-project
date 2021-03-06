import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList, ResponsiveContainer } from 'recharts'

//Custom barchart. Rechart BarChart as a base. Takes in layout parameter which tells if chart is 'vertical' or 'horizontal'. 
const Barchart = ({layout}) => {

    //Data for demo purposes. 
    const data = [
        {
          name: 'Revenue',
          'euros / month': 4000,
        },
        {
          name: 'Net income',
          'euros / month': 3000,
        },
        {
          name: 'Expenses',
          'euros / month': 2000,
        }
      ]

    return(
      <ResponsiveContainer width='100%' height='25%'>
        <BarChart
            layout={layout}
            data={data}
            margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
            }}
        >
          <XAxis type='number' hide='true' />
          <YAxis dataKey='name' type='category' hide='true'/>
          <Tooltip />
          <Bar dataKey="euros / month" barSize={20} fill="#82ca9d" >
              <LabelList dataKey='name' position='insideTopLeft' />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    )
}

export default Barchart