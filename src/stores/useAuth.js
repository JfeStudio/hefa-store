import { defineStore } from "pinia";
// import { useRouter } from "vue-router";
import router from "../router";
import { instance } from "../plugin/Api";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    userData: JSON.parse(localStorage.getItem("userData")) || null,
    product: "",
  }),
  getters: {
    getToken() {
      return this.userData?.access_token;
    },
  },
  actions: {
    async register(payload) {
      await instance
        .post("/auth/register", payload)
        .then(() => {
          //   router.push("/login");
          //   console.log(res);
          instance
            .post("/auth/login", {
              email: payload.email,
              password: payload.password,
            })
            .then((res) => {
              localStorage.setItem("userData", JSON.stringify(res.data));
              this.userData = res.data;
              router.push("/");
            });
          router.push("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // login
    async postUser(getLogin) {
      await instance
        .post("/auth/login", getLogin)
        .then((res) => {
          localStorage.setItem("userData", JSON.stringify(res.data));
          this.userData = res.data;
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // post input
    async postSellerProduct(tambah) {
      await instance
        .post("/seller/product", tambah)
        .then(() => {
          router.push("/daftar-semua-produk");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // post input eidt
    async postAuthEdit(edit) {
      await instance
        .put("/auth/user", edit)
        .then(() => {
          router.push("/daftar-semua-produk");
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // get all product
    doLogout() {
      this.userData = null;
      localStorage.removeItem("userData");
      router.push("/");
    },
  },
});
// onMounted() =
// Computed() =
// watchEffect() =
