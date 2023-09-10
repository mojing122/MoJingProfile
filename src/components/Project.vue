<template>
  <div class="bg-white pb-7">
    <ProjectHP class="text-left" />
    <ProjectPL class="text-left" />
    <ProjectTT class="text-left" />
    <ProjectMM class="text-left" />
    <div
      class="w-[80%] divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 mx-auto my-6"
    >
      <div
        v-for="(action, actionIdx) in elseProjects"
        :key="action.title"
        :class="[
          actionIdx === 0
            ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
            : '',
          actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
          actionIdx === elseProjects.length - 2 ? 'sm:rounded-bl-lg' : '',
          actionIdx === elseProjects.length - 1
            ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
            : '',
          'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500',
        ]"
      >
        <div>
          <span
            :class="[
              action.iconBackground,
              action.iconForeground,
              'inline-flex rounded-lg p-3 ring-4 ring-white',
            ]"
          >
            <component :is="action.icon" class="h-6 w-6" aria-hidden="true" />
          </span>
        </div>
        <div class="mt-8">
          <h3 class="text-base font-semibold leading-6 text-gray-900">
            <a :href="action.href" class="focus:outline-none">
              <!-- Extend touch target to entire panel -->
              <span class="absolute inset-0" aria-hidden="true" />
              {{ action.title }}
            </a>
          </h3>
          <p class="mt-2 text-sm text-gray-500">
            {{ action.detials }}
          </p>
        </div>
        <span
          class="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
          aria-hidden="true"
        >
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
            />
          </svg>
        </span>
      </div>
    </div>
    <a
      href="#"
      class="flex-none rounded-full bg-indigo-400 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
      >更多项目 <span aria-hidden="true">&rarr;</span></a
    >
  </div>
</template>

<script setup>
import ProjectHP from "./ProjectHP.vue";
import ProjectPL from "./ProjectPL.vue";
import ProjectTT from "./ProjectTT.vue";
import ProjectMM from "./ProjectMM.vue";
import { elseProjects } from "../javascript/data.js";
</script>

<style lang="scss" scoped></style>
