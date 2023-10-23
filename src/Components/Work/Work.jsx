import React from "react";
import "./Work.css";
import { ZoomInOutlined,CheckOutlined,ProjectOutlined } from "@ant-design/icons";
const Work = () => {
  return (
    <div className="work-main">
      <div className="work-heading">How does it work?</div>
      <div className="info-box-wrap">
        <div className="info-box">
          <div className="left-icon">
            <ZoomInOutlined
              style={{
                backgroundColor: "rgb(161, 230, 0)",
                padding: "21%",
                // borderRadius: "50px",
                color: "white",
                fontSize: "25px",
              }}
              className="zoomoutlined"
            />
          </div>
          <div className="info-content">
            <div className="heading-info">
              <div className="info-left-heading">Find The Car</div>
              <div className="right-icon">1</div>
            </div>
            <div className="info-descrip">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              odio
            </div>
          </div>
        </div>
        <div className="info-box">
          <div className="left-icon">
            <ProjectOutlined 
              style={{
                backgroundColor: "rgb(161, 230, 0)",
                padding: "21%",
                // borderRadius: "50px",
                color: "white",
                fontSize: "25px",
              }}
              className="zoomoutlined"
            />
          </div>
          <div className="info-content">
            <div className="heading-info">
              <div className="info-left-heading">Book It</div>
              <div className="right-icon">2</div>
            </div>
            <div className="info-descrip">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              odio
            </div>
          </div>
        </div>
        <div className="info-box">
          <div className="left-icon">
          <CheckOutlined              
          style={{
                backgroundColor: "rgb(161, 230, 0)",
                padding: "21%",
                // borderRadius: "50px",
                color: "white",
                fontSize: "25px",
              }}
              className="zoomoutlined"
            />
          </div>
          <div className="info-content">
            <div className="heading-info">
              <div className="info-left-heading">Grab And Go</div>
              <div className="right-icon">3</div>
            </div>
            <div className="info-descrip">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              odio
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
