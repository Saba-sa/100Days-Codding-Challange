import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Advices from "./components/AfterHeroFirst/Advices";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Form from "./components/Form/Form.jsx";
import Fotter from "./components/Fotter/Fotter.jsx";
const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Advices />
      <Services />
      <Testimonial />
      <Banner />
      <Form />
      <Fotter />
    </>
  );
};

export default App;
