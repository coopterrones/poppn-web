import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";
import Logo from "../Logo/index";
import Button from "../Button";

const Nav = () => {
  const [navBar, setNavBar] = useState(false);

  const updateBackground = () => {
    if (window.scrollY >= 50) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", updateBackground);

  return (
    <section className={navBar ? "nav-container active" : "nav-container"}>
      <div className="logo-nav-container">
        <Logo />
      </div>
      <div className="nav-links-container"></div>
      <div className="learn-more-button-container">
        <Button label="Learn More" path="/learn-more" />
      </div>
    </section>
  );
};

export default Nav;
