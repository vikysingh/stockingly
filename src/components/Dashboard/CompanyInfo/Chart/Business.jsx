import React, { useEffect, useState } from "react"

import styles from "./Chartstyle.module.css"
import Chart from "./Chart"

 
function Daily(props) {
    const { data } = props
    const [ renderedData, setRenderedData ] = useState([{ name: "", open: "", high: "", low: "", close: "" }])

    useEffect(() => {
        getData()
        return () => null
    }, [data])

   async function getData() {
       
       if(data) {
            let finalData = data["Time Series (Daily)"]

            //Object keys is used to make an array of the dates
            let objectKeys = Object.keys(finalData)
        
            setRenderedData(objectKeys.map(each => { 
                return { name: each, Open: finalData[each]["1. open"], High: finalData[each]["2. high"],
                Low: finalData[each]["3. low"], Close: finalData[each]["4. close"] } 
            }))
       }
   }

   return (
       <div className={styles.daily_chart} >
           {
               renderedData.length < 2 ? <></> :
                <Chart data={{
                    data: renderedData, params: {
                        dataKeys: ["Open", "High", "Low", "Close"]
                    }
                }} />
           }
       </div>
   )
}

export default Daily