<template>
  <div class="max-w-3xl mx-auto px-4 py-6">
    <div class="flex items-center justify-center mb-4">
      <svg class="w-6 h-6 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zm-8-4a1 1 0 100 2 1 1 0 000-2zm.75 4.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z" clip-rule="evenodd" />
      </svg>
      <p class="text-2xl font-semibold text-center">Sobre</p>
    </div>

    <hr class="border-gray-300 mb-4" />

    <div class="space-y-4 text-gray-800 leading-relaxed">
      <p v-for="(content, index) in descricao" :key="index">
        {{ content }}
      </p>
    </div>

    <hr class="border-gray-300 mt-6" />
  </div>
</template>

<script setup>
const props = defineProps({
  descricao: {
    type: Array,
    default: () => []
  }
})
</script>
