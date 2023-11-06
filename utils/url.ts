const localDev = "http://localhost:8000/api/";
const modalDev = "https://amanmibra--rawnet-api-api-dev.modal.run/api/";
const modalProd = "https://amanmibra--rawnet-api-api.modal.run/api/";

const apiURLPrefix =
  process.env.NODE_ENV == "development"
    ? process.env.MODAL_DEV
      ? modalDev
      : localDev
    : modalProd;

export default apiURLPrefix;
