import React,{useState} from "react";
import "./Contactus.css";
import {
  UserOutlined,
  MailOutlined,
  EditOutlined,
  CompassOutlined,
  PhoneOutlined,
  UpOutlined
  //   MailOutlined,
} from "@ant-design/icons";
import FacebookIcon from "../Assests/Facebookicon";
const Contactus = () => {
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
      <div className="about-us-banner">
        <div className="banner-heading-about">
          Contact
          <br />
          Vertex Cars.
        </div>
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
      <div className="contact-us-form">
        <div className="contact-form-left">
          <div className="contact-form-main">
            <div className="contact-form-heading">
              We'd love to hear from you
            </div>
            <div className="contact-form-subheading">
              Send us a message and we'll respond as soon as possible
            </div>
            <div className="contact-form-info">
              <div className="input-fields">
                <div className="contact-label">
                  <label htmlFor="name">
                    Your Name <br />
                  </label>
                </div>
                <div className="contact-input">
                  <input type="text" id="name" placeholder="Your Name" />
                  <UserOutlined className="contact-icon-user" />
                </div>
              </div>
              <div className="input-fields">
                <div className="contact-label">
                  <label htmlFor="email">Your Email</label>
                </div>
                <div className="contact-input">
                  <input type="email" id="email" placeholder=" Email Address" />
                  <MailOutlined className="contact-icon-mail" />
                </div>
              </div>
            </div>

            <div className="contact-label-textarea">
              <label htmlFor="message">Message</label>
            </div>
            <div className="contact-input">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Write your message"
              ></textarea>
              <EditOutlined className="contact-icon-textarea" />
            </div>
            <div className="contact-form-button">
              <button>Send Message</button>
            </div>
          </div>
        </div>
        <div className="contact-form-right">
          <div className="contact-us-information">
            <div className="information-wrap">
              <div className="info-heading">Contact Us</div>

              <div className="location-contact">
                <div className="location-icon">
                  <CompassOutlined />
                </div>
                <div className="location-des">
                  <div className="location-heading">Address</div>
                  <div className="proper-location">
                    Churchill House,
                    <br />1 London Road Slough SL3 7FJ
                  </div>
                </div>
              </div>
              <div className="location-contact">
                <div className="location-icon">
                  <PhoneOutlined />{" "}
                </div>
                <div className="location-des">
                  <div className="location-heading">Phone</div>
                  <div className="proper-location">0330 133 0153</div>
                </div>
              </div>
              <div className="location-contact">
                <div className="location-icon">
                  <MailOutlined />{" "}
                </div>
                <div className="location-des">
                  <div className="location-heading">Email</div>
                  <div className="proper-location">info@vertexcars.co.uk</div>
                </div>
              </div>
              <div className="icons-social-facebook">
                <div className="">
                  <FacebookIcon className="facebook" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108890.7906999881!2d74.399744!3d31.473664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190f7df22c3fe7%3A0x8dd7ffda40aa6b03!2sAllama%20Iqbal%20International%20Airport!5e0!3m2!1sen!2s!4v1692976941054!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
       {isButtonVisible && (
          <button className="scroll-to-top-button" onClick={scrollToTop}>
<UpOutlined />          </button>
        )}
    </div>
  );
};

export default Contactus;
