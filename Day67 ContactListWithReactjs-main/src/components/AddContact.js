import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from "react-icons/hi";

function AddContact({Data,setdata,}) {
const [Fname, setFname] = useState("");
const [email, setemail] = useState("");
const [phone, setphone] = useState("");
const [address, setaddress] = useState("");
const [relation, setrelation] = useState("");
const [Lname, setLname] = useState("");
let navigate=useNavigate();
const handleSave=(e)=>{
  e.preventDefault();
  let id=Data.length?Data.length+1:1;
  let temp={
    id,
    name:`${Fname} ${Lname}`,
    email: email,
    phoneNo: phone,
    address: address,
    relation:relation
  }
  let tempStore=[...Data]
  setdata([temp,...tempStore]);
  localStorage.setItem('data',JSON.stringify([temp,...tempStore]))
  navigate("/data")
}

  return (
<div className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300 ">
    <div className="container mx-auto p-4 flex justify-center h-screen items-center">
        <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
            <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Contact Information</h1>
    
            <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="First name" className="border p-2 rounded w-full" value={Fname} onChange={(e)=>setFname(e.target.value)}/>
                    <input type="text" placeholder="Last name" className="border p-2 rounded w-full" value={Lname} onChange={(e)=>setLname(e.target.value)}/>
                </div>
                <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input type='tel' placeholder="Phone no" className="border p-2 rounded w-full" value={phone} onChange={(e)=>setphone(e.target.value)}/>
                    <input type="email" placeholder="Email address" className="border p-2 rounded w-full" value={email} onChange={(e)=>setemail(e.target.value)}/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="Street address" className="border p-2 rounded w-full" value={address} onChange={(e)=>setaddress(e.target.value)}/>
                    <input type="text" placeholder="Relation" className="border p-2 rounded w-full" value={relation} onChange={(e)=>setrelation(e.target.value)}/>
                </div>
                <Link to='/'
    className="inline-flex mr-5 items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
>
   <HiArrowNarrowLeft/>
</Link>
                <button type="button" id="theme-toggle" className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors" onClick={handleSave}>
                    Save
                </button>
            </form>
        </div>
    </div>

  </div>
  )
}

export default AddContact
