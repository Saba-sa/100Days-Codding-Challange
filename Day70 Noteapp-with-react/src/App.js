import React from "react";
import Header from "./components/Header";
import Note from "./components/Note.js";
import Edit from "./components/Edit.js";
import Add from "./components/Add.js";
import { Context } from "./hooks/Context.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Context>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Add />} />
            <Route path="/notes" element={<Note />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </Context>
    </div>
  );
};

export default App;
