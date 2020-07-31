import React, { useState, createContext } from "react"

const ViewContext = createContext("gallery")

export function ViewContextProvider(props) {
    const [ MainView, setMainView ] = useState("gallery")
    const [ typeView, setTypeView ] = useState("overview")
    const [ viewCompany, setCompanyView ] = useState("AAPL")

    return (
        <ViewContext.Provider value={{ MainView, setMainView, typeView, setTypeView,
        viewCompany, setCompanyView }} >
            { props.children }
        </ViewContext.Provider>
    )
}

export default ViewContext
