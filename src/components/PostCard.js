import React from 'react'
import { Link } from 'react-router-dom'

function PostCard(props) {
    return (
        <div data-post-id={props.post.id}>
            <Link to={"/posts/" + props.post.id}>
                <h1>{props.post.title}</h1>
            </Link>
            <p>{props.post.body}</p>
        </div>
    )
}

export default PostCard
