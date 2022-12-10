<template>
  <div class="category">
    <h2 class="text-xl font-semibold">Telusuri Kategori</h2>
    <div class="flex items-center gap-x-3">
      <div
        v-for="(item, index) in categories"
        :key="index"
        class="categories mt-5 flex items-center justify-center gap-1.5 py-2.5 px-5 rounded-lg bg-soft-indidog"
      >
        <i class="text-xl leading-none bx bx-search"></i>

        <span class="font-normal text-sm">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
const categories = reactive([
  {
    title: "Semua",
  },
  {
    title: "Hobi",
  },
  {
    title: "Kendaraan",
  },
  {
    title: "Baju",
  },
  {
    title: "Elektronik",
  },
  {
    title: "Kesehatan",
  },
]);
defineProps(["title"]);
</script>
