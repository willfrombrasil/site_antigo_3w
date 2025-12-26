<template>
  <nav class="text-sm text-gray-700 flex items-center space-x-2" aria-label="Breadcrumb">
    <template v-for="(item, index) in items" :key="index">
      <NuxtLink
        v-if="!item.disabled"
        :to="item.href"
        class="text-blue-600 hover:underline transition"
      >
        {{ item.text }}
      </NuxtLink>

      <span v-else class="text-gray-500">{{ item.text }}</span>

      <!-- Divider, exceto no último item -->
      <span v-if="index < items.length - 1" class="text-gray-400">
        <i class="mdi mdi-arrow-right text-base"></i>
      </span>
    </template>
  </nav>
</template>

<script setup>
const items = [
  {
    text: 'Dashboard',
    disabled: false,
    href: '/dashboard',
  },
  {
    text: 'Link',
    disabled: false,
    href: '/link',
  },
  {
    text: 'Active',
    disabled: true,
  },
];
</script>
