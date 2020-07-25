import React from "react"
import styles from "./Dashboard.module.css"

import Sidebar from "./Sidebar/Sidebar"
import Gallery from "./Companies/Companies"

export default function Dashboard() {
    return (
        <main className={styles.dashboard}>
            <Sidebar />
            <Gallery />
        </main>
    )
}