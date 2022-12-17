<template>
  <div class="fixed z-[999] w-full bg-slate-50 shadow-sm">
    <nav
      class="navbar navbar-expand-lg container navbar-light mx-auto flex flex-wrap items-center justify-between py-3 text-gray-500 hover:text-gray-700 focus:text-gray-700"
    >
      <div class="flex w-full flex-wrap items-center justify-between">
        <button
          class="navbar-toggler border-0 bg-transparent py-2 px-2.5 text-gray-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            class="w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </button>
        <div
          class="navbar-collapse collapse my-3 flex flex-grow items-center gap-x-3"
          id="navbarSupportedContent"
        >
          <RouterLink
            class="mr-1 flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 lg:mt-0"
            to="/"
          >
            <img
              src="/images/logo.png"
              style="height: 30px"
              alt=""
              loading="lazy"
            />
          </RouterLink>
          <!-- Left links -->
          <ul class="list-style-none navbar-nav flex flex-col pl-0">
            <div class="flex items-center lg:hidden">
              <a
                class="mr-4 text-gray-500 hover:text-gray-700 focus:text-gray-700"
                href="#"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="shopping-cart"
                  class="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                  ></path>
                </svg>
              </a>
              <div class="dropdown relative">
                <a
                  class="hidden-arrow dropdown-toggle mr-4 flex items-center text-gray-500 hover:text-gray-700 focus:text-gray-700"
                  href="#"
                  id="dropdownMenuButton1"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="bell"
                    class="w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                    ></path>
                  </svg>
                  <span
                    class="absolute -mt-2.5 ml-2 rounded-full bg-red-700 py-0 px-1.5 text-xs text-white"
                    >1</span
                  >
                </a>
                <ul
                  class="dropdown-menu absolute left-auto right-0 z-50 float-left m-0 mt-1 hidden min-w-max list-none rounded-lg border-none bg-white bg-clip-padding py-2 text-left text-base shadow-lg"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a
                      class="dropdown-item block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-gray-700 hover:bg-gray-100"
                      href="#"
                      >Action</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-gray-700 hover:bg-gray-100"
                      href="#"
                      >Another action</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-gray-700 hover:bg-gray-100"
                      href="#"
                      >Something else here</a
                    >
                  </li>
                </ul>
              </div>
              <div class="dropdown relative">
                <a
                  class="hidden-arrow dropdown-toggle flex items-center"
                  href="#"
                  id="dropdownMenuButton2"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                    class="rounded-full"
                    style="height: 25px; width: 25px"
                    alt=""
                    loading="lazy"
                  />
                </a>
                <ul
                  class="dropdown-menu absolute left-auto right-0 z-50 float-left m-0 mt-1 hidden min-w-max list-none rounded-lg border-none bg-white bg-clip-padding py-2 text-left text-base shadow-lg"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <a
                      class="dropdown-item block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-gray-700 hover:bg-gray-100"
                      href="#"
                      >Action</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-gray-700 hover:bg-gray-100"
                      href="#"
                      >Another action</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-gray-700 hover:bg-gray-100"
                      href="#"
                      >Something else here</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </ul>
          <!-- Left links -->
        </div>
        <!-- Collapsible wrapper -->
        <!-- Right elements -->
        <div class="relative flex w-3/4 items-center lg:w-11/12">
          <!-- Icon -->
          <div
            class="mr-auto w-full overflow-hidden rounded-lg border border-solid border-gray-300 lg:w-2/5"
          >
            <div
              class="input-group relative flex w-full flex-wrap items-stretch"
            >
              <input
                type="text"
                class="form-control relative m-0 block w-full min-w-0 flex-auto bg-white bg-clip-padding px-3 py-2 text-xs font-normal text-gray-700 transition ease-in-out focus:bg-white focus:text-gray-700 focus:outline-none"
                placeholder="Cari di sini.."
                aria-label="Search"
                aria-describedby="button-addon2"
                @input="delaySearch"
              />
              <span
                class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-gray-700"
                id="basic-addon2"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="#8A8A8A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.0004 21L16.6504 16.65"
                    stroke="#8A8A8A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
          <!-- user -->
          <div v-if="store.getToken" class="hidden items-center border lg:flex">
            <a
              class="mr-4 text-gray-500 hover:text-gray-700 focus:text-gray-700"
              href="#"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 18H21"
                  stroke="#151515"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 18H3.01"
                  stroke="#151515"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 12H21"
                  stroke="#151515"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 12H3.01"
                  stroke="#151515"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 6H21"
                  stroke="#151515"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 6H3.01"
                  stroke="#151515"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <div class="dropdown relative">
              <a
                class="hidden-arrow dropdown-toggle mr-4 flex items-center text-gray-500 hover:text-gray-700 focus:text-gray-700"
                href="#"
                id="dropdownMenuButton1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                    stroke="#151515"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                    stroke="#151515"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span
                  class="absolute -mt-2.5 ml-2 rounded-full bg-red-700 py-0 px-1.5 text-[.6rem] text-white"
                  >1</span
                >
              </a>
              <ul
                class="dropdown-menu absolute left-auto right-0 z-50 float-left m-0 mt-1 hidden min-w-max list-none rounded-lg border-none bg-white bg-clip-padding py-2 text-left text-base shadow-lg"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a
                    class="dropdown-item block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-gray-700 hover:bg-gray-100"
                    href="#"
                    >Action</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-gray-700 hover:bg-gray-100"
                    href="#"
                    >Another action</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-gray-700 hover:bg-gray-100"
                    href="#"
                    >Something else here</a
                  >
                </li>
              </ul>
            </div>
            <div class="dropdown relative">
              <a
                class="hidden-arrow dropdown-toggle flex items-center"
                href="#"
                id="dropdownMenuButton2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                  class="rounded-full"
                  style="height: 25px; width: 25px"
                  alt=""
                  loading="lazy"
                />
              </a>
              <ul
                class="dropdown-menu absolute left-auto right-0 z-50 float-left m-0 mt-1 hidden min-w-max list-none rounded-lg border-none bg-white bg-clip-padding py-2 text-left text-base shadow-lg"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <a
                    class="dropdown-item block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-gray-700 hover:bg-gray-100"
                    href="#"
                    >Action</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-gray-700 hover:bg-gray-100"
                    href="#"
                    >Another action</a
                  >
                </li>
                <li>
                  <button
                    class="dropdown-item block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-gray-700 hover:bg-gray-100"
                    @click="setLogout"
                    type="submit"
                  >
                    Get out
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div v-else>
            <RouterLink :to="{ name: 'Login' }"> Login </RouterLink>
          </div>
        </div>
        <!-- Right elements -->
      </div>
    </nav>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { TextSearch } from "../stores/products.js";
import debounce from "../utils/debounce.js";
import { useAuthStore } from "../stores";
const store = useAuthStore();
const setLogout = () => {
  store.doLogout();
};
const delaySearch = debounce((e) => {
  TextSearch.value = e.target.value;
}, 500);
</script>
<style lang=""></style>
