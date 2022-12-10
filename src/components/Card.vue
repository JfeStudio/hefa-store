<template lang="">
  <div class="flex items-center flex-wrap gap-4">
    <div class="shadow border border-slate-100 p-2 rounded-md">
      <RouterLink to="#">
        <img class="w-36 h-36 object-cover" :src="img" :alt="imgName" />
      </RouterLink>
      <div class="pt-2 pb-1">
        <h3 class="font-normal text-[.925rem] text-slate-800">
          <!-- {{ card.title }} -->
          {{ title }}
        </h3>
        <p class="text-gray-400 my-1 text-xs">
          <!-- {{ card.acc }} -->
          {{ description }}
        </p>
        <div class="flex flex-col">
          <span class="text-sm text-slate-800">{{ price }}</span>
          <span class="text-sm text-slate-800">{{ location }}</span>
          <span>{{ status }}</span>
          <span v-for="item in category" :key="item.id" class="">
            {{ item.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { RouterLink } from "vue-router";
const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  imgName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  category: {
    type: Array,
    required: true,
  },
});
</script>
<style lang=""></style>
