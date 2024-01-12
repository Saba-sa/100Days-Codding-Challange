import React,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
export default function Edit({setdata,data}) {
    let {id}=useParams();
    let navigate=useNavigate();
    let temp=data.find(i=>i.id===parseInt(id))
    const{name,email,phoneNo,address,relation}=temp;
    let NameSplit=name.split(' ');
    const [Fname, setFname] = useState(NameSplit[0]);
    const [Email, setemail] = useState(email);
    const [Phone, setphone] = useState(phoneNo);
    const [Address, setaddress] = useState(address);
    const [Relation, setrelation] = useState(relation);
    const [Lname, setLname] = useState(NameSplit[1]);
    const handleSave = (e) => {
        e.preventDefault();
        let lastname=Lname!==''?Lname:''
        console.log(typeof(Lname));
        let temp={
            id:parseInt(id),
            name:`${Fname} ${lastname}`,
            email:Email,
            phoneNo:Phone,
            address:Address,
            relation:Relation
        }
        let updatedData=data.map((i)=>i.id===parseInt(id)?temp:i);
        setdata(updatedData)
        localStorage.setItem('data',JSON.stringify(updatedData))
       navigate("/data")
    }
    

  return (
    <div className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300 ">
    <div className="container mx-auto p-4 flex justify-center h-screen items-center">
        <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
            <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Contact Information</h1>
    
            <form>
            
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input  type="text" placeholder="First name" className="border p-2 rounded w-full" value={Fname} onChange={(e)=>setFname(e.target.value)} required/>
                    <input  type="text" placeholder="Last name" className="border p-2 rounded w-full" value={Lname} onChange={(e)=>setLname(e.target.value)} required/>
                </div>
                <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input  type='tel' placeholder="Phone no" className="border p-2 rounded w-full" value={Phone} onChange={(e)=>setphone(e.target.value)} required/>
                    <input  type="email" placeholder="Email address" className="border p-2 rounded w-full" value={Email} onChange={(e)=>setemail(e.target.value)} required/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input  type="text" placeholder="Street address" className="border p-2 rounded w-full" value={Address} onChange={(e)=>setaddress(e.target.value)} required/>
                    <input  type="text" placeholder="Relation" className="border p-2 rounded w-full" value={Relation} onChange={(e)=>setrelation(e.target.value)} required/>
                </div>
               
                <button type="button" id="theme-toggle" className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors" onClick={(e) => handleSave(e)}>
                    Save</button>


            </form>
        </div>
    </div>
    </div>
  )
}
