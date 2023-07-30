<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-6xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          最近发表记录
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">学习·记录·总结·分享</p>
      </div>
      <div
        class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <article
          v-for="post in posts"
          :key="post.id"
          class="flex max-w-xl flex-col items-start justify-between border px-6 py-4 rounded-lg shadow-sm transition hover:scale-[1.03]"
        >
          <div class="flex items-center gap-x-4 text-xs">
            <time :datetime="post.datetime" class="text-gray-500">{{
              post.datetime
            }}</time>
            <a
              target="_blank"
              :href="post.category.href"
              class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >{{ post.category.title }}</a
            >
          </div>
          <div class="group relative">
            <h3
              class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
            >
              <a target="_blank" :href="post.href">
                <span class="absolute inset-0" />
                {{ post.title }}
              </a>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              {{ post.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { posts } from "../javascript/data.js";


</script>
