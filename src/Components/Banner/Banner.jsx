import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner-main">
      <div className="banner-main-heading">
        <div className="luxury-car-heading">
          LUXURY CAR
          <span> RENTAL</span>
        </div>
        <div className="luxury-car-descrip">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin massa
          tellus
        </div>
        <button className="mt-2 btn btn-primary">LEARN MORE</button>
      </div>
    </div>
  );
};

export default Banner;
