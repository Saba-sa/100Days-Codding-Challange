import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Signin({setid,setuserImg,store,setStatus,setData }) {
    let navi=useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordStatus, setpasswordStatus] = useState(true);

  const check = (e) => {
    e.preventDefault();
    let arr=store.find(i=>i.email===email)
    arr.password===password?navi('/data'):setpasswordStatus(false)
    setid(arr.id)
    setuserImg(arr.img);
    setStatus(false)
    let temp=[...arr.contactList]
    setData(temp);
    localStorage.setItem('data',JSON.stringify(temp))
};

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center mb-4">Log in</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email Address *</label>
            <input type="email" id="email" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="hello@alignui.com" value={email} onChange={(e) => setemail(e.target.value)} />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password *</label>
            <input type="password" id="password" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="••••••••" value={password} onChange={(e) => setpassword(e.target.value)} />
            <p className="text-gray-600 text-xs mt-1">Must contain 1 uppercase letter, 1 number, min. 8 characters.</p>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" onClick={(e) => check(e)}>Log in</button>
          <p className="text-gray-600 text-xs text-center mt-4">
            <a href="/" className="text-blue-500 hover:underline">Forget Password</a>.
          </p>
        </form>
      </div>
      
    </div>
  );
}

export default Signin;
