import React from "react"

import styles from "../../Gallery.module.css"

import GalleryText from "../../../Gallery/GalleryText"
import CompaniesList from "../../../../../Companieslist"

export default function ChildLeftColumn() {
    return (
        <div className={styles.gallery_child_left_column}>
            <span>
                <GalleryText text={CompaniesList[2]} bgColor="#b800f8" />
                <GalleryText text={CompaniesList[3]} bgColor="#ee4c7c" />
            </span>
            <span>
                <GalleryText text={CompaniesList[12]} bgColor="#f89600" />
                <GalleryText text={CompaniesList[13]} bgColor="#01f81e" />
                <GalleryText text={CompaniesList[14]} bgColor="#24305e" />
            </span>
            <span>
                <GalleryText text={CompaniesList[8]} bgColor="tomato" />
                <GalleryText text={CompaniesList[9]} bgColor="#cc8d8a" />
            </span>
        </div>
    )
}