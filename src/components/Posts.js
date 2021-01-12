import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from './Loader';
import {useHttpRequests} from '../hooks/HttpRequests'

function Posts() {
    const { id } = useParams()
    const url = 'https://jsonplaceholder.typicode.com/posts/' + id

    let post = useHttpRequests(url)

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
            <div id="post" >
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
