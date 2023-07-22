<template>
  <div class="overflow-hidden bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="text-base font-semibold leading-7 text-indigo-600">
              开发项目
            </h2>
            <p
              class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              TikTok 复刻
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              基于<b> Nuxt.js </b>和<b> Laravel </b>开发
            </p>
            <div class="mt-2">
              <span
                class="mr-4 inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                >2023.7</span
              >
              <span
                class="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200"
              >
                <svg
                  class="h-1.5 w-1.5 fill-green-500"
                  viewBox="0 0 6 6"
                  aria-hidden="true"
                >
                  <circle cx="3" cy="3" r="3" />
                </svg>
                开发结束
              </span>
            </div>

            <dl
              class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none"
            >
              <div
                v-for="feature in features"
                :key="feature.name"
                class="relative pl-9"
              >
                <dt class="inline font-semibold text-gray-900">
                  <component
                    :is="feature.icon"
                    class="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                    aria-hidden="true"
                  />
                  {{ feature.name }}
                </dt>
                {{ " " }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
            <span class="mt-8 isolate inline-flex rounded-md shadow-sm">
              <a
                href="https://github.com/mojing122/MoJingProfile"
                type="button"
                target="_blank"
                class="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
              >
                <svg
                  t="1689153567801"
                  class="icon mr-2"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2266"
                  width="20"
                  height="20"
                >
                  <path
                    d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
                    p-id="2267"
                  ></path>
                </svg>
                Github
              </a>

              <a
                href="https://gitee.com/sha-zhiqing/MoJingProfile"
                type="button"
                target="_blank"
                class="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
              >
                <svg
                  t="1689153685554"
                  class="icon mr-2"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2436"
                  width="20"
                  height="20"
                >
                  <path
                    d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z"
                    fill="#C71D23"
                    p-id="2437"
                  ></path>
                </svg>
                Gitee
              </a>
            </span>
          </div>
        </div>
        <img
          src="/src/assets/image/homePage/MojingProfile.jpg"
          alt="Product screenshot"
          class="w-[30rem] max-w-[100%] lg:max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          width="2432"
          height="1442"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  ComputerDesktopIcon,
} from "@heroicons/vue/20/solid";

const features = [
  {
    name: "Nuxt.js + tailwindcss：",
    description:
      "利用 Nuxt.js 的 SSR 模式实现服务端渲染，带来巨大的 SEO 提升、更好的用户体验和更多的机会。",
    icon: DocumentTextIcon,
  },
  {
    name: "Laravel 框架：",
    description:
      "Laravel是一个PHP框架，致力于提供出色的开发体验，同时提供强大的特性，例如完全的依赖注入，富有表现力的数据库抽象层，队列和计划任务，单元和集成测试等等",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "响应式设计：",
    description:
      "使用响应式实用程序变体来构建自适应用户界面，在各种尺寸的屏幕上都有良好的浏览体验",
    icon: ComputerDesktopIcon,
  },
];
</script>
