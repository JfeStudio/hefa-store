<template lang="">
  <div class="rounded-md border border-slate-100 p-2 shadow">
    <div class="relative">
      <img
        class="h-36 w-full rounded-md border border-slate-200 object-cover"
        :src="img"
        :alt="imgName"
      />
      <span
        class="absolute top-1.5 right-1.5 rounded-md bg-amber-300 py-1 px-3 text-[.65rem] font-semibold uppercase text-slate-800"
        >{{ status }}</span
      >
    </div>
    <div class="pt-2 pb-1">
      <h3
        class="card-title text-[.925rem] font-semibold capitalize text-slate-800"
      >
        <!-- {{ card.title }} -->
        {{ title }}
      </h3>
      <span class="text-sm text-slate-600">Rp {{ price }}</span>
      <!-- <div class="flex flex-col">
        <span
          class="card-categories text-sm text-slate-600"
          v-for="item in category"
          :key="item.id"
        >
          {{ item.name }}
        </span>
      </div> -->
      <p class="card-location text-sm">{{ location }}</p>
      <p class="card-description mt-2 mb-1 text-sm capitalize text-gray-500">
        {{ description }}
      </p>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { RouterLink } from "vue-router";
defineProps({
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
