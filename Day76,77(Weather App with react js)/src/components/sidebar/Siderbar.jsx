import React from 'react'
import { FaWind } from "react-icons/fa6";
const Siderbar = () => {
  return (
    <div>
        <>
  <div className=" h-screen pt-4 pb-4">
   <aside className=" ml-4  flex h-full w-20 flex-col items-center  bg-slate-700 rounded-3xl">
     
     <nav className="flex flex-1 flex-col gap-y-4 pt-10">
       <span
         className="group relative rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50"
       >
         
       <FaWind/>
       </span>
     </nav>
     
   </aside>
  </div>
</>

    </div>
  )
}

export default Siderbar