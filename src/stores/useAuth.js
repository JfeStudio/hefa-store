import { defineStore } from "pinia";
// import { useRouter } from "vue-router";
import router from "../router";
import { instance } from "../plugin/Api";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    userData: JSON.parse(localStorage.getItem("userData")) || {},
  }),
  getters: {},
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
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
// onMounted() =
// Computed() =
// watchEffect() =
