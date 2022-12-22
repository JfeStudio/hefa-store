<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
import { useRouter } from "vue-router";
import Intro from "../components/Intro.vue";
import Card from "../components/Card.vue";
import Categories from "../components/Categories.vue";
import { reactive, onMounted, watchEffect } from "vue";
import { getProduct, getCategory } from "../plugin/Api";
import { TextSearch } from "../stores/products.js";
import { instance } from "../plugin/Api.js";
import debounce from "../utils/debounce.js";

// Import Swiper styles
import "swiper/css";
const router = useRouter();

// import "swiper/css/pagination";

// import "./style.css";

// import required modules
// import { Pagination } from "swiper";
const products = reactive({
  product: [],
  category: [],
  perPage: 30,
  idCategory: 0,
  userId: {},
  loading: false,
});

const onGetProduct = async () => {
  products.loading = true;
  getProduct({
    page: 1,
    per_page: products.perPage,
    category_id: products.idCategory || "",
    search: TextSearch.value || "",
  }).then((res) => {
    products.product = res.data;
    products.loading = false;
  });
};

const onGetCategory = async () => {
  getCategory().then(({ data }) => {
    products.category = data;
  });
};
const loadMore = () => {
  products.perPage += 30;
};
watchEffect(() => {
  onGetProduct();
});
onMounted(() => {
  onGetCategory();
});
</script>

<template>
  <!-- main content -->
  <main class="pt-24">
    <Swiper
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :spaceBetween="-20"
      :loop="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :modules="[Autoplay]"
      class="mySwiper w-full lg:w-full"
    >
      <SwiperSlide
        class="w-full overflow-hidden rounded-3xl bg-hero-mosque bg-right bg-no-repeat md:max-w-2xl lg:max-w-4xl"
        ><div class="bg-linear h-[18rem]">
          <img
            class="absolute top-1/2 right-72 z-50 w-32 -translate-y-1/2"
            src="/images/gift-box.png"
            alt=""
          />
          <Intro />
        </div>
      </SwiperSlide>
      <SwiperSlide
        class="relative overflow-hidden rounded-3xl bg-hero-mosque bg-right bg-no-repeat md:max-w-2xl lg:max-w-4xl"
        ><div class="bg-linear h-72">
          <img
            class="absolute top-1/2 right-72 z-50 w-32 -translate-y-1/2"
            src="/images/gift-box.png"
            alt=""
          />
          <Intro />
        </div>
      </SwiperSlide>
      <SwiperSlide
        class="relative w-full overflow-hidden rounded-3xl bg-hero-mosque bg-right bg-no-repeat md:max-w-2xl lg:max-w-4xl"
        ><div class="bg-linear h-[18rem]">
          <img
            class="absolute top-1/2 right-72 z-50 w-32 -translate-y-1/2"
            src="/images/gift-box.png"
            alt=""
          />
          <Intro />
        </div>
      </SwiperSlide>
      <SwiperSlide
        class="relative w-full overflow-hidden rounded-3xl bg-hero-mosque bg-right bg-no-repeat md:max-w-2xl lg:max-w-4xl"
        ><div class="bg-linear h-[18rem]">
          <img
            class="absolute top-1/2 right-72 z-50 w-32 -translate-y-1/2"
            src="/images/gift-box.png"
            alt=""
          />
          <Intro />
        </div>
      </SwiperSlide>
    </Swiper>
  </main>
  <!-- categories -->
  <div class="container mx-auto pt-11">
    <h2 class="text-xl font-semibold">Telusuri Kategori</h2>
    <!-- animation category card -->
    <div
      v-if="products.loading"
      class="mt-5 flex gap-4 overflow-hidden overscroll-x-auto py-1"
    >
      <div
        v-for="(item, index) in 7"
        :key="index"
        class="basis-1/4 rounded-lg border border-gray-100 p-2.5 shadow"
      >
        <div class="flex animate-pulse items-center space-x-2">
          <div class="h-6 w-6 rounded-full bg-slate-300"></div>
          <div class="flex-1">
            <div class="space-y-2">
              <div class="grid grid-cols-3 gap-4">
                <div class="col-span-2 h-1 rounded bg-slate-300"></div>
                <div class="col-span-1 h-1 rounded bg-slate-300"></div>
              </div>
              <div class="h-1 rounded bg-slate-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      class="category-scroll mt-5 flex w-full items-center gap-x-3 overflow-x-scroll overscroll-x-auto pb-2"
    >
      <button
        class="categories flex min-w-max items-center justify-center gap-1.5 rounded-lg border py-2.5 px-5"
        @click="products.idCategory = 0"
        :class="
          products.idCategory == 0 ? 'bg-indidog text-white' : 'bg-soft-indidog'
        "
      >
        <i class="bx bx-search text-xl leading-none"></i>

        <span class="text-sm font-normal">Semua</span>
      </button>
      <Categories
        v-for="cate in products.category"
        :key="cate.id"
        :categories="cate.name"
        @click="products.idCategory = cate.id"
        :class="
          products.idCategory == cate.id
            ? 'bg-indidog  text-slate-50'
            : 'bg-soft-indidog'
        "
      />
    </div>
  </div>
  <!-- card -->
  <div class="container relative mx-auto pt-8 pb-24">
    <!-- set animation card pulse -->
    <div v-if="products.loading" class="flex flex-wrap gap-5">
      <div
        v-for="(item, index) in 10"
        :key="index"
        class="basis-[45%] rounded-md border border-gray-100 p-2 shadow md:basis-[30%] lg:basis-[18%]"
      >
        <div class="flex animate-pulse flex-col space-y-4">
          <div class="h-28 w-full rounded-md bg-slate-400"></div>
          <div class="flex-1 space-y-3 py-1">
            <div class="h-2 rounded bg-slate-400"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="col-span-2 h-2 rounded bg-slate-400"></div>
                <div class="col-span-1 h-2 rounded bg-slate-400"></div>
              </div>
              <div class="h-2 rounded bg-slate-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end -->
    <div v-else class="flex flex-wrap items-start justify-start gap-5">
      <Card
        v-for="card in products.product"
        @click="router.push('/detail/' + card.id)"
        class="basis-[45%] md:basis-[30%] lg:basis-[18%]"
        :key="card.id"
        :title="card.name"
        :img="card.image_url"
        :description="card.description"
        :price="card.base_price"
        :location="card.location"
        :status="card.status"
        :category="card.Categories"
        :imgName="card.image_name"
      />
    </div>
    <div class="absolute bottom-6 right-1/2 translate-x-1/2">
      <button
        @click="loadMore()"
        type="button"
        class="inline-flex items-center rounded-lg bg-indidog px-4 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-indidog/50 hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-indidog dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <i class="bx bx-plus mr-2 -ml-1 text-lg leading-none"></i>
        Load More
      </button>
    </div>
  </div>
</template>
