import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from './Loader';

function Posts() {
    const { id } = useParams()
    const url = 'https://jsonplaceholder.typicode.com/posts/' + id
    const [post, setPost] = useState({
        loading: false,
        data: null
    })

    useEffect(() => {
        setPost({
            loading: true,
            data: null
        })
        axios.get(url).then((response) => {
            setPost({
                loading: false,
                data: response.data
            })
        })
    }, [url])

    let content = null
    
    if(post.loading){
        content = <Loader/>
    }

    if(post.data) {
        console.log ('post :>> ', post);
        return (
            <div>
                <h1> {post.data.title} </h1>
                <p>{post.data.body}</p>
            </div>
        )
    }

    return (
        <div>{content}</div>
    )
} 

export default Posts
