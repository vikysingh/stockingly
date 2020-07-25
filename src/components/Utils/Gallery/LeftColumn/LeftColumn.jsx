import React from "react"

import styles from "../Gallery.module.css"
//import GalleryText from "../GalleryText"
import ChildUpperRow from "./UpperRow/ChildUpperRow"
import ChildLowerRow from "./ChildLowerRow"

function LeftColumn() {
    return (
        <div className={styles.gallery_left_column}>
            <ChildUpperRow />
            <ChildLowerRow />
        </div>
    )
}

export default LeftColumn