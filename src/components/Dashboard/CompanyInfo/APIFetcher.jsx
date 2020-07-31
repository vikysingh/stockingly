import React, { useContext, useEffect, useState } from 'react'
import useFetch from "../../Hooks/useFetch"
import ViewContext from "../../../context"

import Indicator from "../../Utils/Indicators/Loader"

const baseUrl = "https://www.alphavantage.co/query?"
const apikey = process.env.REACT_API_KEY

function APIFetcher(props) {
    const { viewCompany } = useContext(ViewContext)
    const { params, Comp } = props

    const [ status, setStatus ] = useState("loading")

    const { loading, data, error } = useFetch(`${baseUrl}function=${params}&symbol=${viewCompany}&apikey=${apikey}`)

    useEffect(() => {
        setStatus(loadingErrorChecker())
    }, [ loading, data, error ])

    function loadingErrorChecker() {
        
        if(!loading && data && !error) {
            if(data.Note || data === {}) return "error"
            else return "success"
        }
        else if(loading && !data && !error) return "loading"
        else if(error && !data) return "error"
    }

    return (
        <>
            {
                status === "loading" && <Indicator theme="primary" text="Loading..." />
            }
            {
                status === "error" && <Indicator theme="danger" text="Something went wrong :(" />
            }
            {
                status === "success" && <Comp data={data} loading={loading} />
            }
        </>
    );
}

export default React.memo(APIFetcher)