import React, {useEffect } from 'react';
import Header from './Blog/Header/Header.js';
import Edit from './Blog/Edit/Edit.js';
import Navbar from './Blog/Navbar/Navbar.js';
import Home from './Blog/Home/Home.js';
import NewPost from './Blog/NewPost/NewPost.js';
import PostPage from './Blog/PostPage/PostPage.js';
import Footer from './Blog/Footer/Footer.js';
import About from './Blog/About/About.js';
import Missing from './Blog/Missing/Missing.js';
import './App.css'
import { Route, Routes} from 'react-router-dom';
import useAxiosFetch from './hooks/useAxiosFetch.js';
import { useStoreActions } from 'easy-peasy';

function App() {
  const setPost=useStoreActions((actions)=>actions.setPosts)
  const {data,fetchError,isLOading}=useAxiosFetch('http://localhost:3500/posts')
  useEffect(()=>{
  setPost(data);
  },[data,setPost])
  return (
      <div className='app'>
          <Header title="React Js Blog" />
        <Navbar/> 
        <Routes>
          <Route path="/" element={<Home fetchError={fetchError} isLOading={isLOading}/>}/>
          <Route path="/post" element={<NewPost/>}/>
          <Route path="/post/:id" element={<PostPage/>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/edit/:id" element={<Edit/>}/>
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
