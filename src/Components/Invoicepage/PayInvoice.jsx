import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getVehicleInvoiceAPI } from "../../Api/Service";
import { toast } from "react-toastify";
import { VEH_IMAGE_URL } from "../../Api/constants";
import { useFormik } from "formik";
import * as Yup from "yup";

const PayInvoice = () => {
  const location = useLocation();
  const { veh_id } = location.state;

  const formik = useFormik({
    initialValues: {
      reciept: "",
      amount: "",
      reference: "",
      comment: "",
    },
    validationSchema: Yup.object({
      reciept: Yup.string().required("Please upload your reciept"),
      amount: Yup.number().min(0, "Please enter a valid amount").required(),
      reference: Yup.string(),
      comment: Yup.string().when("amount", (amount, schema) =>
        amount < 10 ? schema.required() : schema
      ),
    }),
    onSubmit: (values) => {
      console.log({ values });
    },
  });

  const [invoice, setInvoices] = useState({});

  useEffect(() => {
    getVehicleInvoice();
  }, []);

  const getVehicleInvoice = async () => {
    try {
      const response = await getVehicleInvoiceAPI({ veh_id });

      if (response.status === "1") {
        setInvoices(response);
      } else {
        toast.error(response.error);
      }
    } catch (error) {
      toast.error(error.msg || error.message || "Something went wrong");
    }
  };

  return (
    <div className="container p-4">
      <div className="row d-flex justify-content-center align-items-start">
        <h4 className="mb-4">
          {invoice?.vehicle?.veh_name} {invoice?.vehicle?.make}-{invoice?.vehicle?.model}
        </h4>
        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
          <div className="card p-4">
            <h6>Invoice amount : {invoice?.vehicle?.rent}</h6>
            <h6>Inv no : </h6>
            <h6>Due Date : </h6>
          </div>
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
          <div className="card p-4">
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group mt-2 mb-2">
                <label for="reciept">Reciept</label>
                <input
                  className="form-control"
                  id="reciept"
                  name="reciept"
                  type="file"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <small className="form-text text-muted">
                  {formik.touched.reciept && formik.errors.reciept && (
                    <span className="text-red">{formik.errors.reciept}</span>
                  )}
                </small>
              </div>
              <div className="row">
                <div className="col-lg-5 col-sm-12 col-md-12 col-xs-12">
                  <div className="form-group mt-2 mb-2">
                    <label for="amount">Amount</label>
                    <input
                      className="form-control"
                      id="amount"
                      placeholder="Amount you sent"
                      name="amount"
                      value={formik.values.amount}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <small className="form-text text-muted">
                      {formik.touched.amount && formik.errors.amount && (
                        <span className="text-red">{formik.errors.amount}</span>
                      )}
                    </small>
                  </div>
                </div>
                <div className="col-lg-5 col-sm-12 col-md-12 col-xs-12">
                  <div className="form-group mt-2 mb-2">
                    <label for="reference">Reference</label>
                    <input
                      className="form-control"
                      id="reference"
                      placeholder="Enter payment reference"
                      name="reference"
                      value={formik.values.reference}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <small className="form-text text-muted">
                      {formik.touched.reference && formik.errors.reference && (
                        <span className="text-red">{formik.errors.reference}</span>
                      )}
                    </small>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group mt-2 mb-2">
                  <label for="comment">Comment</label>
                  <textarea
                    className="form-control"
                    placeholder="Comments (If any)"
                    name="comment"
                    rows={4}
                    value={formik.values.comment}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                  <small className="form-text text-muted">
                    {formik.touched.comment && formik.errors.comment && (
                      <span className="text-red">{formik.errors.comment}</span>
                    )}
                  </small>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <button type="submit" className="btn btn-primary col-lg-3 mt-4">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayInvoice;

const Card = ({ data, index }) => {
  const { veh_images, veh_name, model, inv_id, inv_amount, status, paid_amount, due_date } = data;
  const statusColor = status === "pending";
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
            <button className="btn btn-primary col-lg-3">Pay Invoice</button>
          </div>
        )}
      </div>
    </div>
  );
};
