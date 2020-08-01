import React, { useEffect, useState } from "react"

import styles from "./Chartstyle.module.css"
import Chart from "./Chart"
import GradientCard from "../../../Utils/GradientCard/GradientCard"

const bgColors = [
    { 
        first: "#FFE259",
        second: "#FFA751",
        id: "1_grad_card",
        label: "High on ",
        method: ["2. high"]
     },
    { 
        first: "#EC008C",
        second: "#FC6767",
        id: "2_grad_card",
        label: "Low on ",
        method: ["3. low"]
     },
    { 
        first: "#e53935",
        second: "#e35d5b",
        id: "3_grad_card",
        label: "Close on ",
        method: ["4. close"]
     },
    { 
        first: "#02AAB0",
        second: "#00CDAC",
        id: "4_grad_card",
        label: "Open on ",
        method: ["1. open"]
     },
]
 
function Daily(props) {
    const { data } = props
    const [ renderedData, setRenderedData ] = useState([{ name: "", open: "",
    high: "", low: "", close: "" }])
    const [ lastDay, setLastDay ] = useState({
        day: "",
        data :""
    })

    useEffect(() => {
        mapDataToState()
        return () => null
    }, [data])

   function mapDataToState() {
       
       if(data) {
            let finalData = data["Time Series (Daily)"]

            let objectKeys = Object.keys(finalData)
        
            setRenderedData(objectKeys.map(each => { 
                return { name: each, Open: finalData[each]["1. open"], High: finalData[each]["2. high"],
                Low: finalData[each]["3. low"], Close: finalData[each]["4. close"] } 
            }))
            setLastDay({
                day: objectKeys[0],
                data: finalData[objectKeys[0]]
            })
       }
   }

   return (
       <div className={styles.daily_chart} >
           
           {
               renderedData.length < 2 ? <></> :
               <>
               <div className={styles.gradient_card_container}>
                   {
                       bgColors.map(each => <GradientCard firstBg={each.first} secondBg={each.second} 
                       heading={<label>{ each.label } { lastDay.day } </label>} 
                       body={<h3> { lastDay.data[each.method] } </h3>}
                   />)
                   }
               </div>
                <div className={styles.chart_container}>
                    <Chart data={{
                    data: renderedData, params: {
                        dataKeys: ["Open", "High", "Low", "Close"]
                    }
                }} />
                </div>
                </>
           }
       </div>
   )
}

export default Daily