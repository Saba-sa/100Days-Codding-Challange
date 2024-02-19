import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { HiArrowNarrowLeft } from "react-icons/hi";

function View({data,handleDel}) {
	const {id}=useParams();
const temp=data.filter((i)=>i.id===parseInt(id))
const {name,email,phoneNo,address,relation}=temp[0];

  return (
    <div>
<div className="max-w-2xl mx-auto h-screen flex justify-center items-center">

	<div className="max-w-sm bg-white pt-6 w-full rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
		<div className="flex flex-col items-center pb-10">
			<img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt={name}/>
			<h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h3>
			<span className="text-sm text-gray-500 dark:text-gray-400">{relation}</span>
			<h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{phoneNo}</h3>
			<h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{email}</h3>
			<h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{address}</h3>
			<div className="flex mt-4 space-x-3 lg:mt-6">
<Link to='/data'
    className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
>
   <HiArrowNarrowLeft/>
</Link>
			<button onClick={() => handleDel(id)}
    className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800">
    Delete
</button>
<Link
    to={`/edit/${id}`}
    className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
> Edit
</Link>
</div>
		</div>
	</div>
</div>
    </div>
  )
}

export default View
