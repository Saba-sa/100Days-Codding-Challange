import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup({store,setusersData,setStatus}) {
const [fullName, setfullName] = useState("");
const [email, setemail] = useState("");
const [password, setpassword] = useState("");
let navigate=useNavigate();
const handleSubmit=(e)=>{
e.preventDefault();
let id=store.length?store.length+1:1;
let temp={
    id:id,
    name:fullName,
    email:email,
    password:password
    
}
setusersData([...store,temp])
setfullName("")
setemail("")
setpassword("")
setStatus(false)
navigate('/add')
}


  return (
    <div>
<div className="bg-gray-100 flex items-center justify-center h-screen">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center mb-4">Signup</h2>
        <p className="text-gray-600 text-center mb-6">Enter your details to register.</p>
        <form>
            <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 text-sm font-semibold mb-2">Full Name *</label>
                <input type="text" id="fullName" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="James Brown" value={fullName} onChange={(e)=>{setfullName(e.target.value)}}/>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email Address *</label>
                <input type="email" id="email" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="hello@alignui.com" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password *</label>
                <input type="password" id="password" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="••••••••" value={password} onChange={(e)=> {setpassword(e.target.value)}}/>
                <p className="text-gray-600 text-xs mt-1">Must contain 1 uppercase letter, 1 number, min. 8 characters.</p>
            </div>
            <button type="button"  className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" onClick={(e)=>handleSubmit(e)}>Register</button>
            <p className="text-gray-600 text-xs text-center mt-4">
                By clicking Register, you agree to accept Apex Financial's
                <a href="/" className="text-blue-500 hover:underline">Terms and Conditions</a>.
            </p>
        </form>
    </div>
</div>
    </div>
  )
}

export default Signup
