import "./Header.css";
import brandLogo from "../../Assets/brand-logo.png";
import menuOpen from "../../Assets/menu-hamb.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuMobile from "./MenuMobile";

const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const mobile = window.innerWidth < 768 ? true : false;
  function scrollToId(id) {
    setTimeout(() => {
      let element = document.getElementById(id);
      let posY = element.getBoundingClientRect().y;
      window.scrollTo({top: posY, behavior:'smooth'});
    }, 300);
  }
  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={brandLogo} alt="logo" />
        <p>Logo</p>
      </Link>
      {mobile === true && isMenuOpened === false ? (
        <div className="navbar-options" onClick={() => setIsMenuOpened(true)}>
          <img src={menuOpen} alt="logo" />
        </div>
      ) : (
        <div>
          {mobile === true ? (
            <MenuMobile setIsMenuOpened={setIsMenuOpened} scroll={scrollToId} />
          ) : (
            <div className="menu-desktop">
              <div className="menu-desktop-left">
                <Link className="menu-item" to="/about">
                  About
                </Link>
                <Link className="menu-item" to="/services">
                  Services
                </Link>
              </div>
              <div className="menu-desktop-right">
                <Link className="menu-item" to="/proyects">
                  Proyects
                </Link>
                <Link
                  onClick={() => {
                    scrollToId("contacto");
                  }}
                  className="menu-item"
                  to="/"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
