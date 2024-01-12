import React, { useContext } from 'react'
import Singlenote from './Singlenote'
import { dataContext } from '../hooks/Context'
import { Link } from 'react-router-dom'
import '../App.css'

const Note = () => {
  const {data}=useContext(dataContext)
  return (
    <div  className='Notes'>
    {
      data.length? 
      <Singlenote/>
:<><p>Noting to show</p>
<Link to={'/'}>Go back</Link> </>
}
    </div>
  )
}

export default Note