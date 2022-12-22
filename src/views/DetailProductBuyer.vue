<template lang="">
  <div class="border pt-52">
    <i class="bx bx-plus text-xl text-gray-400">border</i>
    <div
      v-for="item in useBuyerStore().dataBuyerOrder"
      :key="item.id"
      class="flex basis-[45%] rounded-md border-2 border-dashed border-gray-300 p-12 md:basis-[30%] lg:basis-1/5"
    >
      <div class="m-auto text-center">
        <p class="text-sm text-gray-400">{{ item.product_name }}</p>
        <p class="text-sm text-gray-400">{{ item.price }}</p>
      </div>
    </div>
    <!-- <CardBuyer
      v-for="card in useBuyerStore.getBuyerOrder"
      class="basis-[45%] md:basis-[30%] lg:basis-1/5"
      :key="card.id"
      :title="card.product_name"
      :img="card.image_product"
      :price="card.price"
      :status="card.status"
    /> -->
  </div>
</template>
<script setup>
import { useBuyerStore } from "../stores";
import { onMounted } from "vue";
onMounted(() => {
  useBuyerStore().getBuyerOrder();
});
</script>
<style lang=""></style>
