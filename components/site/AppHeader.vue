<template>
  <header class="bg-blue-900 text-white py-5 px-10 flex justify-between items-center">
    <div class="text-xl font-bold">3w Online</div>
    <nav>
      <ul class="flex space-x-8">
        <li>
          <NuxtLink to="/" class="hover:underline">Início</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="hover:underline">Sobre</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/service" class="hover:underline">Serviços</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="hover:underline">Contato</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
// Não precisa de lógica específica aqui no momento
</script>
