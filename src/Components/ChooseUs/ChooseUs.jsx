import React, { useState } from "react";
import {
  MoneyCollectOutlined,
  StarFilled,
  UserOutlined,
  BranchesOutlined,
} from "@ant-design/icons";
import "./ChooseUs.css";

function ChooseUs() {
  const [hoveredIcons, setHoveredIcons] = useState({
    financing: false,
    brands: false,
    trusted: false,
    maintenance: false,
  });

  const handleMouseEnter = (key) => {
    setHoveredIcons((prev) => ({
      ...prev,
      [key]: true,
    }));
  };

  const handleMouseLeave = (key) => {
    setHoveredIcons((prev) => ({
      ...prev,
      [key]: false,
    }));
  };

  return (
    <div className="choose-us-main">
      <div className="choose-heading">Why Choose Us</div>
      <div className="choose-small-h">
        <p>Why you can find the right car in the right place with us.</p>
      </div>
      <div className="choose-des-wrap">
        <div
          className={`choose-descrip ${hoveredIcons.financing ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter("financing")}
          onMouseLeave={() => handleMouseLeave("financing")}
        >
          <div className="choose-icon">
            <MoneyCollectOutlined style={{ fontSize: "25px", fontWeight: "500" }} />
          </div>
          <div className="choose-descrip-h">Financing Made Easy</div>
          <div className="description">
            <p>
              Our stress-free finance department that can find financial
              solutions to save you money.
            </p>
          </div>
        </div>
        <div
          className={`choose-descrip ${hoveredIcons.brands ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter("brands")}
          onMouseLeave={() => handleMouseLeave("brands")}
        >
          <div className="choose-icon">
            <BranchesOutlined style={{ fontSize: "25px", fontWeight: "500" }} />
          </div>
          <div className="choose-descrip-h">Wide Range of Brands</div>
          <div className="description">
            <p>
              With a robust selection of popular vehicles on hand, as well as
              leading vehicles from BMW and Ford.
            </p>
          </div>
        </div>
        <div
          className={`choose-descrip ${hoveredIcons.trusted ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter("trusted")}
          onMouseLeave={() => handleMouseLeave("trusted")}
        >
          <div className="choose-icon">
            <UserOutlined style={{ fontSize: "25px", fontWeight: "500" }} />
          </div>
          <div className="choose-descrip-h">Trusted By Thousands</div>
          <div className="description">
            <p>
              10 new offers every day. 350 offers on site, trusted by a
              community of thousands of users.
            </p>
          </div>
        </div>
        <div
          className={`choose-descrip ${
            hoveredIcons.maintenance ? "hovered" : ""
          }`}
          onMouseEnter={() => handleMouseEnter("maintenance")}
          onMouseLeave={() => handleMouseLeave("maintenance")}
        >
          <div className="choose-icon">
            <StarFilled style={{ fontSize: "25px", fontWeight: "500" }} />
          </div>
          <div className="choose-descrip-h">Car Service & Maintenance</div>
          <div className="description">
            <p>
              Our service department maintain your car to stay safe on the road
              for many more years.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
