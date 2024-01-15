import React from 'react'
import { useAppStore } from '../Hook/DataContext'
import SingleMsgs from './SingleMsg';
const MsgPortion = () => {
  const {showMessagesOf}=useAppStore();
  const {id,name,timeOfActive}=showMessagesOf;


    return (
    Object.keys(showMessagesOf).length>0 &&(
      <div className="flex flex-col h-full w-full bg-white px-4 py-6">
      <div className="flex flex-row items-center py-4 px-6 rounded-2xl shadow">
   <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-100">
     {name[0]}
   </div>
   <div className="flex flex-col ml-3">
     <div className="font-semibold text-sm">{name}</div>
     <div className="text-xs text-gray-500">{timeOfActive}</div>
   </div>
 </div>
  <SingleMsgs key={id} name={name} />
 </div>)
  )
}

export default MsgPortion