import React, { useContext } from 'react'
import styles from "./Heading.module.css"
import HeadingButton from '../../../Utils/HeadingButton/HeadingButton'
import ViewContext from "../../../../context"

let IDs = ["overview_1", "stock_performance_2", "balance_sheet_3"]

function Heading() {
    const { setTypeView } = useContext(ViewContext)

    function handleActiveClass(event) {
        // IDs.map(btn => {
        //     document.getElementById(btn).classList.remove("active_heading_button")
        //     if(btn === event.target.id) {
        //         console.log("class added")
        //         console.log(document.getElementById(event.target.id).classList)
        //         document.getElementById(event.target.id).classList.add("active_heading_button")
        //     }
        // })

        if(event.target.id === "overview_1") setTypeView("overview")
        else if(event.target.id === "stock_performance_2") setTypeView("chart")
        else setTypeView("balancesheet")
    }
    
    return (
        <header className={styles.company_info_heading} >
            <HeadingButton text="Overview" id={IDs[0]} handler={handleActiveClass} />
            <HeadingButton text="Stock performance" id={IDs[1]} handler={handleActiveClass} />
            <HeadingButton text="Balance sheet" id={IDs[2]} handler={handleActiveClass} />
        </header>
    );
}

export default Heading;