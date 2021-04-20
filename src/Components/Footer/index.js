import React from "react";
import FooterSubscribe from "../FooterSubscribe";
import "./Footer.scss";
import FooterLogo from "../FooterLogo/index";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-copy-container">
        <FooterLogo />
        <h2 className="footer-headline">
          The Future of Nightlife is in Our Hands.
        </h2>
        <p className="footer-descriptor">Looking to connect with our team?</p>
      </div>
      <FooterSubscribe />
    </div>
  );
};

export default Footer;
