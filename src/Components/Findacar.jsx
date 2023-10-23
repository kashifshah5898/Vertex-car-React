import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../Components/Navbar/Navbar.css";
import "./Findacar.css";
import { CarOutlined, CalendarOutlined, RightOutlined, UpOutlined } from "@ant-design/icons";
import DataCar from "./DataCar";

// import stockcar from "/Users/psi-square/Desktop/Vertex/vertex-app/src/Assests/resize-1692965308786996398photo16055594248439e4c228bf1c2.jpeg"
const Findacar = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [cardData] = useState(DataCar);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling effect
    });
  };

  const RenderCars = () => {
    return cardData.map((car, index) => (
      <div className="stock-car-checklist" key={index}>
        <div className="card-media">
          <img src={car.img} alt="" />
          <span>SPECIAL</span>
        </div>
        <div className="card-body">
          <div className="card-body-wrap">
            <div className="car-type">{car.type}</div>
            <div className="car-co">{car.company}</div>
            <div className="car-rating">
              <div className="rating">4.4/5</div>
              <div className="condition">Average</div>
              <div className="reviews">(30 Reviews)</div>
            </div>
            <div className="car-des">
              <div className="fuel-type">
                <CarOutlined /> {car.fuel}
              </div>
              <div className="car-cap">
                <CalendarOutlined /> {car.capacity}
              </div>
              <div className="car-trans">{car.transmition}</div>
            </div>
            <div className="car-price">
              <div className="price">{car.price}</div>
              <div className="more-details">
                <Link
                  to={`/car/${encodeURIComponent(car.img)}/${car.type}/${car.company}/${car.fuel}/${
                    car.capacity
                  }/${car.transmition}/${car.price}`}
                >
                  See details <RightOutlined />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="vc-container">
      <div className="findacar-main">
        <div className="about-us-banner">
          <div className="banner-heading-aboutfindcar">Find a Perfect Car for You.</div>
          <div className="svg-container">
            <svg
              className="bread-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 114 11.4"
              preserveAspectRatio="none"
            >
              <polygon points="114 0 57 11.4 0 0 0 11.4 114 11.4"></polygon>
            </svg>
          </div>
        </div>
        <div className="stock-cars-main">
          <div className="carsstock-heading">Cars in Stock</div>
          <div className="carstock-sub-heading">Book with confidence:No car booking fees</div>
          <div className="stock-car-checklist-container">
            <RenderCars />
          </div>
        </div>
      </div>
      {isButtonVisible && (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          <UpOutlined />{" "}
        </button>
      )}
    </div>
  );
};

export default Findacar;
