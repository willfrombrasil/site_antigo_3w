<template>
  <div>
    <p class="text-2xl font-semibold text-center mb-4 flex items-center justify-center gap-2">
      <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 16 16">
        <path d="M6.5 1.5A.5.5 0 0 1 7 2v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 1 1 .708-.708L6 13.793V2a.5.5 0 0 1 .5-.5z"/>
      </svg>
      Dicas
    </p>
    <hr class="mb-6" />
    <div role="tablist" class="space-y-2 max-w-xl mx-auto">
      <div v-for="(dica, index) in dicas" :key="index" class="border border-gray-300 rounded-md shadow-sm">
        <button
          :id="'accordion-header-' + index"
          class="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between items-center"
          :aria-expanded="openIndex === index"
          :aria-controls="'accordion-panel-' + index"
          role="tab"
          @click="toggle(index)"
        >
          <span class="font-medium">{{ dica.titulo }}</span>
          <svg
            :class="{'transform rotate-90': openIndex === index, 'transform rotate-0': openIndex !== index}"
            class="w-5 h-5 transition-transform duration-200"
            fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
        <div
          v-show="openIndex === index"
          :id="'accordion-panel-' + index"
          role="tabpanel"
          :aria-labelledby="'accordion-header-' + index"
          class="px-4 py-3 bg-white border-t border-gray-300"
        >
          <p class="text-gray-700">{{ dica.conteudo }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  dicas: {
    type: Array,
    default: () => []
  }
})

const openIndex = ref(null)

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>
