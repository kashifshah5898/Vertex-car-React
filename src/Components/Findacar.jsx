import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../Components/Navbar/Navbar.css";
import "./Findacar.css";
import { CarOutlined, CalendarOutlined, RightOutlined, UpOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { getAllVehiclesAPI } from "../Api/Service";
import { VEH_IMAGE_URL } from "../Api/constants";

// import stockcar from "/Users/psi-square/Desktop/Vertex/vertex-app/src/Assests/resize-1692965308786996398photo16055594248439e4c228bf1c2.jpeg"
const Findacar = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [cardData, setCardData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getAllVehicles();
  }, []);

  const getAllVehicles = async () => {
    try {
      const response = await getAllVehiclesAPI();

      if (response.status === "1") {
        setCardData(response.data);
      } else {
        toast.info("No data found");
      }
    } catch (error) {
      toast.error(error.message || error.msg);
    }
  };

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

  const routeToCars = (data) => {
    navigate(
      `/car/${encodeURIComponent(VEH_IMAGE_URL + data.images[0])}/${data.veh_name}/${data.make}/${
        data.fuel_type
      }/${data.seats}/${"transmition"}/${data.rental_details.split("/")[0] || data.rent}`,
      {
        state: data,
      }
    );
  };

  const RenderCars1 = ({ car }) => {
    return (
      <div className="card bg-whiteSmoke myCarCard col-lg-5 m-4">
        <div className="row g-0">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <img
              src={VEH_IMAGE_URL + car.images[0]}
              className="img-fluid rounded"
              alt="image_not_found"
            />
          </div>
          <div className="col-md-8 ">
            <div className="card-body">
              <h5 className="card-title">{car.veh_name}</h5>
              <h6 className="card-title">{car.make}</h6>
              <p className="card-text">{car.body_type}</p>
              <div className="car-rating">
                <div className="rating-1">Year: {car.year}</div>
                <div className="condition">Average</div>
                <div className="reviews">(30 Reviews)</div>
              </div>
              <div className="car-des">
                <div className="fuel-type">
                  <CarOutlined /> &nbsp;{car.milage}
                </div>
                <div className="car-cap d-flex justify-content-center align-items-center">
                  <CalendarOutlined /> &nbsp; {car.seats} Seats
                </div>
                <div className="car-trans">{car.fuel_type}</div>
              </div>
              <div className="car-price">
                <div className="price">{car.rental_details.split("/")[0] || car.rent}</div>
                <div className="more-details">
                  <span
                    onClick={() => routeToCars(car)}
                    className="pointer d-flex justify-content-center align-items-center"
                  >
                    See Details <RightOutlined />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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

          <div className="row d-flex justify-content-between">
            {cardData.length && cardData.map((car, index) => <RenderCars1 car={car} key={index} />)}
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
