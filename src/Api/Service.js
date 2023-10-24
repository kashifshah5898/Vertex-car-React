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

export const deleteStudentApi = (id) => {
  return deleteApi(`deleteStudent?id=${id}`);
};

export { loginAPI, getAllVehiclesAPI, bookingRequestAPI, getAllInvoicesAPI };
