<template>
  <header class="bg-gray-900 text-white">
    <div class="container mx-auto flex justify-between items-center py-4 px-6 relative">
      <h1 class="text-xl font-bold">GRUPO 3W ONLINE</h1>

      <button 
        @click="toggleMenu" 
        class="md:hidden text-white focus:outline-none"
        aria-label="Toggle navigation"
      >
        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <nav 
        :class="[
          'absolute md:static top-full left-0 w-full md:w-auto md:flex bg-gray-900 md:bg-transparent z-10',
          isOpen ? 'block' : 'hidden',
          'md:block'
        ]"
      >
        <ul class="md:flex space-y-4 md:space-y-0 md:space-x-6 text-center px-6 py-4 md:p-0">
          <li><NuxtLink to="/" class="hover:underline block md:inline-block">Home</NuxtLink></li>
          <li><NuxtLink to="/sobre" class="hover:underline block md:inline-block">Sobre</NuxtLink></li>
          <li><NuxtLink to="/servicos" class="hover:underline block md:inline-block">Serviços</NuxtLink></li>
          <li><NuxtLink to="/ferramentas" class="hover:underline block md:inline-block">Ferramentas</NuxtLink></li>
          <li><NuxtLink to="/contato" class="hover:underline block md:inline-block">Contato</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>
