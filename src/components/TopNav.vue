<template>
  <Disclosure
    :key="componentKey"
    as="nav"
    class="backdrop-blur-sm bg-white/30 shadow-sm z-50"
    v-slot="{ open }"
  >
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-inset"
          >
            <span class="sr-only">菜单</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <img
              class="block h-8 w-auto lg:hidden"
              src="/src/assets/image/logo_ml.png"
              alt="Logo"
            />
            <img
              class="hidden h-8 w-auto lg:block"
              src="/src/assets/image/logo_ml.png"
              alt="Logo"
            />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                @click="handleClick(item.href)"
                class="block rounded-md px-3 py-2 text-base font-medium"
                :class="
                  chose_now === item.href
                    ? 'backdrop-blur-sm bg-gray-200 bg-opacity-70 shadow-inner text-black font-bold'
                    : 'text-gray-600 hover:bg-gray-200 hover:text-black'
                "
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton
                class="flex rounded-full bg-gray-800 text-sm focus:outline-none"
              >
                <span class="sr-only">联系方式</span>
                <img
                  class="h-10 w-10 rounded-full border-[1px] border-indigo-300/50"
                  src="/src/assets/image/homePage/myAvatar.png"
                  alt=""
                />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-60 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <a
                    :href="'mailto:' + email"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                  >
                    <h1 class="font-bold text-base">Email:</h1>
                    {{ email }}</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    :href="qqgroupURL"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    ><h1 class="font-bold text-base">QQ群:</h1>
                    {{ qqgroup }}</a
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          @click="handleClick(item.href)"
          class="block rounded-md px-3 py-2 text-base font-medium"
          :class="
            chose_now === item.href
              ? 'bg-gray-300 text-black font-bold'
              : 'text-gray-600 hover:bg-gray-200 hover:text-black'
          "
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";

import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const componentKey = ref(0);
let chose_now = ref("");
const email = "201305121@stu.yzu.edu.cn";
const qqgroup = "541830366";
const qqgroupURL =
  "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=ZPt3wlTQibf0xw991kRNXZ5E_4uMCPNY&authKey=ZS2duy9gNySIf94UBZhHAOmAYJ8QrHYqitaCitHWAKoJAYy7dKYygAYjiOIi%2FcKz&noverify=0&group_code=541830366";

const navigation = [
  { name: "欢迎", href: "#hello", current: true },
  { name: "个人简介", href: "#profile", current: false },
  { name: "项目概览", href: "#project", current: false },
  { name: "最近发表", href: "#", current: false },
];

const handleClick = (selector) => {
  const subPage = document.querySelector(selector);
  subPage.scrollIntoView({
    behavior: "smooth",
  });
};

const changeNav = (selector) => {
  chose_now.value = "#" + selector;
};

onMounted(() => {
  let observer = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting) {
        changeNav(entries[0]["target"]["id"]);
      } else {
      }
    },
    { threshold: [0.1] }
  );
  for (let i = 0; i < 4; i++) {
    if (navigation[i]["href"] !== "#") {
      observer.observe(document.querySelector(navigation[i]["href"]));
    }
  }
});
</script>
