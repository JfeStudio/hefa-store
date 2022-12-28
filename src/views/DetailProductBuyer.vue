<template lang="">
  <div class="container mx-auto pt-24">
    <h2 class="text-xl font-semibold">Detail Buyer</h2>
    <!-- user -->
    <!-- content -->

    <div class="mt-5 flex flex-wrap items-start justify-start gap-5">
      <CardDetailBuyer
        v-for="card in useBuyerStore().dataBuyerOrder"
        @click="router.push('/detail/' + card.id)"
        class="basis-[45%] md:basis-[30%] lg:basis-[18%]"
        :key="card.id"
        :title="card.product_name"
        :img="card.image_product"
        :description="card.description"
        :price="card.base_price"
        :location="card.location"
        :status="card.status"
        :date="card.date"
        :imgName="card.image_name"
      />
    </div>
  </div>
  <!-- <div
    v-for="item in useBuyerStore().dataBuyerOrder"
    :key="item.id"
    class="flex basis-[45%] rounded-md border-2 border-dashed border-gray-300 p-12 md:basis-[30%] lg:basis-1/5"
  >
    <div class="m-auto text-center">
      <p class="text-sm text-gray-400">{{ item.product_name }}</p>
      <p class="text-sm text-gray-400">{{ item.price }}</p>
    </div>
  </div> -->
</template>
<script setup>
import { useBuyerStore } from "../stores";
import { RouterView } from "vue-router";
import { reactive, onMounted } from "vue";
import { instance } from "../plugin/Api.js";
import CardDetailBuyer from "../components/Card.vue";

const data = reactive({
  userId: {},
});
// const authUser = async () => {
//   await instance.get("/auth/user").then((res) => {
//     data.userId = res.data;
//     console.log(data);
//   });
// };
const dummyAvatar = `https://ui-avatars.com/api/?name=${data.userId.image_url}`;
// onMounted(() => {
//   authUser();
// });
onMounted(() => {
  useBuyerStore().getBuyerOrder();
});
</script>
<style lang=""></style>
