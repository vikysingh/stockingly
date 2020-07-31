import React, { useState, createContext } from "react"

const ViewContext = createContext("Companies")

export function ViewContextProvider(props) {
    const [ MainView, setMainView ] = useState("companies")
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
