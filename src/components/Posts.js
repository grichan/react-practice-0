import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Posts() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1'
    const [post, setPost] = useState(null)

    useEffect(() => {
        axios.get(url).then((response) => {
            setPost(response.data)
        })
    }, [url])

    if(post) {
        console.log('post :>> ', post);
        return (
            <div>
                <h1> {post.title} </h1>
                <p>{post.body}</p>
            </div>
        )
    }

    return (
        <div></div>
    )
}

export default Posts
