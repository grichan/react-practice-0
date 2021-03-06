import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader';
import PostCard from './PostCard'
import {useHttpRequests} from '../hooks/HttpRequests'
import store from '../store';

function Home() {
    let content = null
    const url = 'https://jsonplaceholder.typicode.com/posts'

    let posts = useHttpRequests(url)

    if(posts.error){
        content = <h1>Error occurred. </h1>
    }
    
    if(posts.loading){
        content = <Loader/>
    }

    if(posts.data) {

        store.dispatch({
            type: 'loadPosts',
            payload: {
                posts: posts.data
            }
        })

        content = posts.data.map((post, key) => 
            <PostCard post={post} />
        );

        return (
            <div className='posts'>
                {content}
            </div>
        )
    }

    return (
        <div className='posts'>{content}</div>
    )
}

export default Home
