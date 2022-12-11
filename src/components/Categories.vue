<template>
  <div
    class="categories flex min-w-max items-center justify-center gap-1.5 rounded-lg border bg-soft-indidog py-2.5 px-5"
  >
    <i class="bx bx-search text-xl leading-none"></i>

    <span class="text-sm font-normal">{{ categories }}</span>
  </div>
</template>
<script setup>
import { reactive } from "vue";
defineProps({
  categories: {
    type: Array,
    ruquired: true,
  },
});
</script>
