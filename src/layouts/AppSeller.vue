<template lang="">
  <div class="container mx-auto pt-24">
    <h2 class="text-xl font-semibold">Daftar Jual Saya</h2>
    <!-- user -->
    <div
      class="mt-3 flex items-center justify-between rounded-2xl border border-slate-100 p-3 shadow"
    >
      <div class="flex items-center justify-start gap-x-3">
        <img
          class="h-12 w-12 overflow-hidden rounded-md"
          :src="data.userId.image_url ?? dummyAvatar"
          alt=""
        />
        <div>
          <h4 class="text-sm font-medium">{{ data.userId.full_name }}</h4>
          <p class="text-xs text-gray-400">
            {{ data.userId.city ?? "Isekai" }}
          </p>
        </div>
      </div>
      <RouterLink
        :to="{ name: 'Edit Profile' }"
        class="inline-block rounded-md border-2 border-slate-500 px-3 py-1.5 text-xs font-medium leading-tight text-slate-500 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
      >
        Edit
      </RouterLink>
    </div>
    <!-- main content -->
    <div
      class="mt-5 flex flex-wrap items-start justify-center gap-7 md:justify-start lg:flex-nowrap"
    >
      <!-- category -->
      <NavbarCategory class="basis-full md:basis-2/5 lg:basis-1/4" />
      <!-- cols card categories -->
      <div class="flex basis-full flex-wrap md:basis-1/2 lg:basis-full">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterView } from "vue-router";
import { reactive, onMounted } from "vue";
import NavbarCategory from "../components/NavCategory.vue";
import { instance } from "../plugin/Api.js";

const data = reactive({
  //   productSeller: [],
  userId: {},
});
const authUser = async () => {
  await instance.get("/auth/user").then((res) => {
    data.userId = res.data;
    console.log(data);
  });
};
const dummyAvatar = `https://ui-avatars.com/api/?name=${data.userId.image_url}`;
onMounted(() => {
  authUser();
});
</script>
<style lang=""></style>
