import React from "react";
import { Link } from "react-router-dom";
import "./FooterLogo.scss";

const FooterLogo = () => {
  return (
    <Link to="/" className="footer-logo-link-container active">
      poppn.
    </Link>
  );
};

export default FooterLogo;
