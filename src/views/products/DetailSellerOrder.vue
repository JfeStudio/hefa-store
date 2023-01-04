<template lang="">
  <div
    class="flex items-center justify-between rounded-2xl border border-slate-100 p-3 shadow"
  >
    <!-- user -->
    <div class="flex items-center justify-start gap-x-3">
      <img
        class="h-12 w-12 overflow-hidden rounded-md"
        :src="detail.product.User?.image_url ?? dummyAvatar"
        alt=""
      />
      <div>
        <h4 class="text-sm font-medium">
          {{ detail.product.User?.full_name }}
        </h4>
        <p class="text-xs text-gray-400">
          {{ detail.product.User?.city ?? "Isekai" }}
        </p>
        <p class="text-xs text-gray-400">
          {{ detail.product.User?.email ?? "example.com" }}
        </p>
        <p class="text-xs text-gray-400">
          {{ detail.product.User?.phone_number ?? "666" }}
        </p>
        <div>
          <button type="submit"></button>
        </div>
      </div>
    </div>
    <!-- end -->
  </div>
</template>
<script setup>
import { reactive, onMounted } from "vue";
import { instance } from "../../plugin/Api.js";
import { useRoute, useRouter } from "vue-router";

// const onStatus = (status) => {
//   const data = {
//     status: status,
//   };
// };

const detail = reactive({
  detailOrder: {},
  product: [],
  userId: {},
});
const dummyAvatar = `https://ui-avatars.com/api/?name=${detail.userId.image_url}`;
const idDetailItem = useRoute().params.id;
const getDetailSellerOrder = async () => {
  await instance.get("/seller/order/" + idDetailItem).then((res) => {
    detail.product = res.data;
    console.log(res.data);
  });
};

onMounted(() => {
  getDetailSellerOrder();
});
</script>
<style lang=""></style>
