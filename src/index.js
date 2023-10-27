import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ScrollToTop from "./Components/ScrollToTop";

// import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";

import store, { persistor } from "./Redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { PersistGate } from "redux-persist/lib/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ScrollToTop>
          <div className="d-flex flex-column min-vh-100">
            <App />
          </div>
          <ToastContainer />
        </ScrollToTop>
      </PersistGate>
    </Provider>
  </Router>
);
