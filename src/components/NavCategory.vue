<template lang="">
  <div class="basis-1/4 rounded-2xl border border-slate-100 p-5 shadow">
    <!--cols card category -->
    <div class="card-category">
      <h4 class="mb-1 text-sm font-medium">Kategori</h4>
      <div class="flex flex-col">
        <RouterLink
          exact-active-class="active"
          :to="{ name: 'Daftar Produk Seller' }"
          class="nav-category flex items-center justify-between border-b border-slate-300 py-2.5"
        >
          <div class="flex items-center gap-2 text-sm font-normal">
            <i class="bx bx-cube text-lg text-slate-400"></i>
            <span class="">Semua Produk</span>
          </div>
          <i class="bx bx-chevron-right text-xl text-slate-300"></i>
        </RouterLink>
        <RouterLink
          exact-active-class="active"
          :to="{ name: 'Daftar Diminati' }"
          class="nav-category flex items-center justify-between border-b border-slate-300 py-2.5"
        >
          <div class="flex items-center gap-2 text-sm font-normal">
            <i class="bx bx-heart text-lg text-slate-400"></i>
            <span class="text-slate-800">Diminati</span>
          </div>
          <i class="bx bx-chevron-right text-xl text-slate-300"></i>
        </RouterLink>
        <RouterLink
          exact-active-class="active"
          :to="{ name: 'Daftar Terjual' }"
          class="nav-category flex items-center justify-between py-2.5"
        >
          <div class="flex items-center gap-2 text-sm font-normal">
            <i class="bx bx-money-withdraw text-lg text-slate-400"></i>
            <span class="text-slate-800">Terjual</span>
          </div>
          <i class="bx bx-chevron-right text-xl text-slate-300"></i>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
<style lang=""></style>
