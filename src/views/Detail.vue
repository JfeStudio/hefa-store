<template lang="">
  <div class="container mx-auto pt-24">
    <div class="flex flex-wrap items-start justify-center gap-x-5">
      <!-- swiper -->
      <swiper
        :cssMode="true"
        :navigation="true"
        :pagination="true"
        :mousewheel="true"
        :keyboard="true"
        :modules="modules"
        class="basis-1/2"
      >
        <SwiperSlide>
          <img :src="detail.product.image_url" alt="" />
        </SwiperSlide>

        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
        <!-- <div class="arrow-next">
        <div class="swiper-button-prev">
          <i class="bx bx-arrow-back icons"></i>
        </div>
        <div class="swiper-button-next">
          <i class="bx bx-arrow-back icons"></i>
        </div>
      </div> -->
        <!-- description -->
      </swiper>
      <!-- detail keterangan -->
      <div class="flex basis-[25%] flex-col gap-y-4">
        <div class="rounded-2xl border border-slate-100 px-4 pt-3 pb-4 shadow">
          <h1 class="text-base font-medium text-slate-800">
            {{ detail.product.name }}
          </h1>
          <p class="mt-1 mb-2 text-sm text-gray-400">Aksesoris</p>
          <span class="text-slate-800">Rp : 250.000</span>
          <p v-for="item in detail.product.Categories" :key="item.id">
            {{ item.name }}
          </p>
          <div class="mt-4 flex flex-col gap-y-2">
            <button
              class="block rounded-xl border border-indidog bg-indidog py-2 text-center text-[.825rem] font-normal text-slate-50"
              type="submit"
            >
              Terbitkan
            </button>
            <button
              class="block rounded-xl border border-indidog py-2 text-center text-[.825rem] font-normal text-slate-800"
              type="submit"
            >
              Edit
            </button>
          </div>
        </div>
        <div
          class="flex items-center justify-start gap-x-3 rounded-2xl border border-slate-100 p-3 shadow"
        >
          <img src="/images/people.png" alt="" />
          <div>
            <h4 class="text-sm font-medium">John BBC</h4>
            <p class="text-xs text-gray-400">Semarang</p>
          </div>
        </div>
      </div>
    </div>
    <!-- description -->
    <div
      class="my-7 ml-32 w-1/2 rounded-2xl border border-slate-100 p-4 shadow"
    >
      <h4 class="text-base font-medium">Deskripsi</h4>
      <p
        class="my-3 text-sm font-light text-gray-500 dark:text-gray-400 md:text-sm"
      >
        Deliver great service experiences fast - without the complexity of
        traditional ITSM solutions.Accelerate critical development work and
        deploy.
      </p>
      <p class="text-sm font-light text-gray-500 dark:text-gray-400">
        Track work across the enterprise through an open, collaborative
        platform. Link issues across Jira and ingest data from other software
        development tools, so your IT support and operations teams have richer
        contextual information to rapidly respond to requests, incidents, and
        changes.
      </p>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { reactive, onMounted } from "vue";
import { instance } from "../plugin/Api.js";
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
const getDetailItem = async () => {
  await instance.get("/buyer/product/" + idDetailItem).then((res) => {
    detail.product = res.data;
    console.log(res.data);
  });
};

onMounted(() => {
  getDetailItem();
});

// import "./style.css";

// import required modules

// const swiper = new Swiper(".Myswiper", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// export default {
//   components: {
//     Swiper,
//     SwiperSlide,
//   },
//   setup() {
//     return {
//       modules: [Navigation, Pagination, Mousewheel, Keyboard],
//     };
//   },
// };
</script>
<style lang=""></style>
