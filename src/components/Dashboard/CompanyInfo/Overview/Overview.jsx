import React from 'react'

// import LayoutSetter from '../LayoutSetter/LayoutSetter'
import styles from "./Overview.module.css"

import Indicator from "../../../Utils/Indicators/Loader"

function Overview(props) {
    const { loading, data, error } = props
    console.log(props)
    
    function loadingErrorChecker() {
        if(loading && !error && !data.Note) {
            return "loading"
        }
        else if(error || data.Note) {
            return "error"
        }
    }

    return (
        <div className={styles.overview} >
            {
                loadingErrorChecker() === "loading" && <Indicator theme="primary" text="Loading..." />
            }
            {
                loadingErrorChecker() === "error" && <Indicator theme="danger" text="Something went wrong :(" />
            }
            {
                data && data.Name !== undefined && <>
                <h1 className={styles.title} >Company Overview</h1>
                <h3 className={styles.heading_label} > Name - <span> {data.Name} </span> </h3>
                <h3 className={styles.heading_label} > Symbol - <span> {data.Symbol} </span> </h3>
                <p className={styles.description}> { data.Description } </p>

                <h1 className={styles.title} >Business Overview</h1>
                
                <ul>
                    <li>Exchange - <strong>{data.Exchange}</strong></li>
                    <li>Currency - <strong>{data.Currency}</strong> </li>
                    <li>Country - <strong>{data.Country}</strong> </li>
                    <li>Industry - <strong>{data.Industry}</strong> </li>
                    <li>Latest - <strong>{data.LatestQuarter}</strong> </li>
                    <li>PE Ratio - <strong>{data.PERatio}</strong> </li>
                    <li>PEG Ratio - <strong>{data.PEGRatio}</strong> </li>
                    <li>Dividend Per Share - <strong>{data.DividendPerShare}</strong> </li>
                    <li>Dividend Yield - <strong>{data.DividendYield}</strong> </li>
                    <li>Profit Margin - <strong>{data.ProfitMargin}</strong> </li>
                </ul>
                
                </>
            }
        </div>
    );
}

export default Overview;