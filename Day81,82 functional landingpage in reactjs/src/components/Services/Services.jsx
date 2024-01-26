import React from "react";
import Subheading from "../subHeading/Subheading";
import Rectangle1 from "../../assets/Reactangle1.jpg";
import Rectangle2 from "../../assets/Reactangle2.jpg";
import Rectangle3 from "../../assets/Reactangle3.jpg";

import Displayitem from "./Displayitem.jsx";
const Services = () => {
  const data = [
    {
      id: 1,
      title: "Revolutionizing Business Dynamics",
      subTitle: "Innovation",
      para: "Redefining how businesses operate by implementing efficient structures, optimized processes, and an organizational culture aligned with strategic objectives.",
      subsubTitle: "Advantages",
      point1: "Operational transformation for efficiency",
      point2: "Streamlined and optimized processes",
      point3: "Cultivating a culture aligned with strategic objectives",
      btnText: "Book the Service",
      Rectangle: Rectangle1,
      shift: false,
    },
    {
      id: 2,
      title: "Holistic Strategic and Operational Consulting",
      subTitle: "Consulting",
      para: "Guiding businesses on their quest for excellence and market success with a holistic approach that integrates strategic vision and operational execution.",
      subsubTitle: "Advantages",
      point1: "Comprehensive support for excellence",
      point2: "Integration of strategic vision",
      point3: "Effective operational execution",
      btnText: "Book the Service",
      Rectangle: Rectangle2,
      shift: true,
    },
    {
      id: 3,
      title: "Quality Management Excellence",
      subTitle: "Quality Management",
      para: "Assisting businesses in elevating their standards, delivering exceptional products and services, and fostering a culture of excellence that instills customer confidence and enhances brand reputation.",
      subsubTitle: "Advantages",
      point1: "Elevated quality standards",
      point2: "Exceptional products and services",
      point3: "Enhanced brand reputation",
      btnText: "Book the Service",
      Rectangle: Rectangle3,
      shift: false,
    },
  ];

  return (
    <section
      className="bg-white relative flex items-center  gap-24 flex-col my-12 py-24 justify-center overflow-hidden  mx-auto max-w-7xl sm:px-6 "
      id="services"
    >
      <Subheading
        heading="Agilité, Innovation et Résilience"
        subHeading="Services & avantages"
      />
      {data.map((item) => {
        return <Displayitem item={item} key={item.id} />;
      })}
      <button className="bg-orange-400 flex items-center text-white px-6 py-2 rounded-lg">
        Afficher plus{" "}
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
              fill="#ffff"
            />
          </g>
        </svg>
      </button>
    </section>
  );
};

export default Services;
