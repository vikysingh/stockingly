import React from 'react'
import styles from "./BalanceSheet.module.css"

import Card from "../../../Utils/Card/Card"


function BalanceSheet(props) {
    let tracker = 0
    const { data } = props

    return (
        <section className={styles.balance_sheet}>
            { data && data.quarterlyReports.map(item => 
            <Card headDisplay={<h4> Fiscal Date Ending { item.fiscalDateEnding } </h4>} key={item.fiscalDateEnding}
            tracker={tracker++} contentBody={<ul className={styles.list_items} >

                <li>
                    <strong> Reported Currency </strong> - 
                    {item.reportedCurrency}
                </li>

                <li>
                    <strong> Cash </strong> - 
                    {item.cash}
                </li>

                <li>
                    <strong> Total assets </strong> - 
                    {item.totalAssets}
                </li>

                <li>
                    <strong> Earning assets </strong> - 
                    {item.earningAssets}
                </li>

                <li>
                    <strong> Total liabilities </strong> - 
                    {item.totalLiabilities}
                </li>

                <li>
                    <strong> Short term debt </strong> - 
                    {item.shortTermDebt}
                </li>

                <li>
                    <strong> Long term debt </strong> - 
                    {item.longTermDebt}
                </li>

            </ul>}
            />) }
        </section>
    );
}


//
export default BalanceSheet;