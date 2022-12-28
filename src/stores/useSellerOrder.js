import { defineStore } from "pinia";
import { instance } from "../plugin/Api";
export const useSellerOrder = defineStore("order", {
  state: () => ({
    dataSellerOrder: [],
  }),
  getters: {
    // doubleCount: (state) => state.count * 2,
  },
  actions: {
    // async postBuyerOrder(harga_tawar, product_id) {
    //   await instance
    //     .post("/buyer/order", {
    //       product_id: product_id,
    //       bid_price: harga_tawar,
    //     })
    //     .then(() => {
    //       alert("gg");
    //     });
    // },
    async getSellerOrder() {
      await instance.get("/seller/order").then((res) => {
        this.dataSellerOrder = res.data;
        // alert("gg");
      });
    },
  },
});
