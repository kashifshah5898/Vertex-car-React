import React, { useState } from "react";
import "./About.css";
import "../Components/Navbar/Navbar.css";
import img from "../Assests/sell-a-car.png";
import newcar from "../Assests/new-car.png";
import sevice from "../Assests/service-online.png";
import vertexcar from "../Assests/about-img-02.png";
import coreslideimg1 from "../Assests/about-img-03.png";
import coreslideimg2 from "../Assests/about-img-04.png";
import Work from "./Work/Work.jsx";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { StarFilled, AimOutlined, UpOutlined } from "@ant-design/icons";
const About = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

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
  return (
    <div className="vc-container">
      <div className="about-us-main">
        <div className="about-us-banner">
          <div className="banner-heading-about">About Vertex Cars.</div>
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
        <div className="aboutus-cards">
          <div className="about-card-content">
            <div className="card-image">
              <img src={img} alt="" />
            </div>
            <div className="card-content">
              <div className="card-heading">Do You want to sell a car?</div>
              <div className="card-description">
                Duis cursus lectus sed dui imperdiet, id pharetra nunc
                ullamcorper donec luctus.
              </div>
            </div>
          </div>
          <div className="about-card-content">
            <div className="card-image">
              <img src={newcar} alt="" />
            </div>
            <div className="card-content">
              <div className="card-heading">Are You looking for a new car?</div>
              <div className="card-description">
                Duis cursus lectus sed dui imperdiet, id pharetra nunc
                ullamcorper donec luctus.
              </div>
            </div>
          </div>
          <div className="about-card-content">
            <div className="card-image">
              <img src={sevice} alt="" />
            </div>
            <div className="card-content">
              <div className="card-heading">
                How to schedule a service online?
              </div>
              <div className="card-description">
                Duis cursus lectus sed dui imperdiet, id pharetra nunc
                ullamcorper donec luctus.
              </div>
            </div>
          </div>
        </div>
        <div className="aboutus-futuredrive-sec">
          <div className="future-drive-des">
            <div className="future-drive-heading">
              Welcome To Your Future Drive
            </div>
            <div className="future-drive-subhea">
              Before we get ahead of ourselves, we want to welcome you to Vertex
              Cars. While nothing can replace thing on-the-lot experience.
            </div>
            <div className="future-drive-content">
              We appreciate you taking the time today to visit our web site. Our
              goal is to give you an interactive tour of our new and used
              inventory, as well as allow you to conveniently get a quote,
              schedule a service appointment, or apply for financing. The search
              for a luxury car is filled with high expectations. Undoubtedly,
              that has a lot to do with the vehicles you are considering, but at
              Motors, we think you should also have pretty high expectations for
              your dealership.
            </div>
          </div>
          <div className="future-drive-images">
            <div className="vertex-car-image">
              <img src={vertexcar} alt="" />
            </div>
          </div>
        </div>
        <div className="aboutus-customermain-wrap">
          <div className="about-us-costumersec">
            <div className="left-customer-des">
              <div className="customer-saying-heading">
                What our customers are saying us?
              </div>
              <div className="customer-des">
                Morbi convallis bibendum urna ut viverra. Maecenas quis
                consequat libero
              </div>
            </div>
            <div className="right-customer-slider">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={2}
                navigation
                // freeMode
                loop={true} // Enable looping
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  <div className="customer-menu-wrap">
                    <div className="customer-menu">
                      {" "}
                      <div className="slide-des">
                        Nunc feugiat porta viverra. In gravida pulvinar
                        pharetra. Phasellus finibus dui vel sagittis convallis.
                        Nulla bibendum felis quis erat iaculis viverra platea
                        dictumst.
                      </div>
                      <div className="customer-name">Alex</div>
                      <div className="customer-co">
                        Nissan Micra Acenta Auto
                      </div>
                      <div className="customer-rating">
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="customer-menu-wrap">
                    <div className="customer-menu">
                      {" "}
                      <div className="slide-des">
                        Nunc feugiat porta viverra. In gravida pulvinar
                        pharetra. Phasellus finibus dui vel sagittis convallis.
                        Nulla bibendum felis quis erat iaculis viverra platea
                        dictumst.
                      </div>
                      <div className="customer-name">Alex</div>
                      <div className="customer-co">
                        Nissan Micra Acenta Auto
                      </div>
                      <div className="customer-rating">
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="customer-menu-wrap">
                    <div className="customer-menu">
                      {" "}
                      <div className="slide-des">
                        Nunc feugiat porta viverra. In gravida pulvinar
                        pharetra. Phasellus finibus dui vel sagittis convallis.
                        Nulla bibendum felis quis erat iaculis viverra platea
                        dictumst.
                      </div>
                      <div className="customer-name">Alex</div>
                      <div className="customer-co">
                        Nissan Micra Acenta Auto
                      </div>
                      <div className="customer-rating">
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="customer-menu-wrap">
                    <div className="customer-menu">
                      {" "}
                      <div className="slide-des">
                        Nunc feugiat porta viverra. In gravida pulvinar
                        pharetra. Phasellus finibus dui vel sagittis convallis.
                        Nulla bibendum felis quis erat iaculis viverra platea
                        dictumst.
                      </div>
                      <div className="customer-name">Alex</div>
                      <div className="customer-co">
                        Nissan Micra Acenta Auto
                      </div>
                      <div className="customer-rating">
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          
        </div>

        <div className="core-values-sec">
          <div className="core-values-content">
            <div className="core-value-heading">Core Values</div>
            <div className="core-value-desc">
              We go through extensive factory training so that we may provide
              you with the knowledge you need to make an educated decision in
              choosing the vehicle that is right for your lifestyle.
            </div>
            <ul class="list-items pb-3">
              <li>
                <AimOutlined className="aim-icon" />
                Stress-free finance department.
              </li>
              <li>
                <AimOutlined className="aim-icon" />
                Robust selection of popular vehicles.
              </li>
              <li>
                <AimOutlined className="aim-icon" />
                350 offers on site, trusted by a community.
              </li>
              <li>
                <AimOutlined className="aim-icon" />
                Maintain your car to stay safe on the road.
              </li>
              <li>
                <AimOutlined className="aim-icon" />
                We know how to handle a wide range of car services.
              </li>
            </ul>
          </div>
          <div className="core-value-slider">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true} // Enable looping
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide className="core-slider">
                <img src={coreslideimg1} alt="" />
              </SwiperSlide>
              <SwiperSlide className="core-slider">
                <img src={coreslideimg2} alt="" />
              </SwiperSlide>
              <SwiperSlide className="core-slider">
                <img src={img} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="vc-work-aboutus">
          <div className="aboutus-work">
            <Work />
          </div>
        </div>
        {isButtonVisible && (
          <button className="scroll-to-top-button" onClick={scrollToTop}>
            <UpOutlined />{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default About;
