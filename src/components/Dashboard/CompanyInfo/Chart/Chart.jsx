import React from "react"

import {
  AreaChart, Area, XAxis, ResponsiveContainer, Tooltip, Legend
} from 'recharts'

import PropTypes from 'prop-types'

function Chart(props) {
    const { data, params } = props.data
    
   return (
       <ResponsiveContainer width="100%" height="90%">
            <AreaChart
                data={data}
                margin={{
                    top: 0, right: 0, left: 0, bottom: 0,
                }}
                >
                <XAxis dataKey="name" />
                <Tooltip />

                <Legend verticalAlign="top" height={36}/>

                <Area type="monotone" dataKey={params.dataKeys[2]} stackId="1" stroke="red" fill="red" />
                <Area type="monotone" dataKey={params.dataKeys[1]} stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey={params.dataKeys[0]} stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey={params.dataKeys[3]} stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
        </ResponsiveContainer>
   )
}

Chart.propTypes = {
    data: PropTypes.shape({
        data: PropTypes.array.isRequired,
        params: PropTypes.shape({
            dataKeys: PropTypes.string.isRequired
        })
    }).isRequired
}


export default Chart