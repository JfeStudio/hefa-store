<template lang="">
  <section class="gradient-form bg-gray-200">
    <div class="container mx-auto">
      <div
        class="flex h-screen flex-wrap items-center justify-center text-gray-800 lg:h-auto"
      >
        <div class="w-full md:w-3/4 lg:w-11/12 lg:scale-90">
          <div class="block overflow-hidden rounded-lg bg-white shadow-lg">
            <div class="lg:flex lg:h-screen">
              <div class="basis:w-6/12 px-6 py-8 md:px-6 md:py-9 lg:basis-1/2">
                <div class="md:mx-6">
                  <div class="text-center">
                    <img
                      class="mx-auto w-10"
                      src="/images/logo.png"
                      alt="logo"
                    />
                    <h4 class="mt-3 mb-8 pb-1 text-lg font-semibold lg:text-xl">
                      Hefa Store
                    </h4>
                  </div>
                  <form @submit.prevent="doRegister">
                    <h3
                      class="mb-4 text-xl font-bold text-slate-800 lg:text-lg"
                    >
                      Daftar
                    </h3>
                    <div class="mb-4">
                      <label
                        for="form-username"
                        class="form-label mb-2 inline-block text-base font-normal text-gray-800 lg:text-sm"
                        >Nama</label
                      >
                      <input
                        type="text"
                        class="form-control m-0 block w-full rounded-xl border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 text-base font-normal text-gray-700 transition ease-in-out placeholder:text-sm focus:border-indidog focus:bg-white focus:text-gray-700 focus:outline-none lg:placeholder:text-xs"
                        id="form-username"
                        placeholder="Nama Lengkap"
                        v-model="formDaftar.full_name"
                      />
                    </div>
                    <div class="mb-4">
                      <label
                        for="form-email"
                        class="form-label mb-2 inline-block text-base font-normal text-gray-800 lg:text-sm"
                        >Email</label
                      >
                      <input
                        type="email"
                        class="form-control m-0 block w-full rounded-xl border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 text-base font-normal text-gray-700 transition ease-in-out placeholder:text-sm focus:border-indidog focus:bg-white focus:text-gray-700 focus:outline-none lg:placeholder:text-xs"
                        id="form-email"
                        placeholder="Hefa_store@gmail.com"
                        v-model="formDaftar.email"
                      />
                    </div>
                    <div class="mb-4">
                      <label
                        for="form-password"
                        class="form-label mb-2 inline-block text-gray-700 lg:text-sm"
                        >Password</label
                      >
                      <input
                        type="password"
                        class="form-control m-0 block w-full rounded-xl border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 text-base font-normal text-gray-700 transition ease-in-out placeholder:text-sm focus:border-indidog focus:bg-white focus:text-gray-700 focus:outline-none lg:placeholder:text-xs"
                        id="form-password"
                        placeholder="Min 8 character"
                        v-model="formDaftar.password"
                      />
                    </div>
                    <div class="mb-3 pt-1 pb-1 text-center lg:mb-2">
                      <button
                        type="submit"
                        class="mb-3 inline-block w-full rounded-xl bg-indidog px-6 py-3 text-sm font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:opacity-95 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg lg:mb-4"
                      >
                        Daftar
                      </button>
                      <!-- <a
                        class="text-sm text-gray-800 lg:text-[.85rem]"
                        href="#!"
                        >Lupa password?</a
                      > -->
                    </div>
                    <div
                      class="flex items-center justify-center gap-x-2 text-sm lg:text-[.85rem]"
                    >
                      <p class="font-normal text-slate-800">
                        Sudah punya akun?
                      </p>
                      <RouterLink
                        :to="{ name: 'Login' }"
                        class="cursor-pointer font-bold text-indidog underline hover:no-underline"
                        >Masuk di sini</RouterLink
                      >
                    </div>
                  </form>
                </div>
              </div>
              <div class="relative hidden lg:order-first lg:flex lg:basis-1/2">
                <div class="gradient-auth absolute inset-0"></div>
                <h3
                  class="absolute left-11 top-1/2 w-32 -translate-y-1/2 text-3xl font-extrabold leading-none text-white"
                >
                  Second Hand
                </h3>
                <img class="w-full" src="/images/auth-hero.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { RouterLink, useRouter } from "vue-router";
import { reactive } from "vue";
import { useAuthStore } from "../../stores";
// import {} from '../'
const router = useRouter();
const formDaftar = reactive({
  full_name: "",
  email: "",
  password: "",
});
const doRegister = () => {
  const data = {
    full_name: formDaftar.full_name,
    email: formDaftar.email,
    password: formDaftar.password,
  };
  useAuthStore().register(data);
};
</script>
<style lang=""></style>
