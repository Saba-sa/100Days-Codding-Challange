import React from "react";
import heroImg from "../../assets/H-Img.png";
import icon from "../../assets/svg/heroBtnicon.svg";
import Icon1 from "../../assets/svg/heroIcon1.svg";
import Icon2 from "../../assets/svg/heroIcon2.svg";
import Icon3 from "../../assets/svg/heroIcon3.svg";
const Hero = () => {
  return (
    <div
      className="bg-white relative   flex items-center   justify-center overflow-hidden"
      id="hero"
    >
      <div className="flex flex-col items-center justify-between lg:flex-row py-8 lg:max-w-7xl lg:w-full">
        <div className=" relative ">
          <div className="w-5/6 m-auto lg:max-w-2xl">
            <h2 className="text-4xl  leading-snug font-bold tracking-tight text-g1 sm:text-6xl sm:leading-snug mb-8">
              Lorem
              <span className="my-1 inline-block  text-orange-400 px-4  text-g4">
                consectetur
              </span>
              ipsum dolor sitamt amet
            </h2>
            <p className="text-base text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              praesentium, ex non voluptatem eveniet voluptas quis enim placeat
              harum excepturi natus corporis eos beatae soluta? Velit voluptatum
              aliquid iure? Iste aut sequi sapient?
            </p>
            <p className="text-base text-stone-400 mt-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              rem consequuntur minima eli.
            </p>
            <div className="mt-2 flex flex-col items-center md:flex-row">
              <button className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-orange-400 px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-orange-600 focus:outline-none md:mr-4 md:mb-0 md:w-auto">
                Lorem ipsum dolor sit consectetur
                <img src={icon} alt="icon " className="ml-2" />
              </button>
            </div>
          </div>
        </div>
        <div className="relative ">
          <div className="">
            <div className="bg-stone-600 w-full h-4/6 absolute top-56  z-0 rounded-full bottom-0"></div>
            <img src={heroImg} alt="hero " className=" z-5 relative" />
          </div>
          <div
            className="bg-orange-50 p-3 w-2/3 absolute z-8  rounded-full flex items-center left-0 top-3/4"
            style={{ zIndex: 1 }}
          >
            <img src={Icon1} alt="icon" className="ml-2" />
            <p>Lorem, ipsum dolor</p>
          </div>
          <div
            className="bg-orange-50 p-3 w-1/2 absolute z-8  rounded-full flex items-center top-80 left-1/2"
            style={{ zIndex: 1 }}
          >
            <img src={Icon2} alt="icon" className="ml-2" />
            <p>Lorem ipsum dolor</p>
          </div>
          <div
            className={`bg-orange-50 p-3 w-2/3 absolute z-8  rounded-full flex items-center left-20 -bottom-8`}
            style={{ zIndex: 1 }}
          >
            <img src={Icon3} alt="icon" className="ml-2" />
            <p>Lorem ipsum dolor adipisicing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
