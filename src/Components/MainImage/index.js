import React from "react";
import illustration from "../../Assets/main-screen-illustration.png";
import "./MainImage.scss";

const MainImage = () => {
  return (
    <section className="main-image-container">
      <img src={illustration} height="300px" />
    </section>
  );
};

export default MainImage;
