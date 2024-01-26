import React from "react";
import icon1 from "../../assets/svg/afterHeroIcons1.svg";
import icon2 from "../../assets/svg/afterHeroIcons2.svg";
import icon3 from "../../assets/svg/afterHeroIcons3.svg";
import icon4 from "../../assets/svg/afterHeroIcons4.svg";
import icon5 from "../../assets/svg/afterHeroIcons5.svg";
import icon6 from "../../assets/svg/afterHeroIcons6.svg";
import Subheading from "../subHeading/Subheading";
import Detailshow from "./Detailshow.jsx";
const Advices = () => {
  const data = [
    {
      id: 1,
      icon: icon1,
      heading: "A whimsical journey through the wonders of imagination",
      para: "Embarking on a fantastical adventure into the realm of creativity, one is sure to be captivated by the enchanting landscapes and extraordinary characters. It's a mesmerizing experience that sparks the imagination and leaves an indelible mark.",
    },
    {
      id: 2,
      icon: icon2,
      heading: "Exploring the Mysteries of Quantum Physics",
      para: "Delving into the profound principles of quantum physics, we uncover the intricacies of the universe. Written with intellectual precision, this exploration challenges our understanding of reality and opens doors to new dimensions of thought.",
    },
    {
      id: 3,
      icon: icon3,
      heading: "Unraveling the Secrets of Ancient Alchemy",
      para: "Embarking on a quest to decode the ancient art of alchemy, this treatise unveils the mystical practices and philosophical underpinnings. A journey through time, it sheds light on the esoteric wisdom of bygone eras.",
    },
    {
      id: 4,
      icon: icon4,
      heading: "Discovering the Harmony of Nature's Rhythms",
      para: "Immersing ourselves in the symphony of nature's rhythms, this exploration intertwines seamlessly with the cycles of life. It's a profound integration of ecological understanding and holistic perspectives.",
    },
    {
      id: 5,
      icon: icon5,
      heading: "Mastering the Art of Culinary Innovation",
      para: "Crafting a culinary masterpiece requires a blend of skill and creativity. Dive into a world of gastronomic delights, where innovation and tradition converge to create an unparalleled sensory experience.",
    },
    {
      id: 6,
      icon: icon6,
      heading: "Navigating the Labyrinth of Technological Progress",
      para: "Embarking on a journey through the ever-evolving landscape of technology, this exploration navigates the labyrinth of innovation. Flexibility is the key to adapting to the dynamic changes in the technological domain.",
    },
  ];

  return (
    <section id="advices">
      <div className="py-10  sm:py-16 block lg:py-16 relative "></div>
      <div className="px-4 mx-auto max-w-7xl sm:px-6  relative">
        <Subheading
          heading="Lorem ipsum dolor sdolor sitit"
          subHeading="About us"
        />
        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-3 lg:mt-20 ">
          {data.map((item) => {
            return <Detailshow key={item.id} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Advices;
