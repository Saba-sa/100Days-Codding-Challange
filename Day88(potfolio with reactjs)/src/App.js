import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.jsx";
import "./App.css";
import About from "./components/About/About.jsx";
import Experence from "./components/Experence/Experence.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Footer from "./components/Footer/Footer.jsx";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Experence />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
