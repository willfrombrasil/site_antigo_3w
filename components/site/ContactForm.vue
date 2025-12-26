<template>
  <form @submit.prevent="submitForm" class="max-w-md mx-auto p-6 bg-gray-50 rounded-md shadow-md">
    <div class="mb-4">
      <label for="name" class="block font-semibold mb-1">Seu nome:</label>
      <input
        type="text"
        id="name"
        v-model="name"
        required
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div class="mb-4">
      <label for="email" class="block font-semibold mb-1">Seu e-mail:</label>
      <input
        type="email"
        id="email"
        v-model="email"
        required
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div class="mb-4">
      <label for="service" class="block font-semibold mb-1">Serviço:</label>
      <select
        id="service"
        v-model="selectedService"
        required
        class="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option disabled value="">Selecione um serviço</option>
        <option>Serviço de Mídia Social</option>
        <option>Serviço de Criação de Sites</option>
        <!-- Outras opções -->
      </select>
    </div>

    <div class="mb-6">
      <label for="message" class="block font-semibold mb-1">Detalhes:</label>
      <textarea
        id="message"
        v-model="message"
        required
        rows="4"
        class="w-full px-3 py-2 border border-gray-300 rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
    </div>

    <button
      type="submit"
      class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
    >
      Enviar
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const selectedService = ref('');
const message = ref('');

function submitForm() {
  console.log('Enviando formulário...');
  console.log('Nome:', name.value);
  console.log('E-mail:', email.value);
  console.log('Serviço:', selectedService.value);
  console.log('Detalhes:', message.value);

  // Limpar campos após envio
  name.value = '';
  email.value = '';
  selectedService.value = '';
  message.value = '';
}
</script>
