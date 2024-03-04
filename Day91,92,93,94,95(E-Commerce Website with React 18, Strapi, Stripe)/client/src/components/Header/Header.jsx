import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Appstore } from "../../utils/Context";

import "./Header.scss";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [Scroll, setScroll] = useState(false);
  const [ShowCart, setShowCart] = useState(false);
  const [ShowSearch, setShowSearch] = useState(false);
  const [showMenu, setshowMenu] = useState(false);
  const [showList, setshowList] = useState(false);
  const [ShowCata, setShowCata] = useState(false);

  const navigate = useNavigate();
  const { cartCounts } = Appstore();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScroll(true);
      setShowCata(false);
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
  const handleClick = (id) => {
    navigate(`category/${id}`);
    setShowCata(false);
  };
  return (
    <>
      <header className={`main-header ${Scroll && "stickeyHeader"}`}>
        <div className="header-content">
          <ul className="left">
            <li
              onClick={() => {
                navigate("/");
                setShowCata(false);
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/about");
                setShowCata(false);
              }}
            >
              About
            </li>
            <li onClick={() => setShowCata(true)}>Categories</li>
          </ul>
          {ShowCata && (
            <div className="floating-catag">
              <p onClick={() => handleClick("1")}>HeadPhones</p>
              <p onClick={() => handleClick("2")}>Wireless EarBuds</p>
              <p onClick={() => handleClick("3")}>Speakers</p>
              <p onClick={() => handleClick("4")}>Smart Watches</p>
            </div>
          )}
          <div className="center" onClick={() => navigate("/")}>
            Logo.
          </div>
          <div className="right">
            <TbSearch onClick={() => toggleCart(setShowSearch, ShowSearch)} />
            <span className="cart-icon">
              <CgShoppingCart
                onClick={() => toggleCart(setShowCart, ShowCart)}
              />
              {!!cartCounts && <div>{cartCounts}</div>}
            </span>
            <div className="bar">
              {showMenu ? (
                <RxCross2 onClick={() => setshowMenu(!showMenu)} />
              ) : (
                <FaBars onClick={() => setshowMenu(!showMenu)} />
              )}
            </div>
          </div>
          {showMenu && (
            <div className="menuFloating">
              <ul className="left">
                <li
                  onClick={() => {
                    navigate("/");
                    setShowCata(false);
                    setshowMenu(!showMenu);
                  }}
                >
                  Home
                </li>
                <li
                  onClick={() => {
                    navigate("/about");
                    setShowCata(false);
                    setshowMenu(!showMenu);
                  }}
                >
                  About
                </li>
                <li onClick={() => setshowList(!showList)}>Categories</li>
              </ul>
              {showList && (
                <div className="floating">
                  <p
                    onClick={() => {
                      handleClick("1");
                      setshowMenu(!showMenu);
                    }}
                  >
                    HeadPhones
                  </p>
                  <p
                    onClick={() => {
                      handleClick("2");
                      setshowMenu(!showMenu);
                    }}
                  >
                    Wireless EarBuds
                  </p>
                  <p
                    onClick={() => {
                      handleClick("3");
                      setshowMenu(!showMenu);
                    }}
                  >
                    Speakers
                  </p>
                  <p
                    onClick={() => {
                      handleClick("4");
                      setshowMenu(!showMenu);
                    }}
                  >
                    Smart Watches
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </header>
      {ShowCart && <Cart setShowCart={setShowCart} />}
      {ShowSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
