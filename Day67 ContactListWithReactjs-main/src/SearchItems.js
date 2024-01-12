import React from 'react'

function searchItems({search,setSearch}) {
  return (
    <form className='searchForm' onSubmit={(e)=>{e.preventDefault()}}>
      <label htmlFor="search">Search</label>
      <input type="text" id='search' role='searchbox' placeholder='search items' value={search} onChange={(e)=>setSearch(e.target.value)}/>
    </form>
  )
}

export default searchItems
