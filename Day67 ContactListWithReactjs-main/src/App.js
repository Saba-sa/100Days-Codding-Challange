import './App.css';
import { Route,Routes,json,useActionData,useNavigate} from 'react-router-dom';
import Header from './components/Header.js'
import Home from './components/Home.js'
import AddContact from './components/AddContact.js'
import View from './components/View.js'
import Edit from './components/Edit.js'
import { useState,useEffect } from 'react';
import Signin from './components/Signin.js';
import Signup from './components/Signup.js';

function App() {
  let navigate=useNavigate();

  
  const usersDataStore=[
    {
      id:1,
      name:'saba',
      email:"sabaali3201",
      password:"hello",
      img:'./images/img1.svg',
      contactList:[
        {
          id: 1,
          name: "ABC alj",
          email: 'abc@gmail.com',
          phoneNo: '0355******',
          address: 'abc street Gilgit',
          relation:"brother"
        },
        {
          id: 2,
          name: "XYZ ndu",
          email: 'xyz@gmail.com',
          phoneNo: '0366******',
          address: 'xyz street Islamabad',
          relation:"sister"
        }
      ]
    },
    {
      id:2,
      name:'Muniba',
      email:"muni",
      password:"hel",
      img:'./images/img2.svg',
      contactList:[
        {
          id: 1,
          name: "lj ABC a",
          email: 'MNB@gmail.com',
          phoneNo: '0355495597985',
          address: 'abc street Gilgit',
          relation:"brother"
        },
        {
          id: 2,
          name: "nXYZ du",
          email: 'ABC@gmail.com',
          phoneNo: '03669347598735',
          address: 'xyz street Islamabad',
          relation:"sister"
        },
        {
          id: 3,
          name: "Soha ne",
          email: 'Semmm@gmail.com',
          phoneNo: '03669347598735',
          address: 'xyz street Islamabad',
          relation:"sister"
        }
      ]
    }
  ]
  const [Data, setdata] = useState([]);
  const [Status, setStatus] = useState(true);
  const [usersData, setusersData] = useState(usersDataStore);
  const [noData,setnoData] = useState(true);
  const [userId, setId] = useState([]);
  const [userImg, setuserImg] = useState('');

  const handleDel=(id)=>{
let temp=Data.filter((i)=>i.id!==parseInt(id))
setdata(temp)
localStorage.setItem('data',JSON.stringify(temp))
navigate("/data")
  }
  useEffect(() => {
    let temp = JSON.parse(localStorage.getItem('data'));
    Array.isArray(temp) && temp.length > 0 ? setdata(temp) : setnoData(false);
    Data.length>0?setStatus(false):setStatus(true)
console.log('data',Data);
  }, [setdata]);
  
  return (
    <div className="App overflow-hidden">

      <Header Status={Status} userImg={userImg}/>
      <Routes>
      {Array.isArray(Data) && noData?
      <Route path="/" element={<Home data={Data}/>} />
      :<Route path="/" element={<Signin setid={setId} setuserImg={setuserImg} userImg={userImg} store={usersData} setStatus={setStatus} setData={setdata}/>} />
      }
      <Route path="/signin" element={<Signin setid={setId} setuserImg={setuserImg} store={usersData} setStatus={setStatus} setData={setdata}/>} />
      <Route path='/data' element={<Home data={Data}/>} />
      <Route path='/add' element={<AddContact Data={Data} setdata={setdata} />} />
      <Route path="/view/:id" element={<View data={Data} handleDel={handleDel}/>} />
      <Route path="/edit/:id" element={<Edit setdata={setdata} data={Data} />} />
      <Route path="/signup" element={<Signup store={usersData} setusersData={setusersData} setStatus={setStatus}/>} />
            </Routes>
    </div>
  );
}

export default App;
