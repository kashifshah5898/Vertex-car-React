import axios from "axios";
import { baseUrl, hideLoader, showLoader } from "../utils/Constant";
import { routes } from "./routes";
const { default: store } = require("../Redux/store");

const axiosService = axios.create({
  baseURL: baseUrl,
});

axiosService.interceptors.request.use(
  (config) => {
    showLoader();
    let token = store.getState((data) => {
      return data;
    });

    token = token.authReducer.user.token;

    let data;
    let formData = [routes.payInvoice, routes.signAgreement];
    if (formData.includes(config.url)) {
      config.headers["Content-Type"] = "multipart/form-data";
      data = new FormData();
      data.append("token", token);
      for (let key in config.data) {
        data.append(key, config.data[key]);
      }
    } else {
      data = { ...config.data, token: token };
    }
    config.data = data;
    // For Authorization
    config.headers = token ? { "x-sh-auth": token } : null;

    return config;
  },
  (error) => {
    hideLoader();
    return Promise.reject(error);
  }
);

axiosService.interceptors.response.use(
  (response) => {
    hideLoader();
    return response;
  },
  (error) => {
    hideLoader();
    return Promise.reject(error);
  }
);

export const getApi = async (endpoint) => {
  try {
    const response = await axiosService.get(endpoint);

    return response.data;
  } catch (error) {
    return (
      error?.response?.data || {
        status: "0",
        error: error?.message,
      }
    );
  }
};

export const postApi = async (endpoint, data) => {
  try {
    const response = await axiosService.post(endpoint, data);
    return response.data;
  } catch (error) {
    return (
      error?.response?.data || {
        status: "0",
        error: error?.message,
      }
    );
  }
};

export const putApi = async (endpoint, data) => {
  try {
    const response = await axiosService.put(endpoint, data);

    return response.data;
  } catch (error) {
    return (
      error?.response?.data || {
        status: "0",
        error: error?.message,
      }
    );
  }
};

export const deleteApi = async (endpoint) => {
  try {
    const response = await axiosService.delete(endpoint);

    return response.data;
  } catch (error) {
    return (
      error?.response?.data || {
        status: "0",
        error: error?.message,
      }
    );
  }
};
