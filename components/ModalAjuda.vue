<template>
  <section>
    <div
      v-for="(dado, index1) in dados"
      :key="index1"
    >
      <!-- Botão para abrir o modal -->
      <button
        @click="openModal(dado.id)"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        {{ dado.title }}
      </button>

      <!-- Modal -->
      <div
        v-if="activeModal === dado.id"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div class="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-bold mb-4">{{ dado.title }}</h2>
          <div v-for="(content, index2) in dado.body" :key="index2" class="mb-2 text-gray-700">
            {{ content }}
          </div>

          <!-- Botão fechar -->
          <div class="mt-6 text-right">
            <button
              @click="closeModal"
              class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Props
defineProps({
  dados: {
    type: Array,
    default: () => []
  }
})

// Estado do modal ativo
const activeModal = ref(null)

const openModal = (id) => {
  activeModal.value = id
}

const closeModal = () => {
  activeModal.value = null
}
</script>
