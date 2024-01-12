import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { useStoreState,useStoreActions } from 'easy-peasy'
import {useNavigate  } from 'react-router-dom';
function PostPage() {
  const {id}=useParams();
  const navigate=useNavigate();
  const deletePost=useStoreActions((actions)=>actions.deletePost);
  const getPostById=useStoreState((state)=>state.getPostById)
  const post=getPostById(id);
  const handleDelete=async (id)=>{
    deletePost(id);
   navigate('/')

  }

  return (
    <main className='PostPage'>
    <h1>post page</h1>
      <article className='post'>
      {
        post&& <>
          <h2>{post.title}</h2>
          <p className="postData">{post.datetime}</p>
          <p className="postBody">{post.body}</p>
          <button onClick={()=>handleDelete(post.id)}>Delete</button>
          
        <Link to={`/edit/${post.id}`}><button>Edit post</button></Link>

        </>
      }
      {
        !post&&
        <>
          <h2>Post Not Found</h2>
          <p>Well That's disappointing</p>
          <Link to='/'>Visit our Home</Link>
        </>
      }
      </article>
    </main>
  )
}

export default PostPage
