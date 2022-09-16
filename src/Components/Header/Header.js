import "./Header.css";
import headerBG from "../../Assets/header-bg-2.jpg";
import headerLine from "../../Assets/line-bg-header.png";

import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderMedia from "./HeaderMedia";

const Header = () => {
  const mobile = window.innerWidth < 768 ? true : false;
  const [purpose, setPurpose] = useState("Profesion");
  const pathname = useLocation().pathname;
  useEffect(() => {
    if (pathname === "/") {
      setPurpose("Profesion");
    } else if (pathname === "/about") {
      setPurpose("History");
    } else if (pathname === "/services") {
      setPurpose("Services");
    } else if (pathname === "/proyects") {
      setPurpose("Proyects");
    }
  }, [pathname]);
  return (
    <div className="header">
      {pathname === "/" ? (
        <img className="image-home" src={headerBG} alt="header-bg" />
        ) : (
        <img src={headerBG} alt="header-bg" />
      )}
      {mobile === false ? (
        <>
          <img className="line-bg" src={headerLine} alt='bg' />
          <HeaderMedia />
        </>
      ) : null}
      <Navbar />
      <div className="header-title">
        <h2>Your {purpose}</h2>
        <h3>Goes here</h3>
      </div>
      {pathname === "/" ? (
        <div className="welcome">
          <div className="welcome-subtitle">
            <h4>Welcome!</h4>
          </div>
          <div className="welcome-text">
            <p>
              Im baby portland put a bird on it blog letterpress bitters yuccie.
              Im baby portland put a bird on it blog letterpress bitters yuccie.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
