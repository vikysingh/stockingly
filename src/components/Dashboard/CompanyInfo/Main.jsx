import React, { useContext } from 'react'

import { BsChevronLeft } from "react-icons/bs"

import styles from "./Main.module.css"
import ViewContext from "../../../context"

import Heading from './Heading/Heading'

import Overview from './Overview/Overview'
import Chart from "./Chart/Business"
import BalanceSheet from "./Balanceheet/BalanceSheet"

import APIFetcher from "./APIFetcher"

const ViewManager = {
    overview: {
        component: Overview,
        apiMethod: "OVERVIEW"
    },
    chart: {
        component: Chart,
        apiMethod: "TIME_SERIES_DAILY"
    },
    balancesheet: {
        component: BalanceSheet,
        apiMethod: "BALANCE_SHEET"
    }
}

function Main() {
    const { typeView, setMainView } = useContext(ViewContext)
    
    return (
        <main className={styles.company_info_main} >
            <div>
                <BsChevronLeft className={styles.go_back_icon}
                onClick={() => setMainView("gallery")}
                />
                <Heading />
            </div>
            <section>
                
                <APIFetcher params={ViewManager[typeView].apiMethod}
                Comp={ViewManager[typeView].component} />

            </section>
        </main>
    );
}

export default Main