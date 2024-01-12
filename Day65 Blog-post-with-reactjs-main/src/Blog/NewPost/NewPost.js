import React from 'react';
import { useState } from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { useStoreState, useStoreActions, action } from 'easy-peasy';

function NewPost() {
  const navigate = useNavigate();
  const posts = useStoreState((state) => state.posts);
  const postTitle = useStoreState((state) => state.postTitle);
  const postBody = useStoreState((state) => state.postBody);
  const savePost = useStoreActions((actions) => actions.savePost);
  const setPostBody = useStoreActions((actions) => actions.setPostBody); // Corrected function name
  const setPostTitle = useStoreActions((actions) => actions.setPostTitle); // Corrected function name

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = Array.isArray(posts) && posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MM dd, yyyy pp');
    const temp = { id, title: postTitle, datetime, body: postBody };
    savePost(temp);
    navigate('/');
  };

  return (
    <main className="newPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="postTitle">Title</label>
        <input type="text" id="postTitle" required value={postTitle} onChange={(e) => setPostTitle(e.target.value)} />
        <label htmlFor="postBody">Post</label>
        <textarea id="postBody" value={postBody} required onChange={(e) => setPostBody(e.target.value)}></textarea>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default NewPost;
