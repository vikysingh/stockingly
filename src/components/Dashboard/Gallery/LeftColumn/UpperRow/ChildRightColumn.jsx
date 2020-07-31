import React from "react"

import styles from "../../Gallery.module.css"
import GalleryText from "../../../Gallery/GalleryText"

import CompaniesList from "../../../../../Companieslist"

export default function ChildRightColumn() {
    return (
        <div className={styles.gallery_child_right_column}>
            <span>
                <GalleryText text={CompaniesList[5]} bgColor="#29c7ac" />
            </span>
            <span>
                <GalleryText text={CompaniesList[6]} bgColor="tomato" />
            </span>
            <span>
                <GalleryText text={CompaniesList[10]} bgColor="#eade35" />
                <GalleryText text={CompaniesList[11]} bgColor="#01c856" />
            </span>
            <span>
                <GalleryText text={CompaniesList[7]} bgColor="red" />
            </span>
        </div>
    )
}