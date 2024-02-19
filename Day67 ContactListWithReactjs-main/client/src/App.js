import "./App.css";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import AddContact from "./components/AddContact.js";
import View from "./components/View.js";
import Edit from "./components/Edit.js";
import { useState, useEffect } from "react";
import Signin from "./components/Signin.js";
import Signup from "./components/Signup.js";
import user from "./components/images/img1.svg";
function App() {
  let navigate = useNavigate();

  const usersDataStore = [
    {
      id: 1,
      name: "saba",
      email: "sabaali3201",
      password: "hello",
      img: "./images/img1.svg",
      contactList: [
        {
          id: 1,
          name: "ABC alj",
          email: "abc@gmail.com",
          phoneNo: "0355******",
          address: "abc street Gilgit",
          relation: "brother",
        },
        {
          id: 2,
          name: "XYZ ndu",
          email: "xyz@gmail.com",
          phoneNo: "0366******",
          address: "xyz street Islamabad",
          relation: "sister",
        },
      ],
    },
    {
      id: 2,
      name: "Muniba",
      email: "muni",
      password: "hel",
      img: "./images/img2.svg",
      contactList: [
        {
          id: 1,
          name: "lj ABC a",
          email: "MNB@gmail.com",
          phoneNo: "0355495597985",
          address: "abc street Gilgit",
          relation: "brother",
        },
        {
          id: 2,
          name: "nXYZ du",
          email: "ABC@gmail.com",
          phoneNo: "03669347598735",
          address: "xyz street Islamabad",
          relation: "sister",
        },
        {
          id: 3,
          name: "Soha ne",
          email: "Semmm@gmail.com",
          phoneNo: "03669347598735",
          address: "xyz street Islamabad",
          relation: "sister",
        },
      ],
    },
  ];
  const [Data, setdata] = useState([]);
  const [Status, setStatus] = useState(true);
  const [usersData, setusersData] = useState(usersDataStore);
  const [noData, setnoData] = useState(true);
  const [userId, setId] = useState([]);
  const [userImg, setuserImg] = useState(user);
  const [userLogin, setUserLogin] = useState(false);

  const handleDel = (id) => {
    let temp = Data.filter((i) => i.id !== parseInt(id));
    setdata(temp);
    localStorage.setItem("data", JSON.stringify(temp));
    navigate("/data");
  };
  useEffect(() => {
    let temp = JSON.parse(localStorage.getItem("data"));
    Array.isArray(temp) && temp.length > 0 ? setdata(temp) : setnoData(false);
    if (temp?.length > 0) {
      setStatus(false);
      setUserLogin(true);
    } else {
      setStatus(true);
    }
  }, [setdata]);

  return (
    <div className="App overflow-hidden">
      <Header userLogin={userLogin} userImg={userImg} />
      <Routes>
        <Route
          path="/"
          element={userLogin ? <Home data={Data} /> : <Navigate to="/signin" />}
        />
        <Route
          path="/signin"
          element={
            userLogin ? (
              <Navigate to="/" />
            ) : (
              <Signin
                setid={setId}
                setuserImg={setuserImg}
                store={usersData}
                setStatus={setStatus}
                setData={setdata}
                setUserLogin={setUserLogin}
              />
            )
          }
        />
        <Route path="/data" element={<Home data={Data} />} />
        <Route
          path="/add"
          element={<AddContact Data={Data} setdata={setdata} />}
        />
        <Route
          path="/view/:id"
          element={<View data={Data} handleDel={handleDel} />}
        />
        <Route
          path="/edit/:id"
          element={<Edit setdata={setdata} data={Data} />}
        />
        <Route
          path="/signup"
          element={
            userLogin ? (
              <Navigate to="/" />
            ) : (
              <Signup
                store={usersData}
                setusersData={setusersData}
                setStatus={setStatus}
                setUserLogin={setUserLogin}
              />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
