import { useEffect, useState } from "react"
import axios from "axios"

function useFetch(url) {
    const [ loading, setLoading ] = useState(true)
    const [ data, setData ] = useState(null)
    const [ error, setError ] = useState(false)

    useEffect(() => {
        retreiver()
        return () => null
    }, [])

    async function retreiver() {
        try {
            let response = await axios(url)
            setData(response.data)
            setLoading(false)
        } catch(e) {
            setError(true)
            setLoading(false)
        }
    }

    return { loading, data, error }
}

export default useFetch