import { deleteApi, getApi, postApi, putApi } from "./axiosService";
import { routes } from "./routes";

const loginAPI = (data) => {
  return postApi(routes.login, data);
};

const getAllVehiclesAPI = () => {
  return postApi(routes.getVehicles);
};

const bookingRequestAPI = (data) => {
  return postApi(routes.bookingRequest, data);
};

const getAllInvoicesAPI = (data) => {
  return postApi(routes.getInvoices, data);
};

const getMyCarsAPI = (data) => {
  return postApi(routes.getMyCars, data);
};

const getVehicleInvoiceAPI = (data) => {
  return postApi(routes.getVehInvoices, data);
};

const payInvoiceAPI = (values) => {
  return postApi(routes.payInvoice, values);
};

const signAgreementAPI = (values) => {
  return postApi(routes.signAgreement, values);
};

const getAgreementDataAPI = (values) => {
  return postApi(routes.getAgreementData, values);
};

export {
  loginAPI,
  getAllVehiclesAPI,
  bookingRequestAPI,
  getAllInvoicesAPI,
  getMyCarsAPI,
  getVehicleInvoiceAPI,
  payInvoiceAPI,
  getAgreementDataAPI,
  signAgreementAPI,
};
