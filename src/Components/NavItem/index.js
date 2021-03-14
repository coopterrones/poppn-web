import React from "react";
import "./NavItem.scss";

const NavItem = ({ itemName }) => {
  return (
    <div className="nav-item-container">
      <h3 className="nav-item-text">{itemName}</h3>
    </div>
  );
};

export default NavItem;
