import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";
import Logo from "../Logo/index";
import Button from "../Button";

const Nav = () => {
  return (
    <section className="nav-container">
      <div className="logo-nav-container">
        <Logo />
      </div>
      <div className="nav-links-container">
        <NavLink
          exact
          to="/"
          className="nav-item-link"
          activeClassName="nav-item-link-active">
          Home
        </NavLink>
        <NavLink
          exact
          to="/integration"
          className="nav-item-link"
          activeClassName="nav-item-link-active">
          Integration
        </NavLink>
        <NavLink
          exact
          to="/contact"
          className="nav-item-link"
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
