<template lang="">
  <div class="flex flex-wrap items-stretch justify-start gap-5 lg:basis-full">
    <RouterLink
      :to="{ name: 'Info Product' }"
      class="flex basis-[45%] rounded-md border-2 border-dashed border-gray-300 p-12 md:basis-[30%] lg:basis-1/5"
    >
      <div class="m-auto text-center">
        <i class="bx bx-plus text-xl text-gray-400"></i>
        <p class="text-sm text-gray-400">Tambah Produk</p>
      </div>
    </RouterLink>
    <Card
      v-for="card in data.productSeller"
      @click="router.push('/detail-seller-product/' + card.id)"
      class="basis-[45%] md:basis-[30%] lg:basis-1/5"
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
  <!-- <div v-for="item in data.productSeller" :key="item.id">
    {{ item.name }}
  </div> -->
</template>
<script setup>
import { RouterLink } from "vue-router";
import { reactive, onMounted } from "vue";
import { useAuthStore } from "../../stores";
import SellerCard from "../../components/Card.vue";
import { getSeller } from "../../plugin/Api.js";
import Card from "../../components/Card.vue";
import { useRouter } from "vue-router";

const router = useRouter();

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
