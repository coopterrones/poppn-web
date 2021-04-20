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
        <Logo active={navBar} />
      </div>
      <div className="nav-links-container">
        <NavLink
          exact
          to="/"
          className={navBar ? "nav-item-link active" : "nav-item-link"}
          activeClassName="nav-item-link-active">
          Home
        </NavLink>
        <NavLink
          exact
          to="/integration"
          className={navBar ? "nav-item-link active" : "nav-item-link"}
          activeClassName="nav-item-link-active">
          Integration
        </NavLink>
        <NavLink
          exact
          to="/contact"
          className={navBar ? "nav-item-link active" : "nav-item-link"}
          activeClassName="nav-item-link-active">
          Contact
        </NavLink>
      </div>
      <div className="learn-more-button-container">
        <Button label="Learn More" path="/learn-more" />
      </div>
    </section>
  );
};

export default Nav;
