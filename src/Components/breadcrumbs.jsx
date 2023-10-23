import { AimOutlined } from "@ant-design/icons";
import React from "react";
import { Link, useParams } from "react-router-dom";

const Breadcrumbs = () => {
  const { company} = useParams();

  return (
    <div className="breadcrumbs">
      <Link to="/Home" className="breadcrumb-home">Home</Link>
      <span> <AimOutlined/></span>
      <span>{company}</span>
     
    </div>
  );
};

export default Breadcrumbs;
