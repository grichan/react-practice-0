import React, {useEffect, useState} from 'react'
import axios from 'axios'

export function useHttpRequests(url) {
    const [Request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url).then((response) => {
            setRequest({
                loading: false,
                data: response.data,
                error: false
            })
        }).catch((err) => {
            setRequest({
                loading: false,
                data: null,
                error: true
            })
        })
    }, [url])

    return Request
}

