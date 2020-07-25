import React from "react"
import GalleryText from "../GalleryText"

import styles from "../Gallery.module.css"
import CompaniesList from "../../../../Companieslist"

function RightColumn() {
    return (
        <div className={styles.gallery_right_column}>
            <span>
                <GalleryText text={CompaniesList[1]} bgColor="blue" />
            </span>
            <span>
                <GalleryText text={CompaniesList[6]} bgColor="#f85871" />
            </span>
        </div>
    )
}

export default RightColumn