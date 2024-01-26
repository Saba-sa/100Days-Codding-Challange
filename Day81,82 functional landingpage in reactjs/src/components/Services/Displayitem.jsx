import React from "react";
import Tick from "../../assets/svg/Tick.svg";
const Displayitem = ({ item }) => {
  const {
    title,
    subTitle,
    para,
    subsubTitle,
    point1,
    point2,
    point3,
    btnText,
    Rectangle,
    shift,
  } = item;
  return (
    <div
      className={`flex items-center justify-between ${
        shift ? "flex-col" : "flex-col-reverse"
      } w-full m-auto lg:flex-row`}
    >
      {shift ? (
        <>
          <div className="w-full flex items-center justify-center mx-8">
            <img src={Rectangle} alt="person" />
          </div>
          <div className="w-11/12 lg:mt-0 lg:ml-16 overflow-hidden  ">
            <p className="font-semibold text-sm text-g uppercase  text-stone-400 mt-8">
              /{subTitle}
            </p>
            <p className="text-2xl font-bold  text-g uppercase w-full">
              {title}
            </p>
            <p className="mt-3 text-xl text-black">{para}</p>

            <div>
              <p className="font-semibold text-sm text-g uppercase  text-stone-400 mt-8">
                /{subsubTitle}
              </p>
              <div className="flex my-4">
                <div className="p-1 mr-4 bg-orange-400 rounded-md">
                  <img src={Tick} alt="" className=" w-4" />
                </div>
                <div className="text-orange-500">{point1}</div>
              </div>
              <div className="flex my-4">
                <div className="p-1 mr-4 bg-orange-400 rounded-md">
                  <img src={Tick} alt="" className=" w-4" />
                </div>
                <div className="text-orange-500">{point2}</div>
              </div>
              <div className="flex my-4">
                <div className="p-1 mr-4 bg-orange-400 rounded-md">
                  <img src={Tick} alt="" className=" w-4" />
                </div>
                <div className="text-orange-500">{point3}</div>
              </div>
            </div>
            <button className="py-2 px-4 bg-orange-100 text-stone-900 border border-orange-300 flex items-center text-lg">
              {btnText}
              <svg
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group">
                  <path
                    id="Vector"
                    d="M17.9 16.48L10.3587 24.024L8.47334 22.1373L16.016 14.596L9.416 7.99597H24.5V23.08L17.9 16.48Z"
                    fill="#000"
                  />
                </g>
              </svg>
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="w-11/12  lg:mt-0 lg:mx-6 overflow-hidden max-w-full">
            <p className="font-semibold text-sm text-g uppercase  text-stone-400 mt-8">
              /{subTitle}
            </p>
            <p className="text-2xl font-bold  text-g uppercase w-full">
              {title}
            </p>
            <p className="mt-3 text-xl text-black">{para}</p>

            <div>
              <p className="font-semibold text-sm text-g uppercase  text-stone-400 mt-8">
                /{subsubTitle}
              </p>
              <div className="flex my-4">
                <div className="p-1 mr-4 bg-orange-400 rounded-md">
                  <img src={Tick} alt="" className=" w-4" />
                </div>
                <div className="text-orange-500">{point1}</div>
              </div>
              <div className="flex my-4">
                <div className="p-1 mr-4 bg-orange-400 rounded-md">
                  <img src={Tick} alt="" className=" w-4" />
                </div>
                <div className="text-orange-500">{point2}</div>
              </div>
              <div className="flex my-4">
                <div className="p-1 mr-4 bg-orange-400 rounded-md">
                  <img src={Tick} alt="" className=" w-4" />
                </div>
                <div className="text-orange-500">{point3}</div>
              </div>
            </div>
            <button className="py-2 px-4 bg-orange-50 text-stone-900 border border-orange-300 flex items-center text-lg">
              {btnText}
              <svg
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group">
                  <path
                    id="Vector"
                    d="M17.9 16.48L10.3587 24.024L8.47334 22.1373L16.016 14.596L9.416 7.99597H24.5V23.08L17.9 16.48Z"
                    fill="#000"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div className="rounded-lg flex items-center justify-center w-full">
            <img src={Rectangle} alt="person" />
          </div>
        </>
      )}
    </div>
  );
};

export default Displayitem;
