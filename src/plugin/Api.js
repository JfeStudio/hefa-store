import axios from "axios";
import { useAuthStore } from "../stores";
const instance = axios.create({
  baseURL: "https://market-final-project.herokuapp.com",
});
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

export {
  getProduct,
  getCategory,
  instance,
  getSeller,
  getDetailProduct,
  getSellerCategory,
};
