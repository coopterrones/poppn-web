import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Logo.scss";

const Logo = () => {
  const [logo, setLogo] = useState(false);

  const updateLogo = () => {
    if (window.scrollY >= 50) {
      setLogo(true);
    } else {
      setLogo(false);
    }
  };

  window.addEventListener("scroll", updateLogo);

  return (
    <Link
      to="/"
      className={logo ? "logo-link-container active" : "logo-link-container"}>
      poppn.
    </Link>
  );
};

export default Logo;
