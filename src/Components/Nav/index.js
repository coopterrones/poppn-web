import React from "react";
import NavItem from "../NavItem/index";
import './Nav.scss';

const Nav = () => {
  return (
    <section className="nav-container">
      <NavItem itemName="Home"/>
      <NavItem itemName="Features"/>
      <NavItem itemName="About Us"/>
      <NavItem itemName="Contact"/>
    </section>
  );
};

export default Nav;
