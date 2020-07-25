import React from "react"
import styles from "../../Gallery.module.css"
import ChildLeftColumn from "./ChildLeftColumn"
import ChildRightColumn from "./ChildRightColumn"

export default function ChildUpperRow() {
    return (
        <div className={styles.gallery_left_column_upper_row}>
            <ChildLeftColumn />
            <ChildRightColumn />
        </div>
    )
}