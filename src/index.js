import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import ScrollToTop from "./Components/ScrollToTop";

// import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import TableBar from "./Components/TableData/Table";
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
          <App />
          <ToastContainer />
        </ScrollToTop>
      </PersistGate>
    </Provider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
