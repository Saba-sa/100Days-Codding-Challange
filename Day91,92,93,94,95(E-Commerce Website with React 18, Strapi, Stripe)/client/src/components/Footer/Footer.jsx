import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi autem
            omnis error assumenda laborum ratione amet exercitationem ipsum
            aliquid porro!
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow size={30} />
            <div className="text">ABC building,Karachi</div>
          </div>
          <div className="c-item">
            <FaMobileAlt size={30} />
            <div className="text">+923545645064</div>
          </div>
          <div className="c-item">
            <FaEnvelope size={30} />
            <div className="text">example@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home theater</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bat-content">
          <div className="text">© 2024 Saba Ali. All rights reserved.</div>
          <img src={require("../../assets/payments.png")} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
