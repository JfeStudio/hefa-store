import axios from "axios";
const instance = axios.create({
  baseURL: "https://market-final-project.herokuapp.com",
});
// Api Product
const getProduct = async () =>
  await instance.get("/buyer/product?page=15&per_page=10");

export { getProduct };
