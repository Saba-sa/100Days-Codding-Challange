import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <section className="Newsletter">
      <div className="Newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">Sign up for lates updates and news</span>
        <div className="form">
          <input type="text" placeholder="email addresss..." />
          <button>Subscribe</button>
        </div>
        <div className="text">
          Will be use accordance according to our privacy policy
        </div>
        <div className="social-icons">
          <div className="icon">
            <FaFacebookF size={18} />
          </div>
          <div className="icon">
            <RiInstagramFill size={18} />
          </div>
          <div className="icon">
            <FaTwitter size={18} />
          </div>
          <div className="icon">
            <FaLinkedinIn size={18} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
