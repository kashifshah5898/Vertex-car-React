import React, { useState, useEffect } from "react";

import "./invoicepage.css";
import { toast } from "react-toastify";
import { getAllInvoicesAPI } from "../../Api/Service";
import { VEH_IMAGE_URL } from "../../Api/constants";

function Invoicepage() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getAllInvoices();
  }, []);

  const getAllInvoices = async () => {
    try {
      const response = await getAllInvoicesAPI();

      if (response.status === "1") {
        setInvoices(response.data);
      } else {
        toast.error(response.error);
      }
    } catch (error) {
      toast.error(error.msg || error.message || "Something went wrong");
    }
  };

  const Card = ({ data, index }) => {
    const { veh_images, veh_name, model, inv_id, inv_amount, status, paid_amount, due_date } = data;
    const statusColor = status === "pending" ? "text-red" : "text-green";
    return (
      <div className="card width-22">
        <img src={VEH_IMAGE_URL + veh_images[0]} className="card-img-top" alt="image_not_found" />
        <div className="card-body">
          <h5 className="card-title">
            {veh_name} &nbsp;
            <span className="fs-md">
              (<span className="text-green ">{model}</span>)
            </span>
          </h5>

          <ul>
            <div className="row card-text card-font">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <li>Inv ID : {inv_id}</li>
                <li className={statusColor}>Status : {status}</li>
                <li>Due Date : {due_date.split(" ")[0]}</li>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <li>Inv amount : {inv_amount}</li>
                <li>Paid amount : {paid_amount} </li>
                <li>Payable amount : {inv_amount - paid_amount} </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="container p-4">
      <div className="invoice-card-heading">
        <h2>Your Invoices</h2>
      </div>
      <div className="saved-invoices">
        {invoices.length === 0 ? (
          <div className="no-invoices-message">Nothing to show</div>
        ) : (
          invoices.map((invoice, index) => <Card data={invoice} key={index} />)
        )}
      </div>
    </div>
  );
}

export default Invoicepage;
