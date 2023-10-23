import React, { useState, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";

import "./invoicepage.css";

function Invoicepage() {
  const location = useLocation();
  const mydata = location.state;
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [editIndex, setEditIndex] = useState(null); // Keep track of the edited invoice index
  const [editedCompany, setEditedCompany] = useState(""); // Keep track of the edited company name

  useEffect(() => {
    const savedInvoices = JSON.parse(localStorage.getItem("savedInvoices")) || [];
    setInvoices(savedInvoices);
  }, []);

  useEffect(() => {
    localStorage.setItem("savedInvoices", JSON.stringify(invoices));
  }, [invoices]);

  const handleSaveInvoice = () => {
    if (mydata && !invoices.some((savedInvoice) => savedInvoice.type === mydata.company)) {
      setInvoices([...invoices, mydata]);
      Swal.fire({
        icon: "success",
        title: "Successfully Saved!",
        text: "Your Invoice was Saved!",
        showConfirmButton: false,
        timer: 3000,
      }).then(() => {
        navigate("/invoice-details");
      });
    }
  };

  const handleEditCompany = (index, company) => {
    setEditIndex(index);
    setEditedCompany(company);
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditedCompany("");
  };

  const handleSaveEditedCompany = (index) => {
    const updatedInvoices = [...invoices];
    updatedInvoices[index].company = editedCompany;
    setInvoices(updatedInvoices);
    setEditIndex(null);
    setEditedCompany("");
  };

  return (
    <div className="vc-container">
      <div className="invoice-page">
        {mydata && (
          <div className="invoice-card-des">
            {/* Display the current invoice */}
            <div className="invoice-card-img">
              <img src={mydata.img} alt="" />
            </div>
            <div className="invoice-card-main">
              <div className="invoicecard-type">{mydata.type}</div>
              <div className="invoicecard-company">{mydata.company}</div>
              <div className="invoice-card-capacity">{mydata.capacity}</div>
              <div className="invoicecard-price">{mydata.price}</div>
              <button
                onClick={handleSaveInvoice}
                className={`Saveinvoice ${
                  invoices.some((savedInvoice) => savedInvoice.type === mydata.company)
                    ? "disabled"
                    : ""
                }`}
                disabled={invoices.some((savedInvoice) => savedInvoice.type === mydata.company)}
              >
                {invoices.some((savedInvoice) => savedInvoice.type === mydata.company)
                  ? "Invoice Saved"
                  : "Save Invoice"}
              </button>
            </div>
          </div>
        )}

        <div className="invoice-card-heading">
          <h2>Your Invoices</h2>
        </div>
        <div className="saved-invoices">
          {invoices.length === 0 ? (
            <div className="no-invoices-message">Nothing to show</div>
          ) : (
            invoices.map((invoice, index) => (
              <div
                key={index}
                className="saved-invoice"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="invoice-cardsaved-img">
                  <img src={invoice.img} alt="" />
                </div>
                <div className="invoice-cardsaved-main">
                  <div className="invoicecard-type">{invoice.type}</div>
                  <div className="invoicecard-company">{invoice.company}</div>
                  <div className="invoice-card-capacity">{invoice.capacity}</div>
                  <div className="invoicecard-price">{invoice.price}</div>
                  {editIndex === index ? (
                    <div className="change-input-field">
                      <div className="invoices-change-field">
                        <input
                          type="text"
                          value={editedCompany}
                          onChange={(e) => setEditedCompany(e.target.value)}
                        />
                      </div>
                      <div className="cancel-save-btn">
                        <button onClick={() => handleSaveEditedCompany(index)} className="Save-btn">
                          Save
                        </button>
                        <button onClick={handleCancelEdit} className="cancel-btn">
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="company-actions">
                      {hoveredIndex === index && (
                        <>
                          <div className="edit-invoice-button">
                            <button onClick={() => handleEditCompany(index, invoice.company)}>
                              <EditOutlined />
                            </button>
                          </div>
                          <div className="delete-invoice-button">
                            <button
                              onClick={() => {
                                const newInvoices = invoices.filter((_, i) => i !== index);
                                setInvoices(newInvoices);
                              }}
                            >
                              <DeleteOutlined />
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Invoicepage;
