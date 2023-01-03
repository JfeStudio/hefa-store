<template lang="">
  <div
    class="flex w-full flex-wrap items-start justify-between rounded-2xl border border-slate-100 p-7 shadow lg:flex-nowrap"
  >
    <div class="flex basis-1/2 items-start gap-6">
      <div>
        <img
          class="h-44 w-52 rounded-md border-2 border-solid border-indidog bg-cover"
          :src="detail.product.image_url"
          alt=""
        />
      </div>
      <!-- detail keterangan -->
      <div class="relative flex basis-1/3 flex-col gap-y-4 lg:basis-1/2">
        <div class="rounded-2xl">
          <h1 class="text-base font-medium text-slate-800">
            {{ detail.product.name }}
          </h1>
          <span
            class="absolute -top-4 -right-6 rounded-md bg-amber-300 py-1 px-3 text-[.65rem] font-semibold uppercase text-slate-800"
          >
            {{ detail.product.status }}
          </span>
          <span class="my-1 block text-slate-800"
            >Rp {{ detail.product.base_price }}</span
          >
          <p>{{ detail.product.location }}</p>
          <p
            class="text-sm text-slate-500"
            v-for="item in detail.product.Categories"
            :key="item.id"
          >
            {{ item.name }}
          </p>
          <div class="mt-4 flex items-center gap-2">
            <!-- Button trigger modal -->
            <button
              type="button"
              class="inline-block rounded border-2 border-indidog bg-indidog px-6 py-2 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:opacity-95 hover:shadow-lg focus:bg-opacity-90 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-opacity-95 active:shadow-lg"
            >
              Action
            </button>
            <button
              @click="deleteSellerProduct(id)"
              type="submit"
              class="inline-block rounded border-2 border-indidog bg-transparent px-6 py-2 text-xs font-medium uppercase leading-tight text-indidog shadow-md transition duration-150 ease-in-out hover:bg-indidog hover:text-white hover:opacity-95 hover:shadow-lg focus:bg-opacity-90 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-opacity-95 active:shadow-lg"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- description -->
    <div class="basis-5/12 rounded-2xl">
      <h4 class="text-base font-medium">Deskripsi</h4>
      <p
        class="my-3 text-sm font-light text-gray-500 dark:text-gray-400 md:text-sm"
      >
        Deliver great service experiences fast - without the complexity of
        traditional ITSM solutions.Accelerate critical developmen.
      </p>
      <p class="text-sm font-light text-gray-500 dark:text-gray-400">
        Track work across the enterprise through an open, collaborative
        platform. Link issues across Jira changes.
      </p>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { reactive, onMounted } from "vue";
import { instance } from "../../plugin/Api.js";
import { useRoute, useRouter } from "vue-router";
// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const router = useRouter();
const detail = reactive({
  product: [],
});
const idDetailItem = useRoute().params.id;
const getDetailSellerProduct = async () => {
  await instance.get("/seller/product/" + idDetailItem).then((res) => {
    detail.product = res.data;
    console.log(res.data);
  });
};
// const
const deleteSellerProduct = async () => {
  await instance.delete("/seller/product/" + idDetailItem).then(() => {
    router.push("/daftar-semua-produk");
    console.log(res.data);
  });
};

onMounted(() => {
  getDetailSellerProduct();
});
</script>
<style lang=""></style>
