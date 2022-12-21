import { defineStore } from "pinia";
import { instance } from "../plugin/Api";
export const useBuyerStore = defineStore("buyer", {
  state: () => ({}),
  getters: {
    // doubleCount: (state) => state.count * 2,
  },
  actions: {
    async postBuyerOrder(harga_tawar, product_id) {
      await instance
        .post("/buyer/order", {
          product_id: product_id,
          bid_price: harga_tawar,
        })
        .then(() => {
          alert("gg");
        });
    },
  },
});
