import React from 'react'
import { MdModeEdit } from "react-icons/md";
import { GrView } from "react-icons/gr";
import {RiDeleteBin6Line} from 'react-icons/ri'

const Actionbtns = ({id,edit,del,bump}) => {
  return (
    <>
  <div className="max-w-xl mx-auto  bg-gray-200 rounded-lg">
    <div className="inline-flex items-center rounded-md shadow-sm flex-col">
      <button className="text-slate-800 hover:text-blue-600 text-sm bg-gray-200  font-medium px-4 py-2 inline-flex space-x-1 items-center" onClick={()=>edit(id)}>
        <span>
  <MdModeEdit/>
        </span>
        <span>Edit</span>
      </button>
      <button className="text-slate-800 hover:text-blue-600 text-sm bg-gray-200  font-medium px-4 py-2 inline-flex space-x-1 items-center" onClick={()=> del(id)}>
        <span>
         <RiDeleteBin6Line/>
        </span>
        <span>Delete</span>
      </button>
      <button className="text-slate-800 hover:text-blue-600 text-sm bg-gray-200  font-medium px-4 py-2 inline-flex space-x-1 items-center" onClick={()=>bump(id)}>
        <span>
        <GrView/>
        </span>
        <span>Bump</span>
      </button>
      
    </div>
  </div>
</>

  )
}

export default Actionbtns