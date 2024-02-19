import React from 'react'
import { Link } from 'react-router-dom';
import { FaRegEye } from "react-icons/fa";
function Show({post}) {
    const {id,name,phoneNo}=post;
  return (
    <div>
<div className="bg-gray-200 ">
    <div className="max-w-xl mx-auto my-2 ">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <ul className="divide-y divide-gray-200">
                <li className="p-3 flex justify-between items-center user-card">
                    <div className="flex items-center">
                        <img className="w-10 h-10 rounded-full" src="https://unsplash.com/photos/oh0DITWoHi4/download?force=true&w=640" alt="Christy"/>
                        <span className="ml-3 font-medium">{name}</span>
                        <span className="ml-3 font-medium">{phoneNo}</span>
                    </div>
                    <div>
                        <button className="text-gray-500 hover:text-gray-700">
                           <Link to={`/view/${id}`}>
                            <FaRegEye/>
                           </Link>
                        </button>
                    </div>
      </li>
                
            </ul>
        </div>
    </div>
</div>
    </div>
  )
}

export default Show
