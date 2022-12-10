<template lang="">
  <div class="container mx-auto pt-24">
    <div class="flex flex-wrap justify-center items-start gap-x-5">
      <!-- swiper -->
      <swiper
        :cssMode="true"
        :navigation="true"
        :pagination="true"
        :mousewheel="true"
        :keyboard="true"
        :modules="modules"
        class="mySwiper m-0 basis-1/2"
      >
        <SwiperSlide>
          <img src="/images/detail-1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide> <img src="/images/detail-1.png" alt="" /> </SwiperSlide>
        <SwiperSlide> <img src="/images/detail-1.png" alt="" /> </SwiperSlide>

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
      <div class="basis-[25%] flex flex-col gap-y-4">
        <div class="pt-3 pb-4 px-4 shadow border border-slate-100 rounded-2xl">
          <h1 class="text-base text-slate-800 font-medium">Jam Tangan Casio</h1>
          <p class="text-sm text-gray-400 mt-1 mb-2">Aksesoris</p>
          <span class="text-slate-800">Rp : 250.000</span>
          <div class="flex flex-col mt-4 gap-y-2">
            <button
              class="py-2 text-[.825rem] text-center block font-normal border border-indidog bg-indidog text-slate-50 rounded-xl"
              type="submit"
            >
              Terbitkan
            </button>
            <button
              class="py-2 text-[.825rem] text-center block font-normal border border-indidog text-slate-800 rounded-xl"
              type="submit"
            >
              Edit
            </button>
          </div>
        </div>
        <div
          class="flex items-center justify-start gap-x-3 shadow border border-slate-100 p-3 rounded-2xl"
        >
          <img src="/images/people.png" alt="" />
          <div>
            <h4 class="text-sm font-medium">John BBC</h4>
            <p class="text-gray-400 text-xs">Semarang</p>
          </div>
        </div>
      </div>
    </div>
    <!-- description -->
    <div
      class="ml-32 my-7 w-1/2 p-4 rounded-2xl shadow border border-slate-100"
    >
      <h4 class="font-medium text-base">Deskripsi</h4>
      <p
        class="my-3 text-sm font-light text-gray-500 md:text-sm dark:text-gray-400"
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
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./style.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

// const swiper = new Swiper(".Myswiper", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Mousewheel, Keyboard],
    };
  },
};
</script>
<style lang=""></style>
