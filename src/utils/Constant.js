const { default: store } = require("../Redux/store");

const { showLoaderReducer, hideLoaderReducer } = require("../Redux/Reducers/loaderSlice");

const showLoader = () => {
  //    showLoader
  store.dispatch(showLoaderReducer(true));
};

const hideLoader = () => {
  // hideLoader
  store.dispatch(hideLoaderReducer(false));
};

const reduxData = () => {
  let info = store.getState((data) => {
    return data;
  });
  return info;
};

module.exports = {
  baseUrl: "https://vertex-new.qwpcorp.com/vertex_backend_new/public/api",
  showLoader: () => showLoader(),
  hideLoader: () => hideLoader(),
  reduxData: () => reduxData(),
};
