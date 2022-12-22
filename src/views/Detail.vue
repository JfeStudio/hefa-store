<template lang="">
  <div class="container mx-auto pt-24">
    <h2 class="text-xl font-semibold">Seller Product</h2>
    <!-- user baru -->
    <div
      class="mt-3 flex items-center justify-between rounded-2xl border border-slate-100 p-3 shadow"
    >
      <div class="flex items-center justify-start gap-x-3">
        <img
          class="h-12 w-12 overflow-hidden rounded-md"
          :src="detail.product.User?.image_url"
          alt=""
        />
        <div>
          <h4 class="text-sm font-medium">
            {{ detail.product.User?.full_name }}
          </h4>
          <p class="text-xs text-gray-400">
            {{ detail.product.User?.city ?? "isekai" }}
          </p>
        </div>
      </div>
      <button
        type="button"
        class="inline-block rounded-md border-2 border-slate-500 px-3 py-1.5 text-xs font-medium leading-tight text-slate-500 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
      >
        Edit
      </button>
    </div>
    <div
      class="mt-4 flex items-center justify-center gap-x-5 rounded-2xl border border-slate-100 py-4 px-8 shadow"
    >
      <div class="flex basis-1/2 items-center gap-6">
        <div>
          <img
            class="h-44 w-52 rounded-md border-2 border-solid border-indidog bg-cover"
            :src="detail.product.image_url"
            alt=""
          />
        </div>
        <!-- detail keterangan -->
        <div class="relative flex basis-1/3 flex-col gap-y-4">
          <div class="rounded-2xl">
            <h1 class="text-base font-medium text-slate-800">
              {{ detail.product.name }}
            </h1>
            <span
              class="absolute -top-4 -right-4 rounded-md bg-amber-300 py-1 px-3 text-[.65rem] font-semibold uppercase text-slate-800"
            >
              {{ detail.product.status }}
            </span>
            <span class="my-1 block text-slate-800"
              >Rp {{ detail.product.base_price }}</span
            >
            <p
              class="text-sm text-slate-500"
              v-for="item in detail.product.Categories"
              :key="item.id"
            >
              {{ item.name }}
            </p>
            <div v-if="!isOrdered" class="mt-4">
              <!-- Button trigger modal -->
              <button
                type="button"
                class="inline-block rounded bg-indidog px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:opacity-95 hover:shadow-lg focus:bg-opacity-90 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-opacity-95 active:shadow-lg"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Tawar
              </button>

              <!-- Modal -->
              <div
                class="modal fade fixed top-0 left-0 hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div
                  class="modal-dialog pointer-events-none relative w-auto lg:w-[30%]"
                >
                  <div
                    class="modal-content pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none"
                  >
                    <div
                      class="modal-header flex flex-shrink-0 items-center justify-between rounded-t-md px-10 pt-10"
                    >
                      <h5
                        class="text-base font-medium leading-normal text-gray-800"
                        id="exampleModalLabel"
                      >
                        Masukkan Harga Tawarmu
                      </h5>
                      <button
                        type="button"
                        class="btn-close absolute top-5 right-5 box-content h-3 w-3 rounded-none border-none p-1 text-xs text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body relative py-4 px-10">
                      <p class="text-sm text-gray-500">
                        Harga tawaranmu akan diketahui penual, jika penjual
                        cocok kamu akan segera dihubungi penjual.
                      </p>
                      <!-- detail modal buyer product  -->
                      <div
                        class="mt-4 flex items-center justify-between rounded-lg bg-gray-100 py-2 px-2.5"
                      >
                        <div class="flex items-center justify-start gap-x-3">
                          <img
                            class="h-12 w-12 overflow-hidden rounded-md"
                            :src="detail.product.image_url"
                            alt=""
                          />
                          <div>
                            <h4 class="text-sm font-medium">
                              {{ detail.product.name }}
                            </h4>
                            <span class="my-1 block text-slate-800"
                              >Rp {{ detail.product.base_price }}</span
                            >
                          </div>
                        </div>
                      </div>
                      <!-- form input modal -->
                      <form @submit.prevent="postTawaran" class="mb-3">
                        <div class="flex justify-center">
                          <div class="mb-3 mt-2 w-full">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label mb-2 inline-block text-xs font-medium text-gray-700"
                              >Harga Tawar</label
                            >
                            <input
                              v-model="detail.form"
                              type="text"
                              class="form-control m-0 block w-full rounded-full border border-solid border-gray-300 bg-white bg-clip-padding px-4 pt-2 pb-2.5 text-sm font-normal text-gray-700 transition ease-in-out placeholder:text-xs focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                              id="exampleFormControlInput1"
                              placeholder="Rp 0,00"
                            />
                          </div>
                        </div>
                        <button
                          type="submit"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          class="inline-block w-full rounded-full bg-indidog px-6 py-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-opacity-95 hover:shadow-lg focus:opacity-90 focus:shadow-lg focus:outline-none focus:ring-0 active:opacity-95 active:shadow-lg"
                        >
                          Kirim
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- description -->
      <div class="basis-1/2 rounded-2xl">
        <h4 class="text-base font-medium">Deskripsi</h4>
        <p
          class="my-3 text-sm font-light text-gray-500 dark:text-gray-400 md:text-sm"
        >
          Deliver great service experiences fast - without the complexity of
          traditional ITSM solutions.Accelerate critical development work and
          deploy.
        </p>
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Track work across the enterprise through an open, collaborative
          platform. Link issues across Jira and ingest data from other software
          development tools, so your IT support and operations teams have richer
          contextual information to rapidly respond to requests, incidents, and
          changes.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, onMounted, computed } from "vue";
import { instance } from "../plugin/Api.js";
import { useRoute, useRouter } from "vue-router";
import { useBuyerStore } from "../stores";

const router = useRouter();
const detail = reactive({
  product: [],
  form: "",
});

const idDetailItem = useRoute().params.id;
const getDetailItem = async () => {
  await instance.get("/buyer/product/" + idDetailItem).then((res) => {
    detail.product = res.data;
    console.log(res.data);
  });
};

// const tawar = () => {
//   getBuyerOrder
// };
const idBuyerOrder = useRoute().params.id;
const postTawaran = () => {
  useBuyerStore().postBuyerOrder(detail.form, idBuyerOrder);
  //   await instance.post("/buyer/order/" + idBuyerOrder, detail.form).then(() => {
  //     alert("tawaran berhasil di kirim");
  //   });
};

const isOrdered = computed(() => {
  return useBuyerStore().dataBuyerOrder.find((e) => {
    return e.product_id == idBuyerOrder;
  });
});

onMounted(() => {
  getDetailItem();
  useBuyerStore().getBuyerOrder();
});

// import "./style.css";

// import required modules

// const swiper = new Swiper(".Myswiper", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// export default {
//   components: {
//     Swiper,
//     SwiperSlide,
//   },
//   setup() {
//     return {
//       modules: [Navigation, Pagination, Mousewheel, Keyboard],
//     };
//   },
// };
</script>
<style lang=""></style>
