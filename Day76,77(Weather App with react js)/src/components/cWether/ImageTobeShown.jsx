import React from "react";
import clouds from "../../assets/cloudy.png";
import cycolone from "../../assets/cycolone.png";
import rain from "../../assets/rain.png";
import sun from "../../assets/sun.png";
import snow from "../../assets/snow.png";
import Hcloudy from "../../assets/highly cloudy.jpeg";
import thunderstorm from "../../assets/thunderstorm.png";
import wind from "../../assets/wind.png";
const ImageTobeShown = ({ condition }) => {
  const { main } = condition[0];
  const imageTobeDisplayed = () => {
    switch (main.toLowerCase()) {
      case "clouds":
        return clouds;
      case "sunny":
        return sun;
      case "cycolone":
        return cycolone;
      case "rain":
        return rain;
      case "snow":
        return snow;
      case "scattered":
        return Hcloudy;
      case "thunderstorm":
        return thunderstorm;
      case "wind":
        return wind;

      default:
        return sun;
    }
  };
  return (
    <div>
      <img src={imageTobeDisplayed()} alt=" to be displayed" />
    </div>
  );
};

export default ImageTobeShown;
