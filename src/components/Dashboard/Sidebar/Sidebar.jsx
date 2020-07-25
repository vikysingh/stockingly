import React from "react"
import { AiOutlineAreaChart } from 'react-icons/ai'
import { FaBuilding } from 'react-icons/fa'

import styles from "./Sidebar.module.css"

function Sidebar() {

    return (
        <aside className={styles.sidebar} >
            <FaBuilding className={styles.sidebar__icon} 
            />
            
            <AiOutlineAreaChart className={styles.sidebar__icon}
             />
        </aside>
    )
}

export default Sidebar