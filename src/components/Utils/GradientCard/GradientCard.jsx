import React from "react"


export default function GradientCard(props) {
    
    return <div style={{
        color: "white", background: `linear-gradient(${props.firstBg}, ${props.secondBg})`
    }} >
        <span className="gradient_card_heading" > {props.heading} </span>
        <span className="gradient_card_body" > {props.body} </span>
    </div>
}