import React, { useContext } from 'react'
import useFetch from "../../Hooks/useFetch"
import ViewContext from "../../../context"

const baseUrl = "https://www.alphavantage.co/query?"
const apikey = process.env.REACT_API_KEY

function APIFetcher(props) {
    const { viewCompany } = useContext(ViewContext)
    const { params, Comp } = props

    const { loading, data, error } = useFetch(`${baseUrl}function=${params}&symbol=${viewCompany}&apikey=${apikey}`)

    return (
        <div>
            {data && <Comp data={data} loading={loading} error={error} />}
        </div>
    );
}

export default APIFetcher;