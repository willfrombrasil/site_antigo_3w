<script setup lang="ts">
const props = defineProps<{
  items: { title: string; to?: string }[]
}>()
</script>

<template>
  <nav class="text-sm text-gray-600" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li v-for="(item, index) in items" :key="index" class="inline-flex items-center">
        <NuxtLink
          v-if="item.to && index !== items.length - 1"
          :to="item.to"
          class="inline-flex items-center text-gray-500 hover:text-blue-600 transition"
        >
          <svg
            class="w-4 h-4 mr-2 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10.293 15.707a1 1 0 01-1.414 0L3.586 10l5.293-5.293a1 1 0 011.414 1.414L6.414 10l3.879 3.879a1 1 0 010 1.414z"
            />
          </svg>
          {{ item.title.toUpperCase() }}
        </NuxtLink>

        <span
          v-else
          class="inline-flex items-center font-semibold text-gray-900"
        >
          <svg
            class="w-4 h-4 mr-2 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10.293 15.707a1 1 0 01-1.414 0L3.586 10l5.293-5.293a1 1 0 011.414 1.414L6.414 10l3.879 3.879a1 1 0 010 1.414z"
            />
          </svg>
          {{ item.title.toUpperCase() }}
        </span>
      </li>
    </ol>
  </nav>
</template>
