import React from 'react'
import styles from "./Home.module.css"
import { Link } from "react-router-dom"

function Home() {

    return (
        <header className={styles.header} role="banner">
            <h1>Top 15 stocks</h1>
                <button className={styles.primary_btn}>
                    <Link to="/stocks">
                        Access stocks!
                    </Link>
            </button>
        </header>
    )
}

export default Home;