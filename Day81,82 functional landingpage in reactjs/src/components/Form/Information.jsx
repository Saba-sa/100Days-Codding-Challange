import React from "react";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BiLogoLinkedin } from "react-icons/bi";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <div className="text-white w-10/12 xl:w-6/12">
      <h1 className="text-3xl">Informations</h1>
      <div className="flex flex-col gap-4 mt-8">
        <div className="flex items-center">
          <Link to={"mailto:contact@dlcstrategie.com"} target="blank">
            <IoMail className="p-2 pl-0 text-4xl cursor-pointer" />
          </Link>
          <Link to={"mailto:contact@dlcstrategie.com"} target="blank">
            <p>contact@dlcstrategie.com</p>
          </Link>
        </div>
        <div className="flex items-center">
          <FaPhoneAlt className="p-2 pl-0 text-4xl" />
          <p>+(225) 05 85 02 18 80</p>
        </div>
        <div className="flex items-center ">
          <Link
            to={
              "https://www.google.com/maps/search/Akou%C3%A9do+Palmeraie+le+Triangle+Boulevard+Fran%C3%A7ois+Mitterrand+Immeuble+Mahoutin,+2%C3%A8me+%C3%A9tage+app.3/@5.3638329,-3.9563685,17z/data=!3m1!4b1?entry=ttu"
            }
            target="blank"
          >
            <IoLocationSharp className="p-2 pl-0 text-4xl" />
          </Link>
          <Link
            to={
              "https://www.google.com/maps/search/Akou%C3%A9do+Palmeraie+le+Triangle+Boulevard+Fran%C3%A7ois+Mitterrand+Immeuble+Mahoutin,+2%C3%A8me+%C3%A9tage+app.3/@5.3638329,-3.9563685,17z/data=!3m1!4b1?entry=ttu"
            }
            target="blank"
          >
            <p>
              Akouédo Palmeraie le Triangle, Boulevard François Mitterrand,
              Immeuble Mahoutin, 2ème étage, app.3
            </p>
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            to={"https://www.linkedin.com/in/strat%C3%A9gie/"}
            target="blank"
          >
            <BiLogoLinkedin className="p-2 pl-0 text-4xl" />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/strat%C3%A9gie/"}
            target="blank"
          >
            <p>stratégie</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Information;
