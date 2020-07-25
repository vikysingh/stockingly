import React from "react"

import styles from "../Gallery.module.css"
import GalleryText from "../GalleryText"

import CompaniesList from "../../../../Companieslist"

function ChildLowerRow() {
    return (
        <div className={styles.gallery_left_column_lower_row}>
            <GalleryText text={CompaniesList[0]} bgColor="#00deea" />
        </div>
    )
}

export default ChildLowerRow