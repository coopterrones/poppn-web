import React from "react";
import NavItem from "../NavItem/index";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <section className="nav-container">
      <Link to="/">
        <NavItem itemName="Home" />
      </Link>
      <Link to="/features">
        <NavItem itemName="Features" />
      </Link>
      <Link to="/about-us">
        <NavItem itemName="About Us" />
      </Link>
      <Link to="/contact">
        <NavItem itemName="Contact" />
      </Link>
    </section>
  );
};

export default Nav;
