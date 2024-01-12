import React from 'react'
import Show from "./Show.js" 
function Display({data}) {
  return (
    <div className='bg-gray-200 h-auto flex flex-col justify-center overflow-y-auto py-40'>
      {data.map((i)=>(
       <Show key={i.id} post={i} />
      ))}
    </div>
  )
}

export default Display
