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
    <div class="mt-5 flex items-start gap-x-7">
      <!-- category -->
      <NavbarCategory class="basis-1/4" />
      <!-- cols card categories -->
      <div class="flex basis-full flex-wrap">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterView } from "vue-router";
import NavbarCategory from "../components/NavCategory.vue";
</script>
<style lang=""></style>
