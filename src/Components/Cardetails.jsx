import React,{useState} from "react";
import { useParams } from "react-router";
import "./Cardetails.css";
import {
  MailOutlined,
  PhoneOutlined,
  ArrowRightOutlined,
  UpOutlined
} from "@ant-design/icons";
import Breadcrumbs from "./breadcrumbs";
import Work from "./Work/Work";
// import useNavigate from 'module'
import { useNavigate } from 'react-router-dom';

const Cardetails = (props) => {
  const { img, type, company, fuel, capacity, transmition, price } =
    useParams();
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Add smooth scrolling effect
      });
    };
    const navigate = useNavigate();
    function invoices() {
      navigate('/invoice', {
        state: {
          img,
          type,
          company,
          fuel,
          capacity,
          transmition,
          price,
        },
      });
    }
  return (
    <div className="vc-container">
      <div className="card-details-main">
      <Breadcrumbs />
        <div className="details-img">
          <img src={decodeURIComponent(img)} alt="Car" />
        </div>
        <div className="car-details-descrip">
          <div className="car-details-left">
            <div className="car-details-heading">
              <div className="car-cat">{company}</div>
              <div className="car-details-rating">
                <div className="rating">4.4/5</div>
                <div className="reviews">(30 Reviews)</div>
              </div>
            </div>
            <div className="car-specs">
              <div className="car-specs-left">
                <div className="car-specs-des">
                  <div className="spec-heading">BODY TYPE</div>
                  <div className="spec-type">Compact,Hachback,{type}</div>
                </div>
                <div className="car-specs-des">
                  <div className="spec-heading">Fuel TYPE</div>
                  <div className="spec-type">{fuel}</div>
                </div>
                <div className="car-specs-des">
                  <div className="spec-heading">Transmission</div>
                  <div className="spec-type">{transmition}</div>
                </div>
                <div className="car-specs-des">
                  <div className="spec-heading">Car Seater</div>
                  <div className="spec-type">{capacity}</div>
                </div>
              </div>
              <div className="car-specs-right">
                <div className="car-specs-des">
                  <div className="spec-heading">Mileage</div>
                  <div className="spec-type">Km</div>
                </div>
                <div className="car-specs-des">
                  <div className="spec-heading">Air bags</div>
                  <div className="spec-type">Km</div>
                </div>
                <div className="car-specs-des">
                  <div className="spec-heading">Air Conditionar</div>
                  <div className="spec-type">Yes</div>
                </div>
              </div>
            </div>
          </div>
          <div className="car-details-right">
            <div className="car-price-box">
              <div className="price-car">
                <div className="car-feature">special</div>
                <div className="car-pricing">
                  From <span>{price}</span>
                </div>
                <div className="book-now-button">
                  <button onClick={invoices}>
                    Book Now <ArrowRightOutlined />
                  </button>
                </div>
              </div>
            </div>
            <div className="car-details-question">
              <div className="question-details">
                <div className="car-detail-question">Get a Question?</div>
                <div className="car-detail-subhead">
                  Do not hesitate to give us a call. We are an expert team and
                  we are happy to talk to you.
                </div>
                <div className="car-detail-icon">
                  <div className="detail-phone-icon">
                    <PhoneOutlined />
                  </div>
                  <div className="detail-phone">
                    <a href="tel:03301330153">0330 133 0153</a>
                  </div>
                </div>
                <div className="car-detail-mail">
                  <div className="detail-phone-icon">
                    <MailOutlined />
                  </div>
                  <div className="detail-phone">
                    <a href="mailto:info@vertexcars.co.uk">
                      info@vertexcars.co.uk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rental-car-details">
            <div className="rental-car-heading">Car Rental Information</div>
            <div className="rental-car-des">
            Per consequat adolescens ex, cu nibh commune temporibus vim, ad sumo viris eloquentiam sed. Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.<br/> <br/>
           <span>Cum et probo menandri. Officiis consulatu pro et, ne sea sale invidunt, sed ut sint blandit efficiendi. Atomorum explicari eu qui, est enim quaerendum te. Quo harum viris id. Per ne quando dolore evertitur, pro ad cibo commune.</span> 
            </div>
        </div>
      </div>
      <div className="vc-work-aboutus">
          <div className="aboutus-work">
            <Work />
          </div>
        </div>
        {isButtonVisible && (
          <button className="scroll-to-top-button" onClick={scrollToTop}>
<UpOutlined />          </button>
        )}
    </div>
  );
};

export default Cardetails;
