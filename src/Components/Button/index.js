import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({ label, path }) => {
  return (
    <div className="learn-more-button">
      <Link to={path} className="learn-more-button-link">
        {label}
      </Link>
    </div>
  );
};

export default Button;
