<template lang="">
  <div class="flex flex-wrap items-stretch justify-start gap-5 lg:basis-full">
    <CardSellerOrder
      v-for="card in useSellerOrder().dataSellerOrder"
      @click="router.push('/detail-diminati/' + card.id)"
      class="basis-[45%] md:basis-[30%] lg:basis-1/5"
      :key="card.id"
      :title="card.product_name"
      :img="card.image_product"
      :description="card.description"
      :price="card.base_price"
      :nego_price="card.price"
      :location="card.location"
      :status="card.status"
      :date="card.transaction_date"
      :imgName="card.image_name"
    />
  </div>
  <!-- <div
      v-for="item in useSellerOrder().dataSellerOrder"
      :key="item.id"
      class="flex basis-[45%] rounded-md border-2 border-dashed border-gray-300 p-12 md:basis-[30%] lg:basis-1/5"
    >
      <div class="m-auto text-center">
        <p class="text-sm text-gray-400">{{ item.product_name }}</p>
        <p class="text-sm text-gray-400">{{ item.base_price }}</p>
        <p class="text-sm text-gray-400">{{ item.status }}</p>
      </div>
    </div> -->
</template>
<script setup>
import { RouterLink, useRouter } from "vue-router";
import { useSellerOrder } from "../../stores";
import { onMounted, reactive } from "vue";
import CardSellerOrder from "../../components/Card.vue";
const router = useRouter();
const detail = reactive({
  account: [],
});
onMounted(() => {
  useSellerOrder().getSellerOrder();
});
</script>
<style lang=""></style>
