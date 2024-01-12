import React from 'react'
import { Link } from 'react-router-dom'
function Post({post}) {
  return (
    <article className='post'>
      <Link to={`/post/${post.id}`}>
        <h1>{post.title}</h1>
        <h6>{post.datetime}</h6>
      </Link>
      {post.body.length<25?      <p className='post_body'>
{post.body}</p>:<p className='post_body'>{post.body.slice(0,25)}...</p>
      }
    </article>
  )
}

export default Post
