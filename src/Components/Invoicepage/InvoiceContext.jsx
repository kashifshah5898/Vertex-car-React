// InvoiceContext.js
import React, { createContext, useContext, useState } from "react";

const InvoiceContext = createContext();

export const useInvoiceContext = () => useContext(InvoiceContext);

export function InvoiceProvider({ children }) {
  const [invoices, setInvoices] = useState([]);

  const addInvoice = (invoiceData) => {
    setInvoices([...invoices, invoiceData]);
  };

  return (
    <InvoiceContext.Provider value={{ invoices, addInvoice }}>
      {children}
    </InvoiceContext.Provider>
  );
}
