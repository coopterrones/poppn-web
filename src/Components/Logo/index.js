import React from "react";
import { Link } from "react-router-dom";
import "./Logo.scss";

const Logo = () => {
  return (
    <Link to="/" className="logo-link-container">
      Poppn.
    </Link>
  );
};

export default Logo;
