<template>
  <form @submit.prevent="submitForm" class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
    <h2 class="text-xl font-bold text-center text-gray-700">Formulário de Contato</h2>

    <div>
      <label for="name" class="block font-semibold mb-1">Seu nome:</label>
      <input
        type="text"
        id="name"
        v-model="name"
        required
        class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label for="email" class="block font-semibold mb-1">Seu e-mail:</label>
      <input
        type="email"
        id="email"
        v-model="email"
        required
        class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label for="service" class="block font-semibold mb-1">Serviço:</label>
      <select
        id="service"
        v-model="selectedService"
        required
        class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option disabled value="">Selecione um serviço</option>
        <option value="Serviço de Mídia Social">Serviço de Mídia Social</option>
        <option value="Serviço de Criação de Sites">Serviço de Criação de Sites</option>
        <!-- Mais opções podem ser adicionadas -->
      </select>
    </div>

    <div>
      <label for="message" class="block font-semibold mb-1">Detalhes:</label>
      <textarea
        id="message"
        v-model="message"
        required
        class="w-full border border-gray-300 rounded-md px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
    </div>

    <button
      type="submit"
      class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
    >
      Enviar
    </button>

    <div v-if="successMessage" class="mt-4 text-green-600 font-medium text-center">
      {{ successMessage }}
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const selectedService = ref('')
const message = ref('')
const successMessage = ref('')

const submitForm = () => {
  // Aqui você pode substituir por um envio real com useFetch/axios/postMessage/etc.
  console.log('Nome:', name.value)
  console.log('E-mail:', email.value)
  console.log('Serviço:', selectedService.value)
  console.log('Detalhes:', message.value)

  // Feedback ao usuário
  successMessage.value = 'Mensagem enviada com sucesso!'

  // Limpa o formulário após 2 segundos
  setTimeout(() => {
    name.value = ''
    email.value = ''
    selectedService.value = ''
    message.value = ''
    successMessage.value = ''
  }, 2000)
}
</script>
