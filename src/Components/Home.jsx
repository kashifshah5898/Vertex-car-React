import React, { useState } from 'react';
import Banner from './Banner/Banner';
import ChooseUs from './ChooseUs/ChooseUs';
import Questions from './Questions/Questions';
import Work from './Work/Work';
import "../Components/Navbar/Navbar.css";
import {
UpOutlined  
} from "@ant-design/icons";
const Home = () => {
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

  return (
    <div className="vc-container">
      <div>
        <div className="vc-banner">
          <Banner />
        </div>
        <div className="vc-choose">
          <ChooseUs />
        </div>
        <div className="vc-question">
          <Questions />
        </div>
        <div className="vc-work">
          <Work />
        </div>
        {isButtonVisible && (
          <button className="scroll-to-top-button" onClick={scrollToTop}>
<UpOutlined />          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
