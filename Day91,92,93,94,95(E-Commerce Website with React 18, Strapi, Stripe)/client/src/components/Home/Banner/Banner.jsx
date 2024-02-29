import "./Banner.scss";
const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem eius
            eveniet eos obcaeca.
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <div className="img-content">
          <img
            src={require("../../../assets/banner-img.png")}
            alt=""
            className="banner-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
