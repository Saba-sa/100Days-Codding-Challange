import React,{useState,useEffect} from 'react'
import { RiArrowLeftCircleFill } from 'react-icons/ri'
import { Link,useNavigate } from 'react-router-dom'
import { useAppStore } from "../Hook/DataContext";
import { v4 as uuidv4 } from "uuid";

const Add = () => {
  let navigate=useNavigate();
  const {allContacts,setAllContacts,date} = useAppStore();

    const [detail, setDetail] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        relation: ''
      });
    
      const [invalid, setInvalid] = useState({
        isFnameInvalid: false,
        isLnameInvalid: false,
        isPhoneInvalid: false,
        isRelationInvalid: false
    });
    
const [disabled, setdisabled] = useState(true)

useEffect(() => {
  const isAnyFieldInvalid = Object.values(invalid).every((i) => i === true);
  setdisabled(!isAnyFieldInvalid);
}, [invalid]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phone') {
            const phoneRegex = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm;
            setInvalid({...invalid, isPhoneInvalid:(phoneRegex.test(value))})
        }else if(name==='lname'){
            let isValid = (value).trim().length>0;
            setInvalid({...invalid, isLnameInvalid:(isValid)})
        }else if(name==='fname'){
            let isValid = (value).trim().length>0;
            setInvalid({...invalid, isFnameInvalid:(isValid)})
        }
        else if(name==='relation'){
            let isValid = (value).trim().length>0;
            setInvalid({...invalid, isRelationInvalid:(isValid)})
        }
        
 setDetail({ ...detail, [name]: value });
        
}

const AddItem=()=>{
  const {fname,lname,email,phone,relation}=detail;
  const temp= {
    id:uuidv4(),
  name: `${fname} ${lname}`,
  email: email?email:"",
  phone: phone,
  relation: relation,
  timeOfActive:date,
  messages:[]
}
  setAllContacts([...allContacts,temp])
  setDetail({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    relation: ''
  })
  setdisabled(true)
  navigate('/chat')
}      
const { fname, lname, email, phone, relation } = detail;
        const { isFnameInvalid, isLnameInvalid,   isPhoneInvalid,  isRelationInvalid } = invalid;
    
  return (
    <div><>
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className='flex items-center '>
                <div className="text-blue-600 text-2xl cursor-pointer mr-16 hover:text-blue-800">
                <Link to={'/'}>
                <RiArrowLeftCircleFill/></Link>
                </div>
                <div>
              <h1 className="text-2xl font-semibold text-blue-700">
                Add New Contact
              </h1>
                </div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative flex">
                 <div className='mr-5 relative'>
                 <input
                    autoComplete="off"
                    id="fname"
                    name="fname"
                    type="text"
                    value={fname}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="First Name"
                    onChange={e=>handleChange(e)}
                  />
                  {
                    !isFnameInvalid&&
                  <p className='text-red-900 font-semibold text-sm'>*invalid</p>
                  }
                  <label
                    htmlFor="First Name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    First Name
                  </label>
                 </div>
                  <div className='relative'>
                  <input
                    autoComplete="off"
                    id="lname"
                    name="lname"
                    type="text"
                    value={lname}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Last Name"
                    onChange={e=>handleChange(e)}
                  />
                    {
                        !isLnameInvalid&&
                  <p className='text-red-900 font-semibold text-sm'>*invalid</p>
                  }
                  <label
                    htmlFor="Last Name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Last Name
                  </label>
                  </div>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="phone"
                    name="phone"
                    type="tel"
                    value={phone}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Phone no plz"
                    onChange={e=>handleChange(e)}
                  /> {
                    !isPhoneInvalid&&
                  <p className='text-red-900 font-semibold text-sm'>*invalid</p>
                
                  }
                  <label
                    htmlFor="tel"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Phone Number
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="text"
                    value={email}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                    onChange={e=>handleChange(e)}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address (optional)
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="relation"
                    name="relation"
                    type="text"
                    value={relation}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Relation"
                    onChange={e=>handleChange(e)}
                  />
                 {
                    !isRelationInvalid&&
                  <p className='text-red-900 font-semibold text-sm'>*invalid</p>
                  
                  }
                  <label
                    htmlFor="relation"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Relation
                  </label>
                </div>
                <div className="relative">
                {
                    disabled?
                  <button className="bg-gray-400 text-white rounded-md px-4 py-1" >
                   Add Now
                  </button>
                :
                  <button className="bg-blue-600 text-white rounded-md px-4 py-1 hover:bg-blue-700" onClick={AddItem}>
                   Add Now
                  </button>
                }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  </div>
  )
              }

export default Add