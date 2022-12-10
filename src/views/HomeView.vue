<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
// import Gift from "../components/icon/Gift.vue";
import Intro from "../components/Intro.vue";
import Card from "../components/Card.vue";
import Categories from "../components/Categories.vue";
import { reactive, onMounted } from "vue";
import { getProduct } from "../plugin/Api";

// Import Swiper styles
import "swiper/css";

// import "swiper/css/pagination";

// import "./style.css";

// import required modules
// import { Pagination } from "swiper";
const products = reactive({
  product: [],
});
const onGetProduct = async () => {
  getProduct().then((res) => {
    products.product = res.data;
  });
};
onMounted(() => {
  onGetProduct();
});

// export default {
//   components: {
//     Swiper,
//     SwiperSlide,
//     Card,
//     Intro,
//     Categories,
//   },
//   setup() {
//     return {
//       modules: [Autoplay],
//     };
//   },
// };
</script>

<template>
  <!-- main content -->
  <main class="pt-24">
    <div class="">
      <Swiper
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :spaceBetween="30"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="[Autoplay]"
        class="mySwiper w-full md:w-2/3 lg:w-full"
      >
        <SwiperSlide
          class="relative rounded-3xl overflow-hidden lg:w-3/4 w-full bg-hero-mosque bg-right bg-no-repeat"
          ><div class="bg-linear h-[18rem]">
            <Gift
              class="absolute z-50 top-1/2 scale-95 -translate-y-1/2 right-72"
            />
            <Intro />
          </div>
        </SwiperSlide>
        <SwiperSlide
          class="relative rounded-3xl overflow-hidden lg:w-3/4 w-full bg-hero-mosque bg-right bg-no-repeat"
          ><div class="bg-linear h-72">
            <Gift
              class="absolute z-50 top-1/2 scale-95 -translate-y-1/2 right-72"
            />
            <Intro />
          </div>
        </SwiperSlide>
        <SwiperSlide
          class="relative rounded-3xl overflow-hidden lg:w-3/4 w-full bg-hero-mosque bg-right bg-no-repeat"
          ><div class="bg-linear h-[18rem]">
            <Gift
              class="absolute z-50 top-1/2 scale-95 -translate-y-1/2 right-72"
            />
            <Intro />
          </div>
        </SwiperSlide>
        <SwiperSlide
          class="relative rounded-3xl overflow-hidden lg:w-3/4 w-full bg-hero-mosque bg-right bg-no-repeat"
          ><div class="bg-linear h-[18rem]">
            <!-- <Gift
              class="absolute z-50 top-1/2 scale-95 -translate-y-1/2 right-72"
            /> -->
            <Intro />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </main>
  <!-- categories -->
  <div class="container mx-auto pt-16">
    <Categories />
  </div>
  <!-- card -->
  <div class="relative container mx-auto pt-8 pb-16">
    <Card
      v-for="card in products.product"
      :key="card.id"
      :title="card.name"
      :img="card.image_url"
      :description="card.description"
      :price="card.price"
      :location="card.location"
      :status="card.status"
      :category="card.Categories"
      :imgName="card.image_name"
    />
    <div class="absolute bottom-6 right-1/2 translate-x-1/2">
      <button
        type="button"
        class="text-white bg-indidog hover:opacity-95 focus:ring-4 focus:outline-none focus:ring-indidog font-medium rounded-lg text-sm px-4 py-2.5 shadow-lg shadow-indidog/50 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <i class="text-lg mr-2 -ml-1 leading-none bx bx-plus"></i>
        Jual
      </button>
    </div>
  </div>
</template>
