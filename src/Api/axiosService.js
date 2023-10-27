import axios from "axios";
import { baseUrl, hideLoader, showLoader } from "../utils/Constant";
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
    console.log(config.data);
    let data;
    if (config.url === "/pay_invoice") {
      config.headers["Content-Type"] = "multipart/form-data";
      data = new FormData();
      data.append("token", config.data.token);
      data.append("inv_id", config.data.inv_id);
      data.append("inv_amount", config.data.inv_amount);
      data.append("comments", config.data.comments);
      data.append("reference", config.data.reference);
      data.append("attachement", config.data.attachment);
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
