import React, {useEffect, useState} from 'react'
import axios from 'axios'

export function useHttpRequests(url) {
    const [posts, setPosts] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setPosts({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url).then((response) => {
            setPosts({
                loading: false,
                data: response.data,
                error: false
            })
        }).catch((err) => {
            setPosts({
                loading: false,
                data: null,
                error: true
            })
        })
    }, [url])

    return posts
}

