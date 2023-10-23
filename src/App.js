import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Findacar from "./Components/Findacar";
import Contactus from "./Components/Contactus";
import Cardetails from "./Components/Cardetails.jsx";
import ScrollToTop from "./Components/ScrollToTop";
import Login from "./Components/Loginform/Login";
import Forget from "./Components/Loginform/Forget";
import Invoices from "./Components/Invoiceform/Invoiceform.jsx";
import InvoicePage from "./Components/Invoicepage/invoicepage";
import { InvoiceProvider } from "./Components/Invoicepage/InvoiceContext";
const App = () => {
  const location = useLocation();
  const isEmployeePanelRendering = location.pathname === "/";
  const isForgetPageRendering = location.pathname === "/forget";

  return (
    <>
      <ScrollToTop>
        {isEmployeePanelRendering && <Login />}
        {!isEmployeePanelRendering && !isForgetPageRendering && <Navbar />}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Findacar" element={<Findacar />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/forget" element={<Forget />} />
          <Route
            path="/car/:img/:type/:company/:fuel/:capacity/:transmition/:price"
            element={<Cardetails />}
          />
          <Route path="/invoice" element={<Invoices />} />
          <Route
            path="/invoice-details"
            element={
              <InvoiceProvider>
                <InvoicePage />
              </InvoiceProvider>
            }
          />
        </Routes>
        {!isEmployeePanelRendering && !isForgetPageRendering && <Footer />}
      </ScrollToTop>
    </>
  );
};

export default App;
