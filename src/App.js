import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
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
import MyCars from "./Components/MyCars";
import { useSelector } from "react-redux";
import Loader from "./Components/Loader/Loader";

import Constant from "./utils/Constant";
import VehicleInvoice from "./Components/Invoicepage/VehicleInvoice";
import PayInvoice from "./Components/Invoicepage/PayInvoice";
import SignAgreement from "./Components/Agreement/SignAgreement";

const App = () => {
  const location = useLocation();
  const isEmployeePanelRendering = location.pathname === "/";
  const isForgetPageRendering = location.pathname === "/forget";

  const loader = useSelector((state) => state.loaderReducer.loader);
  const isAuthenticated = useSelector((state) => state?.authReducer?.user?.token);

  return (
    <>
      {loader && <Loader />}
      <ScrollToTop>
        {isEmployeePanelRendering && <Login />}
        {!isEmployeePanelRendering && !isForgetPageRendering && <Navbar />}
        <Routes>
          <Route path="/Agreement" element={<SignAgreement />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Findacar" element={<Findacar />} />

          <Route path="/My-Cars" element={<MyCars />} />
          <Route path="/Vehicle-Invoice" element={<VehicleInvoice />} />
          <Route path="/Pay-Invoice" element={<PayInvoice />} />

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
              isAuthenticated ? (
                <InvoiceProvider>
                  <InvoicePage />
                </InvoiceProvider>
              ) : (
                <Navigate to="/" replace />
              )
            }
          />

          <Route
            path="/My-Cars"
            element={isAuthenticated ? <MyCars /> : <Navigate to="/" replace />}
          />
        </Routes>
        {!isEmployeePanelRendering && !isForgetPageRendering && <Footer />}
      </ScrollToTop>
    </>
  );
};

export default App;
