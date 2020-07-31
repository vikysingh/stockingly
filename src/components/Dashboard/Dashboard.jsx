import React, { lazy, Suspense, useContext } from "react"
import styles from "./Dashboard.module.css"

import ViewContext from "../../context"
import Indicator from "../Utils/Indicators/Loader"

export default function Dashboard() {
    
    const Gallery = lazy(() => import("./Gallery/Gallery"))
    const Main = lazy(() => import("./CompanyInfo/Main"))

    const { MainView } = useContext(ViewContext)
    
    return (
        <Suspense fallback={<Indicator theme="primary" text="Loading..." />}>
            <main className={styles.dashboard}>
            
            {
                MainView === "companies" ? <Gallery /> : <Main />
            } 
            </main>
        </Suspense>
    )
}