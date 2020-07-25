import React, { useContext } from "react"
import cssStyles from "./Gallery.module.css"

//import companyContext from "../../../../context"

const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    color: "#fff",
    height: "100%",
    width: "100%",
    textAlign: "center"
}

function GalleryText(props) {
    const { text, bgColor } = props
    //const { setSelectedCompany } = useContext(companyContext)
    
    return <h3 className={cssStyles.gallery_text} //onClick={() => setSelectedCompany(text.symbol)}
    style={{backgroundColor: bgColor, ...styles}} >{ text.name }</h3>
}

export default GalleryText