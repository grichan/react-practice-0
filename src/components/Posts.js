import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from './Loader';

function Posts() {
    const { id } = useParams()
    const url = 'https://jsonplaceholder.typicode.com/posts/' + id
    const [post, setPost] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setPost({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url).then((response) => {
            setPost({
                loading: false,
                data: response.data,
                error: false
            })
        }).catch((err) => {
            setPost({
                loading: false,
                data: null,
                error: true
            })
        })
    }, [url])

    let content = null

    if(post.error){
        content = <h1>Error occurred. </h1>
    }
    
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
