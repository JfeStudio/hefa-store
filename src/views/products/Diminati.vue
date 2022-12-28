<template lang="">
  <div class="mt-24">Diminati</div>
<div
      v-for="item in useSellerOrder().dataSellerOrder"
      :key="item.id"
      class="flex basis-[45%] rounded-md border-2 border-dashed border-gray-300 p-12 md:basis-[30%] lg:basis-1/5"
    >
      <div class="m-auto text-center">
        <p class="text-sm text-gray-400">{{ item.product_name }}</p>
        <p class="text-sm text-gray-400">{{ item.base_price }}</p>
        <p class="text-sm text-gray-400">{{ item.status }}</p>
      </div>
    </div>
</template>
<script setup>
import { useSellerOrder } from "../../stores";
import { onMounted } from "vue";
onMounted(() => {
  useSellerOrder().getSellerOrder();
});
</script>
<style lang=""></style>
