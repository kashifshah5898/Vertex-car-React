import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getVehicleInvoiceAPI } from "../../Api/Service";
import { toast } from "react-toastify";
import { VEH_IMAGE_URL } from "../../Api/constants";

const VehicleInvoice = () => {
  const location = useLocation();
  const { veh_id } = location.state;
  const [invoice, setInvoices] = useState({});
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    getVehicleInvoice();
  }, []);

  const getVehicleInvoice = async () => {
    try {
      const response = await getVehicleInvoiceAPI({ veh_id });

      if (response.status === "1") {
        setInvoices(response);
        setFilteredItems(response.data);
      } else {
        toast.error(response.error);
      }
    } catch (error) {
      toast.error(error.msg || error.message || "Something went wrong");
    }
  };

  const handleStatusChange = (event) => {
    const status = event.target.value;
    setSelectedStatus(status);

    if (status === "All") {
      setFilteredItems(invoice.data);
    } else {
      const filtered = invoice.data.filter((item) => item.status === status);
      setFilteredItems(filtered);
    }
  };

  return (
    <div className="container p-4">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
          <h1>{invoice?.vehicle?.make} Invoices</h1>
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
          <label htmlFor="statusFilter">Select Status :</label> &nbsp;&nbsp;&nbsp;&nbsp;
          <select
            className="col-lg-3"
            id="statusFilter"
            onChange={handleStatusChange}
            value={selectedStatus}
          >
            <option value="All">All</option>
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
          <img
            className="w-100"
            src={VEH_IMAGE_URL + invoice?.vehicle?.images[0]}
            alt="image_not_found"
          />
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
          {filteredItems &&
            filteredItems.map((invoice, index) => <Card data={invoice} key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default VehicleInvoice;

const Card = ({ data, index }) => {
  const { veh_images, veh_name, model, inv_id, inv_amount, status, paid_amount, due_date } = data;
  const statusColor = status === "pending";

  const navigate = useNavigate();

  const routeToPayInvoice = () => {
    navigate("/Pay-Invoice", { state: data });
  };
  return (
    <div className="card mt-2 w-100">
      {/* <img src={VEH_IMAGE_URL + veh_images[0]} className="card-img-top" alt="image_not_found" /> */}
      <div className="card-body">
        <h4 className="card-title">
          {veh_name} &nbsp;
          <span className="fs-md">
            (<span className="text-green ">{model}</span>)
          </span>
        </h4>

        <ul>
          <div className="row card-text card-font-17">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <li>Inv ID : {inv_id}</li>
              <li className={statusColor ? "text-red" : "text-green"}>Status : {status}</li>
              <li>Due Date : {due_date.split(" ")[0]}</li>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <li>Inv amount : {inv_amount}</li>
              <li>Paid amount : {paid_amount} </li>
              <li>Payable amount : {inv_amount - paid_amount} </li>
            </div>
          </div>
        </ul>
        {statusColor && (
          <div className="d-flex mt-2 justify-content-center">
            <button onClick={routeToPayInvoice} className="btn btn-primary col-lg-3">
              Pay Invoice
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
