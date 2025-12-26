<template>
  <header class="w-full bg-indigo-600 text-white shadow-md fixed top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Menu ícone (ex: sidebar toggle) -->
      <button class="text-white md:hidden mr-4">
        <i class="mdi mdi-menu text-2xl"></i>
      </button>

      <!-- Título -->
      <h1 class="text-xl font-semibold">{{ title }}</h1>

      <!-- Menu de navegação -->
      <nav class="hidden md:flex space-x-4">
        <NuxtLink
          v-for="item in items"
          :key="item.text"
          :to="item.href"
          class="flex items-center space-x-1 hover:bg-indigo-500 px-3 py-1 rounded transition"
        >
          <i :class="`mdi ${item.icon} text-lg`"></i>
          <span>{{ item.text }}</span>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
const title = 'Ferramentas Online'

const items = [
  {
    text: 'Home',
    disabled: false,
    href: '/',
    icon: 'mdi-view-dashboard'
  },
  {
    text: 'About',
    disabled: false,
    href: '/about',
    icon: 'mdi-help-circle'
  }
];
</script>
