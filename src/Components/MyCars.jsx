import React, { useState, useEffect } from "react";
import { VEH_IMAGE_URL } from "../Api/constants";
import "./Invoicepage/invoicepage.css";
import { getMyCarsAPI } from "../Api/Service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MyCars = () => {
  const [myCars, setMyCars] = useState([]);

  useEffect(() => {
    getMyCars();
  }, []);

  const getMyCars = async () => {
    try {
      const response = await getMyCarsAPI();
      if (response.status === "1") {
        setMyCars(response.data);
      } else {
        toast.error(response.error);
      }
    } catch (error) {
      toast.error(error.msg || error.message || "Something went wrong");
    }
  };

  return (
    <div className="container p-4">
      <div className="invoice-card-heading">
        <h2>My Cars</h2>
      </div>
      <div className="saved-invoices">
        {myCars.length === 0 ? (
          <div className="no-invoices-message d-flex justify-content-center w-100">
            Nothing to show
          </div>
        ) : (
          myCars.map((car, index) => <Card data={car} key={index} />)
        )}
      </div>
    </div>
  );
};

export default MyCars;

const Card = ({ data, index }) => {
  const {
    images,
    make,
    model,
    reg_no,
    rent,
    status,
    rental_details,
    fuel_type,
    transmission,
    milage,
  } = data;
  const statusColor = status === "pending" ? "text-red" : "text-green";

  const navigate = useNavigate();

  const vehicleInvoice = () => {
    navigate("/Vehicle-Invoice", { state: data });
  };

  return (
    <div className="card width-22">
      <img src={VEH_IMAGE_URL + images[0]} className="card-img-top" alt="image_not_found" />
      <div className="card-body">
        <h5 className="card-title">
          {make} &nbsp;
          <span className="fs-md">
            (<span className="text-green ">{model}</span>)
          </span>
        </h5>

        <ul>
          <div className="row card-text card-font">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <li>Reg NO : {reg_no}</li>
              <li className={statusColor}>Status : {status}</li>
              <li> {transmission}</li>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <li>Rent : {rent}</li>
              <li>Fuel Type : {fuel_type}</li>
              <li>Milage : {milage}</li>
            </div>
          </div>
        </ul>

        <p className="text-justify">
          <strong>Rental Details : </strong> {rental_details}
        </p>
      </div>
      <div class="card-footer text-muted  d-flex justify-content-end">
        <span className="pointer">Agreement</span>
        &nbsp; &nbsp; &nbsp;
        <span className="pointer" onClick={vehicleInvoice}>
          Invoices
        </span>
      </div>
    </div>
  );
};
