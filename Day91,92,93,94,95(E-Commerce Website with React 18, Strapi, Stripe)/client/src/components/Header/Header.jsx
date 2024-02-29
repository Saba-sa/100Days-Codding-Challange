import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Appstore } from "../../utils/Context";

import "./Header.scss";
const Header = () => {
  const [Scroll, setScroll] = useState(false);
  const [ShowCart, setShowCart] = useState(false);
  const [ShowSearch, setShowSearch] = useState(false);

  const navigate = useNavigate();
  const { cartCounts } = Appstore();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const toggleCart = (set, vari) => {
    set(!vari);
  };
  return (
    <>
      <header className={`main-header ${Scroll && "stickeyHeader"}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/")}>About</li>
            <li onClick={() => navigate("/")}>Categories</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            Logo.
          </div>
          <div className="right">
            <TbSearch onClick={() => toggleCart(setShowSearch, ShowSearch)} />
            <AiOutlineHeart />
            <span className="cart-icon">
              <CgShoppingCart
                onClick={() => toggleCart(setShowCart, ShowCart)}
              />
              {!!cartCounts && <div>{cartCounts}</div>}
            </span>
          </div>
        </div>
      </header>
      {ShowCart && <Cart setShowCart={setShowCart} />}
      {ShowSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
