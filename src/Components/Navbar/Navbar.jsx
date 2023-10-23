import React, { useState, useEffect } from "react";
import { PhoneOutlined, MailOutlined, MenuOutlined } from "@ant-design/icons";
import "./Navbar.css";
import logo from "../../Assests/vertex-car-logo.png";
import { Link, useNavigate } from "react-router-dom";
// import CardSlider from "../CardSlider/CardSlider";
const Navbar = () => {
  const [navExpanded, setNavExpanded] = useState(false);

  const toggleNav = () => {
    setNavExpanded((prevNavExpanded) => !prevNavExpanded);
  };
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="vc-container">
        <div className="vc-navbar-login">
          <div className="contact-us">
            <div className="login-phone-main">
              <div className="login-phone-no">
                <div className="phone-icon">
                  <PhoneOutlined />
                </div>
                <div className="phone-no">
                  <a href="tel:03301330153">0330 133 0153</a>
                </div>
              </div>
            </div>
            <div className="login-email-main">
              <div className="login-email">
                <div className="email-icon">
                  <MailOutlined />
                </div>
                <div className="email">
                  <a href="mailto:info@vertexcars.co.uk">info@vertexcars.co.uk</a>
                </div>
              </div>
            </div>
          </div>

          <div className="login-button">
            <Link to="/">Log in</Link>
          </div>
        </div>

        <div className="row">
          <div className={`vc-navbar-wrap ${isSticky ? "sticky" : ""}`}>
            <nav className={`nav ${navExpanded ? "nav--expanded" : ""}`}>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 ">
                <MenuOutlined
                  className="nav__collapser"
                  onClick={toggleNav}
                  style={{
                    color: "white",
                  }}
                />
                <Link to="/Home" className="nav__brand">
                  <img src={logo} alt="" />
                </Link>
              </div>
              <div className="col-8">
                <div className={`nav__collapsable ${navExpanded ? "expanded" : ""}`}>
                  <Link to="/Home">HOME</Link>
                  <Link to="/about">ABOUT US</Link>
                  <Link to="/My-Cars">MY CARS</Link>
                  <Link to="/Findacar">BOOK A CAR</Link>
                  <Link to="/invoice-details">INVOICES</Link>

                  <div className="nav__cta">
                    <button className="cta cta--bold" onClick={() => navigate("/Contactus")}>
                      CONTACT US
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
