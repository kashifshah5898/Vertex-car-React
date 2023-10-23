import React from 'react';
import "./Footer.css";
import logo from "../../Assests/vertex-car-logo.png";
import { Link } from 'react-router-dom';
import FacebookIcon from '../../Assests/Facebookicon';
const Footer = () => {
  return (
    <div className="vc-container"> <div className='footer-main'>
    <div className="vc-footer-wrap">
      <footer className="footer">
        <Link to="/Home" className="footer__brand">
          <img src={logo} alt="" />
        </Link>
        <div className="footer-link-wrap">
        <div className="footer__collapsable-container">
      <div className="footer__collapsable">
        <Link to="/Home">HOME</Link>
      </div>
      <div className="footer__collapsable">
        <Link to="/about">ABOUT US</Link>
      </div>
      <div className="footer__collapsable">
        <Link to="/Findacar">BOOK A CAR</Link>
      </div>
      <div className="footer__collapsable">
        <Link to="/Findacar">FIND A CAR</Link>
      </div>
      <div className="footer__collapsable">
        <Link to="/invoice-details">INVOICES</Link>
      </div>
      <div className="footer__collapsable">
        <Link to="/Contactus">CONTACT US</Link>
      </div>
       </div>
       </div>
      </footer>
      <div className="footer-copyright-sec">
        <div className="copyright">© Copyright Vertex Cars 2021</div>
        <div className="footer-social-links">
            <div className="icons-social">
           <div className=""><FacebookIcon className="facebook"/></div></div>
        </div>
      </div>
    </div>
  </div></div>
   
  );
}

export default Footer;
