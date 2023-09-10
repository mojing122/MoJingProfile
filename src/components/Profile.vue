<template>
  <div cl>
    <ProfileAward />
    <div
      class="relative isolate overflow-hidden bg-gray-100 py-16 sm:py-24 lg:py-32"
    >
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 class="text-center text-2xl font-semibold leading-8">技术栈</h1>

        <!-- 机器学习 -->
        <h2 class="my-6 text-base font-semibold leading-7 text-indigo-600">
          机器学习
        </h2>
        <div
          class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          <div class="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
            <div class="flex place-content-center mx-auto items-center">
              <img
                class="max-h-12 w-auto"
                src="/src/assets/image/homePage/pytorch.svg"
                alt="Transistor"
                width="158"
                height="48"
              />
              <p class="text-xl font-semibold mx-2">PyTorch</p>
            </div>
          </div>

          <div class="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
            <div class="flex place-content-center mx-auto items-center">
              <img
                class="max-h-12 w-auto"
                src="/src/assets/image/homePage/tensorflow.svg"
                alt="Transistor"
                width="158"
                height="48"
              />
              <p class="text-xl font-semibold mx-2">tensorflow</p>
            </div>
          </div>

          <div class="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
            <div class="flex place-content-center mx-auto items-center">
              <img
                class="max-h-12 w-auto"
                src="/src/assets/image/homePage/huggingface.svg"
                alt="Transistor"
                width="158"
                height="48"
              />
              <p class="text-xl font-semibold mx-2">huggingface</p>
            </div>
          </div>

          <div
            class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          >
            <div class="flex place-content-center mx-auto items-center">
              <img
                class="max-h-12 w-auto"
                src="/src/assets/image/homePage/Python.svg"
                alt="Transistor"
                width="158"
                height="48"
              />
              <p class="text-xl font-semibold mx-2">Python</p>
            </div>
          </div>

          <div
            class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          >
            <div class="flex place-content-center mx-auto items-center">
              <img
                class="max-h-12 w-auto"
                src="/src/assets/image/homePage/julia.svg"
                alt="Transistor"
                width="158"
                height="48"
              />
              <p class="text-xl font-semibold mx-2">julia</p>
            </div>
          </div>
        </div>

        <div class="flex place-content-center">
          <div
            class="w-[80%] mt-12 border-t border-indigo-400 pt-10 border-opacity-30"
          ></div>
        </div>

        <!-- 前端框架 -->
        <h2 class="my-6 text-base font-semibold leading-7 text-indigo-600">
          前端
        </h2>
        <div
          class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          <div class="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
            <div class="flex place-content-center mx-auto items-center">
              <img
                class="max-h-12 w-auto"
                src="/src/assets/image/homePage/vue.svg"
                alt="Transistor"
                width="158"
                height="48"
              />
              <p class="text-xl font-semibold mx-2">Vue.js</p>
            </div>
          </div>

          <div class="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
            <div class="flex place-content-center mx-auto items-center">
              <img
                class="max-h-12 w-auto"
                src="/src/assets/image/homePage/tailwindcss.svg"
                alt="Transistor"
                width="158"
                height="48"
              />
              <p class="text-xl font-semibold mx-2">tailwindcss</p>
            </div>
          </div>

          <div class="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
            <div class="flex place-content-center mx-auto items-center">
              <img
                class="max-h-12 w-auto"
                src="/src/assets/image/homePage/nuxtdotjs.svg"
                alt="Transistor"
                width="158"
                height="48"
              />
              <p class="text-xl font-semibold mx-2">Nuxt.js</p>
            </div>
          </div>

          <div
            class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          >
            <div class="flex place-content-center mx-auto items-center">
              <img
                class="max-h-12 w-auto"
                src="/src/assets/image/homePage/react.svg"
                alt="Transistor"
                width="158"
                height="48"
              />
              <p class="text-xl font-semibold mx-2">React</p>
            </div>
          </div>

          <div
            class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          >
            <div class="flex place-content-center mx-auto items-center">
              <img
                class="max-h-12 w-auto"
                src="/src/assets/image/homePage/flutter.png"
                alt="Transistor"
                width="158"
                height="48"
              />
              <p class="text-xl font-semibold mx-2">Flutter</p>
            </div>
          </div>
        </div>

        <div class="flex place-content-center">
          <div
            class="w-[80%] mt-12 border-t border-indigo-400 pt-10 border-opacity-30"
          ></div>
        </div>

        <!-- 后端框架 -->
        <h2 class="my-6 text-base font-semibold leading-7 text-indigo-600">
          后端
        </h2>
        <div
          class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          <div class="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
            <div class="flex place-content-center mx-auto items-center">
              <img
                class="max-h-12 w-auto"
                src="/src/assets/image/homePage/thinkphp.png"
                alt="Transistor"
                width="158"
                height="48"
              />
              <p class="text-xl font-semibold mx-2">ThinkPHP</p>
            </div>
          </div>

          <div class="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
            <div class="flex place-content-center mx-auto items-center">
              <img
                class="max-h-12 w-auto"
                src="/src/assets/image/homePage/laravel.svg"
                alt="Transistor"
                width="158"
                height="48"
              />
              <p class="text-xl font-semibold mx-2">Laravel</p>
            </div>
          </div>

          <div class="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
            <div class="flex place-content-center mx-auto items-center">
              <img
                class="max-h-12 w-auto"
                src="/src/assets/image/homePage/django.svg"
                alt="Transistor"
                width="158"
                height="48"
              />
              <p class="text-xl font-semibold mx-2">django</p>
            </div>
          </div>

          <div
            class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          >
            <div class="flex place-content-center mx-auto items-center">
              <img
                class="max-h-12 w-auto"
                src="/src/assets/image/homePage/spring-boot.png"
                alt="Transistor"
                width="158"
                height="48"
              />
              <p class="text-xl font-semibold mx-2">SpringBoot</p>
            </div>
          </div>

          <div
            class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          >
            <div class="flex place-content-center mx-auto items-center">
              <p class="text-xl mx-2 grad-gray-text">Learning more...</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute left-1/4 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileAward from "./ProfileAward.vue";
export default {
  components: {
    ProfileAward,
  },
};
</script>

<style>
.grad-gray-text {
  background: -webkit-linear-gradient(
    left,
    #6f5eae 0%,
    #6b41757a 50%,
    #e5cee441 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
