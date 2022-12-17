<template lang="">
  <div class="container mx-auto h-[130vh] pt-24">
    <h2 class="text-xl font-semibold">Daftar Jual Saya</h2>
    <!-- user -->
    <div
      class="mt-3 flex items-center justify-between rounded-2xl border border-slate-100 p-3 shadow"
    >
      <div class="flex items-center justify-start gap-x-3">
        <img src="/images/people.png" alt="" />
        <div>
          <h4 class="text-sm font-medium">John BBC</h4>
          <p class="text-xs text-gray-400">Semarang</p>
        </div>
      </div>
      <button
        type="button"
        class="inline-block rounded-md border-2 border-slate-500 px-3 py-1.5 text-xs font-medium leading-tight text-slate-500 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
      >
        Edit
      </button>
    </div>
    <!-- main content -->
    <div class="mt-5 flex">
      <!-- category -->
      <div class="basis-1/4 rounded-2xl border border-slate-100 p-5 shadow">
        <!--cols card category -->
        <div class="card-category">
          <h4 class="mb-1 text-sm font-medium">Kategori</h4>
          <div class="flex flex-col">
            <div
              class="flex items-center justify-between border-b border-slate-300 py-2.5"
            >
              <div
                class="flex items-center gap-2 text-sm font-normal text-indidog"
              >
                <i class="bx bx-cube text-lg"></i>
                <span class="">Semua Produk</span>
              </div>
              <i class="bx bx-chevron-right text-xl text-indidog"></i>
            </div>
            <div
              class="flex items-center justify-between border-b border-slate-300 py-2.5"
            >
              <div class="flex items-center gap-2 text-sm font-normal">
                <i class="bx bx-heart text-lg text-slate-400"></i>
                <span class="text-slate-800">Diminati</span>
              </div>
              <i class="bx bx-chevron-right text-xl text-slate-300"></i>
            </div>
            <div class="flex items-center justify-between py-2.5">
              <div class="flex items-center gap-2 text-sm font-normal">
                <i class="bx bx-money-withdraw text-lg text-slate-400"></i>
                <span class="text-slate-800">Terjual</span>
              </div>
              <i class="bx bx-chevron-right text-xl text-slate-300"></i>
            </div>
          </div>
        </div>
      </div>
      <!-- cols card categories -->
      <div class="flex">
        <div
          class="rounded-md border border-dotted border-slate-100 p-2 shadow"
        >
          <div>
            <i class="bx bx-plus"></i>
          </div>
        </div>
        <!-- cards -->
        <!-- <Card v-for="item in data.product" :key="item.id" /> -->
        <div v-for="item in data.productSeller" :key="item.id">
          {{ item.name }}
        </div>
        <!-- <Card
          v-for="SellerCard in data.product"
          class="basis-[45%] md:basis-[30%] lg:basis-[18%]"
          :key="SellerCard.id"
          :title="SellerCard.name"
          :img="SellerCard.image_url"
          :description="SellerCard.description"
          :price="SellerCard.base_price"
          :location="SellerCard.location"
          :status="SellerCard.status"
          :category="SellerCard.Categories"
          :imgName="SellerCard.image_name"
        /> -->
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, onMounted } from "vue";
import { useAuthStore } from "../../stores";
import SellerCard from "../../components/Card.vue";
import { getSeller } from "../../plugin/Api.js";

const data = reactive({
  productSeller: [],
});

const getSellerProduct = async () => {
  getSeller()
    .then((res) => {
      console.log(data);
      data.productSeller = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
onMounted(() => {
  getSellerProduct();
});
// const onGetProduct = async () => {
//   await instance
//     .get("/seller/product", {
//       headers: {
//         access_token: useAuthStore().getToken,
//       },
//     }).th
// };
</script>
<style lang=""></style>
