<template lang="">
  <div class="container mx-auto pt-24">
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
    <div class="mt-5 flex">
      <!-- category -->
      <div class="basis-1/4 rounded-2xl border border-slate-100 p-5 shadow">
        <!--cols card category -->
        <div class="card-category">
          <h4 class="mb-1 text-sm font-medium">Kategori</h4>
          <div class="flex flex-col">
            <div
              class="flex items-center justify-between border-b border-slate-300 py-2.5"
            >
              <div
                class="flex items-center gap-2 text-sm font-normal text-indidog"
              >
                <i class="bx bx-cube text-lg"></i>
                <span class="">Semua Produk</span>
              </div>
              <i class="bx bx-chevron-right text-xl text-indidog"></i>
            </div>
            <div
              class="flex items-center justify-between border-b border-slate-300 py-2.5"
            >
              <div class="flex items-center gap-2 text-sm font-normal">
                <i class="bx bx-heart text-lg text-slate-400"></i>
                <span class="text-slate-800">Diminati</span>
              </div>
              <i class="bx bx-chevron-right text-xl text-slate-300"></i>
            </div>
            <div class="flex items-center justify-between py-2.5">
              <div class="flex items-center gap-2 text-sm font-normal">
                <i class="bx bx-money-withdraw text-lg text-slate-400"></i>
                <span class="text-slate-800">Terjual</span>
              </div>
              <i class="bx bx-chevron-right text-xl text-slate-300"></i>
            </div>
          </div>
        </div>
      </div>
      <!-- cols card categories -->
      <div class="flex">
        <div class="rounded-md border border-slate-100 p-2 shadow">
          <RouterLink to="#" class="relative">
            <img
              class="h-36 w-full rounded-md border border-slate-200 object-cover"
              src="/images/aksesoris-2.png"
              alt="imgName"
            />
            <span
              class="absolute top-1.5 right-1.5 rounded-md bg-amber-300 py-1 px-3 text-[.65rem] font-semibold uppercase text-slate-800"
              >Sold</span
            >
          </RouterLink>
          <div class="pt-2 pb-1">
            <h3
              class="card-title text-[.925rem] font-semibold capitalize text-slate-800"
            >
              Black Box
            </h3>
            <span class="text-sm text-slate-600">Rp 66666</span>
            <p class="card-location text-sm">Jakarta</p>
            <p
              class="card-description mt-2 mb-1 text-sm capitalize text-gray-500"
            >
              Aku adalah barang yang sangat mauahalllll huahahaha
            </p>
          </div>
        </div>
        <div class="rounded-md border border-slate-100 p-2 shadow">
          <RouterLink to="#" class="relative">
            <img
              class="h-36 w-full rounded-md border border-slate-200 object-cover"
              src="/images/aksesoris-2.png"
              alt="imgName"
            />
            <span
              class="absolute top-1.5 right-1.5 rounded-md bg-amber-300 py-1 px-3 text-[.65rem] font-semibold uppercase text-slate-800"
              >Sold</span
            >
          </RouterLink>
          <div class="pt-2 pb-1">
            <h3
              class="card-title text-[.925rem] font-semibold capitalize text-slate-800"
            >
              Black Box
            </h3>
            <span class="text-sm text-slate-600">Rp 66666</span>
            <p class="card-location text-sm">Jakarta</p>
            <p
              class="card-description mt-2 mb-1 text-sm capitalize text-gray-500"
            >
              Aku adalah barang yang sangat mauahalllll huahahaha
            </p>
          </div>
        </div>
        <div class="rounded-md border border-slate-100 p-2 shadow">
          <RouterLink to="#" class="relative">
            <img
              class="h-36 w-full rounded-md border border-slate-200 object-cover"
              src="/images/aksesoris-1.png"
              alt="imgName"
            />
            <span
              class="absolute top-1.5 right-1.5 rounded-md bg-amber-300 py-1 px-3 text-[.65rem] font-semibold uppercase text-slate-800"
              >Sold</span
            >
          </RouterLink>
          <div class="pt-2 pb-1">
            <h3
              class="card-title text-[.925rem] font-semibold capitalize text-slate-800"
            >
              Black Box
            </h3>
            <span class="text-sm text-slate-600">Rp 66666</span>
            <p class="card-location text-sm">Jakarta</p>
            <p
              class="card-description mt-2 mb-1 text-sm capitalize text-gray-500"
            >
              Aku adalah barang yang sangat mauahalllll huahahaha
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// import { reactive } from "vue";

// const dataCategory = reactive([
//     {
//         name: 'Semua Produk'
//     },
//     {
//         name: 'Diminati'
//     },
//     {
//         name: 'Terjual'
//     }
// ])
</script>
<style lang=""></style>
