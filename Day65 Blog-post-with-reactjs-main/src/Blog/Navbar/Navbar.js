import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';

function Navbar() {
  const posts = useStoreState((state) => state.posts);
  const search = useStoreState((state) => state.search);
  const setSearch = useStoreActions((actions) => actions.setSearch);  // Corrected action name
  const setSearchResults = useStoreActions((actions) => actions.setSearchResults);  // Corrected action name

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search, setSearchResults]);


  return (
    <nav className="nav">
      <form className="searchForm" onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="search">Search Posts</label>
        <input type="text" id='search' placeholder='Search Posts' value={search} onChange={(e)=>setSearch(e.target.value)}/>
      </form>
      <div className="nav_links">
        <ul>
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/post" >
              Post
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
