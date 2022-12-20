<template>
  <div class="container mx-auto py-24">
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
        <form @submit.prevent="onPostProduct">
          <div class="form-group mb-4">
            <label
              for="nameProduct"
              class="form-label mb-2 inline-block text-sm text-gray-700"
              >Nama Produk</label
            >
            <input
              v-model="data.form.nameProduct"
              type="text"
              class="form-control m-0 block w-full rounded-lg border border-solid border-gray-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out placeholder:text-sm focus:border-indidog focus:bg-transparent focus:text-gray-700 focus:outline-none"
              id="nameProduct"
              placeholder="Nama Produk"
            />
          </div>
          <div class="form-group mb-4">
            <label
              for="hargaProduk"
              class="form-label mb-2 inline-block text-sm text-gray-700"
              >Harga Produk</label
            >
            <input
              v-model="data.form.priceProduct"
              type="text"
              class="form-control m-0 block w-full rounded-lg border border-solid border-gray-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out placeholder:text-sm focus:border-indidog focus:bg-transparent focus:text-gray-700 focus:outline-none"
              id="hargaProduk"
              placeholder="Rp 0,00"
            />
          </div>
          <div class="mb-4">
            <label
              for="nameCategory"
              class="form-label mb-2 inline-block text-sm text-gray-700"
              >Kategori</label
            >
            <div class="flex justify-center">
              <div class="w-full">
                <select
                  Multiple
                  v-model="data.form.categoryProduct"
                  class="form-select m-0 block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-transparent bg-clip-padding bg-no-repeat px-3 py-2 text-sm font-normal text-gray-700 transition ease-in-out placeholder:text-gray-700 focus:border-indidog focus:bg-transparent focus:text-gray-700 focus:outline-none"
                  aria-label="Default select example"
                >
                  <option selected disabled>Pilih Kategori</option>
                  <option
                    v-for="item in products.category"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-group mb-4">
            <label
              for="location"
              class="form-label mb-2 inline-block text-sm text-gray-700"
              >Location</label
            >
            <input
              v-model="data.form.locationProduct"
              type="text"
              class="form-control m-0 block w-full rounded-lg border border-solid border-gray-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out placeholder:text-sm focus:border-indidog focus:bg-transparent focus:text-gray-700 focus:outline-none"
              id="location"
              placeholder="Location"
            />
          </div>
          <div class="form-group mb-4">
            <label
              for="description"
              class="form-label mb-2 inline-block text-sm text-gray-700"
              >Description</label
            >
            <textarea
              v-model="data.form.descriptionProduct"
              class="form-control m-0 block w-full rounded-lg border border-solid border-gray-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out placeholder:text-sm focus:border-indidog focus:bg-transparent focus:text-gray-700 focus:outline-none"
              id="description"
              rows="3"
              placeholder="Tulis Pesan Lu Cokkk!"
            ></textarea>
          </div>
          <div class="mb-6">
            <div v-if="data.form.imageProduct">
              <img :src="data.form.previewProduct" alt="" />
              <button @click="data.form.imageProduct = null" type="submit">
                X
              </button>
            </div>
            <div v-else class="relative flex h-20 w-20 border-2 border-dashed">
              <input
                @input="setFile"
                class="absolute inset-0 cursor-pointer opacity-0"
                type="file"
              />
              <i class="bx bx-plus m-auto text-2xl text-gray-400"></i>
            </div>
          </div>
          <div class="flex gap-4">
            <button
              @click=""
              type="submit"
              class="w-full rounded-lg border border-indidog bg-transparent px-6 py-3 text-xs font-medium uppercase leading-tight text-indidog shadow-md transition duration-150 ease-in-out hover:bg-indidog hover:text-white hover:shadow-lg focus:bg-indidog focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indidog active:shadow-lg"
            >
              Preview
            </button>
            <button
              type="submit"
              class="hover:bg--700 w-full rounded-lg border border-indidog bg-indidog px-6 py-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:border-indidog hover:bg-transparent hover:text-gray-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
            >
              Terbitkan
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { reactive, onMounted } from "vue";
import { getSellerCategory } from "../plugin/Api.js";
import { useAuthStore } from "../stores";
// import * as Yup from "yup";
// import { Form, Field, ErrorMessage } from "vee-validate";
// error validation
// const schema = Yup.object().shape({
//   email: Yup.string().required("Email salah").typeError("Email tidak valid"),
//   password: Yup.string().required("password salah").typeError("password salah"),
// });

const products = reactive({
  category: [],
});
const data = reactive({
  form: {
    nameProduct: "",
    descriptionProduct: "",
    priceProduct: null,
    categoryProduct: [],
    locationProduct: "",
    imageProduct: "",
    previewProduct: null,
  },
});
const onPostProduct = () => {
  const formData = new FormData();
  formData.append("name", data.form.nameProduct);
  formData.append("description", data.form.descriptionProduct);
  formData.append("base_price", data.form.priceProduct);
  formData.append("category_ids", data.form.categoryProduct);
  formData.append("location", data.form.locationProduct);
  formData.append("image", data.form.imageProduct);
  useAuthStore().postSellerProduct(formData);
};
const setFile = (e) => {
  data.form.imageProduct = e.target.files[0];
  data.form.previewProduct = URL.createObjectURL(data.form.imageProduct);
};
const onGetCategory = async () => {
  getSellerCategory().then(({ data }) => {
    products.category = data;
  });
};
onMounted(() => {
  onGetCategory();
});
</script>
<style lang=""></style>
