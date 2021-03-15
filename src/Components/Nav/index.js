import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";
import Logo from "../Logo/index";

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
          to="/features"
          className="nav-item-link"
          activeClassName="nav-item-link-active">
          Features
        </NavLink>
        <NavLink
          exact
          to="/about-us"
          className="nav-item-link"
          activeClassName="nav-item-link-active">
          About Us
        </NavLink>
        <NavLink
          exact
          to="/contact"
          className="nav-item-link"
          activeClassName="nav-item-link-active">
          Contact
        </NavLink>
      </div>
    </section>
  );
};

export default Nav;
