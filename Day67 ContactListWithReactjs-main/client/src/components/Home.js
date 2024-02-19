import React from 'react'
import Display from '../components/Display.js'
import { Link } from 'react-router-dom'
function Home({data}) {
    return (
    <>
      {data.length?
        <Display data={data}/>  
        :<div className='bg-gray-200 h-auto flex flex-col justify-center overflow-y-auto py-40 h-screen'>
      <p>Nothing to display</p>
      <Link to='/add'>  
          <button className='" bg-slate-700 text-white p-2 mt-4 rounded-lg'>Add Now</button>
        </Link>
        </div>
        }
    </>
  )
}

export default Home
