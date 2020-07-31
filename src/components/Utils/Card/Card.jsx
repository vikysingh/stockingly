import React from 'react'
import { FaChevronDown } from "react-icons/fa"

import styles from "./Cardstyle.module.css"

function Card(props) {
    const { headDisplay, contentBody, tracker } = props
    
    return (
        <div className={styles.card} >
            <span className={styles.card_heading} >
                <span>
                    { headDisplay }
                </span>
                <FaChevronDown className={styles.card_icon}
                id={`card_icon_${tracker}`}
                onClick={e => {
                    if(document.getElementById(`card_body_${tracker}`).style.transform === "scaleY(0)") {
                        document.getElementById(`card_body_${tracker}`).style.display = "flex"
                        document.getElementById(`card_body_${tracker}`).style.transform = "scaleY(1)"
                        document.getElementById(`card_icon_${tracker}`).style.transform = "rotate(180deg)"
                    } else {
                        document.getElementById(`card_body_${tracker}`).style.transform = "scaleY(0)"
                        document.getElementById(`card_body_${tracker}`).style.display = "none"
                        document.getElementById(`card_icon_${tracker}`).style.transform = "rotate(0deg)"
                    }
                }}
                />
            </span>
            <span className={styles.card_body} id={`card_body_${tracker}`} >
                { contentBody }
            </span>
        </div>
    );
}

export default Card