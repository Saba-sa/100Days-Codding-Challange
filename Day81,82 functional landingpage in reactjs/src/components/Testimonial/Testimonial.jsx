import React from "react";
import Subheading from "../subHeading/Subheading";
import Detail from "./Detail.jsx";
import Testimonial1 from "../../assets/svg/testimonial1.svg";
import Testimonial2 from "../../assets/svg/testimonial2.svg";
import Testimonial3 from "../../assets/svg/testimonial3.svg";
const Testimonial = () => {
  let data = [
    {
      id: 1,
      text: "Grâce à l'approche holistique de DLC, notre entreprise a connu une transformation significative. Leurs conseils stratégiques ont été essentiels pour notre croissance.",
      personImg: Testimonial1,
      personName: "Alvin",
      personOccupation: "National Factors Manager",
    },
    {
      id: 2,
      text: "La formation de DLC a considérablement amélioré les compétences de notre équipe, contribuant à une croissance significative.",
      personImg: Testimonial2,
      personName: "Alvin",
      personOccupation: "National Factors Manager",
    },
    {
      id: 3,
      text: "La qualité exceptionnelle des services de DLC a renforcé notre réputation de marque et inspiré confiance à nos clients. Hautement recommandé.",
      personImg: Testimonial3,
      personName: "Alton",
      personOccupation: "Direct Marketing Assistant",
    },
  ];
  return (
    <div
      className="mx-auto max-w-xl md:max-w-4xl lg:0 lg:max-w-4xl xl:max-w-7xl "
      id="testimonial"
    >
      <Subheading
        heading="Ce que nos clients disent de nous"
        subHeading="témoignages clients"
      />
      <div className="container  mx-auto p-4 flex justify-center items-center mt-8">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8  lg:w-full ">
          {data.map((item) => {
            return <Detail key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
