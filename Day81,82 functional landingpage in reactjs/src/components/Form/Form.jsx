import React from "react";
import Information from "./Information.jsx";
import Contact from "./Contact.jsx";
import formbg from "../../assets/Reactangle3.jpg";
const background = {
  backgroundImage: `url(${formbg})`,
  minHeight: "100vh",
  backgroundSize: "cover",
};
const Form = () => {
  return (
    <div
      className="mt-24  mx-auto bg-gray-600 py-24"
      style={{ background }}
      id="contact"
    >
      <div className="w-full m-auto flex items-center flex-col justify-between max-w-7xl xl:flex-row xl:max-w-6xl">
        <Information />
        <Contact />
      </div>
    </div>
  );
};

export default Form;
