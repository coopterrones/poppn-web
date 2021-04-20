import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({ label, path }) => {
  return (
    <div className="button-standard">
      <Link to={path} className="button-standard-link">
        {label}
      </Link>
    </div>
  );
};

export default Button;
