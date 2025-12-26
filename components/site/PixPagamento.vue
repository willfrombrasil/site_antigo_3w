<script setup lang="ts">
import { ref, onMounted } from 'vue'
import QRCode from 'qrcode' // npm install qrcode

const chavePix = ref('25.530.623/0001-05')
const tipo = ref('CNPJ')
const razao = ref('Grupo 3w Online')

const qrCodeUrl = ref('')

onMounted(() => {
  const qrCodePixContent = `
    *** PIX ***
    Tipo: ${tipo.value}
    Chave: ${chavePix.value}
    Razão: ${razao.value}
  `

  QRCode.toDataURL(qrCodePixContent)
    .then(url => {
      qrCodeUrl.value = url
    })
    .catch(error => {
      console.error('Erro ao gerar o QR Code:', error)
    })
})
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-8">
    <!-- Título -->
    <h1 class="text-3xl font-bold text-gray-800 mb-4 text-center">
      Pagamento Via Pix
    </h1>
    <p class="text-gray-600 mb-6 text-center">
      Para efetuar o pagamento, utilize o QR Code ou a chave Pix abaixo:
    </p>

    <!-- Detalhes do PIX -->
    <div class="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
      <div class="mb-4">
        <p class="text-gray-800 text-sm">
          <span class="font-semibold">Tipo:</span> {{ tipo }}
        </p>
      </div>
      <div class="mb-4">
        <p class="text-gray-800 text-sm">
          <span class="font-semibold">Chave:</span> {{ chavePix }}
        </p>
      </div>
      <div class="mb-4">
        <p class="text-gray-800 text-sm">
          <span class="font-semibold">Razão:</span> {{ razao }}
        </p>
      </div>

      <!-- QR Code -->
      <div class="mb-6 text-center">
        <span class="font-semibold text-gray-800">QR-Code:</span>
        <div v-if="qrCodeUrl">
          <img :src="qrCodeUrl" alt="QR Code" class="mx-auto mt-4 w-40 h-40" />
        </div>
        <div v-else>
          <p class="text-gray-500 text-sm">Gerando QR Code...</p>
        </div>
      </div>
    </div>

    <!-- Link de contato -->
    <p class="text-gray-600 mt-6 text-center max-w-lg">
      Entre em
      <NuxtLink to="/contato" class="text-blue-600 hover:underline">
        Contato
      </NuxtLink>
      para receber seu recibo/comprovante de pagamento. Enviamos assim que confirmado o pagamento.
    </p>
    <NuxtLink
      to="/contato"
      class="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
    >
      Contato
    </NuxtLink>
  </div>
</template>

<style scoped>
/* Ajuste opcional para responsividade */
@media (max-width: 640px) {
  h1 {
    font-size: 1.875rem; /* 30px */
  }

  p {
    font-size: 0.875rem; /* 14px */
  }
}
</style>
