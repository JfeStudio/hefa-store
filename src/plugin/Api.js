import axios from "axios";
import { useAuthStore } from "../stores";
const instance = axios.create({
  baseURL: "https://market-final-project.herokuapp.com",
});
instance.interceptors.request.use(
  // kondisi ok
  (config) => {
    config.headers.access_token = useAuthStore().getToken;
    return config;
  },
  // kondisi error
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  // rersponse ok
  (response) => {
    return response;
  },
  (error) => {
    switch (error.response.status) {
      case 403:
        useAuthStore().doLogout();
        break;
      default:
        alert(error.response.data.message || "Something went wrong");
        break;
    }
    return Promise.reject(error);
  }
);

// Api Product
const getProduct = async (params) =>
  //   await instance.get("/buyer/product?page=15&per_page=10");
  await instance.get("/buyer/product", { params: params });

// Api Category
const getCategory = async () =>
  //   await instance.get("/buyer/product?page=15&per_page=10");
  await instance.get("/seller/category");

//  Api seller product
const getSeller = async () =>
  await instance.get("/seller/product", {
    headers: {
      access_token: useAuthStore().getToken,
    },
  });
//  get detail product home
const getDetailProduct = async (idDetailItem) =>
  await instance.get("/buyer/product" + idDetailItem);
//  get product seller category
const getSellerCategory = async () => await instance.get("/seller/category");
// get detail seller product
// const getDetailSellerProduct = async (idDetailSeller) =>
//   await instance.get("/seller/product" + idDetailSeller);
const getEdit = async () => await instance.put("/auth/user");
// const deleteSellerProduct =
export {
  getProduct,
  getCategory,
  instance,
  getSeller,
  getDetailProduct,
  getSellerCategory,
  getEdit,
  //   getDetailSellerProduct,
};
