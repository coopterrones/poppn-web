import React from "react";
import { Link } from "react-router-dom";
import "./LearnMore.scss";

const LearnMore = () => {
  return (
    <div className="learn-more-button">
      <Link to="/learn-more" className="learn-more-button-link">
        Learn More
      </Link>
    </div>
  );
};

export default LearnMore;
