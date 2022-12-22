<template>
  <div class="container mx-auto py-28">
    <div class="relative">
      <RouterLink
        :to="{ name: 'Daftar Produk Seller' }"
        class="absolute left-64"
      >
        <i
          class="bx bx-left-arrow-alt text-2xl transition-all hover:-translate-x-1"
        ></i>
      </RouterLink>
      <div class="mx-auto block max-w-md rounded-lg bg-transparent">
        <form @submit.prevent="addAccount">
          <div class="relative mx-auto mb-6 max-w-max">
            <div v-if="account.image">
              <img
                class="h-40 w-40 rounded-full"
                :src="account.image_url"
                alt=""
              />
              <button
                class="absolute -top-3 -right-3 h-7 w-7 rounded-full border bg-red-600 text-sm font-semibold text-slate-50 transition-all hover:bg-red-700"
                @click="
                  account.image = null;
                  account.image_url = null;
                "
                type="submit"
              >
                X
              </button>
            </div>
            <div v-else class="relative flex h-20 w-20 border-2 border-dashed">
              <input
                @change="setFile"
                class="absolute inset-0 cursor-pointer opacity-0"
                type="file"
              />
              <i class="bx bx-plus m-auto text-2xl text-gray-400"></i>
            </div>
          </div>
          <div class="form-group mb-4">
            <label
              for="nameProduct"
              class="form-label mb-2 inline-block text-sm text-gray-700"
              >Nama</label
            >
            <input
              v-model="account.full_name"
              type="text"
              class="form-control m-0 block w-full rounded-lg border border-solid border-gray-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out placeholder:text-sm focus:border-indidog focus:bg-transparent focus:text-gray-700 focus:outline-none"
              id="nameProduct"
              placeholder="Nama"
            />
          </div>
          <div class="form-group mb-4">
            <label
              for="nameProduct"
              class="form-label mb-2 inline-block text-sm text-gray-700"
              >Email</label
            >
            <input
              v-model="account.email"
              type="email"
              class="form-control m-0 block w-full rounded-lg border border-solid border-gray-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out placeholder:text-sm focus:border-indidog focus:bg-transparent focus:text-gray-700 focus:outline-none"
              id="nameProduct"
              placeholder="Nama"
            />
          </div>
          <!--  -->
          <div class="mb-4">
            <label
              for="nameCategory"
              class="form-label mb-2 inline-block text-sm text-gray-700"
              >Kota</label
            >
            <div class="flex justify-center">
              <div class="w-full">
                <select
                  v-model="account.city"
                  class="form-select m-0 block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-transparent bg-clip-padding bg-no-repeat px-3 py-2 text-sm font-normal text-gray-700 transition ease-in-out placeholder:text-gray-700 focus:border-indidog focus:bg-transparent focus:text-gray-700 focus:outline-none"
                  aria-label="Default select example"
                >
                  <option disabled value="">Pilih Kota</option>
                  <option value="Surabaya">Surabaya</option>
                  <option value="Probolinggo">Probolinggo</option>
                  <option value="Jakarta">Jakarta</option>
                  <option value="Bali">Bali</option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-group mb-4">
            <label
              for="address"
              class="form-label mb-2 inline-block text-sm text-gray-700"
              >Alamat</label
            >
            <input
              v-model="account.address"
              type="text"
              class="form-control m-0 block w-full rounded-lg border border-solid border-gray-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out placeholder:text-sm focus:border-indidog focus:bg-transparent focus:text-gray-700 focus:outline-none"
              id="address"
              placeholder="Alamat lu"
            />
          </div>
          <div class="form-group mb-4">
            <label
              for="nohp"
              class="form-label mb-2 inline-block text-sm text-gray-700"
              >No Handphone</label
            >
            <input
              v-model="account.phone_number"
              type="number"
              class="form-control m-0 block w-full rounded-lg border border-solid border-gray-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out placeholder:text-sm focus:border-indidog focus:bg-transparent focus:text-gray-700 focus:outline-none"
              id="nohp"
              placeholder="+08666699999"
            />
          </div>
          <button
            type="submit"
            class="hover:bg--700 w-full rounded-lg border border-indidog bg-indidog px-6 py-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:border-indidog hover:bg-transparent hover:text-gray-700 hover:shadow-lg focus:opacity-95 focus:shadow-lg focus:outline-none focus:ring-0 active:opacity-95 active:shadow-lg"
          >
            Simpan
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { reactive, onMounted } from "vue";
import { useAuthStore } from "../../stores";
import { getEdit } from "../../plugin/Api.js";
const account = reactive({
  full_name: "",
  email: "",
  phone_number: null,
  address: "",
  image: null,
  image_url: null,
  city: "",
});
// get edit account
const getEditAccount = async () => {
  getEdit().then((res) => {
    account.full_name = res.data.full_name;
    account.email = res.data.email;
    account.phone_number = res.data.phone_number;
    account.address = res.data.address;
    account.image = res.data.image_url;
    account.image_url = res.data.image_url;
    account.city = res.data.city;
  });
};
const addAccount = () => {
  const formEdit = new FormData();
  formEdit.append("full_name", account.full_name);
  formEdit.append("email", account.email);
  formEdit.append("phone_number", account.phone_number);
  formEdit.append("address", account.address);
  formEdit.append("image", account.image);
  formEdit.append("city", account.city);
  useAuthStore().postAuthEdit(formEdit);
};
const setFile = (e) => {
  let files = e.target.files || e.dataTransfer.files;
  if (!files.length) return;
  account.image = files[0];
  account.image_url = URL.createObjectURL(files[0]);
};
// const onGetCategory = async () => {
//   getSellerCategory().then(({ data }) => {
//     products.category = data;
//   });
// };
onMounted(() => {
  getEditAccount();
});
</script>
<style lang=""></style>
