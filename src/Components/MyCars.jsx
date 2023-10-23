import React from "react";

const MyCars = () => {
  <div className="vc-container">
    <div className="invoice-page">
      <div className="invoice-card-heading">
        <h2>My Cars</h2>
      </div>
      {/* <div className="saved-invoices">
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
      </div> */}
    </div>
  </div>;
};

export default MyCars;
