import React from 'react'
import Gallery from "../../Utils/Gallery/Gallery"

import styles from "./Company.module.css"

function Companies() {
    return (
        <div className={styles.companies} >
            <Gallery />
        </div>
    );
}

export default Companies;