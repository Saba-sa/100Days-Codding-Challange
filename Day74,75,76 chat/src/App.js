import React from "react";
import AllContact from "./components/AllContact";
import Actionbtns from "./components/Actionbtns";
import Action from "./components/Action";
import Add from "./components/Add.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Action />} />
          <Route path="/add" element={<Add />} />
          <Route path="/chat" element={<AllContact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
