import axios from "axios";
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

export { getProduct, getCategory };
