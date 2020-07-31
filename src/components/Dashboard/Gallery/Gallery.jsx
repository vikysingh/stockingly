import React from "react"

import RightColumn from "./RighColumn/RightColumn"
import LeftColumn from "./LeftColumn/LeftColumn"

import styles from "./Gallery.module.css"

function Gallery() {
    return (
        <div className={styles.companies_gallery}>
            <LeftColumn />
            <RightColumn />
        </div>
    )
}

export default Gallery